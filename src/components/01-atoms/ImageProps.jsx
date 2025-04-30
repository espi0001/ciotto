import PropTypes from "prop-types";

const ImageProps = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-auto object-cover" />;
};

ImageProps.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageProps;
