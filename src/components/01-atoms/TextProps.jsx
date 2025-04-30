import PropTypes from "prop-types";

const TextProps = ({ content }) => {
  return <p className="text-beige-100 text-4xl absolute font-medium text-center">{content}</p>;
};

TextProps.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TextProps;
