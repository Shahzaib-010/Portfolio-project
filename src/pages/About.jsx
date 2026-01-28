import React from "react";
import ScrollReveal from "../components/Animations/ScrollReveal";
import AnimatedButton from "../components/Animations/AnimatedButton";
import SkillsSection from "../components/Sections/skills/SkillsSection";


function About() {
  return (
    <section className="min-h-[200vh] w-full text-white flex flex-col justify-around  items-center pt-[4rem]">
      
      {/* info */}
      
      <div className="w-full flex flex-col items-center h-full ">
        <div className="lg:text-3xl font-bold text-gradient font-clash-regular pb-[4rem]  tracking-wider">
            <p>ABOUT ME </p>
      </div>
        

         

        {/* Text Content */}
        <div className="w-[60%] flex items-center ">
          
         

          <div className="font-clash-regular text-center md:text-3xl xl:text-3xl leading-none tracking-wider">
            <ScrollReveal
              text="I create unconventional yet functional interfaces for web that value precision over noise. From layout structure to micro-interactions, my focus is on building interfaces that feel effortless to use and refined to look at . Strong frontend foundations paired with an eye for design allow me to deliver experiences that are both practical and visually composed.
"
              fgColor="#3a3a3a"   // dark gray starting color
              bgColor="#ffffff"   // white reveal color
            />
          </div>
          

          
          {/* <button className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-xl font-switzer">Let's Connect</button> */}

        </div>
      </div>

      {/* Tech stack */}

      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-3xl font-bold text-[var(--color-orange)] font-clash-regular pb-[2rem] tracking-wider">TECH STACK</h1>
        <SkillsSection />
        
      </div>
      



      
    </section>
  );
}

export default About;
