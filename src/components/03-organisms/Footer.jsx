"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e7ddd0] min-h-[266px]">
      <div className="border-t border-[#402d1f]">
        <div className="max-w-[1440px] mx-auto px-5 py-16">
          {/* Logo above columns */}
          <div className="mb-12">
            <Link href="/" className="text-[#402d1f] text-2xl font-bold">
              CIOTTO
            </Link>
          </div>

          {/* Desktop: 4 evenly spaced columns, Tablet: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:justify-between">
            {/* Contact Info */}
            <div>
              <h3 className="text-[#402d1f] font-bold mb-4">CONTACT INFO</h3>
              <div className="text-[#402d1f] space-y-2">
                <p>
                  <a href="tel:+4593981186" className="hover:underline transition-all" aria-label="Call us at +45 93 98 11 86">
                    Ari Tel: +45 93 98 11 86
                  </a>
                </p>
                <p>
                  <a href="mailto:desk@ariprasetya.com" className="hover:underline transition-all" aria-label="Send email to desk@ariprasetya.com">
                    Mail: desk@ariprasetya.com
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@ciottofrb.com" className="hover:underline transition-all" aria-label="Send email to hello@ciottofrb.com">
                    Mail: hello@ciottofrb.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-[#402d1f] font-bold mb-4">LOCATION</h3>
              <div className="text-[#402d1f] space-y-2">
                <a href="https://maps.google.com/?q=Godthåbsvej+18+A,+2000+Frederiksberg,+Denmark" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all block" aria-label="Open our location in Google Maps">
                  <p>Godthåbsvej 18 A,</p>
                  <p>2000 Frederiksberg</p>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-[#402d1f] font-bold mb-4">OPENING HOURS</h3>
              <div className="text-[#402d1f] space-y-2">
                <p>Monday - Saturday</p>
                <p>9 AM to 6 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-[#402d1f] font-bold mb-4">SOCIAL MEDIA</h3>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/ciotto.frb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#402d1f] hover:underline transition-all" aria-label="Follow us on Instagram">
                  <img src="/instagram-icon.png" alt="" className="w-[21px] h-[21px]" aria-hidden="true" />
                  <span>ciotto.frb</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
