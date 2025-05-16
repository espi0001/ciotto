export const dynamic = "force-dynamic";
import ProductGrid from "../../components/04-templates/ProductGrid";
import { getAll } from "../../utils/supabase/api";
import TitleSection from "../../components/02-molecules/TitleSection";
import Button from "@/components/01-atoms/Button";
export default async function Products() {
  const productsRaw = await getAll("ciotto");
  // Map to the format expected by ProductGrid
  const products = (productsRaw || []).map((item) => ({
    id: item.id,
    image: Array.isArray(item.image) ? item.image[0] : typeof item.image === "string" && item.image.startsWith("[") ? JSON.parse(item.image)[0] : item.image,
    title: item.name || item.title,
    link: `/products/${item.id}`,
  }));
  return (
    <section className="px-section">
      <article className="flex flex-col gap-8">
        <TitleSection title="Products" description="Handcrafted with precision and care, each product is a unique expression of craftsmanship and designed to bring beauty and function into everyday life. Explore the collection and find the perfect piece that speaks to you." />
        <Button variant="primary">Contact us</Button>
      </article>
      <article className="mt-28">
        <ProductGrid products={products} />
      </article>
    </section>
  );
}
