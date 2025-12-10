import React, { useState, useEffect } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

// FlipLink Component (same animation as before)
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ to, children, onClick, className = "" }) => (
  <Link to={to} onClick={onClick} className={`relative overflow-hidden ${className}`}>
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden font-semibold uppercase text-[1rem] md:text-sm"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  // 🕒 live time in New York
  useEffect(() => {
    const updateTime = () => {
      const nyTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setTime(nyTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  return (
    <nav className="flex justify-center item-center pt-4">
      <nav className="fixed w-[90%] rounded-full  z-50 font-switzer  backdrop-blur-2xl bg-white/10 
  border-b border-white/10
   ">
      {/* Top Row */}
      <div className="flex items-center justify-between px-6 md:px-10 h-[4rem] md:h-[5rem]">
        
        {/* Left: Timezone */}
        <div className="  md:text-sm font-semibold text-black">
          
          <span className="text-2xl md:text-sm">
            Local – <span className="font-bold text-2xl md:text-sm">{time}</span>
          </span>
        </div>

        {/* Center: Navigation Links (desktop only) */}
        <div className="hidden lg:flex gap-7 text-black uppercase">
          <FlipLink to="/">Home</FlipLink>
          <FlipLink to="/about">About</FlipLink>
          <FlipLink to="/works">Works</FlipLink>
          <FlipLink to="/services">Services</FlipLink>
          <FlipLink to="/contact">Contact</FlipLink>
        </div>

        {/* Right: Email Button (desktop only) */}
        <div className="hidden lg:flex">
           <img
              src="./images/codesnippet.png"
              alt="pfp"
              className="w-8"
            />
        </div>

        {/* Menu Button (mobile only) */}
        <button onClick={toggleNavbar} className="lg:hidden text-black text-4xl">
          {isOpen ? <CgClose /> : <CgMenuRightAlt />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[var(--color-orange)] flex flex-col items-center justify-center gap-8 text-black z-40"
          >
            <FlipLink to="/" onClick={toggleNavbar}>Home</FlipLink>
            <FlipLink to="/about" onClick={toggleNavbar}>About</FlipLink>
            <FlipLink to="/works" onClick={toggleNavbar}>Works</FlipLink>
            <FlipLink to="/services" onClick={toggleNavbar}>Services</FlipLink>
            <FlipLink to="/awards" onClick={toggleNavbar}>Awards</FlipLink>
            <FlipLink to="/contact" onClick={toggleNavbar}>Contact</FlipLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </nav>
  );
}
