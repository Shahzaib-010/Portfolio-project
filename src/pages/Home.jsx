import React from "react";
import Navbar from "../components/Sections/Navbar";
import { motion } from "motion/react";
import LiquidEther from "../components/Ui.jsx/LiquidEther";
import MetaBalls from "../components/Ui.jsx/MetaBalls";
import About from "./About";
import Landingpage from "../components/Sections/Landingpage";
import Footer from "../components/Sections/Footer";
import Work from "./Work";

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-black overflow-hidden relative">
      
      {/* === INTERACTIVE LIQUID ETHER BACKGROUND === */}
      <div className="absolute inset-0 z-100  pointer-events-none">
        {/* <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={70}
          isViscous={true}
          viscous={20}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5} 
          autoIntensity={3}
          takeoverDuration={0.25}
          autoResumeDelay={0}
          autoRampDuration={0.6}
        /> */}

       
      </div> 

      {/* === CONTENT LAYER === */}
      {/* ✅ Remove pointer-events-none here */}
      <motion.div className="relative z-10">
        <div className="flex flex-col justify-center items-center">
          
          {/* Top Section */}
          <div className="w-full h-[100vh] flex flex-col items-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_-8%,rgba(255,109,16,1)_100%)]">
            <Navbar/>
            <Landingpage />
          </div>
          
          {/* About Section */}
          <div className="h-[100vh] w-full">
            <About />
          </div>

          {/* About Section */}
          <div className="h-[100vh] w-full">
            <Work />
          </div>

          {/* Example Placeholder Section */}
          
          <Footer/>
        </div>
      </motion.div>
    </section>
  );
}
