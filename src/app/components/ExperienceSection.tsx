"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaTrophy, FaCalendar, FaLocationDot } from "react-icons/fa6";
import { clsx } from "clsx";

const EXPERIENCES = [
  { 
    id: 1, 
    role: "Founder", 
    company: "TC Mudah", 
    period: "2024 - Present", 
    type: "Full-Time",
    desc: "Built a tutoring platform from scratch using Next.js & FastAPI. Managing end-to-end business processes and scaling the student base.",
    tech: ["Next.js", "FastAPI", "PostgreSQL"]
  },
  { 
    id: 2, 
    role: "Web Dev Manager", 
    company: "IEEE ITS SB", 
    period: "2025 - Present", 
    type: "Organizational",
    desc: "Leading a squad of developers, overseeing project timelines, and ensuring code quality for organizational tools and event websites.",
    tech: ["Project Mgmt", "Code Review", "Next.js"]
  },
  { 
    id: 3, 
    role: "Backend Developer", 
    company: "Flexoo Software House", 
    period: "2023 - 2025", 
    type: "Freelance",
    desc: "Backend specialist focused on API performance, database optimization, and building robust microservices architectures.",
    tech: ["Go", "Laravel", "Redis"]
  },
  { 
    id: 4, 
    role: "Teaching Assistant of Fundamental Programming", 
    company: "Institut Teknologi Sepuluh Nopember", 
    period: "2024", 
    type: "Academic",
    desc: "Mentored 40+ students in Fundamental Programming. Conducted code reviews, graded practical exams, and drilled core algorithmic concepts (C/C++).",
    tech: ["C", "C++", "Algorithms", "Mentoring"]
  },
  { 
    id: 5, 
    role: "Web Intern", 
    company: "Antasena ITS", 
    period: "2024", 
    type: "Internship",
    desc: "Fullstack implementation for team management dashboard using Laravel & MySQL. Improved data accessibility for the team.",
    tech: ["Laravel", "MySQL", "Bootstrap"]
  },
];

const ACHIEVEMENTS = [
  {
    id: "a1",
    role: "Codeforces Specialist",
    company: "Rating ~1802",
    period: "Current",
    type: "Competitive",
    desc: "Consistently solving complex algorithmic problems. Ranked in top percentile of competitive programmers in the region.",
    tech: ["C++", "Algorithms", "Data Structures"]
  },
  {
    id: "a2",
    role: "1st Place Winner",
    company: "SECOMP Telkom Univ",
    period: "2025",
    type: "Contest",
    desc: "Secured first place in a national level software engineering and competitive programming competition.",
    tech: ["Teamwork", "Problem Solving"]
  },
  {
    id: "a3",
    role: "1st Place Winner",
    company: "CODE 5.0 Amikom",
    period: "2025",
    type: "Contest",
    desc: "Champion of the CODE 5.0 Hackathon/CP event, demonstrating rapid prototyping and logic skills.",
    tech: ["C++", "Logic"]
  },
  {
    id: "a4",
    role: "Finalist",
    company: "Recursion 1.0",
    period: "2025",
    type: "Contest",
    desc: "Reached the final stage of Recursion 1.0, competing against top university students nationwide.",
    tech: ["C++", "Dynamic Prog"]
  }
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "achievement">("experience");

  const data = activeTab === "experience" ? EXPERIENCES : ACHIEVEMENTS;

  return (
    <section id="experience" className="relative isolate py-24 md:py-32 bg-[#020617] overflow-hidden">
      
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_rgba(2,6,23,1)_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute left-[-10%] top-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs md:text-sm tracking-widest mb-4">
                <span className="text-blue-600">03.</span>
                <span>// CAREER_PATH</span>
                <div className="h-px w-12 bg-blue-900" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    Journey
                </span>
            </h2>

            <div className="p-1 rounded-xl bg-slate-900/80 border border-blue-900/30 backdrop-blur-md inline-flex relative">
                <TabButton 
                    label="Experience" 
                    icon={<FaBriefcase />} 
                    isActive={activeTab === "experience"} 
                    onClick={() => setActiveTab("experience")} 
                />
                <TabButton 
                    label="Achievements" 
                    icon={<FaTrophy />} 
                    isActive={activeTab === "achievement"} 
                    onClick={() => setActiveTab("achievement")} 
                />
            </div>
        </div>

        <div className="relative min-h-[400px]">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-900/20 to-transparent hidden md:block" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                >
                    {data.map((item, idx) => (
                        <TimelineCard 
                            key={item.id} 
                            item={item} 
                            isEven={idx % 2 === 0} 
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}


function TabButton({ label, icon, isActive, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "cursor-pointer relative flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all z-10",
                isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="cursor-pointer absolute inset-0 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <span className="relative z-10 text-base">{icon}</span>
            <span className="relative z-10">{label}</span>
        </button>
    );
}

function TimelineCard({ item, isEven }: { item: any; isEven: boolean }) {
    return (
        <div className={`relative flex flex-col md:flex-row items-center ${isEven ? "" : "md:flex-row-reverse"}`}>            
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#020617] z-20 hidden md:block shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20" />
            </div>

            <div className="flex-1 w-full md:w-1/2" />

            <div className="flex-1 w-full md:w-1/2 px-0 md:px-10 py-2">
                <div className="group relative p-6 rounded-2xl bg-[#0b1121]/60 border border-blue-900/30 backdrop-blur-sm transition-all hover:bg-[#0f172a] hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                    
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                                {item.role}
                            </h3>
                            <div className="text-blue-400 font-medium text-sm flex items-center gap-2 mt-1">
                                <span>@ {item.company}</span>
                            </div>
                        </div>
                        <span className="text-xs font-mono text-slate-500 bg-blue-950/30 border border-blue-900/30 px-2 py-1 rounded">
                            {item.period}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-slate-500">
                           <FaBriefcase className="text-xs" /> {item.type}
                        </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 border-l-2 border-blue-900/50 pl-3 group-hover:border-cyan-500/50 transition-colors">
                        {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t: string) => (
                            <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono text-blue-300 bg-blue-900/20 border border-blue-800/30 group-hover:border-cyan-500/30 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}