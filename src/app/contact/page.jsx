import Image from "next/image";
import InputField from "../../components/02-molecules/InputField";
import Button from "../../components/01-atoms/Button";

export default function Contact() {
  return (
    <section className="nav-text-color-change h-[120vh]">
      {/* Background Image */}
      <Image src="/image/contact_hero.avif" alt="Interior design with wooden panels and chair" width={1920} height={1080} className="absolute top-0 left-0 object-cover z-0 h-[120vh]" priority quality={100} />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] w-full absolute top-0">
        {/* Left side - just empty to show image */}
        <div />
        {/* Right side - Contact Form */}
        <div className="flex items-center justify-center bg-black/30 px-8 z-20 h-[120vh]">
          <div className="w-full max-w-md text-secondary-text">
            <div className="mb-8">
              <h2 className="h2-small uppercase mb-2">Ari Prasetya</h2>
              {/* Responsive h1: one line on md+, two lines on mobile/tablet */}
              <h1 className="h1-small font-medium uppercase leading-tight">
                Contact
                <br />
                For Purchase
              </h1>
            </div>

            <form className="flex flex-col space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="First Name" id="firstName" name="firstName" />
                <InputField label="Last Name" id="lastName" name="lastName" />
              </div>
              <InputField label="Email" id="email" name="email" type="email" />
              <InputField label="Subject" id="subject" name="subject" />
              <InputField label="Message" id="message" name="message" textarea rows={5} />
              <div className="flex justify-center">
                <Button variant="secondary" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
