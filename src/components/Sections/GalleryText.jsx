import Image from "next/image";
import Copy from "../Animations/gsap-anim/TextAnimation";

export default function GalleryText({ imageSrc1, imageSrc2, imageSrc3, imageSrc4, altText1, altText2, altText3, altText4, h2, children, reverse = false }) {
  return (
    <article className={`px-section max-w-screen-2xl mx-auto section-spacing grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="grid grid-cols-2">
        <Image src={imageSrc1} alt={altText1} width={1080} height={1350} className="md:max-h-[340px] object-cover" />
        <Image src={imageSrc2} alt={altText2} width={1080} height={1350} className="md:max-h-[340px] object-cover" />
        <Image src={imageSrc3} alt={altText3} width={1080} height={1350} className="md:max-h-[340px] object-cover" />
        <Image src={imageSrc4} alt={altText4} width={1080} height={1350} className="md:max-h-[340px] object-cover" />
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
