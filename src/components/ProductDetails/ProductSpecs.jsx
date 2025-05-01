import PropTypes from "prop-types";

const ProductSpecs = ({ measurements, price }) => {
  return (
    <div className="flex justify-between py-5 border-y border-[#402D1F]">
      <div>
        <h3 className="text-black mb-4">SPECIFICATIONS</h3>
        <div className="flex flex-col gap-1.5">
          {Object.entries(measurements).map(([label, value]) => (
            <div key={label} className="flex justify-between w-[506px]">
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[#402D1F] mb-4">PRICE</h3>
        <div className="text-xl font-semibold">€{price}</div>
      </div>
    </div>
  );
};

ProductSpecs.propTypes = {
  measurements: PropTypes.objectOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductSpecs;
