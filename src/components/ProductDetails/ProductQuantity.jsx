"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "../01-atoms/Button";

const ProductQuantity = ({ colors = [], sizes = [], prices = [] }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  // const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  // const [selectedPrice, setSelectedPrice] = useState(prices[0] || "");

  const handleAddToCart = () => {
    console.log("Adding to cart:", { quantity, selectedColor, colors, sizes, prices });
    // Add your cart logic here
  };

  return (
    <div className="flex flex-col gap-4 mb-5">
      {/* Quantity and Add to Cart */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1">
          <span className="">QUANTITY</span>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer w-6 h-6 border border-black flex items-center justify-center" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button className="cursor-pointer w-6 h-6 border border-black flex items-center justify-center" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
        </div>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to cart
        </Button>
        {/* <button className="cursor-pointer flex items-center gap-2" onClick={handleAddToCart}>
          ADD TO CART
          <Image src="/image/arrow.svg" alt="arrow-right" width={86} height={86} />
        </button> */}
      </div>
      {/* Color Swatches */}
      {colors.length > 0 && (
        <div className="flex items-center gap-2 mt-2">
          <span className="mr-2">COLOR:</span>
          <div className="flex gap-2">
            {colors.map((color, idx) => (
              <button key={idx} className={`w-10 h-6 border-2 ${selectedColor === color ? "border-[#402D1F]" : "border-gray-300"} transition-all duration-150`} style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)} aria-label={`Select color ${color}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductQuantity;
