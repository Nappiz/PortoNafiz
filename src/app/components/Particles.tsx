"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number;        // 0.4 – 1.5
  linkDistance?: number;   // px
  linkOpacity?: number;    // 0–1
};

type Particle = { x: number; y: number; vx: number; vy: number; r: number; hue: number };

export default function Particles({
  className = "",
  density = 1,
  linkDistance = 110,
  linkOpacity = 0.28,
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let particles: Particle[] = [];
    let width = 0;   // in CSS pixels
    let height = 0;  // in CSS pixels

    // set size to match container / parent element (not window)
    const sizeToContainer = () => {
      const parent = (canvas.parentElement ?? canvas) as HTMLElement;
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      // DPR-aware canvas
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap to 2 to save perf
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(dpr, dpr);

      // particles count based on area
      const base = Math.min(130, Math.floor((width * height) / 18000));
      const count = Math.max(40, Math.floor(base * density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.4,
        hue: 260, // purple-blue
      }));
    };

    sizeToContainer();

    // Observe both canvas and parent for size changes (content grows/shrinks)
    const ro = new ResizeObserver(() => sizeToContainer());
    ro.observe(canvas);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    // also listen to window resize (orientation / zoom)
    const onWin = () => sizeToContainer();
    window.addEventListener("resize", onWin);

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      const g = ctx.createRadialGradient(
        width * 0.7, height * 0.2, 0,
        width * 0.7, height * 0.2, Math.max(width, height)
      );
      g.addColorStop(0, "rgba(99,102,241,0.07)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, .8)`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, .9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      const D = linkDistance, D2 = D * D;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < D2) {
            const o = 1 - d2 / D2;
            ctx.strokeStyle = `rgba(140,160,255,${o * linkOpacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", onWin);
    };
  }, [density, linkDistance, linkOpacity]);

  return <canvas ref={ref} className={className} />;
}
