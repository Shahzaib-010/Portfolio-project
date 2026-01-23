// import { motion } from "motion/react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useTransition } from "../../context/TransitionContext";

// export default function PageTransition({ children }) {
//   const location = useLocation();
//   const {
//     displayLocation,
//     setDisplayLocation,
//     isTransitioning,
//     setIsTransitioning,
//   } = useTransition();

//   // Freeze current route until overlay covers screen
//   useEffect(() => {
//     if (!displayLocation) {
//       setDisplayLocation(location);
//     }

//     if (location.pathname !== displayLocation?.pathname) {
//       setIsTransitioning(true);
//     }
//   }, [location]);

//   return (
//     <>
//       {/* 🔶 OVERLAY */}
//       <motion.div
//         className="fixed inset-0 bg-orange-600 z-[9999]"
//         initial={{ scaleY: 0 }}
//         animate={{
//           scaleY: isTransitioning ? 1 : 0,
//           transformOrigin: isTransitioning ? "bottom" : "top",
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.65, 0, 0.35, 1],
//         }}
//         onAnimationComplete={() => {
//           if (isTransitioning) {
//             // ⬅ switch route ONLY when fully covered
//             setDisplayLocation(location);
//             setIsTransitioning(false);
//           }
//         }}
//       />

//       {/* 🔹 PAGE CONTENT (never blank) */}
//       {children}
//     </>
//   );
// }



import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../context/TransitionContext";

export default function PageTransition({ children }) {
  const location = useLocation();
  const {
    displayLocation,
    setDisplayLocation,
    isTransitioning,
    setIsTransitioning,
  } = useTransition();

  useEffect(() => {
    if (!displayLocation) {
      setDisplayLocation(location);
    }

    if (location.pathname !== displayLocation?.pathname) {
      setIsTransitioning(true);
    }
  }, [location]);

  return (
    <>
      {/* 🔶 ORANGE OVERLAY */}
      <motion.div
        className="fixed inset-0 bg-orange-600 z-[9999]"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: isTransitioning ? 1 : 0,
          transformOrigin: isTransitioning ? "bottom" : "top",
        }}
        transition={{
          duration: 0.9,
          ease: [0.35, 0, 0.35, 1],
        }}
        onAnimationComplete={() => {
          if (isTransitioning) {
            setDisplayLocation(location);
            setIsTransitioning(false);
          }
        }}
      />

      {/* 🔹 PAGE CONTENT (fade only when transitioning) */}
      <motion.div
        animate={{
          opacity: isTransitioning ? 0.35 : 1,
          filter: isTransitioning ? "blur(200px)" : "blur(0px)",
        }}
        transition={{
          duration: 0,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
