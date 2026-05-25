"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
  };

  // Typewriter effect logic
  const words = React.useMemo(() => [
    "Muhammad Ilham Setiawan"
  ], []);

  const [currentWordIdx, setCurrentWordIdx] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(100);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIdx];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, typingSpeed);

      if (currentText === fullWord) {
        // Finished typing: pause for 2.5 seconds, then delete
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(40); // speed up deleting
        }, 2500);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, typingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIdx((prev) => (prev + 1) % words.length);
        setTypingSpeed(120); // brief pause before starting next word
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center py-10 md:py-28 overflow-hidden bg-bg-primary text-text-primary"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-text-primary/[0.02] dark:bg-text-primary/[0.015] blur-3xl" />
      </div>

      <div className="container-base grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-5 md:gap-6 z-10 w-full">
          {/* Mobile Profile Image */}
          <div className="hero-fade-1 flex justify-center md:hidden mb-1">
            <div className="p-1 rounded-full border border-border-base bg-bg-card shadow-xl">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-bg-card via-bg-secondary to-bg-primary">
                <Image
                  src="/images/hero/foto-profile.png"
                  alt="Muhammad Ilham Setiawan"
                  fill
                  priority
                  className="object-contain object-bottom scale-[1.08] translate-y-1"
                  sizes="96px"
                />
              </div>
            </div>
          </div>

          {/* Top Info Group (Badge, Name, Heading) */}
          <div className="flex flex-col gap-2 sm:gap-3">
            {/* Status Badge */}
            <div className="hero-fade-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border-base bg-bg-card w-fit hover:border-border-hover transition-colors">
              <span className="w-2 h-2 rounded-full bg-text-primary pulse-dot" />
              <span className="text-xs font-semibold text-text-secondary">
                {t.status}
              </span>
            </div>

            {/* Name */}
            <div className="hero-fade-2 mt-0.5 min-h-[28px] sm:min-h-[36px] flex items-center">
              <h2 className="text-base sm:text-2xl font-light text-text-secondary tracking-wide font-plus-jakarta">
                {currentText}
                <span className="inline-block w-[2px] h-[1.1em] bg-text-secondary ml-1 animate-pulse align-middle" />
              </h2>
            </div>

            {/* Heading */}
            <div className="hero-fade-2">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Full-Stack Web
                <br />
                <span className="text-text-secondary font-normal">Developer</span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="hero-fade-3 text-xs sm:text-lg text-text-secondary max-w-lg leading-relaxed">
            {t.desc}
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center justify-center gap-2 bg-text-primary text-bg-primary font-bold text-sm rounded-full py-2.5 sm:py-3.5 px-8 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/cv/CV_Muhammad Ilham Setiawan_2026.pdf"
              download="CV_Muhammad_Ilham_Setiawan_2026.pdf"
              className="inline-flex items-center justify-center gap-2 border border-border-base bg-transparent text-text-primary font-bold text-sm rounded-full py-2.5 sm:py-3.5 px-8 hover:bg-bg-secondary hover:border-border-hover active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image (Desktop/Tablet) */}
        <div className="hero-fade-5 relative w-full max-w-[420px] mx-auto md:max-w-none z-10 hidden md:block">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border-base bg-bg-card group shadow-2xl">
            {/* Elegant background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-secondary to-bg-primary" />
            
            {/* Transparent profile image */}
            <Image
              src="/images/hero/foto-profile.png"
              alt="Muhammad Ilham Setiawan"
              fill
              priority
              className="object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)"
              }}
              sizes="(max-width: 768px) 100vw, 400px"
            />
            
            {/* Bottom gradient overlay to blend the bottom cleanly */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent pointer-events-none" />
          </div>

{/* Decorative Code Card (left)*/}
<div className="absolute -bottom-5 -left-5 bg-bg-card/95 backdrop-blur-md border border-border-base p-4 rounded-xl shadow-xl hidden lg:block hover:border-border-hover transition-all duration-300">
  <pre className="font-mono text-xs text-text-secondary select-none leading-relaxed">
    <code>{`const dev = {
  name: "Ilham",
  role: "Full-Stack",
  passion: "Interactive UI"
};`}</code>
  </pre>
</div>

{/* Decorative Code Card (right)*/}
<div className="absolute -bottom-5 -right-5 bg-bg-card/95 backdrop-blur-md border border-border-base p-4 rounded-xl shadow-xl hidden lg:block hover:border-border-hover transition-all duration-300">
  <pre className="font-mono text-xs text-text-secondary select-none leading-relaxed">
    <code>{`const missing = await world.findOne({
  someone: "like_you"
});

if (!missing) {
  throw new Error("Connection lost");
}`}</code>
  </pre>
</div>
        </div>
      </div>
    </section>
  );
}
