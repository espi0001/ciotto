"use client";
import Link from "next/link";
import Logo from "../01-atoms/Logo";
import Copy from "@/components/gsap-anim/Copy";
import AnimatedLine from "../01-atoms/AnimatedLine";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#e7ddd0] min-h-[326px] z-50 pt-0 pb-8">
      {/* Top border line */}
      <AnimatedLine inViewTrigger={true} width="100%" height="1px" color="var(--color-primary-text)" duration={0.7} delay={0.5} className="absolute left-0 top-0 w-full z-50" style={{ position: "absolute", left: 0, top: 0 }} />
      <div className="max-w-full pt-16 pb-8 relative px-section">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-48">
          {/* Left: Logo */}
          <div className="flex flex-col justify-between h-full min-w-[200px]">
            <div className="mb-8">
              <Copy>
                {/* Logo or Title */}
                <Logo color="primary-text" className="logo-size font-bold" />
              </Copy>
            </div>
            {/* Copyright: only show on desktop here */}
            <Copy>
              <p className="p-product mt-auto text-xs text-black opacity-80 hidden lg:block">Copyright 2025 © Ciotto, All rights reserved</p>
            </Copy>
          </div>

          {/* Right: 3 columns */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-[126px] flex-1">
            {/* Pages */}
            <div className="max-w-[100px]">
              <Copy>
                <h3 className="text-[#402d1f] font-bold mb-4 tracking-wide">PAGES</h3>
                <ul className="space-y-2 text-[#402d1f]">
                  <li>
                    <Link href="/works" className="hover:underline">
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:underline">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/ciotto-bar" className="hover:underline">
                      Ciotto bar
                    </Link>
                  </li>
                </ul>
              </Copy>
            </div>
            {/* Opening Hours */}
            <div className="max-w-[210px]">
              <Copy>
                <h3 className="text-[#402d1f] font-bold mb-4 tracking-wide">OPENING HOURS</h3>
              </Copy>
              <Copy>
                <div className="text-[#402d1f] text-sm space-y-1">
                  <div className="flex justify-between w-full">
                    <span>Monday</span>
                    <span>09:00-18:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Tuesday</span>
                    <span>09:00-18:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Wednesday</span>
                    <span>09:00-18:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Thursday</span>
                    <span>09:00-18:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Friday</span>
                    <span>09:00-18:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Saturday</span>
                    <span>10:00-14:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Copy>
            </div>
            {/* Contact Info + Social Media */}
            <div className="max-w-[190px]">
              <Copy>
                <h3 className="text-[#402d1f] font-bold mb-4 tracking-wide">CONTACT INFO</h3>
              </Copy>
              <Copy>
                <div className="text-[#402d1f] text-sm space-y-2">
                  <div>
                    Godthåbsvej 18 A,
                    <br />
                    2000 Frederiksberg
                  </div>
                </div>
                <div>
                  Tel:{" "}
                  <a href="tel:+4593981186" className="hover:underline">
                    +45 93 98 11 86
                  </a>
                </div>
                <div>
                  Mail:{" "}
                  <a href="mailto:hello@ciottofrb.com" className="hover:underline">
                    hello@ciottofrb.com
                  </a>
                </div>
                {/* Social Media under Contact Info */}
                <div className="pt-4">
                  <h4 className="text-[#402d1f] font-bold mb-2 tracking-wide text-base">SOCIAL MEDIA</h4>
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/ciotto.frb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#402d1f] hover:underline">
                      <img src="/image/insta-svg.svg" alt="Instagram" className="w-[21px] h-[21px]" />
                      <span>ciotto.frb</span>
                    </a>
                  </div>
                </div>
              </Copy>
            </div>
          </div>
        </div>
        {/* Copyright: show at bottom for mobile/tablet only */}
        <div className="mt-12 text-xs text-black opacity-80 block lg:hidden w-full text-left">Copyright 2025 © Ciotto, All rights reserved</div>
      </div>
    </footer>
  );
}
