import React from "react";

const projects = [
  {
    number: "01",
    title: "Apni Profile",
    role: "Frontend Developer",
    year: "2026",
    desc: "The Last Link You’ll Ever Send. Turn your entire career into a single, structured link. No PDFs. No scattered portfolios. Just one clean, recruiter-ready profile.",
    repo: null,
    live: "https://apniprofile.vercel.app",
    isHidden: false,
  },
  {
    number: "02",
    title: "Get Me Tutor",
    role: "Full Stack / EduTech",
    year: "2026",
    desc: "An online teaching business website connecting educators and learners. A complete platform for virtual education and skill development.",
    repo: null,
    live: "https://getmetutor.online",
    isHidden: false,
  },
  {
    number: "03",
    title: "Sialkot Stallionz",
    role: "Development, UI, Pixel Perfect",
    year: "2026",
    desc: "Where Passion Meets Power — The Official Digital Home of Sialkot Stallionz.",
    repo: "https://github.com/Shahzaib-010/sialkotstallionz",
    live: "https://sialkotstallionz.com",
    isHidden: true,
  },
  {
    number: "04",
    title: "HRMIS",
    role: "UX, UI, Development",
    year: "2026",
    desc: "The Complete Solution for Daily HR Operations and Workforce Management.",
    repo: "https://github.com/Shahzaib-010/HRMIS.git",
    live: null,
    isHidden: true,
  },
  {
    number: "05",
    title: "Portfolio Website",
    role: "UI, UX, Development, Deployment",
    year: "2026",
    desc: "An interactive digital portfolio presenting featured projects, technical skills, and development expertise.",
    repo: "https://github.com/Shahzaib-010/shahzaib-dev.git",
    live: null,
    isHidden: true,
  },
];

function WorkCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 px-5 py-6 md:px-6 md:py-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-shadow h-full">
      {/* Gradient Sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]" />

      {/* Header Row (always visible) */}
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.35em] text-[var(--color-orange)] font-switzer">
            /{project.number}
          </span>
          <div className="w-fit">
            <h3 className="text-xl md:text-2xl font-clash-medium text-white">
              {project.title}
            </h3>
            <span className="mt-1 block h-px w-0 bg-[var(--color-orange)] transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>

      {/* Details (text-only) */}
      <div className="relative mt-5 flex flex-col h-full">
        <p className="text-sm text-white/70 font-switzer leading-relaxed">
          {project.desc}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 font-switzer">
          <span>{project.role}</span>
          <span className="text-white/30">•</span>
          <span>{project.year}</span>
        </div>
        <div className="mt-auto pt-6 flex items-center gap-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-switzer text-[var(--color-orange)] hover:text-white transition-colors"
            >
              Live Site
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-switzer text-[var(--color-orange)] hover:text-white transition-colors"
            >
              Repo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex flex-col">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
              Work
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-clash-medium text-gradient leading-tight">
              Work Stories
            </h1>
          </div>
        </div>
        <div className="mt-4 max-w-2xl">
          <p className="font-switzer text-white/70">
            A selection of projects where clarity, interaction, and visual systems
            drive measurable outcomes. Each case study highlights the process,
            key decisions, and the final impact.
          </p>
        </div>

        {/* Projects Grid: 2 per row on md+ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <WorkCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
