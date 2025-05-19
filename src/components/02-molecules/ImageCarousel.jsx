import Image from "next/image";

export default function ImageCarousel({ images = [] }) {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-[70px]">
      {images.map((img, index) => (
        <div key={index} className="min-w-[80%] snap-center md:min-w-0">
          <Image src={img.src} alt={img.alt} width={1000} height={1000} quality={100} className="object-cover max-h-[400px] w-full" />
        </div>
      ))}
    </div>
  );
}
