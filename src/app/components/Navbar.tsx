"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type LinkItem = { href: `#${string}`; label: string };
const links: LinkItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Hire Me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  const smoothTo = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = (headerRef.current?.getBoundingClientRect().height ?? 0) + 8;
    const top = window.scrollY + el.getBoundingClientRect().top - headerH;

    setActive(id);
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      if (y < 60) setActive("");

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const headerH = (headerRef.current?.getBoundingClientRect().height ?? 0) + 12;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${Math.max(headerH, 64)}px 0px -45% 0px`,
        threshold: [0, 0.25, 0.4, 0.6, 0.8, 1],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const brand = useMemo(
    () => (
      <Link href="/" className="flex items-center gap-2 py-2">
        <span className="relative h-5 w-5 md:h-6 md:w-6">
          <Image
            src="/logo.png"
            alt="nafiz.dev logo"
            fill
            sizes="24px"
            priority
            className="object-contain"
          />
          <span className="pointer-events-none absolute inset-0 rounded-full blur-[8px] bg-ion/45" />
        </span>
        <span className="font-semibold tracking-wide">Nafiz</span>
      </Link>
    ),
    []
  );

  return (
    <header ref={headerRef} className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 rounded-r-full" style={{ width: `${progress}%` }}/>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <nav className={`rounded-2xl px-4 md:px-6 py-1.5 md:py-2.5 flex items-center justify-between border border-white/12 bg-transparent`}>
          {brand}
          <div className="hidden md:flex items-center gap-2 text-sm">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <button
                  key={l.href}
                  onClick={() => smoothTo(l.href)}
                  className={[
                    "relative px-3 py-2 rounded-lg transition cursor-pointer",
                    isActive
                      ? "border border-white/10"
                      : "opacity-80 hover:opacity-100 hover:bg-white/10",
                  ].join(" ")}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-[2px] h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-indigo-400/60 via-fuchsia-400/60 to-cyan-300/60 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="/resume.pdf" className="hidden sm:inline-flex rounded-xl border border-indigo-400/30 px-3.5 py-2 text-sm font-medium bg-gradient-to-r from-indigo-600/30 to-fuchsia-600/30 hover:from-indigo-600/45 hover:to-fuchsia-600/45 shadow-[0_0_30px_-10px_rgba(99,102,241,.9)]">
              Resume
            </a>
            <button aria-label="Open menu" onClick={() => setOpen((s) => !s)} className="md:hidden rounded-lg p-2 border border-white/10 hover:bg-white/10">
              <span className="block h-0.5 w-5 bg-white mb-1" />
              <span className="block h-0.5 w-5 bg-white mb-1" />
              <span className="block h-0.5 w-5 bg-white" />
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="absolute right-3 top-[72px] w-[calc(100%-24px)] max-w-sm rounded-2xl border border-white/12 bg-[rgba(20,22,34,.92)] p-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <button
                    key={l.href}
                    onClick={() => {
                      setOpen(false);
                      smoothTo(l.href);
                    }}
                    className={[
                      "w-full text-left rounded-xl px-3 py-3 transition cursor-pointer",
                      isActive ? "border border-white/10" : "hover:bg-white/10",
                    ].join(" ")}
                  >
                    {l.label}
                  </button>
                );
              })}
              <a href="/resume.pdf" className="mt-2 rounded-xl px-3 py-3 text-center font-medium bg-gradient-to-r from-indigo-600/40 to-fuchsia-600/40 hover:from-indigo-600/55 hover:to-fuchsia-600/55 border border-white/10">
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
