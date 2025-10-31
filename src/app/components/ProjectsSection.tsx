"use client";

import { useMemo, useState } from "react";
import Particles from "./Particles";
import WaveEdge from "./WaveEdge";
import ProjectCard, { Project } from "./ProjectCard";

const ALL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "IEEE ITS SB",
    summary: "Led the Web Development subdivision at IEEE ITS Student Branch as a full-stack developer project manager. Responsible for overseeing team workflows, delivering web projects, and collaborating across departments to support organizational needs.",
    image: "/p11.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://ieee-its-sb.org/", repo: "", badge: "Featured",
  },
  {
    id: "p2",
    title: "TC Mudah",
    summary: "TC Mudah is a business that i own that provides a tutoring for 1st and 2nd semester courses at Teknik Informatika ITS",
    image: "/p222.png",
    tags: ["Next.js", "Tailwind", "FastAPI"],
    live: "https://tcmudah.vercel.app/", repo: "https://github.com/Nappiz/TCMudahFE",
  },
  {
    id: "p3",
    title: "LearnWAI",
    summary: "A platform that provides AI tools and resources for learning and development by uploading a single pdf.",
    image: "/p3.png",
    tags: ["Next.js", "AI", "FastAPI"],
    live: "https://learnwaidev.vercel.app/", repo: "https://github.com/Nappiz/PBKK-Kelompok-5-FE",
  },
  {
    id: "p4",
    title: "Portofolio Website",
    summary: "A personal portfolio website to showcase my projects, skills, and experience, built with a focus on performance, accessibility, and modern design.",
    image: "/p4.png",
    tags: ["Next.js", "Tailwind", "Design"],
    live: "https://nafiz-dev.vercel.app/", repo: "https://github.com/Nappiz/PortoNafiz",
  },
  {
    id: "p5",
    title: "Antasena ITS Internship",
    summary: "Contribute to designing and developing websites, covering all stages from UI/UX design to front-end and back-end implementation. This role involves collaborating on user interface design, coding web functionality, and managing server-side operations to deliver complete and responsive web solutionsContribute.",
    image: "/p2.png",
    tags: ["Laravel", "PHP", "MySQL"],
    live: "https://antasenaits.com",
    badge: "Featured",
  },
  {
    id: "p6",
    title: "Anniversary Website Template",
    summary: "A beautiful and elegant anniversary website template to celebrate special occasions, featuring customizable sections for photos, messages, and event details.",
    image: "/p6.png",
    tags: ["Next.js", "Tailwind", "Design"],
    live: "https://annivkeduakita.vercel.app/", repo: "https://github.com/Nappiz/Anniversary2",
  },
];

const FILTERS = ["All", "Web", "AI", "UI"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    switch (filter) {
      case "Web":
        return ALL_PROJECTS.filter((p) => p.tags.some((t) => ["Next.js", "Stripe", "CMS", "Laravel"].includes(t)));
      case "AI":
        return ALL_PROJECTS.filter((p) => p.tags.some((t) => ["Python", "AI"].includes(t)));
      case "UI":
        return ALL_PROJECTS.filter((p) => p.tags.some((t) => ["Design", "HTML", "Tailwind"].includes(t)));
      default:
        return ALL_PROJECTS;
    }
  }, [filter]);

  return (
    <section id="projects" className="relative isolate overflow-hidden pt-28 md:pt-32 pb-24">
      <WaveEdge position="top" />

      <div className="absolute inset-0 -z-10 bg-ink bg-grid-faint bg-[length:36px_36px] bg-stars" />
      <Particles className="absolute inset-0 -z-10 pointer-events-none" density={0.85} linkOpacity={0.5} linkDistance={100} />

      <div className="pointer-events-none absolute -left-24 top-24 h-[28rem] w-[28rem] rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-12 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/25 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold grad-text">Projects</h2>
        <p className="mt-3 text-slate-300/85 max-w-2xl mx-auto">
          A showcase of projects built with a focus on performance, accessibility, and clean modern design.
        </p>
      </div>

      <div className="mx-auto mt-6 w-[340px] md:w-[460px] lg:w-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1 flex">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 h-11 rounded-xl text-sm font-medium transition cursor-pointer
              ${filter === f ? "glass border border-white/20 bg-white/10" : "hover:bg-white/10"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              p={p}
              className="group"
            />
          ))}
        </div>
      </div>
      <WaveEdge position="bottom" />
    </section>
  );
}
