"use client";

import { motion } from "framer-motion";
import { 
  FaBolt, FaShieldHalved, FaRocket, 
  FaCheckDouble, FaRegClock, FaCode
} from "react-icons/fa6";

const TRAITS = [
  { 
    icon: <FaRocket />, 
    title: "High Performance", 
    desc: "I obsess over Core Web Vitals. Your site won't just look good; it will load instantly and run smoothly even on low-end devices." 
  },
  { 
    icon: <FaShieldHalved />, 
    title: "Reliable & Scalable", 
    desc: "Built with future growth in mind. I write clean, modular code that is easy to maintain and ready to scale as your business grows." 
  },
  { 
    icon: <FaCheckDouble />, 
    title: "Pixel-Perfect Ops", 
    desc: "I bridge the gap between design and engineering. Every pixel is calculated, every animation is fluid, and every interaction feels natural." 
  }
];

const STATS = [
  { label: "PROJECT_SUCCESS_RATE", value: "100%", color: "text-green-400" },
  { label: "AVG_RESPONSE_TIME", value: "< 2 Hrs", color: "text-cyan-400" },
  { label: "CODE_QUALITY", value: "A++", color: "text-blue-400" },
  { label: "DELIVERY", value: "ON_TIME", color: "text-purple-400" },
];

export default function WhyHireMeSection() {
  return (
    <section id="why" className="relative py-32 bg-[#020617] overflow-hidden">
      
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1),_rgba(2,6,23,1)_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs md:text-sm tracking-widest mb-4">
                <span className="text-blue-600">05.</span>
                <span>// CORE_VALUES</span>
                <div className="h-px w-12 bg-blue-900" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Why Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    The Architect?
                </span>
            </h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
               I don't just write code. I engineer solutions that solve real business problems with precision and speed.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAITS.map((trait, idx) => (
                <ValueCard key={idx} trait={trait} index={idx} />
            ))}
        </div>

        <div className="mt-20 border-t border-blue-900/30 pt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {STATS.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group cursor-default">
                        <div className="text-[10px] md:text-xs font-mono text-slate-500 mb-2 tracking-widest group-hover:text-cyan-500 transition-colors">
                            [{stat.label}]
                        </div>
                        <div className={`text-2xl md:text-3xl font-black ${stat.color} font-mono drop-shadow-lg`}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}

function ValueCard({ trait, index }: { trait: any, index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 bg-[#0b1121]/50 border border-blue-900/20 backdrop-blur-sm transition-all duration-500 hover:bg-[#0f172a] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
        >
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/30 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/30 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/30 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/30 group-hover:border-cyan-400 transition-colors" />

            <div className="w-14 h-14 rounded-lg bg-blue-950/50 flex items-center justify-center text-2xl text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-900/20 transition-all duration-300 border border-blue-900/30 group-hover:border-cyan-500/50">
                {trait.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {trait.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                {trait.desc}
            </p>
        </motion.div>
    )
}