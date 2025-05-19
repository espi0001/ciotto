import { NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, subject, message } = body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert([
    {
      first_name: firstName,
      last_name: lastName,
      email,
      subject,
      message,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Your Name <noreply@yourdomain.com>",
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for reaching out! We have received your message:</p>
        <blockquote>
          <b>Subject:</b> ${subject}<br/>
          <b>Message:</b> ${message}
        </blockquote>
        <p>We will get back to you as soon as possible.</p>
        <br/>
        <p>Best regards,<br/>Your Team</p>
      `,
    });
  } catch (emailError) {
    console.error("Email send error:", emailError);
  }

  return NextResponse.json({ success: true });
}
