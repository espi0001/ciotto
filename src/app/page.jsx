import React from "react";
import Image from "next/image";
import Copy from "@/components/gsap-anim/TextAnimation";
import StickySections from "@/components/sticky-sections/StickySections";
import ImageOpenSection from "@/components/ImageOpenSection";

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
          <source src="/video/tester.mp4" type="video/mp4" className="w-full h-full object-cover" />
        </video>
      </article>

      {/* ---------- */}
      <article className="relative w-full md:h-screen px-section spacing-section-small md:spacing-section flex items-center justify-center">
        <img src="/image/andra.avif" alt="" className="md:absolute md:top-0 md:left-[3.75rem] md:w-1/4 md:max-w-xs" />
        <Copy>
          <h1 className="font-[Playfair] z-50 text-center max-w-[800px]">A LIVING DESIGN SPACE IN THE HEART OF COPENHAGEN</h1>
        </Copy>
        <img src="/image/oberra.avif" alt="" className="md:absolute md:bottom-0 md:right-[3.75rem] md:w-1/4 md:max-w-xs" />
      </article>

      {/* ---------- */}
      <StickySections />

      {/* ---------- */}
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
            <img src="/image/ciotto-silver.jpg" alt="" width={460} height={570} />

            <div className="flex flex-col justify-center gap-[18px]">
              <Copy>
                <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
              </Copy>
              <Button variant="primary" onClick={() => console.log("Clicked")}>
                Go to products
              </Button>
            </div>
          </div>
        </article>

        {/* ------ About ------ */}
        <article className="spacing-section-small md:spacing-section grid grid-cols-[auto_auto_auto]">
          <img className="aspect-[7/10]" src="/image/gatti.jpg" alt="" />
          <div className="flex flex-col justify-between">
            <div className="">
              <Copy>
                <h2 className="uppercase font-[Playfair] h2-large">
                  How it <br />
                  started
                </h2>
                <p className="uppercase h3-small">Ai Prasetya & Spiros Loukopoulos </p>
              </Copy>
            </div>
            <img className="aspect-[4/5]" src="/image/cup.jpg" alt="" width={260} height={340} />
          </div>

          <div className=" flex flex-col justify-between items-end">
            <Copy>
              <p className="h2-small uppercase">About</p>
            </Copy>
            <Button variant="primary" link={"/about"}>
              Go to about
            </Button>
          </div>
        </article>

        {/* ------ Bar ------ */}
        <article className="spacing-section-small md:spacing-section w-full">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <Copy>
                <p className="h2-small uppercase">Coffee bar</p>
              </Copy>
              <img className="max-w-[325px] max-h-[350px] object-cover" src="/image/ciotto2.jpg" alt="" />
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
              <Button variant="primary" onClick={() => console.log("Clicked")}>
                Go to Ciotto Bar
              </Button>
            </div>
            <div>
              <img className="object-cover max-w-[525px] max-h-[645px]" src="/image/coffee.jpg" alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
