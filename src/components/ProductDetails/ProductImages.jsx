"use client";

import Image from "next/image";

const ProductImages = ({ mainImage }) => (
  <div className="flex-grow max-w-[900px] h-[530px] flex items-center justify-center">
    <Image src={mainImage} alt="Product Main Image" width={640} height={420} className="absolute object-contain mb-[40px]" />
  </div>
);

export default ProductImages;
