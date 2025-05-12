import Link from "next/link";
import PropTypes from "prop-types";

const WorkCard = ({ image, title, number, link, size = "small" }) => {
  return (
    <Link href={link || "/"}>
      <div
        className={`
    ${size === "big" ? "w-[600px] h-[700px]" : "w-[480px] h-[540px]"}
    box-border
  `}
      >
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
        </div>
        <div className="flex mt-2 justify-between items-center">
          <p>{String(number).padStart(3, "0")}</p>
          <p className="uppercase">{title}</p>
        </div>
      </div>
    </Link>
  );
};

WorkCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "big"]),
};

export default WorkCard;
