"use client";

import React from "react";
import { aboutData } from "@/data/about";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Bio */}
        <div className="lg:col-span-5 flex flex-col justify-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6 md:mb-8">
            About Me
          </h2>
          <div className="space-y-5">
            {aboutData.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg text-text-secondary leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8 animate-on-scroll">
          <div className="relative border-l border-border-base ml-4 pl-8 md:pl-10 space-y-10">
            {aboutData.timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full border-4 border-bg-primary transition-transform duration-300 group-hover:scale-125 ${
                    idx === 0 ? "bg-text-primary" : "bg-border-base"
                  }`}
                />

                <span className="text-xs uppercase tracking-widest font-bold text-text-muted">
                  {item.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-1">
                  {item.role}
                </h3>
                <h4 className="text-sm md:text-base font-semibold text-text-secondary">
                  {item.company}
                </h4>
                <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
