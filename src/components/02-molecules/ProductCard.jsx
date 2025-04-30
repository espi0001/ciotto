import Link from "next/link";
import PropTypes from "prop-types";

const ProductCard = ({ image, title, link }) => {
  return (
    <Link href={link || "/"}>
      <div className="bg-gray-300 w-full h-auto flex flex-col items-center justify-center hover:scale-[1.05] hover:opacity-90 transition">
        <img src={image} alt={title} className="w-full h-auto object-cover aspect-[1/1.5]" />
        <p className="text-beige-100 text-4xl absolute font-medium text-center">{title}</p>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;
