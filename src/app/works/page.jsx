import WorkCard from "../../components/02-molecules/WorkCard";
import TitleSection from "../../components/02-molecules/TitleSection";
import { getAll } from "@/utils/supabase/api";

const isLargeCard = (index) => [1, 2, 5, 6].includes(index);

export default async function Works() {
  const works = await getAll("works");

  return (
    <section className="px-section spacing-section-small md:spacing-section">
      <TitleSection title="WORKS OF ARI PRASETYA" description="dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor." />

      <article className="spacing-section-small md:spacing-section  flex flex-wrap justify-between gap-y-[2.5rem] md:gap-y-[11rem] gap-10 mb-48">
        {works.map((work, index) => (
          <WorkCard key={work.id} image={work.heroimage} title={work.name} number={index + 1} link={`/works/${work.slug}`} size={isLargeCard(index) ? "big" : "small"} />
        ))}
      </article>
    </section>
  );
}
