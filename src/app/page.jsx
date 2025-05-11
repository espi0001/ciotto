import React from "react";
import Image from "next/image";

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
      <article className="relative w-full h-screen px-section spacing-section-small md:spacing-section">
        <img src="/image/andra.avif" alt="" class="absolute top-0 left-[16px] w-1/4 max-w-xs" />
        <img src="/image/oberra.avif" alt="" class="absolute bottom-0 right-[16px] w-1/4 max-w-xs" />

        <h2 className="font-[Playfair] h2-large absolute inset-0 flex items-center justify-center text-center">
          A creative space <br /> in the heart <br /> of copenhagen
        </h2>
      </article>

      {/* ---------- */}
      <article className="spacing-section-small md:spacing-section">
        <img className="w-full" src="/image/image1.jpg" alt="" />
      </article>

      {/* ---------- */}
      {/* <article className="pb-[184px]">
          <p>Works</p>
          <h2 className="uppercase">Authenticit in every design</h2>
        </article> */}

      <div className="px-section spacing-section-small md:spacing-section">
        {/* ------ Products ------ */}
        <article className="pb-[184px] grid md:grid-cols-3 gap-[3rem]">
          <div className="flex flex-col justify-between">
            <h2 className="font-[Playfair]">
              Every <br />
              products <br />
              tells a <br />
              story
            </h2>
            <p className="h2-small uppercase">Products</p>
          </div>
          <img src="/image/andra.avif" alt="" width={460} height={570} />

          <div className="flex flex-col justify-center gap-[18px]">
            <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
            <Button variant="primary" onClick={() => console.log("Clicked")}>
              Go to products
            </Button>
          </div>
        </article>

        {/* ------ About ------ */}
        <article className="pb-[184px] grid grid-cols-[auto_auto_auto]">
          <img className="aspect-[7/10]" src="/image/gatti.jpg" alt="" />
          <div className="flex flex-col justify-between">
            <div className="">
              <h2 className="uppercase font-[Playfair] h2-large">
                How it <br />
                started
              </h2>
              <p className="uppercase h3-small">Ai Prasetya & Spiros Loukopoulos </p>
            </div>
            <img className="aspect-[4/5]" src="/image/cup.jpg" alt="" width={260} height={340} />
          </div>

          <div className=" flex flex-col justify-between items-end">
            <p className="h2-small uppercase">About</p>
            <Button variant="primary" onClick={() => console.log("Clicked")}>
              Go to about
            </Button>
          </div>
        </article>

        {/* ------ Bar ------ */}
        <article className="pb-[184px] grid md:grid-cols-3 gap-[3rem]">
          <div className="flex flex-col justify-between">
            <p className="h2-small uppercase">Coffee bar</p>
            <img src="/image/ciotto2.jpg" alt="" className="w-[280px]" />
          </div>

          <div className="flex flex-col justify-end gap-[18px]">
            <h2 className="uppercase font-light">
              The <br />
              Ciotto <br />
              Bar
            </h2>
            <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
            <Button variant="primary" onClick={() => console.log("Clicked")}>
              Go to Ciotto Bar
            </Button>
          </div>

          <img src="/image/coffee.jpg" alt="" />
        </article>
      </div>
    </section>
  );
}
