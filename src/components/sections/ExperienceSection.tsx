"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { experience, achievements } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-6 border-b border-zinc-900">
        <span className="font-mono text-xs text-neon-green tracking-widestx2 uppercase block mb-2">
          04 / CAREER MILESTONES
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
          Experience &amp; <span className="italic">Trajectory</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Timeline */}
        <div className="lg:col-span-7">
          <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black border border-neon-green flex items-center justify-center text-neon-green shadow-neon-subtle">
                  <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                </div>

                {/* Card */}
                <div className="editorial-card rounded-3xl p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-zinc-900">
                    <div>
                      <h4 className="font-serif text-2xl font-normal text-white group-hover:text-neon-green transition-colors">
                        {exp.role}
                      </h4>
                      <p className="font-mono text-xs text-neon-blue mt-0.5">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1 text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-neon-green" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-black border border-zinc-900 text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Honors & Certifications */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-mono text-xs text-zinc-400 tracking-widestx2 uppercase pb-2 border-b border-zinc-900">
            AWARDS &amp; HONORS
          </div>

          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="editorial-card rounded-2xl p-5 space-y-1.5 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-neon-green uppercase tracking-widest font-bold">
                  {ach.badge}
                </span>
                <span className="font-mono text-[10px] text-zinc-500">{ach.year}</span>
              </div>
              <h4 className="font-serif text-lg font-normal text-white group-hover:text-neon-green transition-colors">
                {ach.title}
              </h4>
              <p className="font-mono text-[11px] text-zinc-500">{ach.organization}</p>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed pt-1 font-light">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

