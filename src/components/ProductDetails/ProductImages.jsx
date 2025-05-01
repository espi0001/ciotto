"use client";

import Image from "next/image";

const ProductImages = ({ mainImage, thumbnails }) => {
  return (
    <>
      <div className="flex-grow max-w-[923px] h-[547px] bg-[#ECDED9]">
        <Image src={mainImage} alt="Product Main Image" width={923} height={547} className="w-full h-full object-cover" />
      </div>

      <div className="flex lg:flex-col gap-[18px] w-full lg:w-[186px]">
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className="w-[180px] h-[165px] bg-[#ECDED9]">
            <div className="p-[27px_11px]">
              <Image src={thumbnail} alt={`Product View ${index + 1}`} width={157} height={112} className="w-[157px] h-[112px] object-cover" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImages;
