import Link from "next/link";
import PropTypes from "prop-types";

const WorkCard = ({ image, title, number, link, size = "small" }) => {
  return (
    <Link href={link || "/"}>
      <div
        className={`
    w-[clamp(300px,90vw,400px)] max-w-full box-border
    ${size === "big" ? "md:w-[clamp(400px,50vw,540px)]" : "md:w-[clamp(300px,40vw,400px)]"}
  `}
      >
        <div>
          <img src={image} alt={title} className="drop-shadow-primary w-full h-full object-cover" />
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
