import About from "./About";
import Landingpage from "../components/Sections/Landingpage";
import Work from "./Work";
import Approach from "../components/Sections/Approach";
import FAQSection from "../components/Sections/faq/FAQSection";
import TechSection from "../components/Sections/TechSection";
import { motion } from "motion/react";



export default function Home() {
  return (
    <section className="min-h-screen w-full  overflow-hidden relative">
       
     <img src="./images/Ellipse 10.svg" 
          alt=""
          className="absolute hidden lg:block  md:bottom-[88%] md:right-[50%] opacity-40" 
           />

     
 
        <div className=" relative  flex flex-col justify-center items-center">
            <img src="./images/Ellipse 9.svg" 
             alt=""
             className="absolute hidden lg:block top-[6%] left-[15%]  md:top-[2%] md:left-[60%] opacity-40" 
           />

          



          {/* Top Section */}
          <div className="w-full flex flex-col items-center ">
            <Landingpage />
          </div>

          
          {/* About Section */}
          <div className="w-full ">
            <About />
          </div>

          <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70rem", opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
            

          <div className="w-full">
            <TechSection />
          </div>

           <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70rem", opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />

         

           

          {/* work Section */}
          <div className=" w-full">
            <Work />
          </div>

          
           <div className=" ">
            <Approach/>
          </div>


          {/* Example Placeholder Section */}
          
          
        </div>
      
    </section>
  );
}
