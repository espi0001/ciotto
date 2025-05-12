import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import Button from "../01-atoms/Button";

const ProductCard = ({ image, title, link, small = false }) => {
  if (small) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="w-full aspect-[1/1] flex items-center justify-center overflow-hidden">
          <Image src={image} alt={title} width={1920} height={1080} className="w-full h-full object-cover aspect-[1/1] hover:scale-[1.10] transition overflow-hidden" />
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-2">
          <span className="text-xs text-black font-normal">{title}</span>
          <Link href={link || "/"} className="flex items-center gap-1 text-black text-xs font-medium group">
            BUTTON <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <Link href={link || "/"}>
      <div className="drop-shadow-primary w-full aspect-[3/4] flex flex-col items-center justify-center overflow-hidden">
        <Image src={image} alt={title} width={1920} height={1080} className="w-full h-full object-contain hover:scale-[1.10] transition overflow-hidden" />
        <h2 className="text-secondary-text absolute font-medium text-center text-wrap w-min">{title}</h2>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default ProductCard;
