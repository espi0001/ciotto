import Image from "next/image";

export default function Gallery() {
  return (
    <article className="px-section section-spacing max-w-screen-2xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <Image
            src="/image/ciottobar/gallery(1).avif"
            alt="" // missing
            width={360}
            height={434}
            className="object-cover w-full max-h-[434px]"
          />

          <Image
            src="/image/ciottobar/gallery(2).avif"
            alt="" // missing
            width={360}
            height={360}
            className="object-cover w-full max-h-[354px]"
          />
        </div>
        <div className="grid gap-5">
          <Image
            src="/image/ciottobar/gallery(3).avif"
            alt="" // missing
            width={400}
            height={342}
            className="object-cover w-full max-h-[342px]"
          />

          <Image
            src="/image/ciottobar/gallery(4).avif"
            alt="" // missing
            width={400}
            height={454}
            className="object-cover w-full max-h-[454px]"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid gap-5 ">
          <Image
            src="/image/ciottobar/gallery(5-1).avif"
            alt="" // missing
            width={515}
            height={527}
            className="object-cover w-full max-h-[527px]"
          />

          <div className="grid grid-cols-2 gap-[30px]">
            <Image
              src="/image/ciottobar/gallery(6).avif"
              alt="" // missing
              width={245}
              height={269}
              className="w-full max-h-[269px] object-cover"
            />

            <Image
              src="/image/ciottobar/gallery(7).avif"
              alt="" // missing
              width={245}
              height={269}
              className="w-full max-h-[269px] object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
