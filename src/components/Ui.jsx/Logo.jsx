import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision, audience, and goals.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Defining your unique positioning and messaging.",
  },
  {
    number: "03",
    title: "Design",
    description: "Creating an engaging visual identity and user experience.",
  },
  {
    number: "04",
    title: "Development",
    description: "Transforming designs into high-performing websites.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploying your website and ensuring everything runs smoothly.",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-6 md:px-5">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <p className="text-orange-500 font-bold text-sm mb-2">
          Step-by-Step
        </p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            My Process, <br className="hidden md:block" /> Step by Step
          </h2>
          <p className="text-gray-600 max-w-md text-base md:text-lg">
            From first ideas to final assets, I follow a clear, collaborative
            process—built to turn your vision into a brand that works and lasts.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start justify-between bg-white p-10 rounded-2xl shadow-sm ${
                index % 2 === 0 ? "md:bg-transparent" : "md:bg-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="h-full border-l-2 border-orange-500"></div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.number}
                  <span className="ml-3 text-base font-medium text-gray-700">
                    {step.title}
                  </span>
                </h3>
              </div>
              <p className="text-gray-500 mt-3 md:mt-0 md:text-right text-sm md:text-base max-w-md">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
