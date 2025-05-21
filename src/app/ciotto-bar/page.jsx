import React from "react";
import Image from "next/image";
import Copy from "@/components/gsap-anim/TextAnimation";
import HeroVideo from "@/components/HeroVideo";
import ImageCarousel from "@/components/02-molecules/ImageCarousel";
import DiffuserSection from "@/components/DiffuserSection";
import Button from "@/components/01-atoms/Button";
import OpeningHours from "@/components/bar/OpeningHours";
import LineAnimated from "@/components/ui-elements/LineAnimated";
import AnimatedLine from "@/components/01-atoms/AnimatedLine";

export const metadata = {
  title: "Ciotto | Ciotto Bar",
  description: "Experience the Ciotto Bar",
};

const images = [
  {
    src: "/image/ciottobar/komuna(3).webp",
    alt: "Two women standing outside on a coffee plantation.",
  },
  {
    src: "/image/ciottobar/komuna(4).webp",
    alt: "Workers processing coffee beans, with a house and flowering trees in the background.",
  },
  {
    src: "/image/ciottobar/komuna(5).webp",
    alt: "A man harvests ripe coffee cherries from a branch in a green coffee plantation.",
  },
];

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
              <p>Take a moment to slow down and experience the atmosphere of the space, where you're welcome to explore the handmade products, feel and use the materials, and let design and coffee meet in everyday rhythm.</p>
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

            <OpeningHours days="Monday" hours="Closed" />
            <OpeningHours days="Tuesday" hours="Closed" />
            <OpeningHours days="Wednesday" hours="Closed" />
            <OpeningHours days="Thursday" hours="09:00 - 16:00" />
            <OpeningHours days="Friday" hours="09:00 - 16:00" />
            <OpeningHours days="Saturday" hours="09:00 - 16:00" />
            <OpeningHours days="Sunday" hours="09:00 - 16:00" />
          </div>
        </div>
        <div className="flex flex-wrap gap-[15px] md:gap-[35px]">
          <Image
            src="/image/ciottobar/moments(1).avif"
            alt="A Toshi stool with a Ciotto cup on top and a soft shadows on a light wall."
            width={1080} //
            height={1350}
            quality={100}
            className="h-full w-[490px] max-w-fit object-cover"
          />
          <Image
            src="/image/ciottobar/moments(2).avif"
            alt="The Ciotto café with a wooden table, Gattii chairs, warm lighting and shelves with Ciotto cups."
            width={1080} //
            height={1350}
            quality={100}
            className="hidden md:block w-[130px] h-[180px] md:w-[320px] md:h-[430px] max-w-fit object-cover self-end"
          />
        </div>
      </article>

      <LineAnimated inViewTrigger={true} />

      {/* KOMUNA */}
      <article className="px-section section-spacing max-w-screen-2xl mx-auto grid gap-5 md:gap-14">
        <div className="grid md:grid-cols-2 gap-5 md:gap-14">
          <div className="flex flex-col justify-end">
            <div className="grid gap-2.5 pb-5 md:pb-14">
              <Copy>
                <h2 className="mb-4">Komuna Beans</h2>
                <p>Our coffee is brewed with carefully sourced beans from Komuna Coffee a Mexican collective that works directly with smallholder farmers across the country. Komuna builds long term relationships with producers who grow expressive high quality coffees while championing sustainable farming and social impact.</p>
              </Copy>
            </div>
            <Image
              src="/image/ciottobar/komuna(1).avif"
              alt="Close-up of Komuna coffee bags filled with roasted coffee beans."
              width={1390} //
              height={1080}
              quality={100}
              className="max-h-fit max-w-full md:max-w-[500px] object-cover"
            />
          </div>

          <Image
            src="/image/ciottobar/komuna(2).avif"
            alt="A close-up of a coffee roaster pouring freshly roasted Komuna coffee beans into a bowl."
            width={1080} //
            height={1350}
            quality={100}
            className="max-w-fit object-cover md:block hidden"
          />
        </div>

        {/* KOMUNA PHOTOS */}
        <ImageCarousel images={images} />
      </article>

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

      {/* Opening hours */}
      {/* <article className="px-section section-spacing max-w-screen-2xl mx-auto grid grid-cols-2 items-center">
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
                <p className="h3-small md:h3-large">Closed</p>
                <p className="h3-small md:h3-large">Closed</p>
                <p className="h3-small md:h3-large">09:00 - 16:00</p>
                <p className="h3-small md:h3-large">09:00 - 16:00</p>
                <p className="h3-small md:h3-large">09:00 - 16:00</p>
                <p className="h3-small md:h3-large">09:00 - 16:00</p>
              </Copy>
            </div>
          </div>
        </div>

        <Image
          src="/image/ciottobar/opening_hours.avif"
          alt="" // missing
          width={1030}
          height={1320}
          className="max-h-[700px] object-cover"
        />
      </article> */}

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
