"use client";

import { useId } from "react";

type WaveEdgeProps = { position: "top" | "bottom"; className?: string };

export default function WaveEdge({ position, className = "" }: WaveEdgeProps) {
  const isTop = position === "top";
  const gradId = useId();
  const blurId = useId();

  const fillTop = "M0,80 C230,160 450,20 720,95 C990,170 1210,40 1440,105 L1440,0 L0,0 Z";
  const fillBottom = "M0,80 C230,160 450,20 720,95 C990,170 1210,40 1440,105 L1440,220 L0,220 Z";
  const strokeTop = "M0,70 C230,150 450,10 720,85 C990,160 1210,30 1440,95";
  const strokeBottom = "M0,93 C230,173 450,33 720,108 C990,183 1210,53 1440,118";

  return (
    <div
      className={[
        "pointer-events-none absolute inset-x-0",
        isTop ? "top-[-32px]" : "bottom-[-32px]",
        "h-28 md:h-36 z-10",
        className,
      ].join(" ")}
      aria-hidden
    >
      <svg
        className={[
          "w-full h-full",
          "[mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
          "mask-[repeat:no-repeat] mask-[size:100%_100%]",
        ].join(" ")}
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
          <filter id={blurId} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <path
          d={isTop ? fillTop : fillBottom}
          fill={`url(#${gradId})`}
          opacity=".35"
          filter={`url(#${blurId})`}
        />
        <path
          d={isTop ? strokeTop : strokeBottom}
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          fill="none"
          opacity=".82"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className={[
          "absolute inset-x-0 blur-xl",
          isTop ? "top-0 h-10 bg-gradient-to-b from-white/10 to-transparent" : "bottom-0 h-10 bg-gradient-to-t from-white/10 to-transparent",
        ].join(" ")}
      />
    </div>
  );
}
