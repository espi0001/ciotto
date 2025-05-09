"use client";

import Image from "next/image";
import Link from "next/link";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl mb-6">You may also like</h2>
      <div className="flex gap-6 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-[304px]">
            <div className="w-[302px] h-[277px] bg-[#ECDED9] mb-2">
              <Image src={product.image} alt={product.title} width={302} height={277} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center px-2">
              <span>{product.title}</span>
              <Link href={`/products/${product.id}`} className="flex items-center gap-2 text-primary-text text-sm">
                VIEW
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
