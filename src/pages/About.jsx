import React from "react";
import ScrollReveal from "../components/Animations/ScrollReveal";
import AnimatedButton from "../components/Animations/AnimatedButton";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

function About() {
  return (
    <section className="w-full bg-black text-white flex flex-col">
      

      <div className="w-full flex justify-around items-center h-full pt-[15vw] pb-20">
        
        {/* Image */}
        <div className="w-[30%] flex justify-center">
          <img
            src="./images/pfp.jpeg"
            alt="pfp"
            className="md:w-[21vw] rounded-2xl shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-[60%] space-y-6">
          
          <div className="lg:text-xl font-bold text-[var(--color-orange)] font-wix2">
            <p>Who am I?</p>
          </div>

          <div className="font-clash-regular font-semibold md:text-3xl xl:text-3xl leading-none tracking-wide">
            <ScrollReveal
              text="A passionate UI/UX designer committed to blending creativity with user-focused design, crafting seamless digital experiences that captivate and engage. Skilled in translating concepts into visually striking and intuitive interfaces that leave a lasting impact."
              fgColor="#3a3a3a"   // dark gray starting color
              bgColor="#ffffff"   // white reveal color
            />
          </div>

          {/* <AnimatedButton /> */}
          <button className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-xl font-switzer">Let's Connect</button>

        </div>
      </div>

      
    </section>
  );
}

export default About;
