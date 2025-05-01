import Link from "next/link";
import PropTypes from "prop-types";

const WorkCard = ({ image, title, number, link }) => {
  return (
    <Link href={link || "/"}>
      <div className="w-[400px] h-full">
        <div className="">
          <img
            src={image}
            alt={title} //
            // width={600}
            // height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-2 justify-between items-center">
          <p className="">{String(number).padStart(3, "0")}</p>
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
};

export default WorkCard;
