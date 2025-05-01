import { createClient } from "../../../utils/supabase/server";
import ProductHeader from "../../../components/ProductDetails/ProductHeader";
import ProductDescription from "../../../components/ProductDetails/ProductDescription";
import ProductImages from "../../../components/ProductDetails/ProductImages";
import ProductQuantity from "../../../components/ProductDetails/ProductQuantity";
import ProductSpecs from "../../../components/ProductDetails/ProductSpecs";
import RelatedProducts from "../../../components/ProductDetails/RelatedProducts";

export default async function ProductDetail({ params }) {
  try {
    const { id } = params;
    const supabase = await createClient();

    // Fetch the specific product
    const { data: products, error: productError } = await supabase.from("ciotto").select("*").eq("id", id).single();

    if (productError) {
      throw new Error(`Product not found: ${productError.message}`);
    }

    // Fetch related products
    const { data: relatedData, error: relatedError } = await supabase
      .from("ciotto")
      .select("*")
      .neq("id", id)
      .filter("name", "ilike", `${products.name.split(" ")[0]}%`);

    if (relatedError) {
      console.error("Error fetching related products:", relatedError);
    }

    return (
      <div className="max-w-[1303px] mx-auto px-5 py-10 font-sans">
        <div className="mb-10">
          <ProductHeader title={products.name} />
          <div className="flex gap-5 flex-col lg:flex-row">
            <ProductDescription description={products.description} />
            <ProductImages mainImage={products.image} thumbnails={[products.image]} />
          </div>
        </div>

        <div className="mb-10">
          <ProductQuantity
            onAddToCart={(quantity) => {
              console.log("Adding to cart:", { productId: id, quantity, price: products.price });
            }}
          />
          <ProductSpecs
            measurements={{
              Dimensions: products.dimension,
              Size: products.size || "Standard",
            }}
            price={products.price}
          />
        </div>

        {relatedData && relatedData.length > 0 && (
          <RelatedProducts
            products={relatedData.map((p) => ({
              id: p.id,
              title: p.name,
              image: p.image,
            }))}
          />
        )}
      </div>
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
