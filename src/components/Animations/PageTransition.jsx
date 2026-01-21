// src/components/Animations/PageTransition.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
};

export default PageTransition;
