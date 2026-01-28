import { useInView } from "../Animations/useInView";

const steps = [
  {
    title: "Problem First",
    desc: "Understanding constraints, users, and intent before touching UI or code.",
    hoverBg: "hover:bg-stone-500/10 ",
  },
  {
    title: "Design with Intent",
    desc: "Layouts, motion, and visuals exist to guide clarity — not decoration.",
    hoverBg: "hover:bg-stone-400/10",
  },
  {
    title: "Build Precisely",
    desc: "Reusable components, clean logic, and performance-first decisions.",
    hoverBg: "hover:bg-stone-500/10",
  },
  {
    title: "Iterate & Refine",
    desc: "Polish through feedback, testing, and continuous visual refinement.",
    hoverBg: "hover:bg-stone-500/10",
  },
];

export default function Approach() {
  return (
    <section className="w-full py-32 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-clash-medium text-gradient">
          Creative Approach
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((step, i) => {
          const [ref, visible] = useInView();

          return (
            <div
              key={i}
              ref={ref}
              className={`
                group relative p-8 rounded-2xl
                bg-black border border-white/10
                transition-all duration-500 ease-out
                ${step.hoverBg}
                hover:scale-[1.02]
                hover:gradient-border
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {/* Dot + Line */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-px w-10 bg-gradient-to-r from-red-500 to-orange-400" />
              </div>

              <h3 className="text-xl font-clash-medium">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
