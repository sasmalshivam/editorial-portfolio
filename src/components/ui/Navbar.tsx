"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-8 pointer-events-none transition-all duration-300">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl sm:rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0b0b0b]/85 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(57,255,20,0.12)] scale-[0.98]"
              : "bg-[#0b0b0b]/80 backdrop-blur-md border border-white/8"
          }`}
        >
          {/* Left: Name in elegant high-contrast Serif */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-tight text-white group-hover:text-neon-green transition-colors">
              {PORTFOLIO_DATA.personal.firstName}{" "}
              <span className="italic">{PORTFOLIO_DATA.personal.lastName}</span>
            </span>
          </a>

          {/* Center-Right: Navigation Links in small clean sans */}
          <div className="hidden md:flex items-center gap-7 text-xs font-sans font-medium text-zinc-400">
            {PORTFOLIO_DATA.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Far Right: 'Let's talk ↗' pill button with neon border */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-white/15 hover:border-neon-green text-xs font-sans font-medium text-white hover:text-neon-green transition-all shadow-sm hover:shadow-[0_0_12px_rgba(57,255,20,0.25)]"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-neon-green" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                Navigation
              </span>
              {PORTFOLIO_DATA.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-sans text-zinc-300 hover:text-neon-green transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-zinc-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-neon-green/10 border border-neon-green/40 text-xs font-mono font-medium text-neon-green flex items-center justify-center gap-1.5 shadow-neon-subtle"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

