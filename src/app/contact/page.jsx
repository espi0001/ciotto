import Image from "next/image";

export default function Contact() {
  return (
    <section className="nav-text-color-change relative w-full h-screen min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image src="/image/contact_hero.avif" alt="Interior design with wooden panels and chair" fill className="object-cover absolute inset-0 z-0" priority quality={100} />

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[55%_45%] w-full h-full">
        {/* Left side - just empty to show image */}
        <div />
        {/* Right side - Contact Form */}
        <div className="flex items-center justify-center bg-black/30 h-full px-8 py-32">
          <div className="w-full max-w-md text-white">
            <div className="mb-8">
              <h2 className="h2-small uppercase mb-2">Ari Prasetya</h2>
              {/* Responsive h1: one line on md+, two lines on mobile/tablet */}
              <h1 className="contact-h1 font-medium uppercase leading-tight">
                Contact
                <br />
                For Purchase
              </h1>
            </div>

            <form className="flex flex-col space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm uppercase mb-1">
                    First Name
                  </label>
                  <input type="text" id="firstName" name="firstName" className="bg-transparent border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm uppercase mb-1">
                    Last Name
                  </label>
                  <input type="text" id="lastName" name="lastName" className="bg-transparent border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-white transition-colors" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm uppercase mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" className="bg-transparent border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-white transition-colors" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm uppercase mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="bg-transparent border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-white transition-colors" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm uppercase mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} className="bg-transparent border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-white transition-colors resize-none" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
