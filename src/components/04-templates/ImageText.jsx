import Image from "next/image";
import Copy from "../../components/gsap-anim/TextAnimation";

export default function ImageText({ imageSrc, altText, h2, children, reverse = false }) {
  return (
    <article className={`px-section max-w-screen-2xl mx-auto section-spacing grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <Image src={imageSrc} alt={altText} width={1080} height={1350} className="max-h-[700px] w-full h-full object-cover" />
      </div>
      <div>
        <Copy>
          <h2 className="mb-4">{h2}</h2>
          {children}
        </Copy>
      </div>
    </article>
  );
}
