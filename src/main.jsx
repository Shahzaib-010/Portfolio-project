// // src/main.jsx
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
// } from "react-router-dom";

// import { ThemeProvider } from "./context/ThemeContext";

// // Pages
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Work from "./pages/Work";
// import Photography from "./pages/Photography";
// import Services from "./pages/Services";

// import { TransitionProvider, useTransition } from "./context/TransitionContext";

// // Layout
// import PageLayout from "./Layout/PageLayout";

// // Smooth Scroll
// import Lenis from "lenis";

// // Styles
// import "./lenis.css";
// import "./index.css";


// // Global smooth scroll + root wrapper
// const RootWrapper = () => {
//   useEffect(() => {
//     const lenis = new Lenis();

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   // This wraps the whole website (Layout + inner outlet)
//   return <Outlet />;
// };


// // Router setup
// const router = createBrowserRouter([
//   {
//     element: <RootWrapper />,      // Lenis + global wrapper
//     children: [
//       {
//         element: <PageLayout />,   // Navbar + Footer + PageTransition + pages
//         children: [
//           { path: "/", element: <Home /> },
//           { path: "/about", element: <About /> },
//           { path: "/work", element: <Work /> },
//           { path: "/photography", element: <Photography /> },
//           { path: "/contact", element: <Contact /> },
//           { path: "/services", element: <Services /> },
//         ],
//       },
//     ],
//   },
// ]);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { TransitionProvider } from "./context/TransitionContext";
import router from "./routes/Approutes";


// Styles
import "./lenis.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ThemeProvider>
      <TransitionProvider>
        <RouterProvider router={router} />
      </TransitionProvider>
    </ThemeProvider>
  
);
