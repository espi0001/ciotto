"use client";
import Copy from "../gsap-anim/Copy";

const ProductHeader = ({ title }) => {
  return (
    <div className="">
      <Copy delay={0.5}>
        <h1 className="font-bold h1-product">{title}</h1>
      </Copy>
    </div>
  );
};

export default ProductHeader;
