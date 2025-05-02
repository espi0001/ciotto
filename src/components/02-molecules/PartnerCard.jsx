const PartnerCard = ({ image, alt, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="mb-2 w-full h-[350px] object-cover" src={image} alt={alt || title} />
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-center">{description}</p>
    </div>
  );
};

export default PartnerCard;
