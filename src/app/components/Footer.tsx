"use client";

import { useState } from "react";
import Particles from "./Particles";
import WaveEdge from "./WaveEdge";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "badruzzamannafiz@gmail.com"; 
  const year = new Date().getFullYear();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {}
  };

  return (
    <footer id="contact" className="relative isolate overflow-hidden pt-28 md:pt-32 pb-16">
      <WaveEdge position="top" />

      <div className="absolute inset-0 -z-10 bg-ink bg-grid-faint bg-[length:36px_36px] bg-stars" />
      <Particles className="absolute inset-0 -z-10 pointer-events-none" density={0.85} linkOpacity={0.5} linkDistance={100} />

      <div className="pointer-events-none absolute -left-28 top-12 h-[28rem] w-[28rem] rounded-full blur-3xl bg-indigo-600/20" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-[30rem] w-[30rem] rounded-full blur-3xl bg-fuchsia-600/20" />

      <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_6px_rgba(34,211,238,.55)]" />
          CONTACT
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold grad-text">
          Let’s build something delightful together ✨
        </h2>
        <p className="mt-3 text-slate-300/85 max-w-2xl mx-auto">
          Have a project or ideas? Contact Me on email, DM, atau WhatsApp.
        </p>

        <div className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium glass border border-white/10">
            <FiMail className="opacity-90" />
            {email}
          </span>
          <a href={`mailto:${email}`}
            className="ml-auto rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-500/90 hover:to-fuchsia-500/90"
          >
            Send Email
          </a>
          <button
            onClick={copy}
            className="cursor-pointer rounded-xl px-3 py-2 text-sm font-medium border border-white/15 glass inline-flex items-center gap-2"
            aria-label="Copy email"
            title="Copy email"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Social href="https://github.com/yourusername" label="GitHub">
            <FaGithub />
          </Social>
          <Social href="https://www.linkedin.com/in/yourusername" label="LinkedIn">
            <FaLinkedin />
          </Social>
          <Social href="https://x.com/yourusername" label="X (Twitter)">
            <FaXTwitter />
          </Social>
          <Social href="https://instagram.com/yourusername" label="Instagram">
            <FaInstagram />
          </Social>
          <Social href="https://wa.me/6281234567890" label="WhatsApp">
            <TbBrandWhatsapp />
          </Social>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-sm text-slate-400/90">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,.35)]" />
              Nafiz
            </span>
            <span>© {year}. Built with Next.js, TS, Tailwind.</span>
          </div>

          <nav className="flex flex-wrap items-center gap-3">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Why Hire Me", "#why"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-lg px-3 py-1.5 hover:bg-white/10 border border-transparent hover:border-white/10 transition"
              >
                {label}
              </a>
            ))}
            <a href="#top" className="rounded-lg px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10">
              Back to top
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      title={label}
      className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3 inline-flex items-center justify-center text-slate-200/95 hover:bg-white/10 transition"
    >
      <span className="text-xl">{children}</span>
    </a>
  );
}
