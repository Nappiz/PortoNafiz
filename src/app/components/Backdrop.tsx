// src/components/Backdrop.tsx
"use client";
import Particles from "./Particles";

export default function Backdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-grid-faint bg-[length:36px_36px] opacity-[.22]" />
      <div className="absolute inset-0 bg-stars opacity-[.75]" />
      <div className="pointer-events-none absolute -top-40 right-[-20%] h-[60rem] w-[60rem] rounded-full bg-fuchsia-600/16 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-20%] h-[70rem] w-[70rem] rounded-full bg-indigo-600/16 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[48vh] h-20 bg-gradient-to-b from-transparent via-cyan-300/6 to-transparent blur-2xl" />
      <Particles className="absolute inset-0" density={0.7} linkOpacity={0.14} linkDistance={110} />
    </div>
  );
}
