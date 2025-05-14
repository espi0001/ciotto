// import { createClient } from "../../../utils/supabase/server";
// import ProductHeader from "../../../components/ProductDetails/ProductHeader";
// import ProductDescription from "../../../components/ProductDetails/ProductDescription";
// import ProductImages from "../../../components/ProductDetails/ProductImages";
// import ProductQuantity from "../../../components/ProductDetails/ProductQuantity";
// import ProductSpecs from "../../../components/ProductDetails/ProductSpecs";
// import RelatedProducts from "../../../components/ProductDetails/RelatedProducts";

import WorkDetailLayout from "../../../components/03-organisms/WorkDetailLayout";
import { getWorkBySlug } from "@/utils/supabase/api";

export default async function WorkDetail({ params }) {
  const work = await getWorkBySlug(params.id); // 'id' is the slug
  if (!work) return <div>Not found</div>;

  // Transform data to match the component's expected props
  const workData = {
    title: work.name,
    designer: "Ari Prasetya",
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
