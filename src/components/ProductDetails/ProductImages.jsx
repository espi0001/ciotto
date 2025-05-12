"use client";

import Image from "next/image";

const ProductImages = ({ mainImage }) => (
  <div className="flex-grow max-w-[900px] h-[530px] flex items-center justify-center">
    <Image src={mainImage} alt="Product Main Image" width={700} height={530} className="absolute object-contain" />
  </div>
);

export default ProductImages;
