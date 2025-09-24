/**
 * SectionDivider — dual wave, seamless, neon gradient.
 * Taruh persis di antara dua section (tanpa margin tambahan).
 * Secara default sudah overlap sedikit ke atas & bawah agar tidak ada celah gelap.
 */
export default function SectionDivider() {
  return (
    <div className="relative -my-8 h-40 md:h-44 isolate">
      {/* soft backdrop to blend sections */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 blur-xl" />

      {/* TOP wave (menghadap ke bawah) */}
      <svg
        className="absolute top-0 left-0 w-full h-[55%]"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="sdg1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"  stopColor="#67e8f9" />
            <stop offset="45%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="sdbg" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* glow fill (tipis, no black strip) */}
        <path
          d="M0,80 C220,160 460,10 720,90 C980,170 1220,40 1440,100 L1440,0 L0,0 Z"
          fill="url(#sdg1)"
          opacity=".14"
          filter="url(#sdbg)"
        />
        {/* crisp line */}
        <path
          d="M0,95 C230,175 460,25 720,105 C980,185 1220,55 1440,115"
          fill="none"
          stroke="url(#sdg1)"
          strokeWidth="2"
          opacity=".75"
        />
      </svg>

      {/* BOTTOM wave (menghadap ke atas) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[55%] rotate-180"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="sdg2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"  stopColor="#67e8f9" />
            <stop offset="45%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="sdbg2" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <path
          d="M0,80 C220,160 460,10 720,90 C980,170 1220,40 1440,100 L1440,0 L0,0 Z"
          fill="url(#sdg2)"
          opacity=".14"
          filter="url(#sdbg2)"
        />
        <path
          d="M0,95 C230,175 460,25 720,105 C980,185 1220,55 1440,115"
          fill="none"
          stroke="url(#sdg2)"
          strokeWidth="2"
          opacity=".75"
        />
      </svg>

      {/* subtle edge highlights so the seam disappears */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
  );
}
