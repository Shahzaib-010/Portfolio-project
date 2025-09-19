import React from "react";
import Navbar from "../components/Navbar";
import Landingpage from "../components/landingpage";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="min-h-screen w-full relative">
      {/* Dark Horizon Glow - stays fixed */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(125%_125%_at_50%_90%,#000000_40%,#0d1a36_100%)]" />

      {/* Page content - scrollable */}
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <Landingpage />

        {/* about section */}
        <motion.div 
        className="w-full h-[100vh] border-t-2 border-amber-200">


        </motion.div>
      </div>
    </section>
  );
}
