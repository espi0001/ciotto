import Link from "next/link";
import PropTypes from "prop-types";

const WorkCardBig = ({ image, title, number, link }) => {
  return (
    <Link href={link || "/"}>
      <div className="w-[540px] h-full">
        <div className="">
          <img
            src={image}
            alt={title} //
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex mt-2 justify-between items-center">
          <p className="">{String(number).padStart(3, "0")}</p>
          <p className="uppercase">{title}</p>
        </div>
      </div>
    </Link>
  );
};

WorkCardBig.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default WorkCardBig;
