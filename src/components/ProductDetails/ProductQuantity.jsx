"use client";

// import { useState } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import Button from "../01-atoms/Button";

// const ProductQuantity = ({ colors = [], sizes = [], prices = [] }) => {
const ProductQuantity = ({ product, colors = [], sizes = [], prices = [] }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  // const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  // const [selectedPrice, setSelectedPrice] = useState(prices[0] || "");

  // Fjernet af ester
  // const handleAddToCart = () => {
  //   console.log("Adding to cart:", { quantity, selectedColor, colors, sizes, prices });
  //   // Add your cart logic here
  // };

  useEffect(() => {
    if (!selectedColor && colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartItem = {
      id: product.id,
      name: product.single_name,
      quantity,
      color: selectedColor,
      price: product.price,
      image: Array.isArray(product.image) ? product.image[0] : product.image,
    };

    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      console.log("Product added to cart:", cartItem);
      alert("Product added to cart!");
    } catch (err) {
      console.error("Failed to update cart:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Quantity and Add to Cart */}
      <div className="flex items-center justify-between border-b border-[#402D1F]">
        <div className="flex items-center gap-2">
          <span className="h3-large">QUANTITY</span>

          <div className="flex items-center gap-3 px-2">
            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h3-large flex items-center justify-center cursor-pointer">
              -
            </button>
            <span className="h3-large">{quantity}</span>
            <button type="button" onClick={() => setQuantity(quantity + 1)} className="h3-large flex items-center justify-center cursor-pointer">
              +
            </button>
          </div>
        </div>

        <Button variant="primary" type="submit">
          Add to cart
        </Button>

        {/* <Button variant="primary" onClick={handleAddToCart}>
          Add to cart
        </Button> */}
      </div>

      {/* Farvevalg */}
      {colors.length > 0 && (
        <div className="flex flex-col gap-[15px] md:gap-[30px]">
          <div className="flex items-center gap-2">
            <label className="h3-large">COLOR:</label>
            <span className="h3-large">{selectedColor}</span>
          </div>
          <div className="flex gap-2">
            {colors.map((color, idx) => (
              <button
                key={idx}
                type="button"
                className={`h3-large w-[95px] h-[46px] border-2 bg-secondary-button transition-all duration-150 cursor-pointer ${
                  selectedColor === color
                    ? "border-[#402D1F]" //
                    : "border-gray-300"
                } transition-all duration-150`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>
      )}
    </form>
  );
};

export default ProductQuantity;
