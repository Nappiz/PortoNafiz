"use client";

import Particles from "./Particles";
import WaveEdge from "./WaveEdge";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden flex items-center">
      <div className="absolute inset-0 -z-10 bg-ink bg-grid-faint bg-[length:36px_36px] bg-stars" aria-hidden/>

      <div className="md:hidden pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 h-[18rem] w-[18rem] rounded-full blur-2xl bg-indigo-600/18" />
      <div className="md:hidden pointer-events-none absolute bottom-20 right-8 h-[16rem] w-[16rem] rounded-full blur-2xl bg-fuchsia-600/18" />
      <div className="md:hidden pointer-events-none absolute inset-x-8 top-28 h-16 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-xl" />

      <div className="hidden md:block pointer-events-none absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full blur-3xl bg-indigo-600/25 animate-slow-pulse" />
      <div className="hidden md:block pointer-events-none absolute -bottom-56 -right-40 h-[42rem] w-[42rem] rounded-full blur-3xl bg-fuchsia-600/25 animate-slow-pulse [animation-delay:1.2s]" />
      <div className="hidden md:block pointer-events-none absolute inset-x-0 top-32 h-48 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-2xl" />

      <Particles className="absolute inset-0 -z-10 pointer-events-none" density={0.85} linkOpacity={0.5} />

      <div className="mx-auto max-w-6xl px-4 md:px-6 w-full">
        <div className="text-center flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_6px_rgba(34,211,238,.55)]" />
            AVAILABLE FOR PROJECTS
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight grad-text">
            Building reliable websites & AI-ready products

          </h1>

          <p className="max-w-2xl text-slate-300/85">
            Informatics ITS’23. Next.js, Laravel, Gin. Detail-obsessed, performance first. Open for Internship · Job · Freelance.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
            <a href="#projects" className="rounded-xl px-5 py-3 text-sm font-medium text-white
                         bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-500/90 hover:to-fuchsia-500/90
                         shadow-[0_0_40px_-8px_rgba(99,102,241,.9)]">
              View Projects
            </a>
            <a className="rounded-xl px-5 py-3 text-sm font-medium border border-white/15 glass" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 h-20 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/12 to-cyan-400/10 blur-2xl" />
      <WaveEdge position="bottom" />
    </section>
  );
}
