import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Work from "../pages/Work";
import Photography from "../pages/Photography";
import Services from "../pages/Services";

// Layout
import PageLayout from "../Layout/PageLayout";

// Smooth Scroll
import Lenis from "lenis";
import { useEffect } from "react";

// Global smooth scroll + root wrapper
const RootWrapper = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <RootWrapper />,
    children: [
      {
        element: <PageLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/work", element: <Work /> },
          { path: "/photography", element: <Photography /> },
          { path: "/contact", element: <Contact /> },
          { path: "/services", element: <Services /> },
        ],
      },
    ],
  },
]);

export default router;
