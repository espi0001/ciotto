const ProductDescription = ({ description }) => {
  return (
    <div className="w-full lg:w-[207px]">
      <h3 className="text-[#402D1F] text-lg mb-3">Description:</h3>
      <p className="text-[#402D1F] leading-relaxed">{description}</p>
    </div>
  );
};

export default ProductDescription;
