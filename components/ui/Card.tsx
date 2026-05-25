import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        glass-card rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden
        bg-neutral-900/80 border border-neutral-800
        hover:bg-neutral-100 hover:text-neutral-950
        hover:border-neutral-300
        hover:-translate-y-1.5
        hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)]
        transition-all duration-300 ease-out
        [&:hover_.card-icon]:border-neutral-400
        [&:hover_.card-icon]:text-neutral-950
        [&:hover_h3]:text-neutral-950
        [&:hover_p]:text-neutral-600
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
