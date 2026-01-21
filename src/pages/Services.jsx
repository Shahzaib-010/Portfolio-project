import React from 'react'

function Services() {
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
     </section>
  )
}

export default Services