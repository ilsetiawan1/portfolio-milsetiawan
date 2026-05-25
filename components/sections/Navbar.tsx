"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    window.scrollTo({
      top: (el as HTMLElement).offsetTop - 80,
      behavior: "smooth",
    });
  }
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.replace("#", ""));
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollTo(href);
    setActiveSection(href.replace("#", ""));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border-base/60 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-base flex items-center justify-between h-20" aria-label="Navigasi Utama">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold tracking-tighter text-text-primary hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary rounded-lg px-2 py-1 transition-all duration-200"
          >
            Lam.
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-all duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary rounded-md px-2 ${
                    isActive
                      ? "text-text-primary font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-text-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions: Theme Toggle + Language Switcher + CTA Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-2.5 rounded-full border border-border-base bg-bg-card hover:bg-bg-secondary hover:border-border-hover text-text-primary transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
              aria-label={`Switch language to ${language === "id" ? "English" : "Indonesian"}`}
            >
              <Globe className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{language === "id" ? "en" : "id"}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border-base bg-bg-card hover:bg-bg-secondary hover:border-border-hover text-text-primary transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
              aria-label={`Ubah ke mode ${theme === "dark" ? "terang" : "gelap"}`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollTo("#contact");
              }}
              className="hidden sm:inline-flex items-center justify-center bg-text-primary text-bg-primary font-bold text-sm rounded-full py-2 px-6 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
            >
              Let&apos;s Talk
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full border border-border-base bg-bg-card hover:bg-bg-secondary text-text-primary transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-fade-in">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-2xl font-bold transition-all duration-200 px-4 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary ${
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollTo("#contact");
            }}
            className="mt-4 bg-text-primary text-bg-primary font-bold text-base rounded-full py-2 px-6 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
          >
            Let&apos;s Talk
          </button>
        </div>
      )}
    </>
  );
}
