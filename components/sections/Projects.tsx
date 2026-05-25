"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Code, Award, Layers, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates, Certificate } from "@/data/certificates";
import { skills } from "@/data/skills";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import ProjectCard from "@/components/ui/ProjectCard";
import TechIcon from "@/components/ui/TechIcon";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionWrapper from "@/components/layout/SectionWrapper";

type TabType = "projects" | "certificates" | "tech";

function CertificateCard({ cert }: { cert: Certificate }) {
  const { language } = useLanguage();
  const displayTitle = language === "en" ? cert.title_en : cert.title_id;
  const displayDate = language === "en" ? cert.date_en : cert.date_id;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-base bg-bg-card hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 ease-out">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-secondary border-b border-border-base">
        <Image
          src={cert.image}
          alt={displayTitle}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-102"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-xl bg-bg-card/90 backdrop-blur border border-border-base text-text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-border-hover shadow"
            title="View Credential"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Info Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted">
            <Calendar className="w-3.5 h-3.5" />
            <span>{displayDate}</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-text-primary leading-snug group-hover:text-text-primary/95 transition-colors">
            {displayTitle}
          </h3>
        </div>
        <div className="text-xs uppercase tracking-wider font-bold text-text-secondary">
          {cert.issuer}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedProjects = (isMobile && !showAllProjects) ? projects.slice(0, 2) : projects;

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Header */}
      <SectionHeader
        title={t.title}
        subtitle={t.subtitle}
        align="center"
        className="animate-on-scroll mb-10"
      />

      {/* Tab Buttons Container */}
      <div className="flex justify-center mb-12 animate-on-scroll px-4 md:px-0 w-full">
        <div className="flex w-full max-w-[480px] md:w-auto p-1 bg-bg-secondary/80 backdrop-blur-md border border-border-base/50 rounded-xl md:rounded-2xl shadow-inner gap-1">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 md:gap-2.5 px-3 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "projects"
                ? "bg-bg-card text-text-primary border border-border-base shadow-sm"
                : "text-text-secondary hover:text-text-primary border border-transparent"
            }`}
          >
            <Code className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 md:gap-2.5 px-3 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "certificates"
                ? "bg-bg-card text-text-primary border border-border-base shadow-sm"
                : "text-text-secondary hover:text-text-primary border border-transparent"
            }`}
          >
            <Award className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Certificates</span>
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 md:gap-2.5 px-3 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "tech"
                ? "bg-bg-card text-text-primary border border-border-base shadow-sm"
                : "text-text-secondary hover:text-text-primary border border-transparent"
            }`}
          >
            <Layers className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Tech Stack</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="animate-on-scroll min-h-[400px]">
        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {isMobile && projects.length > 2 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="text-xs font-bold text-text-primary border border-border-base bg-bg-card hover:bg-bg-card-hover px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 cursor-pointer shadow-sm transition-colors"
                >
                  {showAllProjects ? (
                    <>
                      <span>{language === "en" ? "Show Less" : "Lihat Lebih Sedikit"}</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>{language === "en" ? "Show All Projects" : "Lihat Semua Projek"}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="flex flex-col items-center justify-center p-8 bg-bg-card border border-border-base rounded-2xl text-center min-h-[300px] max-w-md mx-auto shadow-sm">
            <Award className="w-12 h-12 text-text-muted mb-4 animate-pulse" />
            <h3 className="text-lg font-bold text-text-primary">Data belum ditambahkan</h3>
            <p className="text-sm text-text-secondary mt-1">Sertifikat saat ini sedang dalam proses pembaruan.</p>
          </div>
        )}

        {/* Tech Stack Tab (Redesigned Skills) */}
        {activeTab === "tech" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center p-6 bg-bg-card border border-border-base rounded-2xl hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/25 transition-all duration-300 ease-out"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-text-primary/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon wrapper */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  <TechIcon name={skill.name} className="w-11 h-11 sm:w-12 sm:h-12" />
                </div>
                
                {/* Name */}
                <span className="text-xs sm:text-sm font-bold text-text-primary tracking-wide text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
