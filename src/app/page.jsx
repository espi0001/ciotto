import React from "react";
import Image from "next/image";
import Copy from "@/components/gsap-anim/TextAnimation";
import StickySections from "@/components/sticky-sections/StickySections";
import ImageOpenSection from "@/components/03-organisms/ImageOpenSection";
import ImageReveal from "@/components/gsap-anim/ImageReveal";
import HeroVideo from "@/components/HeroVideo";
import Button from "@/components/01-atoms/Button";

export const metadata = {
  title: "Ciotto | Home",
  description: "Welcome to Ciotto.",
};

export default function Home() {
  return (
    <section>
      <HeroVideo src="/video/ciotto-bar-hero.mp4" />

      {/* ----- section 2----- */}
      <article className="relative grid grid-cols-2 gap-y-4 w-full max-w-screen-2xl mx-auto px-section section-spacing md:h-screen md:flex items-center justify-center">
        <Image
          src="/image/landing/landing(2).avif"
          alt="A hand holding the alu ciotto cup."
          width={460} //
          height={570}
          quality={100}
          className="col-start-1 row-start-1 md:absolute md:top-0 md:left-[3.75rem] md:w-1/4 md:max-w-xs"
        />

        <h1 className="col-span-3 row-start-2 font-[Playfair] z-40 text-center flex flex-col md:max-w-[1000px]">
          <Copy className="tect-center md:text-left">
            <span className="md:text-left md:ml-0">A LIVING DESIGN SPACE</span>
          </Copy>
          <Copy>
            <span className="md:text-left md:ml-40">IN THE HEART</span>
          </Copy>

          <Copy>
            <span className="md:text-left md:ml-24 text-nowrap">OF COPENHAGEN</span>
          </Copy>
        </h1>
        <Image
          src="/image/landing/landing(1).avif"
          alt="A wooden table and Genno chair, with shelves displaying Ciotto cups."
          width={460} //
          height={570}
          quality={100}
          className="col-start-2 row-start-3 md:absolute md:bottom-0 md:right-[3.75rem] md:w-1/4 md:max-w-xs"
        />
      </article>

      {/* ----- Parralax ----- */}
      <StickySections />

      {/* ----- AUTHENTICITY IN EVERY DESIGN ----- */}
      <ImageOpenSection />

      <div className="px-section max-w-screen-2xl mx-auto">
        {/* ------ Products ------ */}
        <article className="section-spacing grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12">
          {/* Venstre kolonne med overskrift og label */}
          <div className="flex md:flex-col justify-between">
            <Copy>
              <h2 className="font-[Playfair] h2-large">
                Every <br />
                product <br />
                tells a <br />
                story
              </h2>
            </Copy>
            <Copy>
              <p className="h2-small uppercase">Products</p>
            </Copy>
          </div>

          {/* Højre kolonne med billede, tekst og knap */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <ImageReveal>
              <Image
                src="/image/landing/stories.avif"
                alt="A table with papers, a bonsai centerpiece, Gatti chairs and Genno chair in Ciotto."
                width={1000} //
                height={1000}
                quality={100}
                className="object-cover max-h-[650px]"
              />
            </ImageReveal>

            <div className="flex flex-col justify-center gap-5">
              <Copy>
                <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
              </Copy>
              <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" link="/products">
                Go to products
              </Button>
            </div>
          </div>
        </article>

        {/* ------ About ------ */}
        <article className="section-spacing grid md:grid-cols-[2fr_3fr] gap-16">
          {/* Venstre billede – kun vist på desktop */}
          <div className="hidden md:block">
            <ImageReveal>
              <Image
                src="/image/landing/started(1).avif"
                alt="A shelf with a coffee pot and Ciotto cups."
                width={1000} //
                height={1000}
                quality={100}
                className="h-full max-w-fit object-cover"
              />
            </ImageReveal>
          </div>

          {/* Højre kolonne med overskrift, navne, tekst og knap */}
          <div className="w-full flex flex-col justify-between gap-6">
            <div className="flex md:flex-row justify-between">
              <div className="flex flex-col gap-2">
                <Copy>
                  <h2 className="font-[Playfair] h2-large">
                    How it <br />
                    started
                  </h2>
                </Copy>
                <Copy>
                  <p className="uppercase h3-small">Ai Prasetya & Spiros Loukopoulos </p>
                </Copy>
              </div>
              <Copy>
                <p className="h2-small uppercase">About</p>
              </Copy>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <ImageReveal>
                <Image
                  src="/image/landing/started(2).avif"
                  alt="A black plica stool placed on the floor beside wooden table in Ciotto."
                  width={1000} //
                  height={1000}
                  quality={100}
                  className="md:max-w-[350px] h-full max-h-screen object-cover"
                />
              </ImageReveal>

              <Button
                startAtTenPercent //
                withCopy
                delayVariant={0.5}
                variant="primary"
                link="/about"
                className="self-start md:self-end"
              >
                Go to about
              </Button>
            </div>
          </div>
        </article>

        {/* ------ Ciotto Bar ------ */}
        <article className="section-spacing w-full">
          <div className="grid grid-cols-[1fr_auto] md:flex md:flex-row justify-between gap-6 md:gap-16">
            {/* Tekst og billede øverst til højre (på desktop) */}
            <div className="col-start-2 col-span-2 row-start-1 md:flex md:flex-col md:justify-between">
              <Copy>
                <p className="h2-small uppercase">Coffee Bar</p>
              </Copy>
              <div className="hidden md:block">
                <ImageReveal>
                  <Image
                    src="/image/landing/bar(1).avif"
                    alt="Interior view of a Ciotto showcasing a door, a stone pillar, furniture, and natural light."
                    width={1000} //
                    height={1000}
                    quality={100}
                    className="md:max-w-[320px] max-h-[350px] object-cover"
                  />
                </ImageReveal>
              </div>
            </div>

            {/* Overskrift, tekst og knap nederst til venstre */}
            <div className="col-start-1 col-span-2 row-start-1 row-span-1 flex flex-col md:justify-end gap-4 ">
              <Copy>
                <h2 className="uppercase font-[Playfair] h2-large text-9xl">
                  The <br />
                  Ciotto <br />
                  Bar
                </h2>
              </Copy>
              <Copy>
                <p>Enjoy freshly brewed Mexican coffee to stay or to go. Slow down, feel the space, and explore handmade objects where design and coffee meet at Ciotto coffee bar.</p>
              </Copy>
              <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" link="/ciotto-bar">
                Go to Ciotto Bar
              </Button>
            </div>

            {/* Billede nederst i sektionen */}
            <div className="col-span-2 col-start-1 row-start-2">
              <ImageReveal>
                <Image
                  src="/image/landing/bar(2).avif"
                  alt="A espresso machine on a the counter of Ciotto."
                  width={540} //
                  height={711}
                  quality={100}
                  className="object-cover md:max-w-[525px] max-w-[350px] max-h-[645px]"
                />
              </ImageReveal>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
