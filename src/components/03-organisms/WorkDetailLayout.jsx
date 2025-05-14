import React from "react";
import Image from "next/image";
import Copy from "@/components/gsap-anim/Copy";
import AnimatedLine from "../01-atoms/AnimatedLine";

export default function WorkDetailLayout({ work }) {
  if (!work) return null;
  const { title, designer, subtitle, heroImage, galleryImages, infoText, details } = work;

  // Extract values for static headings
  const location = details.find((d) => d.label === "Location")?.value || "";
  const mainFeatures = details.find((d) => d.label === "Main Features")?.value || "";
  const by = designer || "";
  // Filter out these from the details array for the rest
  const filteredDetails = details.filter((d) => !["Location", "Main Features", "By", "Designed by"].includes(d.label));

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-end mb-16 md:mb-24">
        <Image width={1000} height={1000} src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 p-8 md:p-16 text-left text-secondary-text">
          <Copy startAtTenPercent={true} delay={1}>
            <div className="mb-2 text-lg md:text-xl font-light tracking-wide">DESIGN BY {designer}</div>
          </Copy>
          <Copy startAtTenPercent={true} delay={0.5}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 uppercase">{title}</h1>
          </Copy>
          <Copy startAtTenPercent={true}>
            <div className="text-xl md:text-2xl font-light uppercase">{subtitle}</div>
          </Copy>
        </div>
      </section>

      {/* Gallery Grid 1 */}
      <section className="px-section grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {galleryImages.slice(0, 2).map((img, i) => (
          <Image key={i} width={1000} height={1000} src={img} alt={title} className="w-full max-h-[800px] object-cover" />
        ))}
      </section>

      {/* Info & Details Section */}
      <section className="px-section grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="col-span-1">
          <Image width={1000} height={1000} src={galleryImages[2]} alt={title} className="w-full max-h-[610px] object-cover" />
        </div>
        <div className="col-span-1 flex flex-col justify-center space-y-6">
          <div>
            <Copy delay={1}>
              <h2 className="text-lg font-bold mb-2 tracking-wide">INFO:</h2>
            </Copy>
            <AnimatedLine />
            <Copy delay={1}>
              <p className="body-text mb-4 whitespace-pre-line">{infoText}</p>
            </Copy>
          </div>
          <div>
            <Copy delay={1}>
              <h2 className="text-lg font-bold mb-2 tracking-wide">INFO:</h2>
            </Copy>
            <AnimatedLine />
            <ul className="text-base space-y-1">
              <li>
                <h3 className="text-lg font-bold mb-1 tracking-wide">Location</h3>
                <p>{location}</p>
              </li>
              <AnimatedLine />
              <li>
                <h3 className="text-lg font-bold mb-1 tracking-wide">Main Features</h3>
                <p>{mainFeatures}</p>
              </li>
              <AnimatedLine />
              <li>
                <h3 className="text-lg font-bold mb-1 tracking-wide">By</h3>
                <p>{by}</p>
              </li>
              <AnimatedLine />
              {filteredDetails.length > 0 && (
                <li>
                  <h3 className="text-lg font-bold mb-1 tracking-wide">Details</h3>
                  <ul className="text-base space-y-1">
                    {filteredDetails.map((d, i) => (
                      <li key={i} className="flex flex-row gap-2">
                        <span className="font-semibold min-w-[110px]">{d.label}:</span>
                        <span>{d.value}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Grid 2 */}
      <section className="px-section grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {galleryImages.slice(3).map((img, i) => (
          <Image width={1000} height={1000} key={i} src={img} alt={title} className="w-full h-[340px] md:h-[420px] object-cover rounded" />
        ))}
      </section>
    </>
  );
}
