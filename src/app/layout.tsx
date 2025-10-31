import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Nafiz",
  description: "Quantum/Space themed portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
