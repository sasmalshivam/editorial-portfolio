import React from "react";
import CanvasWrapper from "@/components/canvas/CanvasWrapper";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Subtle React Three Fiber Background */}
      <CanvasWrapper />

      {/* Main Page Layout */}
      <div className="relative min-h-screen bg-black">
        <Navbar />

        <main className="flex flex-col">
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
