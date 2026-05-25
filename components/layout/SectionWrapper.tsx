import React from "react";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-py relative overflow-hidden ${className}`}
    >
      <div className={`container-base ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
