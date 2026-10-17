"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function EditorialPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Spotlight coordinates relative to photo container
  const [spotlightPos, setSpotlightPos] = useState({ x: 190, y: 220 });

  // 3D Parallax Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 240, mass: 0.6 };
  const tiltX = useSpring(mouseY, springConfig);
  const tiltY = useSpring(mouseX, springConfig);

  // Global Scroll tracking
  const { scrollYProgress } = useScroll();

  // Scroll Transforms for Editorial Portrait
  const photoScale = useTransform(scrollYProgress, [0, 0.22, 0.55], [1, 0.8, 0.32]);
  const photoY = useTransform(scrollYProgress, [0, 0.22, 0.55], [0, 40, -180]);
  const photoX = useTransform(scrollYProgress, [0, 0.22, 0.55], [0, 180, 420]);
  const avatarBorderRadius = useTransform(scrollYProgress, [0, 0.35, 0.55], ["24px", "32px", "9999px"]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    return () => {
      window.removeEventListener("resize", checkScreen);
      mediaQuery.removeEventListener("change", motionListener);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    // Tilt angle -6deg to +6deg
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set(((x - centerX) / centerX) * 6);
    mouseY.set(-((y - centerY) / centerY) * 6);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Static Fallback for reduced motion
  if (reducedMotion) {
    return (
      <div className="relative w-[320px] h-[440px] sm:w-[380px] sm:h-[520px] mx-auto overflow-hidden rounded-2xl vignette-bottom">
        <Image
          src="/images/me.png"
          alt="Sibam Sasmal Portrait"
          fill
          priority
          sizes="(max-width: 640px) 320px, 380px"
          className="object-cover object-top filter grayscale contrast-125"
        />
      </div>
    );
  }

  // Mobile clean view
  if (isMobile) {
    return (
      <div className="relative w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] mx-auto my-6 overflow-hidden rounded-2xl vignette-bottom">
        {/* Subtle dual rim light */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-neon-green/20 via-transparent to-neon-blue/20 mix-blend-screen" />
        
        {/* Grayscale Base Portrait */}
        <Image
          src="/images/me.png"
          alt="Sibam Sasmal Portrait"
          fill
          priority
          sizes="340px"
          className="object-cover object-top filter grayscale contrast-125 brightness-95"
        />

        {/* Halftone Dot Overlay */}
        <div className="absolute inset-0 halftone-pattern opacity-30 mix-blend-overlay pointer-events-none z-10" />
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale: photoScale,
        x: photoX,
        y: photoY,
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-[340px] h-[460px] xl:w-[400px] xl:h-[540px] mx-auto overflow-hidden cursor-default transition-all duration-300"
    >
      <motion.div
        style={{
          borderRadius: avatarBorderRadius,
        }}
        className="relative w-full h-full overflow-hidden vignette-bottom"
      >
        {/* 1. LAYER 1: Grayscale + High-Contrast Base Image */}
        <Image
          src="/images/me.png"
          alt="Sibam Sasmal Editorial Portrait"
          fill
          priority
          sizes="(max-width: 1280px) 340px, 400px"
          className="object-cover object-top filter grayscale contrast-125 brightness-95 transition-transform duration-700 ease-out"
        />

        {/* 2. LAYER 2: Halftone / Dithered Dot Pattern Overlay */}
        <div className="absolute inset-0 halftone-pattern opacity-35 mix-blend-overlay pointer-events-none z-10" />

        {/* 3. LAYER 3: Dual Neon Rim Light (Green on Left, Cyan on Right) */}
        <div className="absolute inset-0 pointer-events-none z-15 bg-gradient-to-r from-neon-green/25 via-transparent to-neon-blue/25 mix-blend-screen" />

        {/* 4. LAYER 4: Interactive Full-Color Spotlight on Hover */}
        <div
          className={`absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            maskImage: `radial-gradient(circle 140px at ${spotlightPos.x}px ${spotlightPos.y}px, black 25%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 140px at ${spotlightPos.x}px ${spotlightPos.y}px, black 25%, transparent 100%)`,
          }}
        >
          <Image
            src="/images/me.png"
            alt="Sibam Sasmal Full Color Reveal"
            fill
            sizes="(max-width: 1280px) 340px, 400px"
            className="object-cover object-top filter brightness-105 contrast-105"
          />
        </div>

        {/* Bottom Black Gradient Shadow to seamlessly blend shoulders into pure black */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-25 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

