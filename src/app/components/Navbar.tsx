"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset dikit

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4`}
      >
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled || mobileOpen
              ? "bg-[#030014]/70 border border-white/10 backdrop-blur-xl shadow-lg shadow-indigo-500/10 w-full max-w-4xl"
              : "bg-transparent border border-transparent w-full max-w-6xl"
          }`}
        >
          <Link href="/" className="relative flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                
                <Image 
                    src="/logo.png" 
                    alt="Nafiz Logo" 
                    width={32} 
                    height={32} 
                    className="object-contain relative z-10"
                />
            </div>
            <span className="hidden sm:block font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors">
              Nafiz.dev
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive 
                        ? "text-white bg-white/10" 
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                        <motion.span 
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full border border-white/10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                  </Link>
                );
            })}
            
            <div className="ml-4 pl-4 border-l border-white/10">
                <a
                  href="/resume2.pdf"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all active:scale-95"
                >
                  Resume
                </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-200 text-2xl p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-3xl bg-[#0b0b1e]/95 border border-white/10 backdrop-blur-2xl shadow-2xl md:hidden ring-1 ring-white/5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="p-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex justify-between items-center group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400">→</span>
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-2" />
              
              <a 
                href="/resume2.pdf" 
                className="text-center py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 active:scale-95 transition-transform"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}