"use client";

import React, { useEffect, useState } from "react";

export default function HeroVideo({ src, text1, text2, className = "", ...props }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <article className={`relative h-full md:h-screen max-h-[700px] ${className}`} {...props}>
      <video autoPlay muted loop playsInline tabIndex={-1} style={{ pointerEvents: "none" }} className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <h1 className={`px-section h2-work-details opacity-0 transition-opacity duration-3000 ease-in-out text-secondary-text absolute bottom-30 flex flex-col ${show ? "opacity-100" : ""}`}>
        {text1} <span className="h2-work-details">{text2}</span>
      </h1>
    </article>
  );
}
