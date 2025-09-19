import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function CollaborateButton() {
  const pulseRef = useRef(null);

  useEffect(() => {
    gsap.to(pulseRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      repeat: -1,
      ease: "power1.out",
      repeatDelay: 0,
      onRepeat: () => {
        gsap.set(pulseRef.current, { scale: 1, opacity: 0.5 });
      },
    });
  }, []);

  return (
    <button className="hidden md:flex bg-[#deffda] text-[#000000] text-lg md:text-2xl px-5 md:px-6 py-3 rounded-2xl  items-center gap-3 w-fit">
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* GSAP animated pulse ring */}
        <span
          ref={pulseRef}
          className="absolute w-full h-full rounded-full bg-green-500 opacity-50"
        />
        {/* Inner solid dot */}
        <span className="relative block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-600 z-10" />
      </div>

      <span className="whitespace-nowrap">Available for Collaboration</span>
    </button>
  );
}

export default CollaborateButton;
