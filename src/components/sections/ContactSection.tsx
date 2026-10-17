"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import confetti from "canvas-confetti";
import { ArrowUpRight, Copy, Check, Send, Sparkles, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const { personal, socials } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#39FF14", "#00F0FF", "#ffffff"],
    });

    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-6 border-b border-zinc-900">
        <span className="font-mono text-xs text-neon-green tracking-widestx2 uppercase block mb-2">
          05 / INITIATE CONTACT
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-none">
          Let&apos;s work <span className="italic">together.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Links & Email Copy */}
        <div className="lg:col-span-6 space-y-8">
          <p className="font-sans text-base sm:text-lg text-zinc-400 font-light max-w-md leading-relaxed">
            Have an engineering challenge, an internship role, or an ambitious AI project? I&apos;m always open to discussing new opportunities.
          </p>

          {/* Large Copyable Email Card */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-neon-green/40 transition-colors flex items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest block mb-1">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="font-serif text-xl sm:text-2xl text-white hover:text-neon-green transition-colors"
              >
                {personal.email}
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-3 rounded-full bg-black border border-zinc-800 hover:border-neon-green text-zinc-400 hover:text-neon-green transition-all"
              title="Copy Email"
              aria-label="Copy Email"
            >
              {copied ? <Check className="w-4 h-4 text-neon-green" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest block">
              CHANNELS
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 hover:border-neon-green text-xs font-mono text-zinc-300 hover:text-neon-green transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 hover:border-neon-blue text-xs font-mono text-zinc-300 hover:text-neon-blue transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 hover:border-white text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
                <span>TWITTER</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Editorial Contact Form */}
        <div className="lg:col-span-6 editorial-card rounded-3xl p-7 sm:p-9">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Elena Rostova"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green text-sm text-white placeholder:text-zinc-600 transition-colors font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. elena@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder:text-zinc-600 transition-colors font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project, idea, or role..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green text-sm text-white placeholder:text-zinc-600 transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-neon-green text-black font-sans font-bold text-xs uppercase tracking-wider shadow-neon-subtle hover:bg-neon-green/90 transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Send Message</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            {submitted && (
              <p className="font-mono text-xs text-neon-green text-center pt-1">
                Opening your email client... Thank you!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

