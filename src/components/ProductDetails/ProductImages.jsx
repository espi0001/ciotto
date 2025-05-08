"use client";

import Image from "next/image";

const ProductImages = ({ mainImage }) => (
  <div className="flex-grow max-w-[898px] h-[532px] flex items-center justify-center">
    <Image src={mainImage} alt="Product Main Image" width={898} height={532} className="absolute object-contain" />
  </div>
);

export default ProductImages;
