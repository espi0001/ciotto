import React from "react";
import Image from "next/image";
import Copy from "@/components/gsap-anim/TextAnimation";

export default function CiottoBar() {
  return (
    <section className="">
      <article className="relative h-screen">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video/tester.mp4" type="video/mp4" className="w-full h-full object-cover" />
        </video>
        <div className="flex flex-col justify-end absolute top-0 left-0 w-full h-full  text-secondary-text px-[44px]">
          <Copy delay={0.5}>
            <p className="h3-large mb-[10px] md:mb-[60px] uppercase">Godthåbsvej 18 A, 2000 Frederiksberg</p>
            <h1 className="uppercase">Ciotto Bar</h1>
          </Copy>
        </div>
      </article>
      <div className="px-section spacing-section-small md:spacing-section">
        <article className="grid md:grid-cols-[1fr_2fr] gap-[30px] md:gap-[100px] pb-[184px]">
          <div className="content-center">
            <Copy>
              <h2 className="font-[Playfair]">Ciotto Bar</h2>
              <p>
                Enjoy a freshly brewed cup made from carefully roasted beans sourced from Mexico. Served with intention, whether you’re staying or taking it to go. <br /> <br /> Take a moment to slow down and experience the atmosphere of the space, where you’re welcome to explore the handmade products, feel and use the materials, and let design and coffee meet in everyday rhythm.
              </p>
            </Copy>
          </div>
          <div className="flex gap-[15px] md:gap-[35px]">
            <img src="/image/ciottobar/coffee.jpg" alt="" className="w-[490px]" />
            <img src="/image/ciottobar/ciotto2.jpg" alt="" className="w-[130px] h-[180px] md:w-[320px] md:h-[430px] self-end aspect-[3/4]" />
          </div>
        </article>

        <article className="grid gap-[20px] md:gap-[60px] pb-[100px] md:pb-[184px]">
          <div className="grid md:grid-cols-2 gap-[20px] md:gap-[60px]">
            <div className="flex flex-col justify-end">
              <div className="grid gap-[10px] pb-[20px] md:pb-[60px]">
                <Copy>
                  <h2 className="font-[Playfair]">Komuna Beans</h2>
                  <p>Our coffee is brewed with carefully sourced beans from Komuna Coffee a Mexican collective that works directly with smallholder farmers across the country Komuna builds long term relationships with producers who grow expressive high quality coffees while championing sustainable farming and social impact.</p>
                </Copy>
              </div>
              <img className="aspect-[6/5]" src="https://komunacoffee.com/cdn/shop/files/Komuna_Roasting.jpg?v=1742455322&width=2890" alt="" />
            </div>

            <img className="aspect-[3/4]" src="/image/ciottobar/komuna(9).webp" alt="" />
          </div>
          <div className="grid grid-cols-3 gap-[10px] md:gap-[70px]">
            <img src="https://komunacoffee.com/cdn/shop/files/MayanHarvest_IG.jpg?v=1744896453" alt="" />
            <img src="https://komunacoffee.com/cdn/shop/files/Komuna_Nuyuku.jpg?v=1744184734&width=1445" alt="" />
            <img src="https://komunacoffee.com/cdn/shop/files/IMG-20241015-WA0018.jpg?v=1729267213&width=1445" alt="" />
          </div>
        </article>

        <article className="flex flex-col items-center pb-[184px]">
          <Copy>
            <h2 className="text-center font-[Playfair] pb-[30px] md:pb-[60px]">Menu</h2>
          </Copy>
          <Image className="drop-shadow-primary" src="/image/ciottobar/menukort.svg" alt="Ciotto Bar Menu Card" width={1030} height={1320} />
        </article>

        <article>
          <div className="grid grid-cols-2 items-center">
            <div>
              <Copy>
                <h2>Opening hours</h2>
              </Copy>
              <hr className="text-tertiary-text w-[110px] mb-[40px]" />
              <div className="flex gap-[30px]">
                <div className="space-y-[30px]">
                  <Copy>
                    <p className="h3-small md:h3-large">Monday</p>
                    <p className="h3-small md:h3-large">Tuesday</p>
                    <p className="h3-small md:h3-large">Wednesday</p>
                    <p className="h3-small md:h3-large">Thursday</p>
                    <p className="h3-small md:h3-large">Friday</p>
                    <p className="h3-small md:h3-large">Saturday</p>
                    <p className="h3-small md:h3-large">Sunday</p>
                  </Copy>
                </div>
                <div className="space-y-[30px]">
                  <Copy>
                    <p className="h3-small md:h3-large">Closed</p>
                    <p className="h3-small md:h3-large">09:00 - 18:00</p>
                    <p className="h3-small md:h3-large">09:00 - 18:00</p>
                    <p className="h3-small md:h3-large">09:00 - 18:00</p>
                    <p className="h3-small md:h3-large">09:00 - 16:00</p>
                    <p className="h3-small md:h3-large">10:00 - 14:00</p>
                    <p className="h3-small md:h3-large">10:00 - 14:00</p>
                  </Copy>
                </div>
              </div>
            </div>
            <img className="aspect-[5/6] hidden md:block" src="/image/ciottobar/komuna(9).webp" alt="" />
          </div>
        </article>
      </div>
    </section>
  );
}
