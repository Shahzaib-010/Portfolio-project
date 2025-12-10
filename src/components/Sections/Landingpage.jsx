
// import React from "react";

// import CollaborateButton from "../Ui.jsx/CollaborateButton"
// import { motion } from "motion/react";


// export default function Landingpage() {
//   return (
//     <section className="w-[90%] h-[100vh] flex flex-col items-center">

//         <div className="text-[#ffffff] font-wix2 text-4xl  md:text-8xl md:pt-[8vw]  flex flex-col justify-center items-center">

//           <h1 className="">Frontend Web</h1>
//           <div className="flex">
//             <motion.div
//               className="w-30 h-16 flex justify-center items-center mt-4 mr-2 rounded-xl"
//               initial={{ width: 0 }}
//               animate={{ width: "8vw" }}
//               transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
//             > <img
//               src="/images/heroimg.jpg"
//               alt="img"
//               className="w-30 h-16 rounded-xl object-center"
//             />
//             </motion.div>
//             <h1 className="">Developer</h1>
//           </div>

//         </div>

//         <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 md:px-0 py-6 font-wix">

//           <button className=" bg-[#ffffff] text-black font-wix2  text-2xl px-4 py-2 md:px-6 md:py-3 rounded-2xl hover:px-8 md:hover:px-10 transition-all duration-300 cursor-pointer">
//             Hire me
//           </button>
//           <CollaborateButton />
//         </div>

//       {/* <div className="flex item-start md:pt-10">
//         <button className="flex justify-center items-center text-4xl md:text-5xl text-white w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-800 hover:rotate-[45deg] transition-all duration-200">
//           <GoArrowDownRight />
//         </button>
//       </div> */}
//     </section>
//   );
// }





import MetaBalls from '../Ui.jsx/MetaBalls';

export default function Landingpage() {
  return (
    <section className="w-[100vw] h-screen   lg:p-4 relative lg:flex lg:justify-end">

      <div className="font-wix2 font-bold bottom-0 left-8 absolute w-full md:w-[50%]">
        <h1 className="text-black text-[14vw] leading-none">Shahzaib.</h1>
      </div>
      <div className="w-full h-[50vh] lg:h-screen lg:w-[40%] ">
          <MetaBalls
            color="#000000"
            cursorBallColor="#00FFFF"
            cursorBallSize={2}
            ballCount={15}
            animationSize={30}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={1}
            speed={0.3}
          />
      </div>
    
         
      

    </section>
  );
}

