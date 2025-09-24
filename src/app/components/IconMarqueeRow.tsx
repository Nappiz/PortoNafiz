// src/components/IconMarqueeRow.tsx
"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type Item = { icon: ReactNode; label: string };

export default function IconMarqueeRow({
  items,
  speed = 22,     // detik; makin kecil makin cepat
  size = 28,      // px ukuran icon
  gap = 24,       // jarak antar item (px)
  className = "",
  itemClassName = "",
}: {
  items: Item[];
  speed?: number;
  size?: number;
  gap?: number;
  className?: string;
  itemClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const segmentRef = useRef<HTMLDivElement | null>(null);
  const [copies, setCopies] = useState(1);

  const segment = useMemo(() => {
    const arr: Item[] = [];
    for (let i = 0; i < copies; i++) arr.push(...items);
    return arr;
  }, [items, copies]);

  useEffect(() => {
    if (!containerRef.current || !segmentRef.current) return;

    const measure = () => {
      const containerW = containerRef.current!.clientWidth;
      const segW = segmentRef.current!.scrollWidth || 1;
      const needed = Math.max(1, Math.ceil(containerW / segW));
      const nextCopies = needed + 1;
      if (nextCopies !== copies) setCopies(nextCopies);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    ro.observe(segmentRef.current);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [copies]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden marquee-mask ${className}`}
      style={{ ["--speed" as any]: `${speed}s` }}
    >
      <div
        className="marquee-track flex items-center"
        style={{ gap: `${gap}px`, width: "max-content" }}
        aria-hidden
      >
        <div ref={segmentRef} className="flex items-center" style={{ gap: `${gap}px` }}>
          {segment.map((it, i) => (
            <div
              key={`seg1-${it.label}-${i}`}
              className={`shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md glass ${itemClassName}`}
              style={{ width: size + 28, height: size + 28 }}
              title={it.label}
            >
              <div className="grid h-full w-full place-items-center text-slate-200/95">
                <span style={{ fontSize: size }} aria-hidden>
                  {it.icon}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center" style={{ gap: `${gap}px` }}>
          {segment.map((it, i) => (
            <div
              key={`seg2-${it.label}-${i}`}
              className={`shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md glass ${itemClassName}`}
              style={{ width: size + 28, height: size + 28 }}
              title={it.label}
            >
              <div className="grid h-full w-full place-items-center text-slate-200/95">
                <span style={{ fontSize: size }} aria-hidden>
                  {it.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
