"use client";

import Particles from "./Particles";
import { useEffect } from "react";
import {
  FaBolt, FaHeart, FaMedal, FaUserShield, FaGaugeHigh, FaWandMagicSparkles,
} from "react-icons/fa6";
import WaveEdge from "./WaveEdge";
import { SiJirasoftware } from "react-icons/si";

type Trait = { label: string; desc: string; icon: React.ReactNode };

const TRAITS: Trait[] = [
  { label: "Workaholic", desc: "Fast-paced, responsive, and committed to pushing projects to completion.", icon: <FaBolt /> },
  { label: "Perfectionist", desc: "Detail-oriented—pixel-perfect, consistent, clean, and polished.", icon: <FaWandMagicSparkles /> },
  { label: "Reliable", desc: "Deadline-driven with strong ownership. No drama, only delivery.", icon: <FaUserShield /> },
  { label: "Performance-First", desc: "Prioritizing LCP, CLS, accessibility, and developer experience.", icon: <FaGaugeHigh /> },
  { label: "Empathy for Users", desc: "Designs with a sense of usability, lovability, and memorability.", icon: <FaHeart /> },
  { label: "Quality & Process", desc: "CI/CD, code review, issue tracking, and clear documentation.", icon: <SiJirasoftware /> },
  { label: "Keep Improving", desc: "Always learning and iterating. Each release is a step up.", icon: <FaMedal /> },
];

export default function WhyHireMeSection() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]")) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
          e.target.classList.add("opacity-100", "translate-y-0");
        }
      }),
      { threshold: 0.15 }
    );
    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-3", "transition-all", "duration-700");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section id="why" className="relative isolate overflow-hidden pt-28 md:pt-32 pb-24">
      <WaveEdge position="top" />
      <div className="absolute inset-0 -z-10 bg-ink bg-grid-faint bg-[length:36px_36px] bg-stars" />
      <Particles className="absolute inset-0 -z-10 pointer-events-none" density={0.85} linkOpacity={0.5} linkDistance={105} />
      <div className="pointer-events-none absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold grad-text">Why Hire Me</h2>
        <p className="mt-3 text-slate-300/85 max-w-2xl mx-auto">
          Values and work habits that make your project safe, fast, and premium.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-12 relative">
        <div className="grid md:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] gap-y-10 md:gap-y-12">
          <div className="hidden md:block col-start-2 col-end-3 row-span-full relative">
            <div className="absolute inset-x-[calc(50%-0.5px)] top-0 bottom-0 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/30 via-indigo-400/30 to-cyan-300/30 blur-[2px]" />
              <div className="absolute inset-0 bg-white/10" />
            </div>
          </div>

          {TRAITS.map((t, i) => {
            const left = i % 2 === 1;
            return (
              <TraitRow
                key={t.label}
                side={left ? "left" : "right"}
                label={t.label}
                desc={t.desc}
                icon={t.icon}
              />
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300/85">
          <StatDot label="On-time delivery" value="98%" />
          <StatDot label="Shipped projects" value="30+" />
          <StatDot label="Core Web Vitals" value="AA" />
          <StatDot label="Avg. response" value="< 1h" />
        </div>
      </div>
      <WaveEdge position="bottom" />
    </section>
  );
}

function TraitRow({
  side,
  label,
  desc,
  icon,
}: {
  side: "left" | "right";
  label: string;
  desc: string;
  icon: React.ReactNode;
}) {
  const isLeft = side === "left";

  return (
    <>
      <div
        data-reveal
        className={[
          "md:col-start-1 md:col-end-2",
          "flex md:items-start",
          isLeft ? "md:justify-end" : "md:justify-end md:invisible md:h-0", // kosong saat row kanan
        ].join(" ")}
      >
        {isLeft && <PillBlock align="right" label={label} desc={desc} icon={icon} />}
      </div>

      <div className="hidden md:flex md:col-start-2 md:col-end-3 relative items-center">
        <span className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_10px_2px_rgba(255,255,255,.35)]" />
        <div
          className={[
            "h-[2px] w-full",
            isLeft
              ? "bg-gradient-to-l from-indigo-400/60 via-fuchsia-400/60 to-transparent"
              : "bg-gradient-to-r from-cyan-300/60 via-indigo-400/60 to-transparent",
          ].join(" ")}
          style={{
            clipPath: isLeft
              ? "inset(0 50% 0 0 round 2px)"
              : "inset(0 0 0 50% round 2px)",
          }}
        />
      </div>

      <div
        data-reveal
        className={[
          "md:col-start-3 md:col-end-4",
          "flex md:items-start",
          !isLeft ? "md:justify-start" : "md:justify-start md:invisible md:h-0",
        ].join(" ")}
      >
        {!isLeft && <PillBlock align="left" label={label} desc={desc} icon={icon} />}
      </div>
    </>
  );
}

function PillBlock({
  align,
  label,
  desc,
  icon,
}: {
  align: "left" | "right";
  label: string;
  desc: string;
  icon: React.ReactNode;
}) {
  const right = align === "right";

  return (
    <div
      className={[
        "max-w-[36rem] flex flex-col",
        right ? "md:items-end md:text-right" : "md:items-start md:text-left",
      ].join(" ")}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-indigo-400/60 to-fuchsia-400/60 text-[13px]">
          {icon}
        </span>
        <span className="text-sm font-semibold tracking-wide">{label}</span>
      </div>

      <div
        className={[
          "mt-3 h-[2px] w-32 md:w-40 bg-gradient-to-r from-indigo-500/50 via-fuchsia-500/50 to-cyan-300/50",
          right ? "md:ml-auto" : "",
        ].join(" ")}
      />

      <p className="mt-2 text-slate-300/90">{desc}</p>
    </div>
  );
}


function StatDot({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,.35)]" />
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-200 font-semibold">{value}</span>
    </span>
  );
}
