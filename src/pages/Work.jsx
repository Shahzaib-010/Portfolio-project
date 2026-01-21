import React from "react";

function Work() {
  return (
    <section className="w-full  bg-black flex  flex-col justify-around items-center p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="lg:text-xl font-bold text-[var(--color-orange)] font-wix2 ">
            Selected Work
          </p>
          <h1 className="text-[6vw] leading-none  text-[var(--color-white)] font-wix2">
            Work That
          </h1>
          <h1 className="text-[6vw] leading-none  text-[var(--color-white)] font-wix2">
            Speaks Louder
          </h1>
        </div>
        <div className="w-[20%] flex items-end">
          <p className="font-switzer text-xl">
            Discover a portfolio where creativity meets impact, shaping
            industries with bold, innovative designs.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center item-center w-full">
        <div className="flex flex-col justify-between item center py-[7vw] space-y-[7vw]">
          <div className="flex justify-around items-center space-x-10 ">
            <div className="flex flex-col justify-center item-center">
              <p className="font-switzer text-[var(--color-orange)]">/01</p>
              <h2 className="font-wix2 text-[6vw] text-[var(--color-bg)] leading-none">
                BOLDCRAFT
              </h2>
              <p className="font-switzer text-[var(--color-bg)]">
                UX Design, UI Design, Branding
              </p>
            </div>
            <img
              src="/images/5sxpQeVzXaGycp162tMtytRY.avif"
              alt="pfp"
              className="md:w-[60vw] rounded-2xl"
            />
          </div>
          <div className="flex justify-around items-center">
            <img
              src="/images/0ramsUE1tOARs2GDYldPlBdVTP8.avif"
              alt="pfp"
              className="md:w-[60vw] rounded-2xl"
            />
            <div className="flex flex-col justify-center item-center">
              <p className="font-switzer text-[var(--color-orange)]">/02</p>
              <h2 className="font-wix2 text-[6vw] text-[var(--color-bg)] leading-none">
                Q-CHART
              </h2>
              <p className="font-switzer text-[var(--color-bg)]">
                UX Design, UI Design, Branding,Decelopment
              </p>
            </div>
            
          </div>
          <div className="flex justify-around items-center">
            <div className="flex flex-col justify-center item-center">
              <p className="font-switzer text-[var(--color-orange)]">/03</p>
              <h2 className="font-wix2 text-[6vw] text-[var(--color-bg)] leading-none">
                BOOK PAY
              </h2>
              <p className="font-switzer text-[var(--color-bg)]">
                UX Design, UI Design, Branding
              </p>
            </div>
            <img
              src="/images/5sxpQeVzXaGycp162tMtytRY.avif"
              alt="pfp"
              className="md:w-[60vw] rounded-2xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Work;
