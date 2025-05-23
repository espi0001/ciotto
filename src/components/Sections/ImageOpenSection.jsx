"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import Copy from "../Animations/gsap-anim/TextAnimation";

import Image from "next/image";
import Button from "../UI/Button";

function ImageOpenSection() {
  const sectionRef = useRef(null); // Ref til hele sektionen
  const inView = useInView(sectionRef, { amount: 0.3, once: true }); // Trigger animation når 30% af sektionen er synlig
  const [imgLoaded, setImgLoaded] = useState(false); // Billedets load-status

  // Only animate when both inView and imgLoaded are true
  const shouldAnimate = inView && imgLoaded;

  return (
    <article
      ref={sectionRef}
      className="px-section section-spacing flex justify-center" //
    >
      {/* Begrænser max bredde og centrerer indholdet */}
      <div className="flex justify-center w-full mx-auto">
        <div className="flex flex-col gap-8 w-[1100px] items-center">
          {/* Første del af overskriften */}
          <h2 className="h2-large font-medium w-full">
            Authenticity <span className="sm:block md:hidden">in</span>
          </h2>
          {/* Række med billede og "IN / EVERY" tekst */}
          <div className="flex w-full gap-18 items-center">
            <h2 className="hidden md:block h2-large font-medium">in</h2>

            {/* Billede med animation – vises kun på desktop */}
            <motion.div
              style={{ overflow: "hidden", height: "100%" }}
              initial={{ width: "0%" }}
              animate={{ width: shouldAnimate ? "400px" : "0px" }} // Animer bredde ved visning
              transition={{
                duration: 2.5,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="hidden md:block max-w-[200px] md:max-w-[400px]"
            >
              <Image
                quality={100}
                src="/image/contact/contact_hero.avif"
                alt="A white Ciotto cup on top of the Toshi stool in the window of Ciotto."
                width={1920}
                height={1080}
                className="object-cover max-w-[200px] md:max-w-[400px] max-h-[100px] md:max-h-[150px]"
                onLoad={() => setImgLoaded(true)} // Sæt load-status når billedet er færdig
              />
            </motion.div>

            {/* "EVERY" vises altid – "DESIGN" kun på mobil */}
            <h2 className="h2-large font-medium">
              every <span className="md:hidden">design</span>
            </h2>
          </div>
          {/* Billede med animation – vises kun på desktop */}
          <motion.div
            style={{ overflow: "hidden", height: "100%" }}
            initial={{ width: "0%" }}
            animate={{ width: shouldAnimate ? "400px" : "0px" }} // Animer bredde ved visning
            transition={{
              duration: 2.5,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="md:hidden max-w-full"
          >
            <Image
              quality={100}
              src="/image/landing/beit-salma-open-image.jpg"
              alt="A white Ciotto cup on top of the Toshi stool in the window of Ciotto."
              width={1920}
              height={1080}
              className="object-cover w-full"
              onLoad={() => setImgLoaded(true)} // Sæt load-status når billedet er færdig
            />
          </motion.div>

          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-16">
            <h2 className="h2-large font-medium hidden md:block">design</h2>
            <div>
              <Copy>
                <p className="max-w-[400px] mb-4">Exploring the intersection of craft, design, and storytelling, each collaboration is a journey shaped by shared values and a commitment to thoughtful creation and meaningful connection.</p>
              </Copy>
              <Button startAtTenPercent withCopy delayVariant={0.5} size="large" type="button" link="/works">
                GO TO WORKS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ImageOpenSection;
