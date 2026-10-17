"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { personal, education, achievements, skills } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-6 border-b border-zinc-900">
        <span className="font-mono text-xs text-neon-green tracking-widestx2 uppercase block mb-2">
          03 / PHILOSOPHY &amp; BACKGROUND
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight max-w-3xl leading-tight">
          Engineering with <span className="italic">purpose</span>, precision, and human curiosity.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Editorial Bio Paragraphs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            {personal.aboutBio.map((p, idx) => (
              <p key={idx} className="text-zinc-300">
                {p}
              </p>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-900">
            {personal.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-900">
                <div className="font-serif text-3xl font-normal text-white">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Education Highlight */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-900 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-neon-green/10 border border-neon-green/30 text-neon-green">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-neon-blue uppercase tracking-wider">
                {education[0].period} • {education[0].score}
              </span>
              <h4 className="font-serif text-xl font-normal text-white mt-0.5">
                {education[0].institution}
              </h4>
              <p className="font-sans text-xs text-zinc-400 mt-1">
                {education[0].degree} — {education[0].location}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Achievements & Categorized Skills */}
        <div className="lg:col-span-5 space-y-8" id="skills">
          {/* Top Achievement Banner */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-neon-green/30 shadow-neon-subtle flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-neon-green/15 text-neon-green shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-neon-green uppercase tracking-widest font-bold">
                {achievements[0].badge}
              </span>
              <h4 className="font-serif text-lg font-normal text-white mt-1">
                {achievements[0].title}
              </h4>
              <p className="font-sans text-xs text-zinc-400 mt-1 leading-relaxed">
                {achievements[0].description}
              </p>
            </div>
          </div>

          {/* Skills Breakdown by Category */}
          <div className="space-y-6">
            <div className="font-mono text-xs text-zinc-400 tracking-widestx2 uppercase border-b border-zinc-900 pb-2">
              TECHNICAL TOOLBELT
            </div>

            {skills.map((cat) => (
              <div key={cat.category} className="space-y-2">
                <span className="font-mono text-[11px] text-neon-blue uppercase tracking-wider">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-neon-green/40 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-neon-green" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

