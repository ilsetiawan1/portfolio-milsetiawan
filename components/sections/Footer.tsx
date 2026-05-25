"use client";

import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ilsetiawan1" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ilham-setiawan-851937387/" },
  { label: "Instagram", href: "https://www.instagram.com/m.ilsetiawan1?igsh=MXRieTU5bHdlZTF5eA%3D%3D&utm_source=qr" },
  { label: "TikTok", href: "https://www.tiktok.com/@m.ilsetiawan1" },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-base/60 bg-bg-secondary/40">
      <div className="container-base py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="text-xl font-bold tracking-tighter text-text-primary hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary rounded-lg px-2 py-1 transition-all duration-200"
        >
          Lam.
        </a>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-semibold text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary rounded-md px-2 py-1 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary rounded-md px-2 py-1 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Muhammad Ilham Setiawan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
