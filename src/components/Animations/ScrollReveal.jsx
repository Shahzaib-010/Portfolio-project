// ScrollReveal.jsx
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ text, bgColor = "#ccc", fgColor = "black", className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split into words + chars so we can preserve whole words
    const split = new SplitType(textRef.current, { types: "words, chars" });

    // FIX: prevent breaking of words
    split.words.forEach((word) => {
      word.style.whiteSpace = "nowrap";
    });

    // GSAP animation (same as before)
    const anim = gsap.fromTo(
      split.chars,
      { color: fgColor },
      {
        color: bgColor,
        duration: 0.5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",
          end: "top 20%",
          scrub: true,
          markers: false,
          toggleActions: "play play reverse reverse",
        },
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      split.revert();
    };
  }, [text, bgColor, fgColor]);

  return (
    <p
      ref={textRef}
      className={`scroll-reveal-text leading-tight ${className}`}
      data-bg-color={bgColor}
      data-fg-color={fgColor}
    >
      {text}
    </p>
  );
};

export default ScrollReveal;
