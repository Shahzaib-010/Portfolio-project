

import { motion, useScroll, useTransform } from "motion/react";
import Magnet from "../components/Ui.jsx/Magnet";
import PhotoMasonry from '../components/Sections/Photography/PhotoMasonry'
import { useState } from "react";
import LightboxModal from "../components/Animations/LightboxModal";




const images = [
  { src: "/images/Photography/img10.webp", alt: "Light" },
  { src: "/images/Photography/img2.webp", alt: "Motion" },
  { src: "/images/Photography/img3.webp", alt: "Motion" },
  { src: "/images/Photography/img13.webp", alt: "Light" },
  { src: "/images/Photography/img5.webp", alt: "Light" },
  { src: "/images/Photography/img17.webp", alt: "Motion" },
  { src: "/images/Photography/img7.webp", alt: "Motion" },
  { src: "/images/Photography/img8.webp", alt: "Light" },
  { src: "/images/Photography/img9.webp", alt: "Light" },
  { src: "/images/Photography/img1.webp", alt: "Light" },
  { src: "/images/Photography/img11.webp", alt: "Light" },
  { src: "/images/Photography/img12.webp", alt: "Light" },
  { src: "/images/Photography/img4.webp", alt: "Light" },
  { src: "/images/Photography/img14.webp", alt: "Light" },
  { src: "/images/Photography/img15.webp", alt: "Light" },
  { src: "/images/Photography/img6.webp", alt: "Light" },
  





  

];

function Perspective() {

const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(null);


  // Parallax layers (UNCHANGED)
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className='w-full h-full p-4 bg-bg flex flex-col items-center  '>
      <div className="h-[100vh] flex flex-col justify-center items-cente w-full">
          <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full flex justify-center"
      >

        {/* LEFT TOP LABEL */}
        <motion.div
          
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-40%] left-[6%] text-yellow-300 text-xl tracking-wide font-clash-regular will-change-transform"
        >
          
          <p className="relative">Welcome to my creative side</p>
         <img src="/images/arrow1.0.png" alt="" className="absolute -top-2 -right-15 w-20 h-20 "/>
        </motion.div>
        
        

        {/* MAIN HEADING */}
        <motion.div style={{ y: headingY }} className="will-change-transform ">
          
          <Magnet padding={50} disabled={false} magnetStrength={15} className=" flex items-center justify-center" >
            <h1
              className="text-[9vw] leading-none font-clash-medium font-bold 
              tracking-wide
              text-gradient"
            >
              PERSPECTIVE
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
          className="absolute -bottom-20 right-[8%] text-blue-500 text-xl tracking-wide font-clash-regular will-change-transform"
        >
           <img src="/images/arrow3.1.png" alt="" className="absolute rotate-180 bottom-3 -left-13 w-20 h-20 "/>
          <p className="relative text-yellow-300">Content Creator</p>
        </motion.div>
       

      </motion.div>
      </div>
      <div className="w-[80%] flex flex-col items-center">
          <h1  className="text-white font-clash-medium text-[3rem] pb-[4vw]">World  From  My  Lens</h1>
           <PhotoMasonry  
           images={images}   
           onImageClick={(index) => setActiveIndex(index)} 
           />
      </div>
      <LightboxModal
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />        


    </section>
  )
}

export default Perspective



