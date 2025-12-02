"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaTerminal } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative py-32 overflow-hidden bg-[#020617]" 
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(14,165,233,0.05),_rgba(2,6,23,1)_70%)]" />         
         <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020617] to-transparent z-10" />
         <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 mix-blend-screen" />         
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            style={{ y: yImg, opacity }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-700 to-cyan-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700" />            
            <div className="relative rounded-2xl overflow-hidden border border-blue-900/30 bg-[#0b1121]/80 backdrop-blur-sm">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 z-20" />                
                <div className="relative aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="/foto.jpg" 
                        alt="Nafiz Profile"
                        fill
                        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                </div>

            </div>
          </motion.div>

          <motion.div 
            style={{ y: yContent, opacity }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs md:text-sm tracking-widest mb-4">
                    <span className="text-blue-600">01.</span>
                    <span>// ABOUT_ME</span>
                    <div className="h-px w-12 bg-blue-900" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    Beyond the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        Lines of Code
                    </span>
                </h2>
            </div>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                    I'm a <span className="text-slate-200 font-semibold border-b border-blue-500/30">Software Engineer</span> & <span className="text-slate-200 font-semibold border-b border-blue-500/30">Data Scientist</span> based in Surabaya. 
                    My passion lies in dissecting complex problems and reassembling them into efficient, compiled solutions.
                </p>
                <p>
                    Started with <span className="text-blue-400 font-medium">Competitive Programming</span> (which taught me that Time Compelxity with Big O Notation's matters), 
                     I now architect scalable web systems and <span className="text-cyan-300 font-semibold">data-driven solutions.</span>
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <ModuleCard 
                    icon={<FaCode />} 
                    title="Frontend Eng." 
                    stack="Next.js, Vue.js, Tailwind" 
                    color="text-cyan-400"
                />
                <ModuleCard 
                    icon={<FaServer />} 
                    title="Backend Arch." 
                    stack="Go, FastAPI, Node JS, Laravel, PostgreSQL" 
                    color="text-blue-500"
                />
                <ModuleCard 
                    icon={<SiCplusplus />} 
                    title="Algorithms" 
                    stack="C++, Data Structures" 
                    color="text-indigo-400"
                />
                <ModuleCard 
                    icon={<FaBrain />} 
                    title="Data Scientist" 
                    stack="Python, Data Scrapping, Data Preparation, EDA, Preprocessing, Modelling" 
                    color="text-purple-400"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const ModuleCard = ({ icon, title, stack, color }: { icon: any, title: string, stack: string, color: string }) => (
  <div className="group p-4 rounded-xl bg-[#0b1121]/50 border border-blue-900/20 hover:border-cyan-500/30 hover:bg-[#0f172a]/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
    <div className="flex items-start justify-between mb-3">
      <div className={`text-2xl ${color} bg-[#020617] p-2 rounded-lg border border-blue-900/30`}>
        {icon}
      </div>
      <FaTerminal className="text-blue-900/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div>
      <h4 className="text-slate-200 font-bold mb-1 group-hover:text-cyan-100 transition-colors">
        {title}
      </h4>
      <p className="text-xs text-slate-500 font-mono border-l-2 border-blue-900/30 pl-2 group-hover:border-cyan-500/50 group-hover:text-slate-400 transition-colors">
        {stack}
      </p>
    </div>
  </div>
);