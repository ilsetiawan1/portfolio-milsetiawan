"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { aboutData, TimelineItem } from "@/data/about";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import SectionWrapper from "@/components/layout/SectionWrapper";

function TimelineCard({ item, idx, language }: { item: TimelineItem; idx: number; language: "en" | "id" }) {
  const [isItemExpanded, setIsItemExpanded] = useState(false);

  const displayRole = language === "en" && item.role_en ? item.role_en : item.role;
  const displayDesc = language === "en" ? item.description_en : item.description_id;
  const displayDetails = language === "en" ? item.details_en : item.details_id;

  return (
    <div className="relative group">
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
        {displayRole}
      </h3>
      <h4 className="text-sm md:text-base font-semibold text-text-secondary">
        {item.company}
      </h4>
      <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
        {displayDesc}
        {displayDetails && (
          <>
            {" "}
            <span className={isItemExpanded ? "inline" : "hidden md:inline"}>
              {displayDetails}
            </span>
          </>
        )}
      </p>

      {displayDetails && (
        <button
          onClick={() => setIsItemExpanded(!isItemExpanded)}
          className="md:hidden mt-2 text-xs font-bold text-text-primary border border-border-base bg-bg-card hover:bg-bg-card-hover px-3 py-1.5 rounded-full inline-flex items-center gap-1 cursor-pointer shadow-sm w-fit transition-colors"
        >
          {isItemExpanded ? (
            <>
              <span>{language === "en" ? "Show less" : "Sembunyikan"}</span>
              <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              <span>{language === "en" ? "Read more" : "Lihat lebih lengkap"}</span>
              <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const bioParagraphs = aboutData.bioParagraphs[language];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Bio */}
        <div className="lg:col-span-5 flex flex-col justify-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6 md:mb-8">
            {t.title}
          </h2>
          <div className="space-y-5">
            {bioParagraphs.map((para, idx) => {
              if (idx === 0) {
                return (
                  <p key={idx} className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {para}
                  </p>
                );
              }
              return (
                <div key={idx} className={isExpanded ? "block" : "hidden md:block"}>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {para}
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden mt-4 text-xs font-bold text-text-primary border border-border-base bg-bg-card hover:bg-bg-card-hover px-4 py-2 rounded-full inline-flex items-center gap-1.5 cursor-pointer shadow-sm w-fit transition-colors"
          >
            {isExpanded ? (
              <>
                <span>{language === "en" ? "Show less" : "Sembunyikan"}</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>{language === "en" ? "Read more" : "Lihat lebih lengkap"}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Right: Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8 animate-on-scroll">
          <div className="relative border-l border-border-base ml-4 pl-8 md:pl-10 space-y-10">
            {aboutData.timeline.map((item, idx) => (
              <TimelineCard key={idx} item={item} idx={idx} language={language} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
