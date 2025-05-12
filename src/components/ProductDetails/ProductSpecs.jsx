import PropTypes from "prop-types";

const ProductSpecs = ({ measurements, price }) => {
  return (
    <div className="">
      {/* Measurements */}
      <h3 className="mb-[0.8rem] uppercase">Measurements</h3>
      <div className="border-y border-[#402D1F] flex justify-between py-[0.5rem]">
        <div className="flex flex-col gap-1.5">
          {Object.entries(measurements).map(([label, value]) => (
            <div key={label} className="flex justify-between  w-full max-w-[506px]">
              <ul>
                <li className="before:content-['•'] before:mr-2">{value}</li>
                <li className="before:content-['•'] before:mr-2">{value}</li>
                <li className="before:content-['•'] before:mr-2">{value}</li>
                <li className="before:content-['•'] before:mr-2">{value}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="py-[0.5rem]">
        <h3 className="">PRICE</h3>
        <div className="">{price}</div>
      </div>
    </div>
  );
};

ProductSpecs.propTypes = {
  measurements: PropTypes.objectOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductSpecs;
