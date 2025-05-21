"use client";

import Input from "./Input";
import Textarea from "./Textarea";
import Button from "../UI/Button";
import FormRow from "./FormRow";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.log("Form Data:", payload);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-beige-200 border-1 p-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Request for CIOTTO</h2>
      <FormRow>
        <Input label="First Name" name="firstName" />
        <Input label="Last Name" name="lastName" />
      </FormRow>
      <div className="mt-4">
        <Input label="Email" name="email" type="email" />
      </div>
      <div className="mt-4">
        <Textarea label="Message" name="message" />
      </div>
      <div className="text-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
