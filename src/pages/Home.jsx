import React from "react";
import Navbar from "../components/Sections/Navbar";
import { motion } from "motion/react"; 
import About from "./About";
import Landingpage from "../components/Sections/Landingpage";
import Footer from "../components/Sections/Footer";
import Work from "./Work";
import Approach from "../components/Sections/Approach";
import PerspectiveGrid from '../components/Animations/PerspectiveGrid'


export default function Home() {
  return (
    <section className="min-h-screen w-full bg-black overflow-hidden relative">
      
     
  <PerspectiveGrid />
        <div className="flex flex-col justify-center items-center">
          
          {/* Top Section */}
          <div className="w-full h-[100vh] flex flex-col items-center ">
            
            <Landingpage />
          </div>
          
          {/* About Section */}
          <div className=" ">
            <About />
          </div>


          <div className=" ">
            <Approach/>
          </div>

          {/* About Section */}
          <div className=" w-full">
            <Work />
          </div>

          {/* Example Placeholder Section */}
          
          
        </div>
      
    </section>
  );
}
