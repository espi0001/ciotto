import PropTypes from "prop-types";
import Copy from "../gsap-anim/Copy";

const ProductSpecs = ({ measurements, price }) => {
  return (
    <div className="">
      <Copy>
        {/* Measurements */}
        <h3 className="uppercase">Measurements</h3>
      </Copy>
      <div className="border-y border-[#402D1F] flex flex-col justify-between py-[0.5rem] ">
        {measurements.map(({ label, value }, index) => (
          <div key={index} className="flex justify-between w-full  ">
            <div className="flex items-center">
              <span className="mr-2">•</span>
              <Copy delay={0.5}>
                <span>{label}</span>
              </Copy>
            </div>
            <Copy delay={0.5}>
              <span>{value}</span>
            </Copy>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="py-[0.5rem]">
        <Copy>
          <h3>PRICE</h3>
        </Copy>
        <Copy delay={0.5}>
          <p>{price}</p>
        </Copy>
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
