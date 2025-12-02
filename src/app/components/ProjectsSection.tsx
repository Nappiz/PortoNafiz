"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";
import { FaGithub, FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

const PROJECTS = [
  { 
    id: 1, 
    title: "TC Mudah", 
    desc: "Business & Tutoring Platform built to manage schedules and student data.", 
    img: "/p3.png", 
    tags: ["Next.js", "FastAPI", "PostgreSQL"], 
    link: "https://tcmudah.vercel.app/", 
    repo: "https://github.com/Nappiz/TCMudahFE", 
    colSpan: 2 
  },
  { 
    id: 2, 
    title: "IEEE ITS SB", 
    desc: "Organization Profile & Event Management Portal.", 
    img: "/p11.png", 
    tags: ["Next.js", "TypeScript", "Tailwind"], 
    link: "https://ieee-its-sb.org/", 
    repo: "", 
    colSpan: 1 
  },
  { 
    id: 3, 
    title: "LearnWAI", 
    desc: "AI Learning Tools resource platform.", 
    img: "/p1.png", 
    tags: ["AI", "Python", "Streamlit"], 
    link: "https://learnwaidev.vercel.app/", 
    repo: "https://github.com/Nappiz/PBKK-Kelompok-5-FE", 
    colSpan: 1 
  },
  { 
    id: 4, 
    title: "Portofolio V1", 
    desc: "Previous iteration of personal portfolio focusing on performance.", 
    img: "/p4.png", 
    tags: ["Next.js", "Framer Motion"], 
    link: "https://nafiz-dev.vercel.app/", 
    repo: "https://github.com/Nappiz/PortoNafiz", 
    colSpan: 2 
  },
  { 
    id: 5, 
    title: "Antasena Dashboard", 
    desc: "Internal team management system for ITS Antasena Team.", 
    img: "/p22.png", 
    tags: ["Laravel", "MySQL", "Bootstrap"], 
    link: "https://antasenaits.com", 
    repo: "", 
    colSpan: 1 
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative bg-[#020617] overflow-hidden">
      
      <div className="absolute inset-0 -z-10 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.1),_rgba(2,6,23,1)_70%)]" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs md:text-sm tracking-widest mb-4">
                <span className="text-blue-600">04.</span>
                <span>// PROJECT_GALLERY</span>
                <div className="h-px w-12 bg-blue-900" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Selected <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    Deployments
                </span>
            </h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
               A collection of systems I've architected, built, and shipped into production.
            </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
          {PROJECTS.map((project, i) => (
            <SpotlightCard key={i} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SpotlightCard({ project }: { project: any }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative border border-blue-900/30 bg-[#0f172a]/50 overflow-hidden rounded-2xl hover:border-cyan-500/50 transition-colors duration-500 ${
        project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
      }`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col">
        <div className="absolute top-4 left-4 z-20 flex gap-2">
            <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                PRJ-{project.id.toString().padStart(2, '0')}
            </div>
        </div>

        <div className="relative h-full w-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
           
           <Image
             src={project.img || "/placeholder.jpg"} 
             alt={project.title}
             fill
             className="object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            
            <div className="flex justify-between items-end mb-3">
                <div className="flex-1 pr-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-4 group-hover:text-white transition-colors">
                        {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] font-mono font-medium px-2 py-1 rounded border border-blue-500/30 bg-blue-900/30 text-blue-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            className="p-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                            title="Visit Live Site"
                        >
                            <FaArrowUpRightFromSquare />
                        </a>
                    )}
                    {project.repo && (
                        <a 
                            href={project.repo} 
                            target="_blank" 
                            className="p-3 bg-slate-800 hover:bg-slate-700 border border-white/10 text-white rounded-lg transition-all hover:scale-105"
                            title="View Code"
                        >
                            <FaGithub />
                        </a>
                    )}
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}