import PartnerCard from "../../components/02-molecules/PartnerCard";
import Copy from "../../components/gsap-anim/TextAnimation";
import Image from "next/image";

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

        <article className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center spacing-section-small md:spacing-section">
          <Copy>
            <div>
              <h2 className="mb-4">Ari Prasetya</h2>
              <p>Ari Prasetya is an Australian designer based in Copenhagen, known for his multidisciplinary work across furniture, ceramics, and interior design.</p>
              <p className="mb-6"></p>
              <p>Rooted in Indonesian heritage and shaped by experience across continents, Ari brings a quiet precision to his practice — blending craftsmanship, curiosity, and an intuitive sense of space. His work often explores the meeting point between sculpture and function, guided by analogue processes and full-scale prototyping.</p>

              <p className="mb-6"></p>
              <p>Ari’s approach is playful but deliberate. He lets materials lead, allowing rhythm, proportion, and the small overlooked details to define form. Whether it’s a chair, a counter, or a room, his aim is always the same: to make something that feels simple, grounded, and present — never over-designed, but deeply considered.</p>
              {/* <p>Ari Prasetya is an Australian designer based in Copenhagen, known for his multidisciplinary work in furniture, ceramics, and interior design. With roots in Indonesia and professional experience across continents, Ari brings a quiet depth to his craft – blending precision, philosophy, and a playful approach to material. His objects live at the intersection of functionality and sculpture, often challenging the conventions of commercial design through process-driven experimentation.</p>
              <br />
              <p>Ari's design philosophy centers around expression through play. He resists being boxed into a single discipline, instead allowing curiosity and analogue exploration to guide his work. He builds full-scale prototypes by hand, believing that true understanding of material and proportion comes through tactile experience. His creative process is intuitive, shaped by a sensitivity to space, feeling, and the unnoticed objects that shape our daily lives.</p>
              <br />
              <p>In conversation, Ari often speaks of rhythm – not just in design, but in life. He views his work as an ongoing dialogue between stillness and motion, tradition and spontaneity. Whether crafting a chair, a cup, or a room, Ari seeks to evoke feeling over form, simplicity over spectacle, and presence over perfection.</p> */}
            </div>
          </Copy>
          <Image src="/image/about/ari_prasetya.avif" alt="Image of Ari Prasetya" height={1000} width={1000} className="max-h-[700px] object-cover" />
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center spacing-section-small md:spacing-section">
          <Image src="/image/about/spiros_loukopoulos.avif" alt="Image of Spiros Loukopoulos" height={1000} width={1000} className="max-h-[700px] object-cover" />
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
              {/* <p>Spiros Loukopoulos is a Copenhagen-based creative with a multifaceted background in civil engineering, street photography, and spatial design. Originally from Patras, Greece, he transitioned from engineering to the food and beverage industry, where he now operates street food markets and designs bars and cultural spaces.</p>
              <br />
              <p>As a self-taught photographer, Spiros captures the nuances of everyday life through his lens, often focusing on the unnoticed moments that define urban existence. His work has been featured in various publications and exhibitions, reflecting his keen eye for detail and storytelling.</p>
              <br />
              <p>In his collaborative projects, Spiros brings a unique perspective that blends his technical expertise with artistic sensibility, contributing to creations that are both functional and aesthetically engaging.</p> */}
            </div>
          </Copy>
        </article>

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

        <article className="grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center spacing-section-small md:spacing-section">
          <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/65053e0b-e935-437f-8868-aa0b2af8e4a9/IMG_2542.jpeg?format=1500w" alt="Chair" />
          <Copy>
            <div>
              <h2 className="mb-4 text-center">SUSTAINABILITY</h2>
              <p className="mb-2">dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor. dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
              <p>dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor. dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
              <p>dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor. dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
              <br />
              <p>dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor. dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
              <p>dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor. dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
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
