"use client";

import { motion } from "framer-motion";
import { FaTerminal, FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-20">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(14,165,233,0.15),_rgba(2,6,23,1)_70%)]" />
        
        <motion.div 
            animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" 
        />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">        
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 order-2 lg:order-1">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-900/10 text-blue-300 text-[10px] md:text-xs font-mono mb-6 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    AVAILABLE FOR HIRE
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-6xl xl:text-[4.5rem] font-black tracking-tighter text-white mb-6 leading-none"
                >
                    <span className="block text-slate-200 mb-2">BADRUZZAMAN</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                        NAFIZ
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-slate-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed"
                >
                    Fullstack Engineer crafting high-performance systems with <span className="text-cyan-300 font-semibold">Next.js</span> and <span className="text-blue-400 font-semibold">Go</span>. 
                    I bridge the gap between complex backends and aesthetic frontends.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
                >
                    <a href="#projects" className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm">
                        View Projects <FaArrowRight />
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-6 py-3 text-blue-200 border border-blue-500/20 hover:bg-blue-500/10 rounded-lg transition-all font-mono text-sm text-center">
                        sh contact.sh
                    </a>
                </motion.div>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0 order-1 lg:order-2">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative z-10 w-full max-w-lg"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-2xl opacity-10" />

                        <div className="relative rounded-xl border border-slate-700/80 bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-900/80">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-mono">
                                    <FaTerminal className="text-blue-400" /> nafiz.config.ts
                                </div>
                            </div>

                            <div className="p-5 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                                <div className="text-slate-300 flex flex-col gap-1">
                                    <div><span className="text-purple-400">const</span> <span className="text-yellow-300">Developer</span> = {'{'}</div>
                                    <div className="pl-4">
                                        name: <span className="text-green-400">'Nafiz'</span>,
                                    </div>
                                    <div className="pl-4">
                                        role: <span className="text-green-400">'Fullstack Engineer'</span>,
                                    </div>
                                    <div className="pl-4">
                                        stack: [
                                            <span className="text-blue-400">'Next.js'</span>, 
                                            <span className="text-blue-400">'Go'</span>
                                        ],
                                    </div>
                                    <div className="pl-4 flex items-center gap-2">
                                        status: <span className="text-purple-400">async</span> () <span className="text-purple-400">=&gt;</span> {'{'}
                                    </div>
                                    <div className="pl-8 text-slate-400">
                                        <span className="text-purple-400">return</span> <span className="text-green-400">"Hired!"</span>;
                                    </div>
                                    <div className="pl-4">{'}'},</div>
                                    <div>{'}'};</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
    </section>
  );
}