import PartnerCard from "../../components/02-molecules/PartnerCard";
import Copy from "../../components/gsap-anim/Copy";

const About = () => {
  return (
    <section className="grid">
      <article className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex">
          <img className="w-full h-full object-cover" src="/image/abouthero.jpg" alt="" />
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
              <h2>WHO IS ARI PRASATYA</h2>
              <p>Ari Prasetya is an Australian designer based in Copenhagen, known for his multidisciplinary work in furniture, ceramics, and interior design. With roots in Indonesia and professional experience across continents, Ari brings a quiet depth to his craft – blending precision, philosophy, and a playful approach to material. His objects live at the intersection of functionality and sculpture, often challenging the conventions of commercial design through process-driven experimentation.</p>
              <br />
              <p>Ari's design philosophy centers around expression through play. He resists being boxed into a single discipline, instead allowing curiosity and analogue exploration to guide his work. He builds full-scale prototypes by hand, believing that true understanding of material and proportion comes through tactile experience. His creative process is intuitive, shaped by a sensitivity to space, feeling, and the unnoticed objects that shape our daily lives.</p>
              <br />
              <p>In conversation, Ari often speaks of rhythm – not just in design, but in life. He views his work as an ongoing dialogue between stillness and motion, tradition and spontaneity. Whether crafting a chair, a cup, or a room, Ari seeks to evoke feeling over form, simplicity over spectacle, and presence over perfection.</p>
            </div>
          </Copy>
          <img height={700} width={690} src="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/4b34d5f9-e971-46bc-a907-266e83daee09/tempImageLz0EL9.jpg?" alt="" />
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center spacing-section-small md:spacing-section">
          <img height={700} width={690} src="https://www.eyeshotstreetphotography.com/wp-content/uploads/2023/10/Spiros-Loukopoulos.jpeg" alt="" />
          <Copy>
            <div>
              <h2>WHO IS SPIROS LOUKOPOULOS</h2>
              <p>Spiros Loukopoulos is a Copenhagen-based creative with a multifaceted background in civil engineering, street photography, and spatial design. Originally from Patras, Greece, he transitioned from engineering to the food and beverage industry, where he now operates street food markets and designs bars and cultural spaces.</p>
              <br />
              <p>As a self-taught photographer, Spiros captures the nuances of everyday life through his lens, often focusing on the unnoticed moments that define urban existence. His work has been featured in various publications and exhibitions, reflecting his keen eye for detail and storytelling.</p>
              <br />
              <p>In his collaborative projects, Spiros brings a unique perspective that blends his technical expertise with artistic sensibility, contributing to creations that are both functional and aesthetically engaging.</p>
            </div>
          </Copy>
        </article>

        <article className="items-center spacing-section-small md:spacing-section">
          <div className="flex flex-wrap gap-12">
            <Copy>
              <h2 className="content-end border-b-1 border-r-1">
                WHO ARE WE <br />
                WORKING WITH
              </h2>
            </Copy>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <PartnerCard image="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/2bb6df1a-0a1e-4460-a043-90754523f544/IMG_7700.jpg?format=2500w" alt="Beit Salma" title="Beit Salma" description="Description of partnership or collaborator." />
              <PartnerCard image="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/b7bfd55b-750d-400c-ade7-4ad928bd84a7/IMG_7701+2.jpg?format=2500w" title="Io Japanese Tea" description="Description of partnership or collaborator." />
              <PartnerCard image="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/b020ba90-025d-4156-b148-f2835cd9d4ea/Andra+in.jpg?format=2500w" title="Andra Eatery" description="Description of partnership or collaborator." />
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
        <article className="spacing-section-small md:spacing-section">
          <img className="w-full h-96 object-cover " src="https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/c4486bc0-4f96-402c-92a7-31711cdeca14/LYFA_SS22_12.JPG?format=2500w" alt="Espresso and Shelf" />
        </article>
      </div>
    </section>
  );
};

export default About;
