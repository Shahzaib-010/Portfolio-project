import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
 
  {
    name: "Figma",
    desc: "Design Tool",
    icon: "/images/icons/figma.svg",
    bgClass: "bg-cyan-400/10 border-white/10 border",
  },
  {
    name: "React Js",
    desc: "JavaScript Library",
    icon: "/images/icons/react.svg",
    bgClass: "bg-blue-400/10 border-white/10 border",
  },
  {
    name: "JavaScript",
    desc: "Scripting Language",
    icon: "/images/icons/javascript.svg",
    bgClass: "bg-yellow-400/10 border-white/10 border",
  },
  {
    name: "Node Js",
    desc: "Backend",
    icon: "/images/icons/nodejs.svg",
    bgClass: "bg-lime-400/10 border-white/10 border",
  },
  {
    name: "Git",
    desc: "Version Control",
    icon: "/images/icons/git.svg",
    bgClass: "bg-orange-400/10 border-white/10 border",
  },
  {
    name: "MongoDB",
    desc: "React framework",
    icon: "/images/icons/mongodb.svg",
    bgClass: "bg-emerald-400/10 border-white/10 border",
  },
  {
    name: "TypeScript",
    desc: "React framework",
    icon: "/images/icons/typescript.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  },
  {
    name: "Git Hub",
    desc: "React framework",
    icon: "/images/icons/github.svg",
    bgClass: "bg-slate-500/10 border-white/10 border",
  },
  {
    name: "TypeScript",
    desc: "React framework",
    icon: "/images/icons/typescript.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  },
  {
    name: "Next.js",
    desc: "React framework",
    icon: "/images/icons/nextjs1.svg",
    bgClass: "bg-stone-600/10 border-white/10 border",
  },
  {
    name: "Tailwind CSS",
    desc: "CSS Framework",
    icon: "/images/icons/tailwindcss.svg",
    bgClass: "bg-cyan-400/10 border-white/10 border",
  },
  {
    name: "Vite",
    desc: "React framework",
    icon: "/images/icons/vite.svg",
    bgClass: "bg-indigo-400/10 border-white/10 border",
  },
  {
    name: "Material UI",
    desc: "React framework",
    icon: "/images/icons/materialui.svg",
    bgClass: "bg-blue-400/10 border-white/10 border",
  },
  {
    name: "Html",
    desc: "React framework",
    icon: "/images/icons/html.svg",
    bgClass: "bg-orange-400/10 border-white/10 border",
  },
  {
    name: "CSS",
    desc: "React framework",
    icon: "/images/icons/css.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  },
  {
    name: "VS Code",
    desc: "Code Editor",
    icon: "/images/icons/vscode.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  }
  
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-5 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5 sm:gap-6
          "
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={item}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
