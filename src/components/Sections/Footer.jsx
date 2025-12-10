import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full flex justify-center item-center p-4">
      <div className="w-[98%] rounded-2xl bg-black   p-8">
        <div className="flex flex-col">
          {/* upper footer sec */}
          <div className="flex justify-between">
            <img
              src="./images/pfp.jpeg"
              alt="pfp"
              className="md:w-[18vw] rounded-2xl"
            />

            <button className="px-[6vw] h-[10vw] bg-[#161616] rounded-full  font-bold font-wix2 text-white text-5xl">
              letsmail.shahzaib@gmail.com
            </button>
          </div>

          {/* middle footer sec */}

          <div className="flex justify-between items-center w-[80%]  h-30">
            {/* <div className="flex flex-col ">
           <p className="text-2xl text-white">
            <Link to="/">Home</Link>
           </p>
            </div> */}
          </div>

          {/* lower footer sec */}
          <div className="font-wix2 font-bold flex justify-center">
            <h1 className=" text-[#161616] text-[21vw] leading-40">
              Shahzaib.
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
