import ImageProps from "../01-atoms/ImageProps";
import TextProps from "../01-atoms/TextProps";
import LinkWrapperProps from "../01-atoms/LinkWrapperProps";
import PropTypes from "prop-types";

const ProductCard = ({ image, title, link }) => {
  return (
    <LinkWrapperProps href={link}>
      <div className="bg-gray-300 w-full h-auto flex flex-col items-center justify-center hover:opacity-90 transition">
        <ImageProps src={image} alt={title} />
        <TextProps content={title} />
      </div>
    </LinkWrapperProps>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;
