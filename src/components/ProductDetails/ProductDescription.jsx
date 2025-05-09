const ProductDescription = ({ description }) => {
  return (
    <div className="w-full lg:w-[207px]">
      <h3 className="text-primary-text text-lg mb-3">Description:</h3>
      <p className="text-primary-text leading-relaxed">{description}</p>
    </div>
  );
};

export default ProductDescription;
