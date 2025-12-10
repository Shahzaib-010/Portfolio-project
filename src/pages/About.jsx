import React from "react";
import ScrollReveal from "../components/Animations/ScrollReveal"
import AnimatedButton from "../components/Animations/AnimatedButton";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";


function About() {
  return (
    <section className="w-full bg-white flex flex-col justify-center items-center">
      <Navbar/>
      <div className="w-full  bg-white flex justify-around items-center  h-full pt-[15vw]">
          <div className="w-[30%]">
         <img
            src="./images/pfp.jpeg" 
            alt="pfp" 
            className='md:w-[21vw] md:h-[] rounded-2xl'
            />
      </div>
      <div className=" w-[60%] space-y-6">
        <div className="lg:text-xl font-bold text-[var(--color-orange)] font-wix2">
          <p>Who am i ?</p>
        </div>

        <div className="font-switzer font-semibold md:text-3xl xl:text-4xl">
          <ScrollReveal
            text="A passionate UI/UX designer committed to blending creativity with user-focused design, crafting seamless digital experiences that captivate and engage. Skilled in translating concepts into visually striking and intuitive interfaces that leave a lasting impact."
            bgColor="#000000"
            fgColor="#cccccc"
          />
        </div>

        <AnimatedButton/>
      </div>
      </div>
      <Footer/>

      {/* Work Section*/}



    </section>
  );
}

export default About;
