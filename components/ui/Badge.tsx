import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-border-base bg-bg-secondary text-text-secondary transition-all duration-300 hover:border-border-hover hover:text-text-primary ${className}`}
    >
      {children}
    </span>
  );
}
