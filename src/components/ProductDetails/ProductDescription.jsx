const ProductDescription = ({ description }) => {
  return (
    // w-full lg:w-[207px]
    <div className="mt-[80px]">
      <h3 className="mb-3 font-bold h3-product">Description:</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default ProductDescription;
