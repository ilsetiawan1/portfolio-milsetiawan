import React from "react";
import Badge from "./Badge";
import TechIcon from "./TechIcon";

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  className?: string;
}

export default function TechCard({
  title,
  description,
  icon,
  skills,
  className = "",
}: TechCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-border-base bg-bg-card p-6 sm:p-8 hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300 ease-out ${className}`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-text-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="space-y-4">
        {/* Icon wrapper */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-bg-secondary border border-border-base text-text-primary group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary">
            {title}
          </h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Skills Badges */}
      <div className="flex flex-wrap gap-2 pt-6 mt-auto">
        {skills.map((skill) => (
          <Badge key={skill} className="transition-all duration-200 hover:scale-105 gap-1.5">
            <TechIcon name={skill} />
            <span>{skill}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
