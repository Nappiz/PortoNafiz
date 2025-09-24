"use client";

import Image from "next/image";
import Particles from "./Particles";
import WaveEdge from "./WaveEdge";

export default function About() {
  return (
    <section id="about" className="relative isolate min-h-[100svh] flex items-center pt-28 md:pt-32 pb-20 overflow-hidden">
      <WaveEdge position="top" />
      <div className="pointer-events-none absolute inset-x-0 top-6 h-20 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/12 to-cyan-400/10 blur-2xl" />
      <div className="absolute inset-0 -z-10 bg-grid-faint bg-[length:36px_36px]" />
      <Particles
        className="absolute inset-0 -z-10 pointer-events-none"
        density={0.85}
        linkOpacity={0.5}
      />
      <div className="pointer-events-none absolute -top-3/5 -right-40 h-[42rem] w-[42rem] rounded-full blur-3xl bg-fuchsia-600/25 animate-slow-pulse [animation-delay:1.2s] rotate-180" />
      
      <div className="hidden md:block pointer-events-none absolute -bottom-96 -left-32 h-[38rem] w-[38rem] rounded-full blur-3xl bg-indigo-600/25 animate-slow-pulse" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_6px_rgba(34,211,238,.55)]" />
              ABOUT ME
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold grad-text">
              Let's Get to Know About Me!
            </h2>

            <p className="text-slate-300/90 leading-relaxed">
              I’m an Informatics student at ITS’23 focusing on Fullstack Development and Project Manager. I love building reliable systems and exploring AI.
            </p>

            <p className="text-slate-300/90 leading-relaxed">
              My interests span AI, Data Science, and Full-Stack Dev, backed by years of Competitive Programming.
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Tech Stack", "Next.js · Laravel · Gin"],
                ["Interest", "AI · Data Science · Fullstack Dev"],
                ["Timezone", "UTC+7 (Surabaya)"],
                ["Open", "Internship · Job · Freelance"],
              ].map(([k, v]) => (
                <li key={k} className="glass rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-slate-400">{k}</p>
                  <p className="mt-0.5 text-slate-200">{v}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="relative w-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-[24rem]">
              <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-500/70 via-fuchsia-500/70 to-cyan-300/70">
                <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(99,102,241,.35)]">
                  <div className="relative aspect-[4/5]">
                    <Image src="/foto.png" alt="Foto Nafiz" fill sizes="(max-width: 768px) 20rem, 24rem" priority className="object-cover transition-transform duration-500 hover:scale-[1.01]"/>
                  </div>
                </div>
              </div>

              <span className="pointer-events-none absolute -top-2 -left-2 h-6 w-6 rounded-full bg-cyan-400/30 blur-md" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 rounded-full bg-fuchsia-400/30 blur-lg" />
            </div>
          </div>
        </div>
      </div>
      <WaveEdge position="bottom" />
    </section>
  );
}
