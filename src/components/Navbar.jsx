// Navbar.jsx
import React, { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ to, children, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className="w-full text-center">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-4xl md:text-7xl font-black uppercase"
        style={{ lineHeight: 0.75 }}
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
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prev) => !prev);

  const containerClasses =
    "p-4 h-[4.5rem] md:h-[6rem] md:w-[90%] mx-auto flex justify-between items-center";

  return (
    <nav className="w-full relative z-50 font-wix2">
      {/* Top Bar */}
      <div className={containerClasses}>
        <h2 className="text-white text-xl md:text-3xl">
          Shahzaib<span className="text-amber-300 text-5xl">.</span>
        </h2>
        <button onClick={toggleNavbar} className="z-30">
          {isOpen ? (
            <CgClose className="text-white text-4xl" />
          ) : (
            <CgMenuRightAlt className="text-white text-3xl md:text-4xl" />
          )}
        </button>
      </div>

      {/* Overlay Menu with Glow Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 flex flex-col items-center justify-center gap-10 z-40 text-white"
          >
            {/* 🌊 Background Glow */}
            <div className="absolute inset-0 -z-10  bg-black ">
              <div
                className="absolute inset-0 z-0 
    bg-[radial-gradient(125%_125%_at_50%_10%,#000000_40%,#0d1a36_100%)]
  "
              />{" "}
            </div>

            {/* Top bar inside overlay */}
            <div className="absolute top-0 w-full">
              <div className={containerClasses}>
                <h2 className="text-white text-xl md:text-3xl">
                  Shahzaib<span className="text-amber-300 text-5xl">.</span>
                </h2>
                <button onClick={toggleNavbar}>
                  <CgClose className="text-white text-4xl" />
                </button>
              </div>
            </div>

            {/* FlipLinks */}
            <div className="w-full px-4">
              <div className="flex flex-col items-center gap-4">
                <FlipLink to="/" onClick={toggleNavbar}>
                  Home
                </FlipLink>
                <FlipLink to="/about" onClick={toggleNavbar}>
                  About
                </FlipLink>
                <FlipLink to="/photography" onClick={toggleNavbar}>
                  Photography
                </FlipLink>
                <FlipLink to="/projects" onClick={toggleNavbar}>
                  Projects
                </FlipLink>
                <FlipLink to="/contact" onClick={toggleNavbar}>
                  Contact
                </FlipLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
