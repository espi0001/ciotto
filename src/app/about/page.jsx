import PartnerCard from "../../components/02-molecules/PartnerCard";
import Copy from "../../components/gsap-anim/TextAnimation";
import Image from "next/image";
import ImageText from "@/components/04-templates/ImageText";

export const metadata = {
  title: "Ciotto | About",
  description: "About Ciotto",
};

const About = () => {
  return (
    <section className="grid max-w-screen">
      <article className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex">
          <img className="w-full h-full object-cover" src="/image/about/abouthero.jpg" alt="" />
          <div className="w-full h-full object-cover" />
        </div>
        <div className="absolute flex flex-col justify-center items-center h-full w-full">
          <h1 className="tracking-wide mb-2">
            <span className="text-secondary-text">ABOUT</span> CIOTTO
          </h1>
          <p className="tracking-widest mt-2">
            <span className="text-secondary-text">ARI PRASETYA</span> SPIROS LOUKOPOULOS
          </p>
        </div>
      </article>

      <div className="px-section spacing-section-small md:spacing-section">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center spacing-section">
          <img height={700} width={570} src="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/b7bfd55b-750d-400c-ade7-4ad928bd84a7/IMG_7701+2.jpg?" alt="" />
          <Copy>
            <div>
              <h2>How it started</h2>
              <p>It started quietly – with coffee, wood, and conversation. Ari was already deep in his craft, shaping furniture and ceramics with the same hands that pulled espresso shots. What began as solo explorations slowly attracted others who shared his pace and values. Spiros, with a background in design and a shared eye for detail, was one of them.</p>
              <br />
              <p>Rather than chasing a brand or building a business plan, they followed instinct. They met around tools and textures, learning from each other through making. What emerged was a shared language – not just in form, but in rhythm, attitude, and care. The project grew from that space: intuitive, analogue, grounded in the physical world, and driven by a common belief that good things take time.</p>
            </div>
          </Copy>
        </article>

        <ImageText imageSrc="/image/about/ari(1).avif" altText="Black & white portait of Ari Prasetya" h2="Ari Prasetya">
          <p>Ari Prasetya is an Australian designer based in Copenhagen, known for his multidisciplinary work across furniture, ceramics, and interior design.</p>
          <p className="mb-6"></p>
          <p>Rooted in Indonesian heritage and shaped by experience across continents, Ari brings a quiet precision to his practice — blending craftsmanship, curiosity, and an intuitive sense of space. His work often explores the meeting point between sculpture and function, guided by analogue processes and full-scale prototyping.</p>

          <p className="mb-6"></p>
          <p>Ari’s approach is playful but deliberate. He lets materials lead, allowing rhythm, proportion, and the small overlooked details to define form. Whether it’s a chair, a counter, or a room, his aim is always the same: to make something that feels simple, grounded, and present — never over-designed, but deeply considered.</p>
        </ImageText>

        <ImageText imageSrc="/image/about/spiros(1).avif" altText="Black & white portait of Spiros Loukopoulos" h2="Spiros Loukopoulos">
          <p>Spiros Loukopoulos is a Copenhagen-based creative with a background spanning civil engineering, street photography, and spatial design.</p>
          <p className="mb-6"></p>
          <p>Originally from Patras, Greece, he shifted from engineering into the food and beverage world, where he now operates street food markets and designs bars and cultural venues.</p>
          <p className="mb-6"></p>
          <p>As a self-taught photographer, Spiros captures the quiet, often overlooked moments of city life — focusing on the human rhythms that shape urban space. His work has been exhibited and published internationally, marked by a clear eye for detail and narrative.</p>
          <p className="mb-6"></p>
          <p>In collaborative projects, he bridges technical know-how with artistic sensitivity, contributing to spaces that are both purposeful and expressive.</p>
        </ImageText>

        {/* <article className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center spacing-section-small md:spacing-section">
          <Image src="/image/about/spiros(1).avif" alt="Black & white portait of Spiros Loukopoulos" height={1000} width={1000} className="max-h-[700px] object-cover" />
          <Copy>
            <div>
              <h2 className="mb-4">Spiros Loukopoulos</h2>
              <p>Spiros Loukopoulos is a Copenhagen-based creative with a background spanning civil engineering, street photography, and spatial design.</p>
              <p className="mb-6"></p>
              <p>Originally from Patras, Greece, he shifted from engineering into the food and beverage world, where he now operates street food markets and designs bars and cultural venues.</p>
              <p className="mb-6"></p>
              <p>As a self-taught photographer, Spiros captures the quiet, often overlooked moments of city life — focusing on the human rhythms that shape urban space. His work has been exhibited and published internationally, marked by a clear eye for detail and narrative.</p>
              <p className="mb-6"></p>
              <p>In collaborative projects, he bridges technical know-how with artistic sensitivity, contributing to spaces that are both purposeful and expressive.</p>
             
            </div>
          </Copy>
        </article> */}

        <article className="items-center spacing-section-small md:spacing-section">
          <div className="grid md:grid-cols-[1fr_3fr] flex-wrap gap-12">
            <Copy>
              <h2 className="content-end border-b-1 border-r-1">
                WHO ARE WE <br />
                WORKING WITH
              </h2>
            </Copy>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-sm:grid-cols-2 max-sm:grid-rows-3">
              <PartnerCard image="/image/about/andra_eatery.avif" title="Andra Eatery" slug="andra-eatery" description="Description of partnership or collaborator." className="max-sm:col-start-1 max-sm:row-start-1" />
              <PartnerCard image="/image/about/beit_salma.avif" alt="Beit Salma" title="Beit Salma" slug="beit-salma" description="Description of partnership or collaborator." className="max-sm:col-start-2 max-sm:row-start-2" />
              <PartnerCard image="/image/about/io_japanese_tea.avif" title="Io Japanese Tea" slug="io-japanese-tea" description="Description of partnership or collaborator." className="max-sm:col-start-1 max-sm:row-start-3" />
            </div>
          </div>
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center spacing-section-small md:spacing-section">
          <div className="grid grid-cols-2">
            <Image src="/image/about/sustainability(1).avif" alt="Close-up of a wooden Armmi chair with a blurred background." height={1000} width={1000} className="md:max-h-[340px] object-cover" />
            <Image src="/image/about/sustainability(2).avif" alt="A hand holding a dark brown Ciotto cup." height={1000} width={1000} className="md:max-h-[340px] object-cover" />
            <Image src="/image/about/sustainability(3).avif" alt="A beige Ciotto cup on a wooden surface." height={1000} width={1000} className="md:max-h-[340px] object-cover" />
            <Image src="/image/about/sustainability(4).avif" alt="A close-up of a wooden Genno chair." height={1000} width={1000} className="md:max-h-[340px] object-cover" />
          </div>

          <Copy>
            <div>
              <h2 className="mb-4 text-center">Sustainability</h2>
              <p>At Ciotto, sustainability isn’t just about materials — it’s about mindset. We believe the most responsible choice is to invest in furniture that stays with you. Pieces that are designed to last, both in function and in feeling.</p>
              <p className="mb-6"></p>
              <p>When you choose something you love — something made to grow with you, move with you, and still feel right years down the line — you step away from a culture of disposability. That’s why every Ciotto piece is crafted with care, intention, and longevity in mind. Thoughtfully designed, beautifully made — for a life well lived.</p>
            </div>
          </Copy>
        </article>
      </div>
      <article className="spacing-section-small md:spacing-section">
        <img className="w-full h-[600px] object-cover" src="/image/contact/contact_hero.avif" alt="Espresso and Shelf" />
      </article>
    </section>
  );
};

export default About;
