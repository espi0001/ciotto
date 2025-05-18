import React from "react";
import Image from "next/image";
import Copy from "@/components/gsap-anim/TextAnimation";
import StickySections from "@/components/sticky-sections/StickySections";
import ImageOpenSection from "@/components/03-organisms/ImageOpenSection";
import ImageReveal from "@/components/gsap-anim/ImageReveal";

// import Button from "../components/01-atoms/Button.jsx";
import Button from "@/components/01-atoms/Button";

export const metadata = {
  title: "Ciotto | Home",
  description: "Welcome to Ciotto.",
};

export default function Home() {
  return (
    <section className="">
      <article className="relative h-full md:h-screen">
        <video autoPlay muted loop className="object-cover">
          <source src="/video/ciotto-bar-hero.mp4" type="video/mp4" className="w-full h-full object-cover" />
        </video>
      </article>

      {/* ---------- */}
      <article className="relative w-full md:h-screen px-section spacing-section-small md:spacing-section flex items-center justify-center">
        <Image src="/image/landing/landing(1).avif" alt="" width={460} height={570} quality={100} className="md:absolute md:top-0 md:left-[3.75rem] md:w-1/4 md:max-w-xs" />
        <h1 className="font-[Playfair] z-50 text-center flex flex-col max-w-[1000px]">
          <Copy>
            <span className="text-left ml-0">A LIVING DESIGN SPACE</span>
          </Copy>
          <Copy>
            <span className="text-left ml-40">IN THE HEART</span>
          </Copy>
          <Copy>
            <span className="text-left ml-64">OF COPENHAGEN</span>
          </Copy>
        </h1>
        <Image src="/image/landing/landing(2).avif" alt="" width={460} height={570} quality={100} className="md:absolute md:bottom-0 md:right-[3.75rem] md:w-1/4 md:max-w-xs" />
      </article>

      {/* ----- Parralax ----- */}
      <StickySections />

      {/* ----- AUTHENTICITY ----- */}
      <ImageOpenSection />

      <div className="px-section">
        {/* ------ Products ------ */}
        <article className="spacing-section-small md:spacing-section grid md:grid-cols-[1fr_3fr] gap-[3rem]">
          <div className="flex flex-col justify-between">
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
          <div className="flex flex-col md:flex-row gap-[70px]">
            <ImageReveal>
              <Image src="/image/landing/landing(3).avif" alt="" width={560} height={470} quality={100} className="object-cover max-w-[560px] max-h-[470px]" />
            </ImageReveal>

            <div className="flex flex-col justify-center gap-[18px]">
              <Copy>
                <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
              </Copy>
              <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" onClick={() => console.log("Clicked")}>
                Go to products
              </Button>
            </div>
          </div>
        </article>

        {/* ------ About ------ */}
        <article className="spacing-section-small md:spacing-section grid grid-cols-[auto_auto_auto]">
          <ImageReveal>
            <Image src="/image/landing/landing(5).avif" alt="" width={1000} height={1000} quality={100} className=" h-full max-w-fit object-cover" />
          </ImageReveal>

          <div className="flex flex-col justify-between">
            <div>
              <Copy>
                <h2 className="uppercase font-[Playfair] h2-large">
                  How it <br />
                  started
                </h2>
                <p className="uppercase h3-small">Ai Prasetya & Spiros Loukopoulos </p>
              </Copy>
            </div>
            <div>
              <ImageReveal>
                <Image src="/image/landing/landing(4).avif" alt="" width={1000} height={1000} quality={100} className="max-h-[415px] max-w-fit object-cover" />
              </ImageReveal>
            </div>
          </div>

          <div className=" flex flex-col justify-between items-end">
            <Copy>
              <p className="h2-small uppercase">About</p>
            </Copy>
            <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" link={"/about"}>
              Go to about
            </Button>
          </div>
        </article>

        {/* ------ Ciotto Bar ------ */}
        <article className="spacing-section-small md:spacing-section w-full">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div>
                <Copy>
                  <p className="h2-small uppercase">Coffee Bar</p>
                </Copy>
              </div>
              <div>
                <ImageReveal>
                  <Image src="/image/landing/ciotto2.jpg" alt="" width={325} height={350} quality={100} className="max-w-[325px] max-h-[350px] object-cover" />
                </ImageReveal>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-[18px]">
              <Copy>
                <h2 className="uppercase font-[Playfair] h2-large text-9xl">
                  The <br />
                  Ciotto <br />
                  Bar
                </h2>
              </Copy>
              <Copy>
                <p className="max-w-[400px]">Enjoy freshly brewed Mexican coffee to stay or to go. Slow down, feel the space, and explore handmade objects where design and coffee meet at Ciotto coffee bar.</p>
              </Copy>
              <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" onClick={() => console.log("Clicked")}>
                Go to Ciotto Bar
              </Button>
            </div>
            <div>
              <ImageReveal>
                <Image src="/image/ciottobar/coffee.jpg" alt="" width={540} height={711} quality={100} className="object-cover max-w-[525px] max-h-[645px]" />
              </ImageReveal>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
