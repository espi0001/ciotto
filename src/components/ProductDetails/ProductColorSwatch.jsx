import React, { useEffect } from "react";

const ProductColorSwatch = ({ colors = [], colorSwatch = [], selectedColor, setSelectedColorIndex }) => {
  if (!colors.length) return null;

  return (
    <div className="flex flex-col gap-[10px] pb-8">
      <div className="flex items-center gap-2">
        <label className="font-semibold">COLOR:</label>
        <span className="text-xl">{selectedColor}</span>
      </div>
      <div className="flex gap-2">
        {colors.map((color, idx) => (
          <button key={idx} type="button" className={`text-xl w-[25px] h-[25px] border-[1.5px] rounded-full transition-all duration-150 cursor-pointer ${selectedColor === color ? "border-[#402D1F]" : "border-[#402d1f31]"}`} style={{ backgroundColor: colorSwatch[idx] || color }} onClick={() => setSelectedColorIndex(idx)} aria-label={`Select color ${color}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductColorSwatch;
