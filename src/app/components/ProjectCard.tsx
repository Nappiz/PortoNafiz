"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import clsx from "clsx";

export type Project = {
  id: string;
  title: string;
  summary: string;
  image: string;     
  tags: string[];    
  live?: string;     
  repo?: string;     
  badge?: string;    
};

export default function ProjectCard({ p, className = "" }: { p: Project; className?: string }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      ([ent]) => { if (ent.isIntersecting) el.classList.add("in-view"); },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 12;
    const rx = -(py - 0.5) * 12;
    setTilt({ rx, ry });
    setSpot({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setSpot({ x: 50, y: 50 });
  };

  return (
    <>
      <article
        ref={cardRef}
        className={clsx("relative [perspective:1000px]", className)}
      >
        <div
          className="rounded-2xl p-[1.5px]"
          style={{
            background:
              "conic-gradient(from var(--gpos,0deg), rgba(99,102,241,.55), rgba(217,70,239,.55), rgba(34,211,238,.55), rgba(99,102,241,.55))",
            animation: "border-pulse 14s linear infinite",
            willChange: "transform",
          }}
        >
          <div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative rounded-2xl overflow-hidden glass border border-white/10 h-full"
            style={{
              transform: `translateZ(0) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 300ms ease",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(300px 300px at ${spot.x}% ${spot.y}%, rgba(148,163,255,.12), transparent 60%)`,
                mixBlendMode: "screen",
              }}
            />

            {p.badge && (
              <span className="absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] tracking-wide">
                {p.badge}
              </span>
            )}

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.17),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />
            </div>

            <div className="p-4 md:p-5 space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
              <p className="text-sm text-slate-300/90 line-clamp-3">{p.summary}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-1 flex items-center gap-2">
                {p.live && (
                  <a href={p.live} target="_blank"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-500/90 hover:to-fuchsia-500/90"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium border border-white/15 glass"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                <button
                  onClick={() => setOpen(true)}
                  className="ml-auto text-xs px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition cursor-pointer"
                >
                  Quick view
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -inset-2 rounded-3xl opacity-40 blur-2xl -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(167,139,250,.25),transparent)]" />
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-w-2xl w-full rounded-2xl border border-white/10 bg-[rgba(20,22,34,.88)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="mt-2 text-slate-300/90">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-white
                               bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium border border-white/15 glass"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto rounded-lg px-3 py-2 text-xs border border-white/10 hover:bg-white/10 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
