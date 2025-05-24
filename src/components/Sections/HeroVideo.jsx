import React from "react";

export default function HeroVideo({ src, text1, text2, className = "", ...props }) {
  return (
    <article className={`relative h-full md:h-screen max-h-[700px] ${className}`} {...props}>
      <video autoPlay muted loop playsInline tabIndex={-1} style={{ pointerEvents: "none" }} className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <h1 className="body-text text-secondary-text absolute bottom-0 right-0 flex flex-col">
        {text1} <span>{text2}</span>
      </h1>
    </article>
  );
}
