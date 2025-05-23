import React from "react";

export default function HeroVideo({ src, className = "", ...props }) {
  return (
    <article className={`relative h-full md:h-screen max-h-[700px] ${className}`} {...props}>
      <video autoPlay muted loop playsInline tabIndex={-1} style={{ pointerEvents: "none" }} className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </article>
  );
}
