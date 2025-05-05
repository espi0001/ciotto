"use client";
import { useState } from "react";
import ProductHeader from "./ProductHeader";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import ProductThumbnails from "./ProductThumbnails";
import ProductSpecs from "./ProductSpecs";
import ProductQuantity from "./ProductQuantity";
import ProductGrid from "../04-templates/ProductGrid";

function parseJSONField(field) {
  if (!field) return [];
  try {
    return typeof field === "string" ? JSON.parse(field) : field;
  } catch {
    return [];
  }
}

const ProductDetailLayout = ({ product, images, colors, sizes, prices, measurements, relatedData }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-[1303px] mx-auto px-5 py-10 font-sans">
      {/* Top Section: Description | Main Image | Thumbnails */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_186px] gap-8 items-start mb-10">
        <div>
          <ProductHeader title={product.name} />
          <ProductDescription description={product.description} />
        </div>
        <ProductImages mainImage={mainImage} />
        <div className="hidden lg:flex flex-col gap-[18px]">
          <ProductThumbnails thumbnails={images} mainImage={mainImage} setMainImage={setMainImage} />
        </div>
      </div>

      {/* Specs and Quantity Section */}
      <div className="mb-10 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <ProductSpecs measurements={measurements} price={product.price} />
        </div>
        <div className="flex-1">
          <ProductQuantity colors={colors} sizes={sizes} prices={prices} />
        </div>
      </div>

      {/* You May Also Like */}
      {relatedData && relatedData.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <ProductGrid
            products={relatedData.slice(0, 4).map((p) => ({
              id: p.id,
              image: parseJSONField(p.image)[0],
              title: p.name,
              link: `/products/${p.id}`,
            }))}
            small
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailLayout;
