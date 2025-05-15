import React, { useEffect } from "react";

const ProductColorSwatch = ({ colors = [], selectedColor, setSelectedColorIndex }) => {
  if (!colors.length) return null;

  return (
    <div className="flex flex-col gap-[10px] pb-8">
      <div className="flex items-center gap-2">
        <label className="font-semibold">COLOR:</label>
        <span className="text-xl">{selectedColor}</span>
      </div>
      <div className="flex gap-2">
        {colors.map((color, idx) => (
          <button key={idx} type="button" className={`text-xl w-[25px] h-[25px] border-1 rounded-full bg-secondary-button transition-all duration-150 cursor-pointer ${selectedColor === color ? "border-[#402D1F]" : "border-gray-300"} transition-all duration-150`} style={{ backgroundColor: color }} onClick={() => setSelectedColorIndex(idx)} aria-label={`Select color ${color}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductColorSwatch;
