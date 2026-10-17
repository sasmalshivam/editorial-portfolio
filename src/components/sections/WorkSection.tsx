"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

export default function WorkSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="work" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header with Editorial Serif & Mono Number */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-zinc-900">
        <div>
          <span className="font-mono text-xs text-neon-green tracking-widestx2 uppercase block mb-2">
            02 / SELECTED WORK
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Featured <span className="italic">Creations</span> &amp; Systems
          </h2>
        </div>
        <p className="text-zinc-500 font-mono text-xs max-w-xs sm:text-right">
          Production computer vision, deep learning, and scalable web architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`editorial-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden ${
              project.featured && idx === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Top Bar: Project Number & Category */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-900/80">
              <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-700 group-hover:text-neon-green transition-colors">
                {project.number}
              </span>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-neon-green px-2.5 py-1 rounded-full bg-neon-green/10 border border-neon-green/30">
                    <Sparkles className="w-3 h-3 text-neon-green" />
                    FEATURED
                  </span>
                )}
              </div>
            </div>

            {/* Middle: Title & Description */}
            <div className="py-6 space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-neon-green transition-colors flex items-center justify-between gap-4">
                <span>{project.title}</span>
                <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-neon-green transition-all group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
              </h3>
              <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 pt-2 font-sans text-xs text-zinc-300">
                {project.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Bar: Tech Stack & Repository Links */}
            <div className="pt-6 border-t border-zinc-900/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>SOURCE</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

