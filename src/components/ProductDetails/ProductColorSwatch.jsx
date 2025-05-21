import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ProductColorSwatch = ({ colors = [], colorSwatch = [], selectedColor, setSelectedColorIndex }) => {
  if (!colors.length) return null;
  useEffect(() => {
    if (!selectedColor && colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-2">
        <h3 className="uppercase font-semibold">
          Color: <span className="text-xl font-normal">{selectedColor}</span>
        </h3>
      </div>
      <div className="flex gap-2">
        {colors.map((color, idx) => (
          <button key={idx} type="button" className={`text-xl w-[35px] h-[35px] border-[1.5px] rounded-full transition-all duration-150 cursor-pointer ${selectedColor === color ? "border-[#402D1F]" : "border-[#402d1f31]"}`} style={{ backgroundColor: colorSwatch[idx] || color }} onClick={() => setSelectedColorIndex(idx)} aria-label={`Select color ${color}`} />
        ))}
      </div>
    </div>
  );
};

ProductColorSwatch.propTypes = {
  colors: PropTypes.array,
  colorSwatch: PropTypes.array,
  selectedColor: PropTypes.string,
  setSelectedColorIndex: PropTypes.func,
};
export default ProductColorSwatch;
