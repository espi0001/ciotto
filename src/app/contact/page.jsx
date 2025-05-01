import Image from "next/image";

export default function Contact() {
  return (
    <main className="relative max-h-screen h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/image/gamma.avif" alt="Interior design with wooden panels and chair" fill className="object-fit" priority quality={100} />
      </div>

      {/* Content Grid */}
      <div className="relative grid grid-cols-1 h-full md:grid-cols-[55%_45%]">
        {/* Left side - Empty to show background */}
        <div />

        {/* Right side - Contact Form */}
        <div className="bg-black/70 flex flex-col px-24 py-26 text-white max-h-screen">
          <div className="mb-8">
            <h2 className="text-sm uppercase mb-2">Ari Prasetya</h2>
            <h1 className="text-4xl font-medium uppercase">
              Contact
              <br />
              For Purchase
            </h1>
          </div>

          <form className="flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm uppercase mb-1">
                  First Name
                </label>
                <input type="text" id="firstName" name="firstName" className="bg-transparent border border-beige-100/50 py-1.5 focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm uppercase mb-1">
                  Last Name
                </label>
                <input type="text" id="lastName" name="lastName" className="bg-transparent border border-beige-100/50 py-1.5 focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm uppercase mb-1">
                Email
              </label>
              <input type="email" id="email" name="email" className="bg-transparent border border-beige-100/50 py-1.5 focus:outline-none focus:border-white transition-colors" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm uppercase mb-1">
                Subject
              </label>
              <input type="text" id="subject" name="subject" className="bg-transparent border border-beige-100/50 py-1.5 focus:outline-none focus:border-white transition-colors" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm uppercase mb-1">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className="bg-transparent border border-beige-100/50 py-1.5 focus:outline-none focus:border-white transition-colors resize-none" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
