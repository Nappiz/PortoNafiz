import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Nafiz",
  description: "Quantum/Space themed portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen text-slate-200 antialiased selection:bg-indigo-500/30">
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}