import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  text,
  fgColor = "#333333",   // initial text color (dark gray)
  bgColor = "#ffffff",    // reveal color (white)
  className = "",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split words + chars
    const split = new SplitType(textRef.current, { types: "words, chars" });

    // Prevent breaking words
    split.words.forEach((word) => {
      word.style.whiteSpace = "nowrap";
    });

    const anim = gsap.fromTo(
      split.chars,
      { color: fgColor },
      {
        color: bgColor,
        duration: 0.5,
        stagger: 0.02,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
      }
    );

    return () => {
      anim.kill();
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [text, fgColor, bgColor]);

  return (
    <p
      ref={textRef}
      className={`scroll-reveal-text leading-tight ${className}`}
    >
      {text}
    </p>
  );
};

export default ScrollReveal;
