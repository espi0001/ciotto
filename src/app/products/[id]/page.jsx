import { getProductById, getRelatedProducts } from "../../../utils/supabase/api";
import ProductDetailLayout from "../../../components/ProductDetails/ProductDetailLayout";

function parseJSONField(field) {
  if (!field) return [];
  try {
    return typeof field === "string" ? JSON.parse(field) : field;
  } catch {
    return [];
  }
}

console.log(process.env);

export default async function ProductDetail({ params }) {
  try {
    const { id } = await params;
    const product = await getProductById(id);
    const relatedData = await getRelatedProducts(product);

    // Parse fields
    const images = parseJSONField(product.image);
    const colors = parseJSONField(product.color);
    const sizes = parseJSONField(product.size);
    const prices = parseJSONField(product.price);

    // Parse measurements from dimension string (e.g., "H.740mm/SH.440mm x D.520mm x W.420mm")
    // This is a simple example, you can improve parsing as needed
    // const measurements = { Dimensions: product.dimension };

    const measurements = parseJSONField(product.dimension);

    return (
      <ProductDetailLayout
        product={product} //
        images={images}
        colors={colors}
        sizes={sizes}
        prices={prices}
        measurements={measurements}
        relatedData={relatedData}
      />
    );
  } catch (error) {
    console.error("Error:", error);
    return (
      <div className="text-red-500 p-4">
        Error: {error.message}
        <br />
        <small>ID: {params.id}</small>
      </div>
    );
  }
}
