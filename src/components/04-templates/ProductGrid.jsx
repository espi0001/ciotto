import ProductCard from "../02-molecules/ProductCard";
import PropTypes from "prop-types";

// const ProductGrid = ({ products, small = false }) => (

//   <div
//     className={
//       small
//         ? "grid grid-cols-3 gap-x-[18px] md:grid md:grid-cols-4 md:gap-x-[48px] gap-y-[18px]" // Small Grid
//         : "grid grid-cols-2 lg:grid-cols-3 gap-y-[48px] gap-x-[18px]" // Large Grid
//     }
//   >
//     {products.map((product) => (
//       <ProductCard key={product.id} image={product.image} title={product.title} link={product.link} small={small} />
//     ))}
//   </div>
// );
const ProductGrid = ({ products, small = false }) => {
  if (small) {
    return (
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max">
          {products.map((product) => (
            <ProductCard key={product.id} image={product.image} title={product.title} link={product.link} small={small} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-[48px] gap-x-[18px]">
      {products.map((product) => (
        <ProductCard key={product.id} image={product.image} title={product.title} link={product.link} small={small} />
      ))}
    </div>
  );
};

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
