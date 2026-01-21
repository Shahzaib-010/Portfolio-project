// src/Layout/PageLayout.jsx
import React from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import PageTransition from "../components/Animations/PageTransition";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="bg-black">

    

      {/* Static — not animated */}
      <Navbar />

      {/* Animated — ONLY page content transitions */}
      <PageTransition>
        <Outlet />
      </PageTransition>

      {/* Static — not animated */}
      <Footer />
    </div>
  );
};

export default PageLayout;
