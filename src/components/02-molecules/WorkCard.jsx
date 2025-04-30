import Link from "next/link";
import PropTypes from "prop-types";

const WorkCard = ({ image, title, number, link }) => {
  return (
    <Link href={link || "/"}>
      <div className="flex flex-col space-y-2">
        <div className="w-full aspect-square">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex text-sm space-x-4 pt-2">
          <span className="font-light">{String(number).padStart(3, "0")}</span>
          <span className="uppercase tracking-wide">{title}</span>
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
};

export default WorkCard;
