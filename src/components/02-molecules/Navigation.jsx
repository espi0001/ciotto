import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const worksLinks = [
  { name: "All Works", image: "/image/andra.avif", href: "/works" },
  { name: "Andra Eatery", image: "/image/andra.avif", href: "/works/andra-eatery" },
  { name: "Beit Samla", image: "/image/salma.avif", href: "/works/beit-samla" },
  { name: "oi japanese tea", image: "/image/iojapan.avif", href: "/works/oi-japanese-tea" },
  //   { name: "Oat Bakery", image: "/images/placeholder.jpg", href: "/works/oat-bakery" },
  { name: "Oberra", image: "/image/oberra.avif", href: "/works/oberra" },
  { name: "Sharp Gallery", image: "/image/sharp.avif", href: "/works/sharp-gallery" },
  { name: "Ofia Seghau", image: "/image/ofia.avif", href: "/works/ofia-seghau" },
  { name: "CC Museum", image: "/image/ccmuseum.avif", href: "/works/cc-museum" },
  //   { name: "Library & Press", image: "/images/placeholder.jpg", href: "/works/library-press" },
];

export default function Navigation({ navColor = "#402d1f", transition = "color 0.4s cubic-bezier(0.4,0,0.2,1)", setWorksOpen }) {
  const [worksOpen, setLocalWorksOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();
  const effectiveNavColor = worksOpen ? "#402d1f" : navColor;
  const handleWorksOpen = (open) => {
    setLocalWorksOpen(open);
    if (setWorksOpen) setWorksOpen(open);
  };
  return (
    <>
      <ul className="text-sm flex space-x-8 uppercase whitespace-nowrap z-50">
        <li
          className="relative"
          onMouseEnter={() => handleWorksOpen(true)}
          onMouseLeave={() => {
            handleWorksOpen(false);
            setHoveredIndex(null);
          }}
        >
          <button className="relative flex items-center cursor-pointer uppercase z-30 group">
            <span className="relative">
              <a href="/works" className={pathname.startsWith("/works") ? "text-tertiary-text" : ""} style={{ color: effectiveNavColor, transition }}>
                Works
              </a>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: effectiveNavColor }}></span>
            </span>
            <div className="relative w-4 h-4 flex items-center justify-center ml-1">
              <span className={`absolute w-3 h-0.5 transition-all duration-300 ${worksOpen ? "-translate-y-0.5" : "rotate-0"}`} style={{ backgroundColor: effectiveNavColor }} />
              <span className={`absolute w-3 h-0.5 transition-all duration-300 ${worksOpen ? "translate-y-0.5" : "-rotate-90"}`} style={{ backgroundColor: effectiveNavColor }} />
            </div>
          </button>
        </li>
        {/* Other links */}
        <NavLink href="/products" label="Products" navColor={effectiveNavColor} transition={transition} />
        <NavLink href="/about" label="About" navColor={effectiveNavColor} transition={transition} />
        <NavLink href="/contact" label="Contact" navColor={effectiveNavColor} transition={transition} />
        <NavLink href="/ciotto-bar" label="Ciotto Bar" navColor={effectiveNavColor} highlighted bold />
        <NavLink href="/" label="Cart (0)" navColor={effectiveNavColor} transition={transition} />
      </ul>

      <AnimatePresence>
        {worksOpen && (
          <motion.div
            initial={{ opacity: 1, height: 0 }}
            animate={{ opacity: 1, height: "80vh" }}
            exit={{ opacity: 1, height: 0 }}
            transition={{
              height: {
                duration: 1,
                ease: [0.23, 1, 0.32, 1],
              },
              opacity: {
                duration: 0.3,
              },
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              backgroundColor: "#CAB696",
              zIndex: 20,
              color: "#402d1f",
              transition,
            }}
            className="flex overflow-hidden"
            onMouseEnter={() => handleWorksOpen(true)}
            onMouseLeave={() => {
              handleWorksOpen(false);
              setHoveredIndex(null);
            }}
          >
            <div className="flex flex-row w-full items-center uppercase px-10">
              {/* Left: Links */}
              <div className="flex flex-col gap-4 w-1/2 pt-24">
                {worksLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`works-link text-4xl font-semibold tracking-wide relative group`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.05,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    style={{ color: "#402d1f", transition }}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-2 left-0 w-full h-[1px] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: "#402d1f" }}></span>
                    </span>
                  </motion.a>
                ))}
              </div>
              {/* Right: Image */}
              <div className="flex items-center justify-center w-1/2 pt-24">
                <AnimatePresence mode="wait">
                  {hoveredIndex === null && worksOpen ? (
                    <motion.img
                      key="default"
                      src="/image/andra.avif"
                      alt="Ciotto Works"
                      initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                      className="object-cover max-h-[50vh] max-w-full absolute"
                    />
                  ) : (
                    hoveredIndex !== null && (
                      <motion.img
                        key={hoveredIndex}
                        src={worksLinks[hoveredIndex].image}
                        alt={worksLinks[hoveredIndex].name}
                        initial={{
                          opacity: 0,
                          y: `${hoveredIndex * 30}px`,
                          scale: 1 + hoveredIndex * 0.03,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: `${hoveredIndex * 30}px`,
                          scale: 1 + hoveredIndex * 0.03,
                          filter: "blur(10px)",
                        }}
                        transition={{
                          duration: 0.2,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        className="object-cover max-h-[50vh] max-w-full absolute"
                      />
                    )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
