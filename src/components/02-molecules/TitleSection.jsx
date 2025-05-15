import Copy from "../gsap-anim/TextAnimation";

function TitleSection({ title, description }) {
  return (
    <div className="spacing-section-small md:spacing-section">
      <Copy delay={1}>
        <h1 className="h1-large font-semibold mb-[18px]">{title}</h1>
      </Copy>
      <Copy delay={1}>
        <p className="p-large max-w-[600px]">{description}</p>
      </Copy>
    </div>
  );
}

export default TitleSection;
