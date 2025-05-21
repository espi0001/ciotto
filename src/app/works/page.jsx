export const dynamic = "force-dynamic";

import WorkCard from "@/components/WorksDetails/WorkCard";
import TitleSection from "@/components/Sections/TitleSection";
import { getAll } from "@/utils/supabase/api";

const isLargeCard = (index) => [1, 2, 5, 6].includes(index);

export const metadata = {
  title: "Ciotto | Works",
  description: "Works of Ari Prasetya",
};

export default async function Works() {
  const works = await getAll("works");

  return (
    <section className="px-section">
      <TitleSection title="WORKS OF ARI PRASETYA" />

      <article className="section-spacing flex flex-wrap justify-between gap-y-[2.5rem] md:gap-y-[11rem] gap-10 mb-48">
        {works.map((work, index) => (
          <WorkCard key={work.id} image={work.heroimage} title={work.name} number={index + 1} link={`/works/${work.slug}`} size={isLargeCard(index) ? "big" : "small"} />
        ))}
      </article>
    </section>
  );
}
