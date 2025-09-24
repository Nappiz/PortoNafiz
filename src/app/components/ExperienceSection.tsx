"use client";

import { useMemo, useState, useEffect } from "react";
import Particles from "./Particles";
import WaveEdge from "./WaveEdge";
import ExpCard, { ExpItem } from "./ExpCard";
import { FaBriefcase, FaTrophy } from "react-icons/fa6";

const PER_PAGE = 3;

const EXPERIENCE: ExpItem[] = [
  { id:"e1", title:"Founder", org:"TC Mudah", period:"2024 – Now", location:"Surabaya", image:"/foto.png", bullets:["Business","Teaching"], tag:"Full-Time" },
  { id:"e2", title:"Web Dev PM", org:"IEEE ITS SB", period:"2025 – Now", location:"Surabaya", image:"/foto.png", bullets:["Next.js • TS • Tailwind","Managerial"], tag:"Contract" },
  { id:"e3", title:"Web Dev Intern", org:"Antasena ITS", period:"2024", image:"/foto.png", bullets:["Front-End • Back-End • UI/UX","Teamwork"], tag:"Internship" },
  { id:"e4", title:"Backend Dev", org:"Flexoo Software House", period:"2023 – Now", image:"/foto.png", bullets:["Backend Development","Teamwork"], tag:"Freelance" },
  { id:"e5", title:"Lecturer Assistant", org:"ITS", period:"2024", image:"/foto.png", bullets:["Teaching","Fundamental Programming"], tag:"Part-Time" },
  { id:"e6", title:"CP Problem Setter", org:"Schematics NPC", period:"2024", image:"/foto.png", bullets:["Competitive Programming","Problem Setting"], tag:"Freelance" },
];

const ACHIEVEMENTS: ExpItem[] = [
  { id:"a1", title:"Codeforces Expert", org:"CF Rating ~1825", period:"Now", image:"/foto.png", bullets:["Competitive Programming","DSA"], tag:"Competitive" },
  { id:"a2", title:"1st Place Winner", org:"SECOMP Telkom University", period:"2025", image:"/foto.png", bullets:["Competitive Programming"], tag:"Contest" },
  { id:"a3", title:"1st Place Winner", org:"CODE 5.0 Amikom", period:"2025", image:"/foto.png", bullets:["Competitive Programming"], tag:"Contest" },
  { id:"a4", title:"Finalist", org:"Recursion 1.0", period:"2025", image:"/foto.png", bullets:["Competitive Programming"], tag:"Contest" },
  { id:"a5", title:"BE Dev Training", org:"IEEE ITS SB", period:"2024", image:"/foto.png", bullets:["Back-End","Express.js"], tag:"Training" },
];

export default function ExperienceSection() {
  const [tab, setTab] = useState<"exp" | "ach">("exp");
  const [page, setPage] = useState(0);

  const data = tab === "exp" ? EXPERIENCE : ACHIEVEMENTS;
  const totalPages = Math.max(1, Math.ceil(data.length / PER_PAGE));

  const items = useMemo(() => {
    const start = page * PER_PAGE;
    return data.slice(start, start + PER_PAGE);
  }, [data, page]);

  useEffect(() => { setPage(0); }, [tab]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <section id="experience" className="relative isolate overflow-hidden pt-28 md:pt-32 pb-24">
      <WaveEdge position="top" />

      <div className="absolute inset-0 -z-10 bg-ink bg-grid-faint bg-[length:36px_36px] bg-stars" />
      <Particles className="absolute inset-0 -z-10 pointer-events-none" density={0.85} linkOpacity={0.5} linkDistance={100} />

      <div className="pointer-events-none absolute -left-24 top-12 h-[28rem] w-[28rem] rounded-full blur-3xl bg-indigo-600/20" />
      <div className="hidden md:block pointer-events-none absolute -top-96 -left-32 h-[38rem] w-[38rem] rounded-full blur-3xl bg-indigo-600/25 animate-slow-pulse" />
      <div className="pointer-events-none absolute -right-24 bottom-14 h-[30rem] w-[30rem] rounded-full blur-3xl bg-fuchsia-600/20" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold grad-text">Experience & Achievements</h2>
        <p className="mt-3 text-slate-300/85 max-w-2xl mx-auto">
          Highlights of My Journey—Project and Achivements that i Achive in Colleges and Competitions.
        </p>
      </div>

      <div className="mx-auto mt-6 w-[340px] md:w-[460px] lg:w-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1 flex">
        <button onClick={() => setTab("exp")}
          className={`flex-1 h-11 rounded-xl text-sm font-medium transition inline-flex items-center justify-center gap-2 cursor-pointer
            ${tab==="exp" ? "glass border border-white/20 bg-white/10" : "hover:bg-white/10"}`}
        >
          <FaBriefcase /> Experience
        </button>
        <button onClick={() => setTab("ach")}
          className={`flex-1 h-11 rounded-xl text-sm font-medium transition inline-flex items-center justify-center gap-2 cursor-pointer
            ${tab==="ach" ? "glass border border-white/20 bg-white/10" : "hover:bg-white/10"}`}
        >
          <FaTrophy /> Achievement
        </button>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => <ExpCard key={it.id} item={it} />)}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={!canPrev}
              aria-label="Previous page"
              className="rounded-xl h-10 w-10 grid place-items-center border border-white/15 glass disabled:opacity-40"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i===page ? "bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,.35)]" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={!canNext}
              aria-label="Next page"
              className="rounded-xl h-10 w-10 grid place-items-center border border-white/15 glass disabled:opacity-40"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <WaveEdge position="bottom" />
    </section>
  );
}
