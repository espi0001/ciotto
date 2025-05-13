import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Copy from "../gsap-anim/Copy";
import ProductColorSwatch from "./ProductColorSwatch";

const ProductDescription = ({ description, price, colors = [] }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  useEffect(() => {
    if (!selectedColor && colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  return (
    // w-full lg:w-[207px]
    <div className="mt-[70px]">
      <Copy delay={1}>
        <div className="">
          <h2 className="mb-3 font-bold h3-product">Description:</h2>
          <p className="p-product">{description}</p>
        </div>
        <hr className="border-t border-[#402D1F] mt-8 mb-6" />
      </Copy>

      <div className=" flex flex-row justify-between">
        <ProductColorSwatch colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <p className="p-product">{price}</p>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  price: PropTypes.string.isRequired,
  colors: PropTypes.array,
};

export default ProductDescription;
