"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

interface Item {
  icon: ReactNode;
  label: string;
}

interface MarqueeProps {
  items: Item[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function IconMarqueeRow({ 
  items, 
  speed = 40, 
  direction = "left",
  className 
}: MarqueeProps) {
  return (
    <div className={clsx("relative flex w-full overflow-hidden select-none gap-8", className)}>
      <div
        className={clsx(
          "flex min-w-full shrink-0 items-center justify-around gap-8",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          "group-hover:[animation-play-state:paused]"
        )}
        style={{
          "--duration": `${speed}s`,
          "--gap": "2rem", 
        } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <TechBadge key={`a-${idx}`} item={item} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className={clsx(
          "flex min-w-full shrink-0 items-center justify-around gap-8",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          "group-hover:[animation-play-state:paused]"
        )}
        style={{
          "--duration": `${speed}s`,
          "--gap": "2rem",
        } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <TechBadge key={`b-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function TechBadge({ item }: { item: Item }) {
  return (
    <div className="group/item relative flex items-center justify-center gap-3 rounded-lg border border-slate-800 bg-[#0f172a] px-6 h-14 min-w-[140px] shadow-sm transition-all hover:border-cyan-500/40 hover:bg-[#0f172a] hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-default overflow-hidden">
      
      <span className="text-2xl text-slate-400 transition-colors group-hover/item:text-cyan-400 shrink-0">
        {item.icon}
      </span>
      
      <span className="font-mono text-sm font-semibold text-slate-300 transition-colors group-hover/item:text-white whitespace-nowrap">
        {item.label}
      </span>

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover/item:animate-[shimmer_1.5s_infinite]" />
    </div>
  );
}