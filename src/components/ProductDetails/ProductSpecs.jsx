import PropTypes from "prop-types";

const ProductSpecs = ({ measurements, price }) => {
  return (
    <div className="">
      {/* Measurements */}
      <h3 className="uppercase">Measurements</h3>
      <div className="border-y border-[#402D1F] flex flex-col justify-between py-[0.5rem] ">
        {measurements.map(({ label, value }, index) => (
          <div key={index} className="flex justify-between w-full  ">
            <p className="before:content-['•'] before:mr-2">{label}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="py-[0.5rem]">
        <h3>PRICE</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

ProductSpecs.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductSpecs;
