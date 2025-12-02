"use client";

import IconMarqueeRow from "./IconMarqueeRow";
import {
  FaHtml5, FaCss3Alt, FaNodeJs, FaPython,
  FaGitAlt, FaGithub, FaDocker, FaLinux
} from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiJavascript, SiTypescript, SiPhp, SiC, SiCplusplus, SiGo,
  SiNextdotjs, SiVuedotjs, SiLaravel, SiFastapi, SiTailwindcss, 
  SiBootstrap, SiFigma, SiVercel, SiPostman, SiCanva, 
  SiCisco, SiWireshark, SiReact
} from "react-icons/si";

const skills = [
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiGo />, label: "Go" },
  { icon: <SiLaravel />, label: "Laravel" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaPython />, label: "Python" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiPhp />, label: "PHP" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <SiC />, label: "C" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
];

const tools = [
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <FaLinux />, label: "Linux" },
  { icon: <TbBrandVscode />, label: "VS Code" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <SiWireshark />, label: "Wireshark" },
  { icon: <SiCisco />, label: "Cisco" },
  { icon: <SiCanva />, label: "Canva" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative isolate overflow-hidden py-24 md:py-32 bg-[#020617]">      
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.08),_rgba(2,6,23,1)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center relative z-10">
        <div className="flex flex-col items-center mb-20">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs md:text-sm tracking-widest mb-4">
                <span className="text-blue-600">02.</span>
                <span>// TECH_STACK</span>
                <div className="h-px w-12 bg-blue-900" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                My Arsenal of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    Technologies
                </span>
            </h2>
            
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
               The languages, frameworks, and tools I use to turn lines of code into robust solutions.
            </p>
        </div>

        <div className="space-y-16">            
            <div className="relative group">
                <div className="flex items-center justify-between mb-4 px-2">
                     <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/80 tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        [ LANGUAGES_&_FRAMEWORKS ]
                     </div>
                     <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
                </div>

                <div className="relative py-4 bg-[#0f172a]/20 border-y border-blue-900/20 backdrop-blur-sm">
                    
                    <IconMarqueeRow 
                        items={skills} 
                        speed={50} 
                        direction="left" 
                    />
                </div>
            </div>

            <div className="relative group">
                <div className="flex items-center justify-between mb-4 px-2">
                     <div className="h-px flex-1 bg-gradient-to-l from-blue-500/20 to-transparent mr-4" />
                     <div className="flex items-center gap-2 text-xs font-mono text-blue-400/80 tracking-widest uppercase">
                        [ DEV_TOOLS_&_ENVIRONMENT ]
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                     </div>
                </div>

                <div className="relative py-4 bg-[#0f172a]/20 border-y border-blue-900/20 backdrop-blur-sm">
                    
                    <IconMarqueeRow 
                        items={tools} 
                        speed={60} 
                        direction="right" 
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}