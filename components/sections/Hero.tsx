"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center py-20 md:py-28 overflow-hidden bg-bg-primary text-text-primary"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-text-primary/[0.02] dark:bg-text-primary/[0.015] blur-3xl" />
      </div>

      <div className="container-base grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          {/* Status Badge */}
          <div className="hero-fade-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border-base bg-bg-card w-fit hover:border-border-hover transition-colors">
            <span className="w-2 h-2 rounded-full bg-text-primary pulse-dot" />
            <span className="text-xs font-semibold text-text-secondary">
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="hero-fade-2 space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Full-Stack Web
              <br />
              <span className="text-text-secondary font-normal">Developer</span>
            </h1>
          </div>

          {/* Description */}
          <p className="hero-fade-3 text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed">
            Building scalable web applications with Next.js, React, Laravel, and Supabase.
            Focused on performance, accessibility, and precision.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-4 flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center justify-center gap-2 bg-text-primary text-bg-primary font-bold text-sm rounded-full py-4 px-8 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/cv/CV_Muhammad Ilham Setiawan_2026.pdf"
              download="CV_Muhammad_Ilham_Setiawan_2026.pdf"
              className="inline-flex items-center justify-center gap-2 border border-border-base bg-transparent text-text-primary font-bold text-sm rounded-full py-4 px-8 hover:bg-bg-secondary hover:border-border-hover active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hero-fade-5 relative w-full max-w-[420px] mx-auto md:max-w-none z-10">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border-base bg-bg-card group shadow-2xl">
            {/* Elegant background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-secondary to-bg-primary" />
            
            {/* Transparent profile image */}
            <Image
              src="/images/hero/foto-profile.png"
              alt="Muhammad Ilham Setiawan"
              fill
              priority
              className="object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)"
              }}
              sizes="(max-width: 768px) 100vw, 400px"
            />
            
            {/* Bottom gradient overlay to blend the bottom cleanly */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decorative Code Card */}
          <div className="absolute -bottom-5 -left-5 bg-bg-card/95 backdrop-blur-md border border-border-base p-4 rounded-xl shadow-xl hidden lg:block hover:border-border-hover transition-all duration-300">
            <pre className="font-mono text-xs text-text-secondary select-none leading-relaxed">
              <code>{`const dev = {
  name: "Ilham",
  role: "Full-Stack",
  passion: "Scalable UI"
};`}</code>
            </pre>
          </div>
          {/* Decorative Code Card */}
          <div className="absolute -bottom-5 -right-5 bg-bg-card/95 backdrop-blur-md border border-border-base p-4 rounded-xl shadow-xl hidden lg:block hover:border-border-hover transition-all duration-300">
            <pre className="font-mono text-xs text-text-secondary select-none leading-relaxed">
              <code>{`const techStack = [
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Supabase"
];

interface StackDetails {
  speed: "Fast" | "Blazing";
  dx: "Excellent";
  productionReady: boolean;
}
`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
