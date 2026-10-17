"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import EditorialPortrait from "@/components/ui/EditorialPortrait";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  // Stagger animation container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col justify-between flex-1"
      >
        {/* Top Header Labels (Left & Right) */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 text-[10px] sm:text-[11px] font-mono tracking-widestx2 uppercase"
        >
          {/* Top-Left: Tagline Tags with glowing neon dot */}
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_8px_#39ff14] animate-pulse" />
            <span>{personal.taglineTags}</span>
          </div>

          {/* Top-Right: Location Line */}
          <div className="text-zinc-500 font-mono tracking-widestx2">
            {personal.locationLine}
          </div>
        </motion.div>

        {/* Center Stage: Left Presence Column + Center Portrait */}
        <div className="relative w-full my-auto py-4">
          {/* Left-Middle Presence Column (Mirroring reference) */}
          <motion.div
            variants={item}
            className="hidden lg:flex flex-col items-start absolute left-0 top-1/2 -translate-y-1/2 z-20 space-y-4 font-mono"
          >
            <div className="text-[11px] tracking-widestx2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
              {personal.presenceLabel}
            </div>

            <Plus className="w-3.5 h-3.5 text-zinc-600 stroke-[2]" />

            <div className="flex flex-col space-y-1 text-[10px] tracking-widestx3 text-zinc-500 uppercase">
              {personal.presenceList.map((word) => (
                <span key={word} className="hover:text-zinc-300 transition-colors">
                  {word}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Center Portrait with Halftone & Spotlight */}
          <motion.div variants={item} className="w-full flex justify-center">
            <EditorialPortrait />
          </motion.div>

          {/* Overlapping Bottom Area: Caption + Giant Serif Name + Subtitle + CTAs */}
          <motion.div
            variants={item}
            className="relative -mt-16 sm:-mt-24 md:-mt-32 z-30 flex flex-col items-center text-center space-y-4"
          >
            {/* Small uppercase mono caption */}
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widestx3 uppercase text-zinc-400 drop-shadow-md">
              {personal.photoCaption}
            </span>

            {/* Giant High-Contrast Editorial Serif Name */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[130px] font-normal tracking-tight text-white leading-none select-none drop-shadow-2xl">
              <span>{personal.firstName} </span>
              <span className="italic font-normal">{personal.lastName}</span>
            </h1>

            {/* Two-Line Subtitle under Name */}
            <div className="max-w-xl text-zinc-400 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed pt-1">
              <p>{personal.subtitleLine1}</p>
              <p>{personal.subtitleLine2}</p>
            </div>

            {/* Two CTAs: Outlined Pill & Underlined Link */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-white/20 hover:border-neon-green text-xs font-sans font-medium text-white hover:text-neon-green transition-all shadow-sm hover:shadow-neon-subtle group"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-neon-green transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-zinc-300 hover:text-white transition-colors border-b border-zinc-700 hover:border-neon-blue pb-0.5 group"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-neon-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Edge Micro Labels */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-8 text-[10px] font-mono tracking-widestx2 text-zinc-600 uppercase border-t border-zinc-900/80"
        >
          <div className="flex items-center gap-1.5 hover:text-zinc-400 transition-colors">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3 h-3 text-neon-green" />
          </div>

          <div className="text-zinc-500">
            BUILDING & TRAINING SINCE 2023
          </div>

          <div className="hover:text-zinc-400 transition-colors hidden sm:block">
            AVAILABLE FOR HIRE & COLLABORATIONS
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

