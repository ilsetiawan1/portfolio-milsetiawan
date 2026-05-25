import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) {
  /*
   * Root-cause fix for the "px padding invisible" bug:
   *
   * 1. The original used `bg-text-primary` / `text-bg-primary` — custom @theme
   *    colors registered via CSS variables. Tailwind v4 resolves these into
   *    `color(var(--color-text-primary))` which works. However, when the
   *    parent passes `w-full`, the button stretches to fill the parent <a> or
   *    <div> and the content appears left-aligned with no visible horizontal
   *    padding because `inline-flex` + `justify-center` centers text in an
   *    over-stretched box.
   *
   * 2. Fix: Use standard Tailwind v4 `neutral-*` colors (compiled statically,
   *    no variable resolution needed) AND ensure `box-border` is explicit so
   *    padding is always included in the element's dimensions.
   */

  const baseStyles = [
    "inline-flex items-center justify-center",
    "font-semibold rounded-full box-border",
    "transition-all duration-300 ease-out",
    "active:scale-[0.97] cursor-pointer",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" ");

  const variants: Record<string, string> = {
    primary:
      "bg-neutral-100 text-neutral-950 hover:bg-white hover:shadow-lg hover:shadow-white/10",
    secondary:
      "bg-transparent border border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-400 hover:text-white",
    ghost:
      "bg-transparent text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-100",
  };

  const sizes: Record<string, string> = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center shrink-0">{icon}</span>
      )}
      <span className="truncate">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center shrink-0">{icon}</span>
      )}
    </button>
  );
}
