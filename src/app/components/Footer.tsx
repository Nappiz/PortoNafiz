"use client";

import { useState } from "react";
import Image from "next/image"; 
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FiCopy, FiCheck, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "badruzzamannafiz@gmail.com"; 
  const year = new Date().getFullYear();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <footer id="contact" className="relative pt-32 pb-10 bg-[#020617] overflow-hidden border-t border-blue-900/30">
      
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">        
        <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
                OPEN FOR OPPORTUNITIES
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-10">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    THE FUTURE
                </span>
            </h2>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                
                <button
                    onClick={handleCopy}
                    className="relative flex items-center gap-4 px-6 md:px-8 py-4 bg-[#0b1121] border border-blue-800/50 rounded-lg hover:bg-[#0f172a] hover:border-cyan-500/50 transition-all duration-300 min-w-[300px] md:min-w-[400px] justify-between group/btn"
                >
                    <div className="flex items-center gap-3 text-slate-400 font-mono text-sm md:text-base">
                        <span className="text-cyan-500">➜</span>
                        <span className="text-blue-300">~</span>
                        <span className="group-hover/btn:text-white transition-colors">
                            mailto:<span className="text-slate-200">{email}</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                        {copied ? (
                            <span className="text-green-400 flex items-center gap-1">
                                <FiCheck /> Copied
                            </span>
                        ) : (
                            <span className="cursor-pointer text-slate-500 group-hover/btn:text-cyan-400 transition-colors flex items-center gap-1">
                                <FiCopy /> Copy
                            </span>
                        )}
                    </div>
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 border-t border-blue-900/30 pt-16 pb-12">
            <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center gap-3 mb-4 group w-fit">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                        <Image 
                            src="/logo.png" 
                            alt="Nafiz Logo" 
                            width={32} 
                            height={32} 
                            className="object-contain relative z-10"
                        />
                    </div>
                    <span className="text-xl font-bold text-slate-200 tracking-tight group-hover:text-white transition-colors">
                        Nafiz.dev
                    </span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                    Software Engineer & Data Scientist based in Surabaya that lies in dissecting complex problems and reassembling them into efficient, compiled solutions.
                </p>
            </div>

            <div>
                <h4 className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-6">[ SITEMAP ]</h4>
                <ul className="space-y-3">
                    {['About', 'Experience', 'Projects', 'Why Hire Me'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-900 group-hover:bg-cyan-400 transition-colors" />
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-6">[ CONNECT ]</h4>
                <div className="flex flex-col gap-3">
                    <SocialLink href="https://github.com/Nappiz" label="GitHub" icon={<FaGithub />} />
                    <SocialLink href="https://www.linkedin.com/in/badruzzaman-nafiz-4aa41821b/" label="LinkedIn" icon={<FaLinkedin />} />
                    <SocialLink href="https://instagram.com/Nappiz_" label="Instagram" icon={<FaInstagram />} />
                    <SocialLink href="https://wa.me/6281519291757" label="WhatsApp" icon={<FaWhatsapp />} />
                </div>
            </div>
        </div>

        <div className="border-t border-blue-900/30 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>SYSTEM STATUS: ONLINE</span>
            </div>
            
            <div className="text-center md:text-right">
                <p>&copy; {year} Badruzzaman Nafiz. All rights reserved.</p>
            </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }: { href: string, label: string, icon: any }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-blue-900/30"
        >
            <div className="flex items-center gap-3 text-slate-400 group-hover:text-white transition-colors">
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
            </div>
            <FiArrowUpRight className="text-slate-600 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300" />
        </a>
    )
}