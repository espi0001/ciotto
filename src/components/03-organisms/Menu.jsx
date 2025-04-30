"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Logo from '../01-atoms/Logo';
import NavLinks from "../02-molecules/NavLinks";
import BurgerMenu from "../02-molecules/BurgerMenu";
import Link from "next/link";

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

  return (
    <header className="flex justify-between items-center py-4 pt-8 px-10 relative z-50 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:z-30">
      <div className="flex justify-between items-center w-full">
        {/* <Logo /> */}
        <motion.div className="flex items-center gap-16 group relative z-30 mix-blend-multiply" initial="hidden" animate="visible" variants={navVariants}>
          <motion.div variants={logoVariants}>
            <Link href="/" className="text-2xl font-bold relative z-30">
              CIOTTO
            </Link>
          </motion.div>
          <motion.div className="relative overflow-hidden h-[48px] w-[180px] ml-2 z-30" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} variants={logoVariants}>
            <motion.div className="flex w-[360px] h-full" animate={{ x: hovered ? -180 : 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
              <span className="text-sm select-none font-normal w-[180px] h-full flex items-center">EST - 2025</span>
              <span className="w-[180px] text-xs font-normal h-full flex flex-col justify-center whitespace-nowrap">
                <span>Godthåbsvej 18A,</span>
                <span>2000 Frederiksberg</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <AnimatePresence mode="wait">
          {isDesktop && (
            <motion.div className="hidden lg:block" initial="hidden" animate="visible" exit="hidden" variants={navVariants}>
              <NavLinks />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Burger Menu Button */}
        <AnimatePresence mode="wait">
          {!isDesktop && (
            <motion.button className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center cursor-pointer" onClick={() => setIsBurgerOpen(!isBurgerOpen)} initial="hidden" animate="visible" exit="hidden" variants={burgerVariants}>
              <span className={`w-6 h-0.5 bg-brown-500 transition-all duration-300 ${isBurgerOpen ? "rotate-0 !translate-y-0" : "-translate-y-1"}`} />
              <span className={`w-6 h-0.5 bg-brown-500 transition-all duration-300 ${isBurgerOpen ? "-rotate-90 !translate-y-0 absolute" : "translate-y-1"}`} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
    </header>
  );
}
