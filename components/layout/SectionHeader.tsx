import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  return (
    <div className={`flex flex-col gap-2 md:gap-3 mb-10 md:mb-16 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs md:text-lg text-text-secondary max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
