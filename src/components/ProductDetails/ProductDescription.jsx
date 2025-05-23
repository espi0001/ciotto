import PropTypes from "prop-types";
import Copy from "../Animations/gsap-anim/TextAnimation";
import Button from "../UI/Button";
const ProductDescription = ({ description, price }) => {
  return (
    // w-full lg:w-[207px]
    <div className="md:mt-[70px]">
      <Copy startAtTenPercent="true" delay={1}>
        <div>
          <h2 className="mb-4 font-bold h3-product">Description:</h2>
          <p className="max-w-[64ch]">{description}</p>
        </div>
      </Copy>
      <div className="flex flex-col gap-6 mb-6">
        <p className="font-semibold mt-6">Only available to purchase by contacting Ciotto.</p>
        <p>{price}</p>
        <Button className="text-xl body-text" size="large" variant="primary" link="/contact">
          Contact to purchase
        </Button>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  price: PropTypes.string.isRequired,
};

export default ProductDescription;
