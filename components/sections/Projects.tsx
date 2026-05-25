"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Code, Award, Layers, Calendar, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates, Certificate } from "@/data/certificates";
import { skills } from "@/data/skills";
import ProjectCard from "@/components/ui/ProjectCard";
import TechIcon from "@/components/ui/TechIcon";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionWrapper from "@/components/layout/SectionWrapper";

type TabType = "projects" | "certificates" | "tech";

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-base bg-bg-card hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 ease-out">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-secondary border-b border-border-base">
        <Image
          src={cert.image}
          alt={cert.title}
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
            <span>{cert.date}</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-text-primary leading-snug group-hover:text-text-primary/95 transition-colors">
            {cert.title}
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

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Header */}
      <SectionHeader
        title="Portfolio Showcase"
        subtitle="Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path."
        align="center"
        className="animate-on-scroll mb-10"
      />

      {/* Tab Buttons Container */}
      <div className="flex justify-center mb-12 animate-on-scroll">
        <div className="inline-flex p-1.5 bg-bg-secondary/80 backdrop-blur-md border border-border-base/50 rounded-2xl shadow-inner max-w-full overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "projects"
                ? "bg-bg-card text-text-primary border border-border-base shadow-sm"
                : "text-text-secondary hover:text-text-primary border border-transparent"
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "certificates"
                ? "bg-bg-card text-text-primary border border-border-base shadow-sm"
                : "text-text-secondary hover:text-text-primary border border-transparent"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certificates</span>
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "tech"
                ? "bg-bg-card text-text-primary border border-border-base shadow-sm"
                : "text-text-secondary hover:text-text-primary border border-transparent"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Tech Stack</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="animate-on-scroll min-h-[400px]">
        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
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
