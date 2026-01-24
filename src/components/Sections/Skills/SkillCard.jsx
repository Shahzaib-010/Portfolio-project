import { motion } from "framer-motion";

export default function SkillCard({ icon, name, desc, bgClass }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        group relative rounded-xl
        bg-[#0c0c0c]
        border border-white/10
        px-2 py-2 w-[18rem]
        hover:border-white/20
        hover:bg-[#111]
        
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition duration-300
          bg-white/5 blur-xl
        "
      />

      <div className="relative h-auto flex  items-center gap-4 justify-start">
        {/* Icon Container */}
        <div
          className={`
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded
            
            ${bgClass}
          `}
          
        >
          <img
            src={icon}
            alt={name}
            className="h-6 w-6 object-contain"
          />
        </div>

        {/* Text */}
        <div className="space-y-0.5">
          <h3 className="text-white text-[15px] font-medium leading-none font-clash-medium tracking-wide pb-[2px]">
            {name}
          </h3>
          <p className="text-sm text-white/60 leading-none font-clash-regular tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
