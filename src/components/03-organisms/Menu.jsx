"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "../02-molecules/Navigation";
import BurgerMenu from "../02-molecules/BurgerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../01-atoms/Logo";

const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export default function Menu() {
  const [hovered, setHovered] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [navLight, setNavLight] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth >= 1024;
      setIsDesktop(isDesktopView);
      if (isDesktopView) {
        setIsBurgerOpen(false);
      }
    };

    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleIntersect = (entries) => {
      setNavLight(entries.some((entry) => entry.isIntersecting));
    };

    const observer = new window.IntersectionObserver((entries) => handleIntersect(entries), {
      root: null,
      threshold: 0,
    });

    document.querySelectorAll(".nav-text-color-change").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const burgerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // Color for nav and plus icon
  const navColor = navLight ? "var(--color-secondary-text)" : "#402d1f";
  const transition = "color 0.4s cubic-bezier(0.4,0,0.2,1)";
  const effectiveNavColor = worksOpen ? "#402d1f" : navColor;

  return (
    <header ref={navRef} className="relative w-full flex justify-between items-center py-4 pt-8 px-section z-50 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:z-30" style={{ color: effectiveNavColor, transition }}>
      <div className="flex justify-between items-center w-full" style={{ color: effectiveNavColor, transition }}>
        {/* <Logo /> */}
        <motion.div className="flex items-center gap-16 group relative z-30" initial="hidden" animate="visible" variants={navVariants} style={{ color: effectiveNavColor, transition }}>
          <motion.div variants={logoVariants} style={{ color: effectiveNavColor, transition }}>
            <Logo color={effectiveNavColor} className="relative z-30 logo-size" />
          </motion.div>
          <a href="https://www.google.com/maps/search/?api=1&query=Godthåbsvej+18A,+2000+Frederiksberg" target="_blank" rel="noopener noreferrer" className="w-[180px] h-[48px] ml-2 z-30 cursor-pointer block" style={{ color: effectiveNavColor, transition, textDecoration: "none" }} tabIndex={0}>
            <motion.div className="relative overflow-hidden h-full w-full flex flex-col justify-center text-xs font-normal whitespace-nowrap" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} variants={logoVariants} style={{ color: effectiveNavColor, transition }}>
              <motion.div className="flex w-[360px] h-full" animate={{ x: hovered ? -180 : 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} style={{ color: effectiveNavColor, transition }}>
                <span className="text-sm select-none font-normal w-[180px] h-full flex items-center" style={{ color: effectiveNavColor, transition }}>
                  EST - 2025
                </span>
                <span className="w-[180px] text-xs font-normal h-full flex flex-col justify-center whitespace-nowrap" style={{ color: effectiveNavColor, transition }}>
                  <span>Godthåbsvej 18A,</span>
                  <span>2000 Frederiksberg</span>
                </span>
              </motion.div>
            </motion.div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <AnimatePresence mode="wait">
          {isDesktop && (
            <motion.div className="hidden lg:block" initial="hidden" animate="visible" exit="hidden" variants={navVariants} style={{ color: effectiveNavColor, transition }}>
              <NavLinks navColor={navColor} transition={transition} setWorksOpen={setWorksOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Burger Menu Button */}
        <AnimatePresence mode="wait">
          {!isDesktop && (
            <motion.button className="lg:hidden z-50 w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => setIsBurgerOpen(!isBurgerOpen)} initial="hidden" animate="visible" exit="hidden" variants={burgerVariants} style={{ color: effectiveNavColor, transition }} aria-label="Toggle menu">
              <div className="relative w-6 h-6">
                {/* Top bar */}
                <div
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-500 ease-in-out
                    ${isBurgerOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2 -translate-y-1/2"}
                  `}
                  style={{ backgroundColor: effectiveNavColor, transition }}
                />
                {/* Bottom bar */}
                <div
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-500 ease-in-out
                    ${isBurgerOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-2 -translate-y-1/2"}
                  `}
                  style={{ backgroundColor: effectiveNavColor, transition }}
                />
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
    </header>
  );
}
