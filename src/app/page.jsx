import React from "react";
import Image from "next/image";

import Button from "../components/01-atoms/Button.jsx";

export const metadata = {
  title: "Ciotto | Home",
  description: "Welcome to Ciotto.",
};

export default function Home() {
  return (
    <section className="">
      <article className="relative h-screen">
        <img src="/image/landinghero.jpg" alt="Coffee bar" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-end items-end text-secondary-text px-[15px]">
          <p className="text-xl mb-[60px] uppercase">
            Handcrafted furniture, ceramic <br /> works, and enjoy a cup of coffee
          </p>
        </div>
      </article>
      <div className="px-section spacing-section-small md:spacing-section">
        <article className="grid grid-cols-3 mb-[80px]">
          <img src="/image/andra.avif" alt="" />
          <h2 className="uppercase">
            A creative space <br /> in the heart <br /> of copenhagen
          </h2>
          <img src="/image/oberra.avif" alt="" />
        </article>

        <article className="pb-[184px] grid gap-[32px]">
          <h2 className="text-center uppercase">
            handcrafted furniture, ceramic <br /> works, and enjoy a cup of coffee
          </h2>
          <div className="grid grid-cols-3 gap-[30px] ">
            <img src="/image/andra.avif" alt="" />
            <img src="/image/iojapan.avif" alt="" />
            <img src="/image/oberra.avif" alt="" />
          </div>
        </article>

        {/* ---------- */}
        <article className="pb-[184px]">
          <p>Works</p>
          <h2 className="uppercase">Authenticit in every design</h2>
        </article>

        {/* ---------- */}
        <article className="pb-[184px] grid grid-cols-3 gap-[3rem]">
          <div className="flex flex-col justify-between">
            <p>Products</p>
            <h2 className="uppercase">
              Every <br />
              products <br />
              tells a <br />
              story
            </h2>
          </div>
          <img src="/image/andra.avif" alt="" />

          <div className="flex flex-col justify-center gap-[18px]">
            <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
            <Button variant="primary" onClick={() => console.log("Clicked")}>
              Go to products
            </Button>
          </div>
        </article>

        {/* ---------- */}
        <article className="pb-[184px] grid grid-cols-3 gap-[32px]">
          <img src="/image/andra.avif" alt="" />
          <div className="text-center">
            <h2 className="uppercase">
              How it <br />
              started
            </h2>
            <p className="uppercase">Ai Prasetya & Spiros Loukopoulos </p>
          </div>
          <div>
            <img src="/image/andra.avif" alt="" />
            <Button variant="primary" onClick={() => console.log("Clicked")}>
              Go to about
            </Button>
          </div>
        </article>

        {/* ---------- */}
        <article className="pb-[184px] grid grid-cols-3 gap-[3rem]">
          <div className="flex flex-col justify-between">
            <p>Coffee bar</p>
            <img src="/image/andra.avif" alt="" />
          </div>

          <div className="flex flex-col justify-center gap-[18px]">
            <h2 className="uppercase">
              The <br />
              Ciotto <br />
              Bar
            </h2>
            <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
            <Button variant="primary" onClick={() => console.log("Clicked")}>
              Go to Ciotto Bar
            </Button>
          </div>
          <img src="/image/andra.avif" alt="" />
        </article>
      </div>
    </section>
  );
}
