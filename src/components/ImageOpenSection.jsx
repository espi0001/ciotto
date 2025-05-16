"use client";

import Image from "next/image";
import Button from "@/components/01-atoms/Button";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function ImageOpenSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: true });
  const [imgLoaded, setImgLoaded] = useState(false);

  // Only animate when both inView and imgLoaded are true
  const shouldAnimate = inView && imgLoaded;

  return (
    <section ref={sectionRef} className="spacing-section-small md:spacing-section w-full flex justify-center px-section">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col w-full items-center gap-6">
          <h2 className="h1-product font-[Playfair] font-semibold">AUTHENTICITY&nbsp;</h2>
          <div className="flex justify-center">
            {" "}
            <h2 className="h1-product font-[Playfair] font-semibold">IN&nbsp;&nbsp;</h2>
            <motion.div
              style={{ overflow: "hidden", height: "100%" }}
              initial={{ width: "0%" }}
              animate={{ width: shouldAnimate ? "400px" : "0px" }}
              transition={{
                duration: 2.5,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Image src="/image/contact_hero.avif" alt="Image of some of Ari's furniture in a cosy setting" width={1920} height={1080} className="object-cover max-w-[400px] max-h-[200px]" priority onLoad={() => setImgLoaded(true)} />
            </motion.div>
            <h2 className="h1-product font-[Playfair] font-semibold">&nbsp;&nbsp;EVERY</h2>
          </div>
          <div className="w-full flex gap-20 justify-center">
            <h2 className="h1-product font-[Playfair] font-semibold">DESIGN</h2>
            <div>
              {" "}
              <p className="max-w-[400px] mb-4">Exploring the intersection of craft, design, and storytelling, each collaboration is a journey shaped by shared values and a commitment to thoughtful creation and meaningful connection.</p>
              <Button size="large" type="button" className="mt-4 text-orange-700">
                GO TO WORKS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageOpenSection;
