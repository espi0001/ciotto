"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Logo from '../01-atoms/Logo';
import NavLinks from "../02-molecules/NavLinks";
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
  return (
    <header className="flex justify-between items-center py-4 pt-8 px-10 relative z-50 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:z-30">
      <div className="flex justify-between items-center w-full">
        {/* <Logo /> */}
        <div className="flex items-center gap-16 group relative z-30 mix-blend-multiply">
          <Link href="/" className="text-2xl font-bold relative z-30">
            CIOTTO
          </Link>
          <div className="relative overflow-hidden h-[48px] w-[180px] ml-2 z-30" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <motion.div className="flex w-[360px] h-full" animate={{ x: hovered ? -180 : 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
              <span className="text-sm select-none font-normal w-[180px] h-full flex items-center">EST - 2025</span>
              <span className="w-[180px] text-xs font-normal h-full flex flex-col justify-center whitespace-nowrap">
                <span>Godthåbsvej 18A,</span>
                <span>2000 Frederiksberg</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <NavLinks />
    </header>
  );
}
