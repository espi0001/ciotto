"use client";
import { useState, useEffect } from "react";
import ProductHeader from "./ProductHeader";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import ProductThumbnails from "./ProductThumbnails";
import ProductSpecs from "./ProductSpecs";
import ProductQuantity from "./ProductQuantity";
import ProductGrid from "../04-templates/ProductGrid";
import Copy from "../gsap-anim/TextAnimation";

function parseJSONField(field) {
  if (!field) return [];
  try {
    return typeof field === "string" ? JSON.parse(field) : field;
  } catch {
    return [];
  }
}

const ProductDetailLayout = ({ product, images, colors, sizes, prices, measurements, relatedData }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[selectedColorIndex]);
  }, [selectedColorIndex, images]);

  return (
    <div className="px-section mt-18 md:spacing-section spacing-section-small">
      {/* Large Heading at the Top */}
      <div>
        <ProductHeader title={product.single_name} />
      </div>
      {/* Top Section: Description | Main Image | Thumbnails */}
      {/* grid grid-cols-1 lg:grid-cols-[300px_1fr_186px] gap-8 items-start mb-10 */}
      <div className="grid lg:grid-cols-[1fr_2fr_auto] gap-8 items-start">
        <div className="flex flex-col gap-2">
          <ProductDescription description={product.description} price={product.price} colors={colors} selectedColor={colors[selectedColorIndex]} setSelectedColorIndex={setSelectedColorIndex} />
          <div className="flex-1 max-w-[500px]">
            <ProductQuantity product={product} colors={colors} sizes={sizes} prices={prices} />
          </div>
        </div>
        <ProductImages mainImage={mainImage} />
        <div className="hidden lg:flex flex-col gap-[18px]">
          <ProductThumbnails thumbnails={images} mainImage={mainImage} setMainImage={setMainImage} />
        </div>
      </div>

      {/* Specs and Quantity Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-[20%] md:spacing-section">
        <div className="flex-1 max-w-[500px]">
          <ProductSpecs measurements={measurements} />
        </div>
      </div>

      {/* You May Also Like */}
      {relatedData && relatedData.length > 0 && (
        <div className="spacing-section-small md:spacing-section">
          <Copy>
            <h2 className="h2-product font-bold mb-6">You May Also Like</h2>
          </Copy>
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
