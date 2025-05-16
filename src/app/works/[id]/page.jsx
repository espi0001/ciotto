export const dynamic = "force-dynamic";

import WorkDetailLayout from "../../../components/03-organisms/WorkDetailLayout";
import { getByColumn } from "@/utils/supabase/api";

export default async function WorkDetail({ params }) {
  const work = await getByColumn("works", "slug", params.id); // 'id' is the slug
  if (!work) return <div>Not found</div>;

  // Transform data to match the component's expected props
  const workData = {
    title: work.name,
    designer: "ARI PRASETYA",
    subtitle: work.words,
    heroImage: work.heroimage,
    galleryImages: [work.image1, work.image2, work.image3, work.image4].filter(Boolean),
    infoText: work.info,
    details: [
      { label: "Location", value: work.location },
      { label: "Main Features", value: work.words },
    ],
  };

  return <WorkDetailLayout work={workData} />;
}
