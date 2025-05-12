import PropTypes from "prop-types";
import Copy from "../gsap-anim/Copy";
const ProductDescription = ({ description, price }) => {
  return (
    // w-full lg:w-[207px]
    <div className="mt-[80px]">
      <Copy delay={0.5}>
        <div className="">
          <h2 className="mb-3 font-bold h3-product">Description:</h2>
          <p className="">{description}</p>
        </div>
        <hr className="border-t border-[#402D1F] mb-[20px] mt-[20px]" />

        <div className="py-[0.5rem] ">
          <p>{price}</p>
        </div>
      </Copy>
    </div>
  );
};

ProductDescription.propTypes = {
  price: PropTypes.string.isRequired,
};

export default ProductDescription;
