function TitleSection({ title, description }) {
  return (
    <div className="spacing-section-small md:spacing-section">
      <h1 className="h1-large">{title}</h1>
      <p className="p-large">{description}</p>
    </div>
  );
}

export default TitleSection;
