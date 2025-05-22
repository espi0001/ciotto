import Image from "next/image";
// import PartnerCard from "../../components/About/PartnerCard";
import Copy from "@/components/Animations/gsap-anim/TextAnimation";
import LineAnimated from "@/components/Animations/motion-anim/LineAnimated";

import SplitHero from "@/components/Sections/sticky-sections/SplitHero";
import ImageText from "@/components/Sections/ImageText";
import GalleryText from "@/components/Sections/GalleryText";

export const metadata = {
  title: "Ciotto | About",
  description: "About Ciotto",
};

const About = () => {
  return (
    <section className="grid max-w-screen">
      <SplitHero />
      {/* ----- section 2----- */}
      <article className="relative grid grid-cols-2 gap-y-4 w-full max-w-screen-2xl mx-auto px-section section-spacing md:h-screen md:flex items-center justify-center">
        <Image
          src="/image/about/alu_ciotto_cup.avif"
          alt="A hand holding the alu ciotto cup."
          width={460} //
          height={570}
          quality={100}
          className="col-start-1 row-start-1 md:absolute md:top-0 md:left-[3.75rem] md:w-1/4 md:max-w-xs"
        />

        <Copy startAtZero>
          <h1 className="col-span-3 row-start-2 z-40 text-center md:text-left md:max-w-[1000px] leading-tight">
            <span className="block text-center md:text-left">A LIVING SPACE</span>
            <span className="block text-center md:text-left md:ml-40">IN THE HEART</span>
            <span className="block text-center md:text-left md:ml-40">OF COPENHAGEN</span>
          </h1>
        </Copy>
        <Image
          src="/image/about/genno_chair.avif"
          alt="A wooden table and Genno chair, with shelves displaying Ciotto cups."
          width={460} //
          height={570}
          quality={100}
          className="col-start-2 row-start-3 md:absolute md:bottom-0 md:right-[3.75rem] md:w-1/4 md:max-w-xs"
        />
      </article>
      <LineAnimated inViewTrigger={true} />
      {/* ----- section 3----- */}
      <ImageText imageSrc="/image/about/started(1).avif" altText="A espresso machine on a the counter of Ciotto." h2="How it started">
        <p>It started quietly – with coffee, wood, and conversation. Ari was already deep in his craft, shaping furniture and ceramics with the same hands that pulled espresso shots. What began as solo explorations slowly attracted others who shared his pace and values. Spiros, with a background in design and a shared eye for detail, was one of them.</p>
        <p className="mb-6"></p>
        <p>Rather than chasing a brand or building a business plan, they followed instinct. They met around tools and textures, learning from each other through making. What emerged was a shared language – not just in form, but in rhythm, attitude, and care. The project grew from that space: intuitive, analogue, grounded in the physical world, and driven by a common belief that good things take time.</p>
      </ImageText>
      <LineAnimated inViewTrigger={true} />
      {/* ----- section 4----- */}
      <ImageText imageSrc="/image/about/ari(1).avif" altText="Black & white portait of Ari Prasetya" h2="Ari Prasetya" reverse>
        <p>Ari Prasetya is an Australian designer based in Copenhagen, known for his multidisciplinary work across furniture, ceramics, and interior design.</p>
        <p className="mb-6"></p>
        <p>Rooted in Indonesian heritage and shaped by experience across continents, Ari brings a quiet precision to his practice — blending craftsmanship, curiosity, and an intuitive sense of space. His work often explores the meeting point between sculpture and function, guided by analogue processes and full-scale prototyping.</p>

        <p className="mb-6"></p>
        <p>Ari's approach is playful but deliberate. He lets materials lead, allowing rhythm, proportion, and the small overlooked details to define form. Whether it's a chair, a counter, or a room, his aim is always the same: to make something that feels simple, grounded, and present — never over-designed, but deeply considered.</p>
      </ImageText>
      <LineAnimated inViewTrigger={true} />
      <ImageText imageSrc="/image/about/spiros(1).avif" altText="Black & white portait of Spiros Loukopoulos" h2="Spiros Loukopoulos">
        <p>Spiros Loukopoulos is a Copenhagen-based creative with a background spanning civil engineering, street photography, and spatial design.</p>
        <p className="mb-6"></p>
        <p>Originally from Patras, Greece, he shifted from engineering into the food and beverage world, where he now operates street food markets and designs bars and cultural venues.</p>
        <p className="mb-6"></p>
        <p>As a self-taught photographer, Spiros captures the quiet, often overlooked moments of city life — focusing on the human rhythms that shape urban space. His work has been exhibited and published internationally, marked by a clear eye for detail and narrative.</p>
        <p className="mb-6"></p>
        <p>In collaborative projects, he bridges technical know-how with artistic sensitivity, contributing to spaces that are both purposeful and expressive.</p>
      </ImageText>
      <LineAnimated inViewTrigger={true} />
      {/* ----- section 5----- */}
      {/* <article className="grid md:grid-cols-[1fr_3fr] flex-wrap gap-8 items-center px-section max-w-screen-2xl mx-auto section-spacing">
        <div className="border-b-1 border-r-1 h-full">
          <Copy>
            <h2 className="h2-large flex md:flex-col justify-end mr-4 h-full">
              Who we are <span>working with</span>
            </h2>
          </Copy>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6 ">
          <PartnerCard image="/image/about/andra_eatery.avif" title="Andra Eatery" slug="andra-eatery" description="Hand-built space shaped by community and human connection." className="max-sm:col-start-1 max-sm:row-start-1" />
          <PartnerCard image="/image/about/beit_salma.avif" alt="Beit Salma" title="Beit Salma" slug="beit-salma" description="A space built so that it feels like home with just enough contrast to give rhythm." className="max-sm:col-start-2 max-sm:row-start-2" />
          <PartnerCard image="/image/about/io_japanese_tea.avif" title="Io Japanese Tea" slug="io-japanese-tea" description="The materials and layout work together to create calm and presence." className="max-sm:col-start-1 max-sm:row-start-3" />
        </div>
      </article> */}
      {/*       <LineAnimated inViewTrigger={true} /> */}
      {/* ----- section 6----- */}
      <GalleryText
        h2="Sustainability"
        imageSrc1="/image/about/sustainability(1).avif"
        altText1="Close-up of a wooden Armmi chair with a blurred background." //
        imageSrc2="/image/about/sustainability(2).avif"
        altText2="A hand holding a dark brown Ciotto cup." //
        imageSrc3="/image/about/sustainability(3).avif"
        altText3="A beige Ciotto cup on a wooden surface." //
        imageSrc4="/image/about/sustainability(4).avif"
        altText4="A close-up of a wooden Genno chair with a blurred background." //
      >
        <p>At Ciotto, sustainability isn't just about materials — it's about mindset. We believe the most responsible choice is to invest in furniture that stays with you. Pieces that are designed to last, both in function and in feeling.</p>
        <p className="mb-6"></p>
        <p>When you choose something you love — something made to grow with you, move with you, and still feel right years down the line — you step away from a culture of disposability. That's why every Ciotto piece is crafted with care, intention, and longevity in mind. Thoughtfully designed, beautifully made — for a life well lived.</p>
      </GalleryText>

      {/* ----- section 7----- */}
      <article className="max-w-screen-2xl mx-auto section-spacing">
        <Image src="/image/about/toshixciotto.avif" alt="A Toshi stool with a brown Ciotto cup on top illuminated by soft sunlight." width={1920} height={1080} className="md:max-h-[600px] object-cover" />
      </article>
    </section>
  );
};

export default About;
