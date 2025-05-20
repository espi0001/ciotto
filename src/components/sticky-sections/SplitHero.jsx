import React from "react";
import Image from "next/image";

function SplitHero() {
  return (
    <section className="flex flex-row w-screen h-[60vw] min-h-[250px] md:h-screen split-hero-container relative">
      {/* Centered content container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        <h1 className="flex flex-row w-full max-w-full hero-h1 font-[playfair] tracking-wide select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          <span className="w-1/2 flex justify-end pr-2 md:pr-4 text-secondary-text">ABOUT</span>
          <span className="w-1/2 flex justify-start pl-2 md:pl-4 text-primary-text">CIOTTO</span>
        </h1>
        <div className="flex flex-row w-full max-w-full mt-2 md:mt-8">
          <div className="w-1/2 flex justify-end pr-2 md:pr-4">
            <p className="text-secondary-text px-1 md:px-2 text-xs xs:text-sm md:text-[1.5vw]">ARI PRASETYA</p>
          </div>
          <div className="w-1/2 flex justify-start pl-2 md:pl-4">
            <p className="text-primary-text px-1 md:px-2 text-xs xs:text-sm md:text-[1.5vw]">SPIROS LOUKOPOULOS</p>
          </div>
        </div>
      </div>
      {/* Left Side with Image */}
      <div className="w-1/2 h-full relative overflow-hidden split-hero-left">
        <Image src="/image/about/abouthero.jpg" alt="About Hero" fill className="object-cover object-center z-0" priority />
        <div className="absolute inset-0 z-5" />
      </div>
      {/* Right Side */}
      <div className="w-1/2 h-full bg-[#f3ede3] split-hero-right relative" />
    </section>
  );
}

export default SplitHero;
