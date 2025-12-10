import React from 'react'

function Star() {
  return (
    <div className="flex item-start md:pt-10">
        <button className="flex justify-center items-center text-4xl md:text-5xl text-[var(--color-orange)] w-16 h-16 md:w-20 md:h-20 rounded-full  hover:rotate-[45deg] transition-all duration-500">
          <svg
            preserveAspectRatio="none"
            data-bbox="0.499 0 57.001 57"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.499 0 57.001 57"
            height="57"
            width="58"
            data-type="shape"
            role="presentation"
            aria-hidden="true"
            aria-label=""
            
          >
            <g>
              <path
                d="M33.232 0h-8.465v18.28L11.847 5.362 5.86 11.347l12.92 12.92H.499v8.465h18.29L5.862 45.661l5.986 5.986 12.92-12.92V57h8.465V39.033l12.614 12.614 5.986-5.986-12.928-12.929H57.5v-8.465H38.912l12.92-12.92-5.986-5.986-12.614 12.614V0Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                fill="var(--color-orange)"
                
              ></path>
            </g>
          </svg>
        </button>
      </div>
  )
}

export default Star