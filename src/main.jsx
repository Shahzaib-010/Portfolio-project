import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from "react-router-dom";
import PageTransition from "./components/Animations/PageTransition";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Photography from "./pages/Photography";
import Lenis from 'lenis'
import './lenis.css'
import "./index.css";



//GSAP PageTransition to all routes
const TransitionLayout = () => {
  const location = useLocation();

  useEffect(() => {
          
      const lenis = new Lenis();

      // requestAnimationFrame to continuously update the scroll
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
   }, []);

  return (
    <PageTransition location={location}>
      <Outlet />
    </PageTransition>
  );
};


const router = createBrowserRouter([
  {
    element: <TransitionLayout />, // Wrap all routes in transition
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Work", element: <Work /> },
      { path: "/Photography", element: <Photography /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
     <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);