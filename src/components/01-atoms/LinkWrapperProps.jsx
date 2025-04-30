import Link from "next/link";
import PropTypes from "prop-types";

const LinkWrapperProps = ({ href = "/", children }) => {
  return <Link href={href}>{children}</Link>;
};

LinkWrapperProps.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkWrapperProps;
