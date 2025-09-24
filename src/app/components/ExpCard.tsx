"use client";
import Image from "next/image";
import { useState } from "react";

export type ExpItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  location?: string;
  image: string;   
  bullets?: string[];
  tag?: string;
};

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");

export default function ExpCard({ item }: { item: ExpItem }) {
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  return (
    <article className="group relative [perspective:1000px]"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setSpot({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      onMouseLeave={() => setSpot({ x: 50, y: 50 })}
    >
      <div className="rounded-2xl p-[1.5px]"
        style={{
          background:
            "conic-gradient(from var(--gpos,0deg), rgba(99,102,241,.5), rgba(217,70,239,.5), rgba(34,211,238,.5), rgba(99,102,241,.5))",
          animation: "border-pulse 14s linear infinite",
        }}
      >
        <div className={cx(
            "relative overflow-hidden rounded-2xl glass border border-white/10",
            "h-[180px] sm:h-[190px] lg:h-[200px] transition-transform duration-300 group-hover:-translate-y-[2px]"
          )}
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-400/70 via-fuchsia-400/70 to-cyan-300/70" />

          <div className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(300px 220px at ${spot.x}% ${spot.y}%, rgba(148,163,255,.10), transparent 60%)`,
              mixBlendMode: "screen",
            }}
          />

          {item.tag && (
            <span className="absolute right-3 top-3 z-20 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] tracking-wide">
              {item.tag}
            </span>
          )}

          <div className="flex h-full">
            <div className="basis-[38%] md:basis-[36%] relative">
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 40vw, 33vw"
                />
              </div>
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[rgba(10,12,20,.7)] to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.14),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />
            </div>

            <div className="basis-[62%] md:basis-[64%] p-4 md:p-5 min-w-0 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-slate-100 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 truncate">
                    {item.org} • {item.period}
                  </p>
                  {item.location && (
                    <p className="text-xs text-slate-400 mt-0.5 truncate">{item.location}</p>
                  )}
                </div>
              </div>

              {!!item.bullets?.length && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.bullets.slice(0, 3).map((b, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300/90"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto" />
              <div className="mt-3 h-px w-24 bg-gradient-to-r from-indigo-400/60 via-fuchsia-400/60 to-cyan-300/60" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl blur-2xl opacity-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(167,139,250,.25),transparent)]" />
    </article>
  );
}
