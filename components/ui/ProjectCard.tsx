import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { useLanguage } from "@/components/LanguageProvider";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const displayDate = language === "en" ? project.date_en : project.date_id;
  const displayDescription = language === "en" ? project.description_en : project.description_id;

  return (
    <article
      className="group flex flex-col bg-bg-card border border-border-base rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-text-primary"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden bg-bg-secondary border-b border-border-base">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale brightness-90 dark:brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 right-3 bg-bg-secondary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-text-secondary border border-border-base">
          {displayDate}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow gap-5">
        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {project.techStack.map((tech, idx) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-wider font-bold text-text-muted flex items-center"
            >
              {tech}
              {idx < project.techStack.length - 1 && (
                <span className="ml-2 text-border-hover/60 font-normal">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <div className="flex-grow space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-text-primary/95 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs md:text-base text-text-secondary leading-relaxed line-clamp-3">
            {displayDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-3">
          {project.isDeployed && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-text-primary text-bg-primary font-bold text-sm rounded-full py-2 px-4 hover:opacity-90 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
              aria-label={`Lihat live demo untuk proyek ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 border border-border-base bg-transparent text-text-primary font-bold text-sm rounded-full py-2 px-4 hover:bg-bg-secondary hover:border-border-hover active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 ${
              project.isDeployed && project.liveUrl ? "flex-1" : "w-full"
            }`}
            aria-label={`Lihat kode sumber ${project.title} di GitHub`}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
}
