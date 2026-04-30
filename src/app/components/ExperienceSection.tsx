"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaTrophy, FaCalendar, FaLocationDot } from "react-icons/fa6";
import { clsx } from "clsx";

const EXPERIENCES = [
    {
        id: 6,
        role: "Team Lead Manager of Artificial Intelligence Talent Factory",
        company: "Kementrian Komunikasi dan Digital",
        period: "2026 - Present",
        type: "Professional",
        desc: "Orchestrated the technical architecture and implementation of an Agentic AI and Retrieval-Augmented Generation (RAG) system utilizing, ensuring low-latency operations and high retrieval accuracy.",
        tech: ["AI", "Leadership", "Management"]
    },
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
        period: "2025 - 2026",
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
        role: "Website Development Intern",
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
        company: "Rating 1739 (max. master, 2117)",
        period: "Current",
        type: "Competitive",
        desc: "Consistently solving complex algorithmic problems. Ranked in top percentile of competitive programmers in the region.",
        tech: ["C++", "Algorithms", "Data Structures"]
    },
    {
        id: "a2",
        role: "1st Place Competitive Programming Winner",
        company: "SECOMP Telkom Univ",
        period: "2025",
        type: "Contest",
        desc: "Secured first place in a national level software engineering and competitive programming competition.",
        tech: ["Teamwork", "Problem Solving"]
    },
    {
        id: "a3",
        role: "1st Place Competitive Programming Winner",
        company: "CODE 5.0 Amikom",
        period: "2025",
        type: "Contest",
        desc: "Champion of the CODE 5.0 Competitive Programming event, demonstrating rapid prototyping and logic skills.",
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
        <section id="experience" className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    <div className="lg:w-1/3 flex flex-col lg:sticky lg:top-32 h-fit">
                        <div className="inline-flex items-center gap-3 text-indigo-400 font-mono text-sm tracking-widest mb-6">
                            <span className="w-12 h-[2px] bg-indigo-500/50" />
                            <span>CAREER_PATH</span>
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                            My <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-sm">
                                Professional <br /> Journey
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            A timeline of my professional experience, achievements, and the impactful projects I've had the privilege to work on.
                        </p>

                        <div className="flex flex-col gap-3">
                            <TabButton
                                label="Work Experience"
                                icon={<FaBriefcase />}
                                isActive={activeTab === "experience"}
                                onClick={() => setActiveTab("experience")}
                            />
                            <TabButton
                                label="Achievements & Awards"
                                icon={<FaTrophy />}
                                isActive={activeTab === "achievement"}
                                onClick={() => setActiveTab("achievement")}
                            />
                        </div>
                    </div>

                    <div className="lg:w-2/3 relative mt-8 lg:mt-0">
                        <div className="absolute left-[15px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 via-cyan-500/20 to-transparent" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, staggerChildren: 0.1 }}
                                className="space-y-10"
                            >
                                {data.map((item, idx) => (
                                    <TimelineCard key={item.id} item={item} index={idx} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

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
                "group relative flex items-center gap-4 px-6 py-4 rounded-2xl w-full text-left transition-all overflow-hidden cursor-pointer",
                isActive
                    ? "bg-white/[0.05] border border-white/[0.1] shadow-xl"
                    : "hover:bg-white/[0.02] border border-transparent"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <div className={clsx(
                "relative z-10 flex items-center justify-center w-10 h-10 rounded-xl transition-colors",
                isActive ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]" : "bg-white/5 text-slate-400 group-hover:text-indigo-400 group-hover:bg-white/10"
            )}>
                {icon}
            </div>
            <span className={clsx(
                "relative z-10 font-semibold text-lg transition-colors",
                isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
            )}>
                {label}
            </span>
        </button>
    );
}

function TimelineCard({ item, index }: { item: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12 sm:pl-16"
        >
            {/* Timeline Dot */}
            <div className="absolute left-[11px] top-6 w-[10px] h-[10px] rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)] z-10 ring-4 ring-[#020617]" />

            <div className="group relative bg-[#0B1121]/80 backdrop-blur-md border border-white/[0.05] rounded-3xl p-6 sm:p-8 hover:bg-[#0f172a] transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:-translate-y-1 overflow-hidden">

                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-wide">
                            <FaCalendar className="text-[10px]" />
                            {item.period}
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <FaBriefcase className="text-indigo-400/70" />
                            {item.type}
                        </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                        {item.role}
                    </h3>

                    <div className="text-lg font-medium text-cyan-400 mb-6 flex items-center gap-2">
                        <span>@ {item.company}</span>
                    </div>

                    <p className="text-slate-300/80 leading-relaxed text-sm sm:text-base mb-8">
                        {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t: string) => (
                            <span
                                key={t}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-200 transition-colors duration-300"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
