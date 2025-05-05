"use client";

import { useState } from "react";

const ProductQuantity = ({ colors = [], sizes = [], prices = [] }) => {
  const [quantity, setQuantity] = useState(1);
  // Optionally, you can add state for selected color/size/price
  // const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  // const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  // const [selectedPrice, setSelectedPrice] = useState(prices[0] || "");

  const handleAddToCart = () => {
    // You can expand this to include selected options
    console.log("Adding to cart:", { quantity, colors, sizes, prices });
    // Add your cart logic here
  };

  return (
    <div className="flex justify-end mb-5">
      <div className="flex items-center gap-[142px]">
        <div className="flex items-center gap-1">
          <span className="text-black">QUANTITY</span>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 border border-black flex items-center justify-center" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button className="w-6 h-6 border border-black flex items-center justify-center" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
        </div>
        <button className="flex items-center gap-2 text-[#402D1F]" onClick={handleAddToCart}>
          ADD TO CART
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
