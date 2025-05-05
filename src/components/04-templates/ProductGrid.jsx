import ProductCard from "../02-molecules/ProductCard";
import PropTypes from "prop-types";

const ProductGrid = ({ products, small = false }) => (
  <div className={small ? "grid grid-cols-2 md:grid-cols-4 gap-[48px]" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[48px]"}>
    {products.map((product) => (
      <ProductCard key={product.id} image={product.image} title={product.title} link={product.link} small={small} />
    ))}
  </div>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  small: PropTypes.bool,
};

export default ProductGrid;
