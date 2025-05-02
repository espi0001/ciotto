import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const worksLinks = [
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

export default function NavLinks() {
  const [worksOpen, setWorksOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <ul className="text-sm flex space-x-8 uppercase relative whitespace-nowrap z-50">
        <li
          className="relative"
          onMouseEnter={() => setWorksOpen(true)}
          onMouseLeave={() => {
            setWorksOpen(false);
            setHoveredIndex(null);
          }}
        >
          <button className="relative flex items-center cursor-pointer uppercase z-30 group">
            <span className="relative">
              <a href="/works">Works</a>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
            <div className="relative w-4 h-4 flex items-center justify-center ml-1">
              <span className={`absolute w-3 h-0.5 bg-primary-text transition-all duration-300 ${worksOpen ? "-translate-y-0.5" : "rotate-0"}`} />
              <span className={`absolute w-3 h-0.5 bg-primary-text transition-all duration-300 ${worksOpen ? "translate-y-0.5" : "-rotate-90"}`} />
            </div>
          </button>
        </li>
        {/* Other links */}
        <li className="relative z-30 nav-links">
          <a href="/products" className="relative group">
            <span className="relative">
              Products
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>
        </li>
        <li className="relative z-3 nav-links">
          <a href="/about" className="relative group">
            <span className="relative">
              About
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>
        </li>
        <li className="relative z-30 nav-links">
          <a href="/contact" className="relative group">
            <span className="relative">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>
        </li>
        <li className="relative z-30 nav-links">
          <a href="/ciotto-bar" className="relative group text-tertiary-text">
            <span className="relative">
              Ciotto Bar
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-tertiary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>
        </li>
      </ul>

      <AnimatePresence>
        {worksOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "80vh" }}
            exit={{ opacity: 0, height: 0 }}
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
            }}
            className="flex overflow-hidden"
            onMouseEnter={() => setWorksOpen(true)}
            onMouseLeave={() => {
              setWorksOpen(false);
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
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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
