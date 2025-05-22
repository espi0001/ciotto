import PropTypes from "prop-types";
import Copy from "../Animations/gsap-anim/TextAnimation";

const ProductDescription = ({ description, price }) => {
  return (
    // w-full lg:w-[207px]
    <div className="mt-[70px]">
      <Copy delay={1}>
        <div className="">
          <h2 className="mb-4 font-bold h3-product">Description:</h2>
          <p className="">{description}</p>
        </div>
        <p className="font-semibold mt-6">Only available to purchase by contacting Ciotto.</p>
      </Copy>
    </div>
  );
};

ProductDescription.propTypes = {
  price: PropTypes.string.isRequired,
};

export default ProductDescription;
