"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personal, navigation } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-black z-10 py-12 px-4 sm:px-8">
      {/* Thin gradient highlight line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neon-green/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
        {/* Left: Name & Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-serif text-base text-white">
            {personal.firstName} <span className="italic">{personal.lastName}</span>
          </span>
          <span className="text-zinc-700">/</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-400 hover:text-neon-green transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-widest text-zinc-600 hidden sm:inline">
            DESIGNED &amp; ENGINEERED IN 2026
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-950 border border-zinc-800 hover:border-neon-green text-zinc-400 hover:text-neon-green transition-all"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

