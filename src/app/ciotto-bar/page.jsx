import React from "react";
import Image from "next/image";
import Copy from "@/components/Animations/gsap-anim/TextAnimation";
import LineAnimated from "@/components/Animations/motion-anim/LineAnimated";
import AnimatedLine from "@/components/Animations/motion-anim/AnimatedLine";
import Button from "@/components/UI/Button";

import HeroVideo from "@/components/Sections/HeroVideo";
import OpeningHours from "@/components/CiottoBar/OpeningHours";
import GalleryText from "@/components/Sections/GalleryText";
// import DiffuserSection from "@/components/Sections/DiffuserSection";

export const metadata = {
  title: "Ciotto | Ciotto Bar",
  description: "Experience the Ciotto Bar",
};

export default function CiottoBar() {
  return (
    <section className="">
      <HeroVideo src="/video/ciotto-bar-hero.mp4" />

      <article className="px-section section-spacing max-w-screen-2xl mx-auto grid md:grid-cols-[1fr_2fr] gap-[30px] md:gap-[100px]">
        <div className="content-center flex flex-col gap-4 w-full">
          <div>
            <Copy>
              <h2 className="mb-4">Ciotto Bar</h2>
              <p>Enjoy a freshly brewed cup made from carefully roasted beans sourced from Mexico. Served with intention, whether you're staying or taking it to go.</p>
              <p className="mb-2"></p>
              <p>Take a moment to slow down and experience the atmosphere of the space, where you're welcome to explore the handmade products, feel and use the materials.</p>
            </Copy>
            <Button className="mt-4 mb-8" startAtTenPercent withCopy delayVariant={0.5} variant="primary" link="#menu">
              See Menu
            </Button>
          </div>

          <AnimatedLine
            inViewTrigger={true}
            width="100%"
            height="1px"
            color="var(--color-primary-text)" //
            duration={0.7}
            delay={0.5}
          />
          <div className="w-full">
            <h3 className="uppercase mb-3">Opening hours</h3>

            <OpeningHours days="Monday - Wednesday" hours="Closed" />
            <OpeningHours days="Thursday - Sunday" hours="09:00 - 16:00" />
          </div>
        </div>
        <div className="grid grid-cols-[auto_auto] gap-2 md:gap-4">
          <Image
            src="/image/ciottobar/moments(1).avif"
            alt="A Toshi stool with a Ciotto cup on top and a soft shadows on a light wall."
            width={1080} //
            height={1350}
            quality={100}
            className="max-h-full w-[490px] max-w-fit object-cover"
          />
          <Image
            src="/image/ciottobar/ciotto-sign.avif"
            alt="A brown sign for Ciotto displaying a Ciotto Cup icon, stating 'open am-pm' and featuring the Instagram handle @ciotto.frb."
            width={1080} //
            height={1350}
            quality={100}
            className="hidden md:block w-[130px] h-[180px] md:w-[320px] md:h-[430px] max-w-fit object-cover self-end"
          />
        </div>
      </article>

      <LineAnimated inViewTrigger={true} />

      {/* KOMUNA */}
      <GalleryText
        h2="Komuna Coffee"
        imageSrc1="/image/ciottobar/komuna(1).avif"
        altText1="A man harvests ripe coffee cherries from a branch in a green coffee plantation." //
        imageSrc2="/image/ciottobar/komuna(2).avif"
        altText2="A close-up of a coffee roaster pouring freshly roasted Komuna coffee beans into a bowl." //
        imageSrc3="/image/ciottobar/komuna(3).avif"
        altText3="Close-up of Komuna coffee bags filled with roasted coffee beans." //
        imageSrc4="/image/ciottobar/komuna(4).avif"
        altText4="Two women standing outside on a coffee plantation." //
      >
        <p>Our coffee is brewed with carefully sourced beans from Komuna Coffee a Mexican collective that works directly with smallholder farmers across the country. Komuna builds long term relationships with producers who grow expressive high quality coffees while championing sustainable farming and social impact.</p>
      </GalleryText>

      <LineAnimated inViewTrigger={true} />

      {/* MENUCARD */}
      <article id="menu" className="px-section section-spacing max-w-screen-2xl mx-auto flex flex-col items-center">
        <Copy>
          <h2 className="text-center pb-[30px] md:pb-[60px]">Menu</h2>
        </Copy>
        <Image className="drop-shadow-primary" src="/image/ciottobar/menukort.svg" alt="Ciotto Bar Menu Card" width={1030} height={1320} />
      </article>

      {/* Diffuser */}
      {/* <DiffuserSection /> */}

      <LineAnimated inViewTrigger={true} />

      {/* Gallery */}
      <article className="px-section section-spacing max-w-screen-2xl mx-auto flex gap-12">
        <div className="flex flex-col gap-5">
          <Image
            src="/image/ciottobar/gallery(1).avif"
            alt="" // missing
            width={341.14}
            height={404.93}
            className="object-cover"
          />
          <Image
            src="/image/ciottobar/gallery(2).avif"
            alt="" // missing
            width={341.14}
            height={541}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Image
            src="/image/ciottobar/gallery(3).avif"
            alt="" // missing
            width={407.3}
            height={467.7}
            className="object-cover"
          />

          <Image
            src="/image/ciottobar/gallery(4).avif"
            alt="" // missing
            width={407.3}
            height={484}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src="/image/ciottobar/gallery(5-1).avif"
            alt="" // missing
            width={529.5}
            height={991.11}
            className="object-cover"
          />
          <div className="grid grid-cols-2 gap-[30px]">
            <Image
              src="/image/ciottobar/gallery(6).avif"
              alt="" // missing
              width={240}
              height={330}
              className="object-cover"
            />
            <Image
              src="/image/ciottobar/gallery(7).avif"
              alt="" // missing
              width={240}
              height={330}
              className="object-cover"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
