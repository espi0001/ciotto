import ProductCard from "../02-molecules/ProductCard";
import PropTypes from "prop-types";

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} image={product.image} title={product.title} link={product.link} />
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
};

export default ProductGrid;
