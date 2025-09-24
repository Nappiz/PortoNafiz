"use client";

import Particles from "./Particles";
import IconMarqueeRow from "./IconMarqueeRow";
import WaveEdge from "./WaveEdge";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaGithub, FaDocker, FaLinux
} from "react-icons/fa6";


import { TbBrandVscode } from "react-icons/tb";
import {
  SiJavascript, SiTypescript, SiPhp, SiC, SiCplusplus, SiGo, SiPython,
  SiNextdotjs, SiVuedotjs, SiLaravel, SiFastapi, SiTailwindcss, SiBootstrap,
  SiFigma, SiVercel, SiPostman, SiCanva, SiCisco, SiWireshark,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiPhp />, label: "PHP" },
  { icon: <SiC />, label: "C" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <SiGo />, label: "Go" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiVuedotjs />, label: "Vue.js" },
  { icon: <SiLaravel />, label: "Laravel" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
];

const tools = [
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <TbBrandVscode />, label: "VS Code" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <FaLinux />, label: "Linux" },
  { icon: <SiCanva />, label: "Canva" },
  { icon: <SiCisco />, label: "Cisco" },
  { icon: <SiWireshark />, label: "Wireshark" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative isolate overflow-hidden pt-28 md:pt-32 pb-24">
      <WaveEdge position="top" />
      <div className="absolute inset-0 -z-10 bg-ink bg-grid-faint bg-[length:36px_36px] bg-stars" />
      <Particles className="absolute inset-0 -z-10 pointer-events-none" density={0.85} linkOpacity={0.5} linkDistance={100} />

      <div className="pointer-events-none absolute inset-x-0 top-6 h-16 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/12 to-cyan-400/10 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-6 h-16 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/12 to-cyan-400/10 blur-2xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold grad-text">Skills &amp; Tools</h2>
        <p className="mt-3 text-slate-300/85 max-w-2xl mx-auto">
          Tech Stack and Tools that i used to build an efficient websites experience and projects.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10">
        <p className="text-xs tracking-widest text-slate-400/80 mb-3">SKILLS</p>
        <IconMarqueeRow
          items={skills}
          speed={88}
          size={28}
          gap={20}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3"
          itemClassName="hover:bg-white/10 transition"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-8">
        <p className="text-xs tracking-widest text-slate-400/80 mb-3">TOOLS</p>
        <IconMarqueeRow
          items={tools}
          speed={50}
          size={28}
          gap={18}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3"
          itemClassName="hover:bg-white/10 transition"
        />
      </div>
      <WaveEdge position="bottom" />
    </section>
  );
}
