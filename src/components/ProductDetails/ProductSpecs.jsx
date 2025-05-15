import PropTypes from "prop-types";
import Copy from "../gsap-anim/TextAnimation";

const ProductSpecs = ({ measurements, price }) => {
  return (
    <div className="">
      <Copy startAtTenPercent={true}>
        {/* Measurements */}
        <h3 className="uppercase">Measurements</h3>
      </Copy>
      <div className="border-y border-[#402D1F] flex flex-col justify-between py-[0.5rem] ">
        {measurements.map(({ label, value }, index) => (
          <div key={index} className="flex justify-between w-full  ">
            <div className="flex items-center">
              <span className="mr-2">•</span>
              <span>{label}</span>
            </div>
            <span>{value}</span>
          </div>
        ))}
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
