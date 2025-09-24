"use client";

import { useMemo, useState } from "react";
import Particles from "./Particles";
import WaveEdge from "./WaveEdge";
import ProjectCard, { Project } from "./ProjectCard";

const ALL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "--",
    summary: "lorem impsum dolor sit amet,",
    image: "/projects/p1.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Design"],
    live: "#", repo: "#", badge: "Featured",
  },
  {
    id: "p2",
    title: "--",
    summary: "lorem impsum dolor sit amet,",
    image: "/projects/p2.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    live: "#", repo: "#",
  },
  {
    id: "p3",
    title: "--",
    summary: "lorem impsum dolor sit amet,",
    image: "/projects/p3.png",
    tags: ["Next.js", "AI", "Edge"],
    live: "#", repo: "#",
  },
  {
    id: "p4",
    title: "--",
    summary: "lorem impsum dolor sit amet,",
    image: "/projects/p4.png",
    tags: ["Next.js", "Stripe", "CMS"],
    live: "#", repo: "#",
  },
  {
    id: "p5",
    title: "--",
    summary: "lorem impsum dolor sit amet,",
    image: "/projects/p5.png",
    tags: ["Tailwind", "Design System"],
    repo: "#",
  },
  {
    id: "p6",
    title: "--",
    summary: "lorem impsum dolor sit amet,",
    image: "/projects/p6.png",
    tags: ["FastAPI", "Python", "Docker"],
    repo: "#",
  },
];

const FILTERS = ["All", "Web", "AI", "UI"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    switch (filter) {
      case "Web":
        return ALL_PROJECTS.filter((p) => p.tags.some((t) => ["Next.js", "Stripe", "CMS", "Edge"].includes(t)));
      case "AI":
        return ALL_PROJECTS.filter((p) => p.tags.some((t) => ["Python"].includes(t)));
      case "UI":
        return ALL_PROJECTS.filter((p) => p.tags.some((t) => ["Design", "Design System", "Tailwind"].includes(t)));
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
