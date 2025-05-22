export const dynamic = "force-dynamic";
import { getAll } from "@/utils/supabase/api";
import TitleSection from "@/components/Sections/TitleSection";
import WorkCard from "@/components/WorksDetails/WorkCard";

const isLargeCard = (index) => [1, 2, 5, 6].includes(index); // Husk 0-indeks!

export const metadata = {
  title: "Ciotto | Works",
  description: "Works of Ari Prasetya",
};

export default async function Works() {
  const works = await getAll("works");

  return (
    <section className="px-section max-w-screen-2xl mx-auto ">
      <TitleSection title="WORKS OF ARI PRASETYA" />

      <article className="section-spacing grid grid-cols-2 gap-y-10 gap-x-6 md:gap-x-20 lg:gap-x-30 mb-48">
        {works.map((work, index) => (
          <WorkCard
            key={work.id} //
            image={work.heroimage}
            title={work.name}
            number={index + 1}
            link={`/works/${work.slug}`}
            size={isLargeCard(index) ? "big" : "small"}
          />
        ))}
      </article>
    </section>
  );
}
