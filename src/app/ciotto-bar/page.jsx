import React from "react";
import Image from "next/image";

export default function CiottoBar() {
  return (
    <section className="">
      <article className="relative h-screen">
        <img src="/image/ciotto-coffee.jpg" alt="Coffee bar" className="w-full h-full object-cover" />
        <div className="flex flex-col justify-end absolute top-0 left-0 w-full h-full  text-secondary-text px-[44px]">
          <p className="h3-large mb-[60px] uppercase">Godthåbsvej 18 A, 2000 Frederiksberg</p>
          <h1 className="uppercase">Ciotto Bar</h1>
        </div>
      </article>
      <div className="px-section spacing-section-small md:spacing-section">
        <article className="grid grid-cols-3 gap-[30px] pb-[184px]">
          <div className="content-center">
            <h2 className="font-[Playfair]">Ciotto Bar</h2>
            <p>
              Enjoy a freshly brewed cup made from carefully roasted beans sourced from Mexico. Served with intention, whether you’re staying or taking it to go. <br /> <br /> Take a moment to slow down and experience the atmosphere of the space, where you’re welcome to explore the handmade products, feel and use the materials, and let design and coffee meet in everyday rhythm.
            </p>
          </div>
          <img src="/image/iojapan.avif" alt="" width={500} height={670} />
          <img src="/image/andra.avif" alt="" width={320} height={430} className="self-end" />
        </article>
        <article className="flex flex-col items-center pb-[184px]">
          <h2 className="text-center font-[Playfair] pb-[60px]">Menu</h2>
          <img src="/image/menu.jpg" alt="" width={1030} height={1320} />
        </article>
      </div>
    </section>
  );
}
