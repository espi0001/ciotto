import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppLink from "../01-atoms/AnimatedLink";
import { mainLinks } from "../../data/navLinks";
import WorksDropdown from "./WorksDropdown";
import Logo from "../01-atoms/Logo";

const blurVariant = {
  focused: { opacity: 1, filter: "blur(0px)" },
  blurred: { opacity: 0.4, filter: "blur(2px)" },
  initial: { opacity: 1, filter: "blur(0px)" },
};

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
              <AppLink href="/works" underline={false} highlighted={pathname.startsWith("/works")}>
                Works
              </AppLink>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: effectiveNavColor }}></span>
            </span>
            <div className="relative w-4 h-4 flex items-center justify-center ml-1">
              <span className={`absolute w-3 h-0.5 transition-all duration-300 ${worksOpen ? "-translate-y-0.5" : "rotate-0"}`} style={{ backgroundColor: effectiveNavColor }} />
              <span className={`absolute w-3 h-0.5 transition-all duration-300 ${worksOpen ? "translate-y-0.5" : "-rotate-90"}`} style={{ backgroundColor: effectiveNavColor }} />
            </div>
          </button>
        </li>
        {mainLinks.map((link) => (
          <AppLink key={link.href} href={link.href} highlighted={link.highlighted} bold={link.bold} navColor={effectiveNavColor} transition={transition} asListItem>
            {link.label}
          </AppLink>
        ))}
      </ul>
      <WorksDropdown open={worksOpen} setOpen={handleWorksOpen} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} context="desktop" />
    </>
  );
}
