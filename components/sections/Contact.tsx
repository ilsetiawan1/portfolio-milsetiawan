"use client";

import React, { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import SectionWrapper from "@/components/layout/SectionWrapper";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/ilsetiawan1",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-ilham-setiawan-851937387/",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/m.ilsetiawan1?igsh=MXRieTU5bHdlZTF5eA%3D%3D&utm_source=qr",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@m.ilsetiawan1",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.05.89.82 2.04 1.33 3.23 1.48v3.91c-1.36-.08-2.68-.57-3.77-1.42-.48-.37-.89-.82-1.22-1.34v7.71c.04 2.82-1.5 5.56-4.04 6.84-2.85 1.44-6.49 1.05-8.91-1-2.45-2.07-3.41-5.59-2.28-8.62C2.4 9.94 5.3 7.84 8.57 8c.11 0 .22.01.33.02v3.98c-1.13-.19-2.31.22-3.03 1.13-.88 1.1-.9 2.72-.05 3.84.97 1.28 2.88 1.63 4.25.79 1.1-.68 1.7-1.95 1.64-3.23V.02z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = { name: "", email: "", message: "" };
    let ok = true;
    if (!form.name.trim()) {
      e.name = t.errName;
      ok = false;
    }
    if (!form.email.trim()) {
      e.email = t.errEmail;
      ok = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = t.errEmailVal;
      ok = false;
    }
    if (!form.message.trim()) {
      e.message = t.errMessage;
      ok = false;
    }
    setErrors(e);
    return ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Message from ${form.name}`,
          from_name: "Milsetiawan Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Web3Forms submission failed:", err);
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-bg-secondary border text-text-primary placeholder:text-text-muted placeholder:text-xs md:placeholder:text-base text-xs md:text-base p-4 rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-text-primary/10";
  const inputNormal = `${inputBase} border-border-base focus:border-border-hover`;
  const inputError = `${inputBase} border-red-500/50 focus:border-red-500 focus:ring-red-500/10`;

  return (
    <SectionWrapper id="contact" className="bg-bg-secondary/40 border-t border-border-base/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Info */}
        <div className="flex flex-col gap-8 animate-on-scroll">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
              {t.title}
            </h2>
            <p className="text-xs md:text-lg text-text-secondary leading-relaxed max-w-md">
              {t.subtitle}
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:m.ilsetiawan1@gmail.com"
            className="flex items-center gap-4 w-fit group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary rounded-2xl p-1"
            aria-label="Kirim email ke m.ilsetiawan1@gmail.com"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-bg-card border border-border-base text-text-secondary group-hover:bg-text-primary group-hover:text-bg-primary group-hover:border-text-primary transition-all duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-base font-semibold text-text-primary group-hover:text-text-primary/80 transition-colors duration-200">
              m.ilsetiawan1@gmail.com
            </span>
          </a>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka akun ${s.name} saya`}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-bg-card border border-border-base text-text-secondary hover:bg-text-primary hover:text-bg-primary hover:border-text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-6 md:p-8 bg-bg-card border border-border-base rounded-2xl hover:border-border-hover transition-all duration-300 animate-on-scroll focus-within:ring-2 focus-within:ring-text-primary/20"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-secondary">{t.labelName}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.placeholderName}
              className={errors.name ? inputError : inputNormal}
              aria-required="true"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="text-xs text-red-500 font-semibold">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-secondary">{t.labelEmail}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.placeholderEmail}
              className={errors.email ? inputError : inputNormal}
              aria-required="true"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-xs text-red-500 font-semibold">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-secondary">{t.labelMessage}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.placeholderMessage}
              rows={4}
              className={`resize-none ${errors.message ? inputError : inputNormal}`}
              aria-required="true"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span className="text-xs text-red-500 font-semibold">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-text-primary text-bg-primary font-bold text-sm rounded-xl py-4 px-8 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          {status === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-xl text-sm font-semibold text-center animate-fade-in">
              {t.msgSuccess}
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-semibold text-center animate-fade-in">
              {t.msgError}
            </div>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
