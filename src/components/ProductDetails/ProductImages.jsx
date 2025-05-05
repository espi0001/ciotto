"use client";

import Image from "next/image";

const ProductImages = ({ mainImage }) => (
  <div className="flex-grow max-w-[923px] h-[547px] flex items-center justify-center">
    <Image src={mainImage} alt="Product Main Image" width={923} height={547} className="w-full h-full object-cover" />
  </div>
);

export default ProductImages;
