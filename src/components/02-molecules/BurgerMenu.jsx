import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  open: {
    height: "100vh",
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const worksLinks = [
  { name: "Andra Eatery", href: "/works/andra-eatery" },
  { name: "Beit Samla", href: "/works/beit-samla" },
  { name: "oi japanese tea", href: "/works/oi-japanese-tea" },
  { name: "Oberra", href: "/works/oberra" },
  { name: "Sharp Gallery", href: "/works/sharp-gallery" },
  { name: "Ofia Seghau", href: "/works/ofia-seghau" },
  { name: "CC Museum", href: "/works/cc-museum" },
];

export default function BurgerMenu({ isOpen, onClose }) {
  const [isWorksOpen, setIsWorksOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed inset-0 bg-[#CAB696] z-40 overflow-y-auto">
          <div className="min-h-screen flex items-center">
            <div className="w-full px-6">
              <div className="flex flex-col items-center space-y-12">
                {/* Works Section */}
                <div className="w-full text-center">
                  <button className="burger-links uppercase font-semibold tracking-wide relative group inline-flex items-center justify-center" onClick={() => setIsWorksOpen(!isWorksOpen)}>
                    <span className="relative group-hover:opacity-50 transition-opacity duration-300">
                      Works
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                    <div className="relative w-8 h-8 flex items-center justify-center ml-3">
                      <span className={`absolute w-8 h-0.5 bg-primary-text transition-all duration-300 ${isWorksOpen ? "-translate-y-1" : "rotate-0"}`} />
                      <span className={`absolute w-8 h-0.5 bg-primary-text transition-all duration-300 ${isWorksOpen ? "translate-y-1" : "-rotate-90"}`} />
                    </div>
                  </button>
                  <AnimatePresence mode="wait" onExitComplete={() => null}>
                    {isWorksOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{
                          duration: 1,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="mt-8 overflow-hidden"
                      >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col items-center space-y-8">
                          <AnimatePresence>
                            {isWorksOpen &&
                              worksLinks.map((link, idx) => (
                                <motion.a
                                  key={link.name}
                                  href={link.href}
                                  initial={{ opacity: 0, filter: "blur(10px)" }}
                                  animate={{ opacity: 1, filter: "blur(0px)" }}
                                  exit={{ opacity: 0, filter: "blur(10px)" }}
                                  transition={{
                                    duration: 0.3,
                                    delay: idx * 0.05,
                                    ease: [0.23, 1, 0.32, 1],
                                  }}
                                  className="text-4xl uppercase tracking-wide relative group"
                                  onClick={onClose}
                                >
                                  <span className="relative group-hover:opacity-50 transition-opacity duration-300">
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                  </span>
                                </motion.a>
                              ))}
                          </AnimatePresence>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Links */}
                {["Products", "About", "Contact"].map((link, idx) => (
                  <motion.a
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.05,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="burger-links uppercase font-semibold tracking-wide relative group"
                    onClick={onClose}
                  >
                    <span className="relative group-hover:opacity-50 transition-opacity duration-300">
                      {link}
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="/ciotto-bar"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="burger-links uppercase font-semibold tracking-wide text-tertiary-text relative group"
                  onClick={onClose}
                >
                  <span className="burger-links relative group-hover:opacity-50 transition-opacity duration-300">
                    Ciotto Bar
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-tertiary-text origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
