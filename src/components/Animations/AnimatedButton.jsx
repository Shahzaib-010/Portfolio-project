import React, { useState } from "react";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6" // or your own icon

const AnimatedButton = ({ label = "Email me", onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        relative overflow-hidden 
        rounded-full 
        px-8 py-4 
        flex items-center gap-2
        bg-neutral-100 shadow
        
        text-black
        font-bold font-switzer
      "
      style={{ isolation: "isolate" }}
    >
      {/* BACKGROUND FILL */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: hovered ? 0 : "-100%" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute inset-0 bg-black z-[1]"
      />

      {/* TEXT + ICON (Above background) */}
      <span className="relative z-[2] flex items-center gap-2">
        <span className="transition-colors duration-300" 
              style={{ color: hovered ? "white" : "#555" }}>
          {label}
        </span>

        <motion.span
          className="flex"
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.35 }}
        >
            <FaArrowRightLong 
            size={20}
            color={hovered ? "#ff7a00" : "#ff7a00"} 
            strokeWidth={2.5}
             className="pt-[1px]"
            />
          
            
         
        </motion.span>
      </span>
    </button>
  );
};

export default AnimatedButton;
