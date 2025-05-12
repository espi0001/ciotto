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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-5">
      {/* Quantity and Add to Cart */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="h3-large">QUANTITY</span>

          <div className="flex items-center gap-3 px-2">
            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h3-large flex items-center justify-center">
              -
            </button>
            <span className="h3-large">{quantity}</span>
            <button type="button" onClick={() => setQuantity(quantity + 1)} className="h3-large flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        <Button variant="primary" type="submit">
          Add to cart
        </Button>

        {/* <div className="flex items-center gap-1">
          <span className="">QUANTITY</span>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer w-6 h-6 flex items-center justify-center" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button className="cursor-pointer w-6 h-6 flex items-center justify-center" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
        </div>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to cart
        </Button> */}
        {/* <button className="cursor-pointer flex items-center gap-2" onClick={handleAddToCart}>
          ADD TO CART
          <Image src="/image/arrow.svg" alt="arrow-right" width={86} height={86} />
        </button> */}
      </div>
      {/* Color Swatches */}
      {/* {colors.length > 0 && (
        <div className="flex items-center gap-2 mt-2">
          <span className="mr-2">COLOR:</span>
          <div className="flex gap-2">
            {colors.map((color, idx) => (
              <button
                key={idx}
                className={`w-10 h-6 border-2 ${
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
      )} */}
      <hr className="w-full border-[#402D1F]" />
      {colors.length > 0 && (
        <div className="flex items-center gap-2 mt-2">
          <span className="mr-2">COLOR:</span>
          <div className="flex gap-2">
            {colors.map((color, idx) => (
              <button key={idx} type="button" className={`w-10 h-6 border-2 ${selectedColor === color ? "border-[#402D1F]" : "border-gray-300"} transition-all duration-150`} style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)} aria-label={`Select color ${color}`} />
            ))}
          </div>
        </div>
      )}
    </form>
  );
};

export default ProductQuantity;
