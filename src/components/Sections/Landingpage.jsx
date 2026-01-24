// import { motion, useScroll, useTransform } from "motion/react";
// import Magnet from "../Ui.jsx/Magnet";


// export default function Landingpage() {
//   const { scrollYProgress } = useScroll();

//   // Parallax layers (tweak values freely)
//   const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
//   const leftLabelY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
//   const rightLabelY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
 
//   return (
//     <section className="w-full h-screen flex flex-col items-center justify-around relative overflow-hidden">

//       {/* MAIN WRAPPER */}
//       <div className="relative w-full flex justify-center pt-[12rem]">

//         {/* LEFT TOP LABEL */}
//         <motion.p
//           style={{ y: leftLabelY }}
//           animate={{ y: [0, -6, 0] }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-[35%] left-[17%] text-blue-500 text-xl tracking-wide font-clash-regular will-change-transform"
//         >
//           Creative Designer
//         </motion.p>

//         {/* MAIN HEADING */}
//         <motion.div style={{ y: headingY }} className="will-change-transform">
//           <Magnet padding={50} disabled={false} magnetStrength={15}>
//             <h1
//               className="text-[12vw] leading-none font-clash-medium font-bold 
//               bg-gradient-to-r from-red-600 to-orange-500
//               text-transparent bg-clip-text tracking-wide"
//             >
//               SHAHZAIB
//             </h1>
//           </Magnet>
//         </motion.div>

//         {/* RIGHT BOTTOM LABEL */}
//         <motion.p
//           style={{ y: rightLabelY }}
//           animate={{ y: [0, 8, 0] }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-10 right-[10%] text-blue-500 text-xl tracking-wide font-clash-regular will-change-transform"
//         >
//           Frontend Web Developer
//         </motion.p>

//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="w-full flex justify-between items-end-safe ">

//         <div className="text-white px-5">
//           <h1>90930909</h1>
//         </div>

//         {/* SCROLL INDICATOR */}
//         <div className="rotate-90 flex items-center gap-1">
//           <h1 className="text-white tracking-widest font-clash-regular">
//             Scroll
//           </h1>
//           <img src="/images/arrows.png" alt="" className="w-12" />
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion, useScroll, useTransform } from "motion/react";
import Magnet from "../Ui.jsx/Magnet";
import { TiArrowSortedDown } from "react-icons/ti";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Landingpage() {
  const { scrollYProgress } = useScroll();

  // Parallax layers (UNCHANGED)
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-around relative overflow-hidden">

      {/* MAIN WRAPPER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full flex justify-center pt-[12rem]"
      >

        {/* LEFT TOP LABEL */}
        <motion.div
          
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[35%] left-[17%] text-yellow-300 text-xl tracking-wide font-clash-regular will-change-transform"
        >
          
          <p className="relative">Creative Designer</p>
         <img src="/images/arrow1.0.png" alt="" className="absolute -top-2 -right-15 w-20 h-20 "/>
        </motion.div>
        

        {/* MAIN HEADING */}
        <motion.div style={{ y: headingY }} className="will-change-transform">
          
          <Magnet padding={50} disabled={false} magnetStrength={15}>
            <h1
              className="text-[12vw] leading-none font-clash-medium font-bold 
              bg-gradient-to-r from-red-600 to-orange-500
              text-transparent bg-clip-text tracking-wide"
            >
              SHAHZAIB
            </h1>
             
          </Magnet>
        </motion.div>

        {/* RIGHT BOTTOM LABEL */}
        <motion.div
          
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 right-[10%] text-blue-500 text-xl tracking-wide font-clash-regular will-change-transform"
        >
           <img src="/images/arrow3.1.png" alt="" className="absolute rotate-180 bottom-3 -left-13 w-20 h-20 "/>
          <p className="relative text-yellow-300">Frontend Web Developer </p>
        </motion.div>

      </motion.div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full flex justify-between items-end-safe"
      >
        <div className=" px-5 space-y-5 pt-4">
          <img src="/images/github.png" className="w-6 h-6" alt="" />
          <img src="/images/linkedin.png" className="w-6 h-6" alt="" />
          <img src="/images/resume2.png" className="w-6 h-6" alt="" />
          
        </div>

        <div className="rotate-90 flex items-center gap-1">
          <h1 className="text-white tracking-widest font-clash-regular">
            Scroll
          </h1>
          <img src="/images/arrows.png" alt="" className="w-12" />
        </div>
      </motion.div>
      

    </section>
  );
}
