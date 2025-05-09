import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AppLink from "../01-atoms/AnimatedLink";
import { mainLinks } from "../../data/navLinks";
import WorksDropdown from "./WorksDropdown";
import Logo from "../01-atoms/Logo";

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

const blurVariant = {
  focused: { opacity: 1, filter: "blur(0px)" },
  blurred: { opacity: 0.4, filter: "blur(2px)" },
  initial: { opacity: 1, filter: "blur(0px)" },
};

export default function BurgerMenu({ isOpen, onClose }) {
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mainHoveredIndex, setMainHoveredIndex] = useState(null);
  const [footerHovered, setFooterHovered] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed inset-0 bg-[#CAB696] z-40 overflow-y-auto">
          <div className="min-h-screen pt-36">
            <div className="w-full px-6 flex gap-8 px-section">
              {/* Left column: nav links */}
              <div className="flex flex-col flex-1 space-y-12">
                {/* Nav Links */}
                <div className="flex flex-col space-y-10">
                  {/* Works Section */}
                  <div className="w-full">
                    <button className="burger-links uppercase font-semibold tracking-wide relative group inline-flex items-center" onClick={() => setIsWorksOpen(!isWorksOpen)} type="button">
                      <AppLink href="/works" onClick={(e) => e.preventDefault()} underline={false} highlighted={isWorksOpen}>
                        Works
                      </AppLink>
                      <div className="relative w-8 h-8 flex items-center ml-3">
                        <span className={`absolute w-6 h-0.5 bg-primary-text transition-all duration-300 ${isWorksOpen ? "-translate-y-1" : "rotate-0"}`} />
                        <span className={`absolute w-6 h-0.5 bg-primary-text transition-all duration-300 ${isWorksOpen ? "translate-y-1" : "-rotate-90"}`} />
                      </div>
                    </button>
                  </div>
                  <WorksDropdown open={isWorksOpen} setOpen={setIsWorksOpen} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} onClose={onClose} context="burger" />
                  {/* Other Links */}
                  {mainLinks.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      variants={blurVariant}
                      initial="initial"
                      animate={mainHoveredIndex === null ? "initial" : mainHoveredIndex === idx ? "focused" : "blurred"}
                      onMouseEnter={() => setMainHoveredIndex(idx)}
                      onMouseLeave={() => setMainHoveredIndex(null)}
                      transition={{
                        duration: 1,
                        delay: idx * 0.05,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      <AppLink href={link.href} onClick={onClose} underline={true} highlighted={link.highlighted} className={link.highlighted ? "text-tertiary-text" : undefined}>
                        {link.label}
                      </AppLink>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Right column: Big image only */}
              <div className="flex flex-col flex-1 items-end justify-center">
                <div className="w-full flex justify-end">
                  <Image width={400} height={600} src="/image/andra.avif" alt="Placeholder" className="object-cover w-[350px] h-[350px]" />
                </div>
              </div>
            </div>
            {/* Footer: SoMe and Contact Info */}
            <footer className="w-full mt-12 flex flex-col space-y-4 py-8 border-t border-primary-text/20 px-section">
              {/* Logo */}
              <Logo color="primary-text" className="logo-size font-bold mb-8" />
              <div className="flex justify-between max-w-[400px]">
                {/* Contact Info */}
                <div className="flex flex-col space-y-2 text-base">
                  <AppLink href="tel:+4593981186" aria-label="Call us at +45 93 98 11 86">
                    <span className="relative">Ari Tel: +45 93 98 11 86</span>
                  </AppLink>
                  <AppLink href="mailto:desk@ariprasetya.com" aria-label="Send email to desk@ariprasetya.com">
                    <span className="relative">Mail: desk@ariprasetya.com</span>
                  </AppLink>
                  <AppLink href="mailto:hello@ciottofrb.com" aria-label="Send email to hello@ciottofrb.com">
                    <span className="relative">Mail: hello@ciottofrb.com</span>
                  </AppLink>
                </div>
                <div>
                  {/* Instagram */}
                  <AppLink href="https://www.instagram.com/ciotto.frb/" target="_blank" rel="noopener noreferrer" className="flex gap-2" aria-label="Follow us on Instagram">
                    <Image width={24} height={24} src="/image/insta-svg.svg" alt="Instagram" className="w-6 h-6 transition-all duration-300" aria-hidden="true" />
                    ciotto.frb
                  </AppLink>
                  {/* Address */}
                  <AppLink href="https://maps.google.com/?q=Godthåbsvej+18+A,+2000+Frederiksberg,+Denmark" target="_blank" rel="noopener noreferrer" className="block mt-2" aria-label="Open our location in Google Maps">
                    <span>
                      Godthåbsvej 18A,
                      <br />
                      2000 Frederiksberg
                    </span>
                  </AppLink>
                </div>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
