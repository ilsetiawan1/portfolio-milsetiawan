# 🗺️ Development Roadmap — Portfolio Muhammad Ilham Setiawan

> **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · PWA  
> **Pendekatan:** Mobile-first · Static (no database) · Dark mode default  
> **Target deploy:** Vercel

---

## 📋 Overview Phase

| Phase | Nama | Fokus | Status |
|-------|------|-------|--------|
| 0 | Setup & Konfigurasi | Foundation & tooling | ✅ Completed |
| 1 | Layout & Komponen Dasar | Struktur & design system | ✅ Completed |
| 2 | Sections Development | Semua section utama | ✅ Completed |
| 3 | Animasi & Interaksi | Motion & UX polish | ⬜ Todo |
| 4 | PWA & Performance | Installable & fast | ⬜ Todo |
| 5 | SEO & Accessibility | Discoverability & a11y | ⬜ Todo |
| 6 | Testing & Polish | QA & final touches | ⬜ Todo |
| 7 | Deployment | Go live | ⬜ Todo |

---

## Phase 0 — Setup & Konfigurasi

**Tujuan:** Project siap dikembangkan dengan semua konfigurasi dasar.

### Tasks

- [x] **Tailwind CSS 4 config** — definisikan CSS variables untuk color palette dark/light mode, typography scale (Geist font), spacing system, dan border radius sesuai PRD
- [x] **Font setup** — install dan konfigurasi Geist font (via `next/font/local` atau CDN) dan JetBrains Mono untuk code snippet
- [x] **Global CSS** — setup CSS variables, smooth scroll, base body styles (`bg-[#0A0A0A]`)
- [x] **Folder structure** — buat struktur `app/`, `components/`, `lib/`, `public/`, `types/`, `data/`
- [x] **Static data file** — buat `data/` folder berisi `projects.ts`, `skills.ts`, `about.ts` (hardcoded, no DB)
- [x] **PWA manifest** — buat `public/manifest.json` dengan name, icons, theme color, display mode
- [x] **next.config.ts** — konfigurasi PWA headers, image domains, metadata base
- [x] **TypeScript types** — definisikan `types/index.ts` untuk Project, Skill, SocialLink, dll

### Deliverable
```
portfolio-milsetiawan/
├── app/
│   ├── layout.tsx          ← Root layout + metadata + PWA link
│   ├── page.tsx            ← Home page (assembles all sections)
│   └── globals.css         ← CSS variables + base styles
├── components/
│   ├── ui/                 ← Button, Badge, Card (atomic)
│   ├── sections/           ← Navbar, Hero, About, Skills, Projects, Contact, Footer
│   └── layout/             ← PageWrapper, SectionWrapper
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── social.ts
├── types/
│   └── index.ts
├── public/
│   ├── manifest.json
│   ├── images/
│   │   └── projects/       ← Asset sudah ada ✅
│   └── icons/              ← PWA icons (192x192, 512x512)
└── docs/
    └── development-roadmap.md
```

---

## Phase 1 — Layout & Komponen Dasar

**Tujuan:** Design system, atomic components, dan layout wrapper siap dipakai.

### Tasks

- [x] **Root Layout (`app/layout.tsx`)** — metadata (title, description, OG), font import, dark mode class default, PWA manifest link, viewport meta
- [x] **Atomic UI Components**
  - `Button` — variant: primary (filled), secondary (outlined), ghost; size: sm, md, lg; dengan icon slot
  - `Badge` — tech stack label dengan background subtle
  - `Card` — glass card base dengan hover border animation
  - `SectionWrapper` — container dengan max-width, padding responsive
  - `SectionHeader` — heading + subtitle pattern
- [x] **Theme system** — CSS variables untuk dark mode (default), siapkan pondasi light mode (opsional toggle nanti)

### Mobile-first checklist
- [x] Semua padding menggunakan `px-4 md:px-10 lg:px-margin-desktop`
- [x] Typography scale dimulai dari mobile (heading lebih kecil, scale up ke desktop)
- [x] Touch target minimum 44px untuk semua interactive element

---

## Phase 2 — Sections Development

**Tujuan:** Semua section terbangun, responsif, dan berisi data nyata.

> Urutan pengerjaan: **Navbar → Hero → About → Skills → Projects → Contact → Footer**

### 2.1 Navbar
- [x] Logo "MIS" dengan font bold
- [x] Desktop nav links: Home, About, Skills, Projects, Contact
- [x] CTA button "Let's Talk" → scroll ke `#contact`
- [x] Dark/Light mode toggle (opsional phase ini, bisa phase 3)
- [x] **Mobile:** Hamburger menu → drawer/sheet dari kiri atau full-screen overlay
- [x] Sticky dengan `backdrop-blur` + semi-transparent background
- [x] Scroll spy — nav link aktif sesuai section yang terlihat

### 2.2 Hero Section
- [x] Badge "Available for new opportunities" dengan dot animasi pulse
- [x] Heading besar: "Full-Stack Web Developer"
- [x] Subheading deskripsi singkat
- [x] 2 CTA: "View Projects" (scroll ke projects) + "Download CV" (file PDF dari `/public/`)
- [x] Placeholder untuk foto profil atau ilustrasi (bisa pakai gradient placeholder dulu)
- [x] Code snippet card dekoratif (seperti di referensi HTML)
- [x] Background glow/gradient radial
- [x] **Mobile:** Stack vertikal, hero lebih compact, CTA stack vertikal penuh lebar

### 2.3 About Section
- [x] Bio text singkat dan profesional
- [x] Timeline vertikal: Internship + Education
- [x] Responsive: 1 kolom di mobile, 2 kolom (bio + timeline) di desktop

### 2.4 Skills Section
- [x] Heading "Technical Arsenal"
- [x] **Bento grid layout:**
  - Frontend card (2 kolom): React, Next.js, TypeScript, Tailwind CSS, HTML, CSS, JavaScript
  - Backend card (1 kolom): Laravel, Node.js, PHP
  - Database card (1 kolom): Supabase, PostgreSQL, MySQL, MongoDB
  - Tools strip (full width): Git, GitHub, Figma, Postman, VS Code
- [x] Tech badges dengan hover effect
- [x] **Mobile:** Full-width cards, stack vertikal

### 2.5 Projects Section
- [x] Heading "Selected Work" + subtitle
- [x] 3 project cards dari `data/projects.ts`:
  1. **Laporin Aja Bro** — `laporin-aja-bro.png`, Maret 2026, live demo + GitHub
  2. **CV Akurat Sukses Sejati** — `cv-akurat-sukses-sejati.png`, April 2026, live demo + GitHub
  3. **Info Seputar 62** — `info-seputar-62.png`, Mei 2026, **hanya GitHub** (belum deploy)
- [x] Setiap card: thumbnail, judul, deskripsi, tech stack badges, tanggal, tombol aksi
- [x] Card thumbnail: gambar dari `/public/images/projects/`
- [x] **Mobile:** 1 kolom; **Tablet:** 2 kolom; **Desktop:** 2 kolom atau bento
- [x] Project 3 tanpa tombol "Live Demo" (kondisional render)

### 2.6 Contact Section
- [x] Heading + deskripsi ajakan
- [x] Info kontak:
  - Email: `m.ilsetiawan1@gmail.com`
  - GitHub: `https://github.com/ilsetiawan1`
  - Instagram: link provided
  - TikTok: link provided
- [x] Social icon buttons (4 platform)
- [x] Contact form: Name, Email, Message, Send button
- [x] Form validation (client-side dengan React state)
- [x] **Mobile:** Stack vertikal penuh

### 2.7 Footer
- [x] Logo "MIS"
- [x] Copyright 2025/2026
- [x] Nav links & social links
- [x] **Mobile:** Stack vertikal, centered

---

## Phase 3 — Animasi & Interaksi

**Tujuan:** Pengalaman visual yang halus dan modern.

### Tasks

- [ ] **Fade-in on scroll** — gunakan Intersection Observer API atau `framer-motion` untuk reveal animasi saat section masuk viewport
- [ ] **Hero entrance** — staggered fade-up untuk badge, heading, subtext, CTA buttons
- [ ] **Card hover** — scale subtle + border glow pada project cards dan glass cards
- [ ] **Nav scroll** — background blur muncul smooth saat scroll melewati hero
- [ ] **Scroll spy smooth** — active nav link transition halus
- [ ] **Button interactions** — ripple atau scale feedback pada tap/click
- [ ] **Mobile hamburger** — animasi open/close menu yang smooth
- [ ] **Dark/Light toggle** — smooth transition antar tema (optional, jika diimplementasikan)
- [ ] **Pulse dot** — hero badge "Available" dot pulse animation (CSS only)

### Library consideration
- Gunakan **Framer Motion** untuk animasi kompleks (sudah tertera di PRD)
- CSS `@keyframes` untuk animasi sederhana (pulse, fade)
- `transition` Tailwind untuk hover states

```bash
pnpm add framer-motion
```

---

## Phase 4 — PWA & Performance

**Tujuan:** Aplikasi installable di mobile, fast loading.

### PWA Tasks

- [ ] **`public/manifest.json`** — name, short_name, description, start_url, display: standalone, theme_color, background_color, icons
- [ ] **PWA Icons** — generate icon 192x192 dan 512x512 (bisa pakai favicon sebagai base)
- [ ] **`next.config.ts`** — tambahkan PWA headers (Cache-Control untuk static assets)
- [ ] **Service Worker** — gunakan [`next-pwa`](https://www.npmjs.com/package/next-pwa) atau [`@ducanh2912/next-pwa`](https://www.npmjs.com/package/@ducanh2912/next-pwa)
- [ ] **Meta tags PWA** di `layout.tsx`:
  - `apple-mobile-web-app-capable`
  - `apple-mobile-web-app-status-bar-style`
  - `apple-touch-icon`
  - `theme-color`
- [ ] **Offline fallback** — halaman offline sederhana (opsional)

```bash
pnpm add @ducanh2912/next-pwa
```

### Performance Tasks

- [ ] **Image optimization** — gunakan `next/image` untuk semua gambar project dengan `width`, `height`, `placeholder="blur"`
- [ ] **Font optimization** — `next/font` dengan `display: swap`
- [ ] **Lazy loading** — section bawah di-lazy load
- [ ] **Bundle size** — analisis dengan `@next/bundle-analyzer` jika perlu

---

## Phase 5 — SEO & Accessibility

**Tujuan:** Mudah ditemukan, dapat diakses semua orang.

### SEO Tasks

- [ ] **Metadata API Next.js** di `app/layout.tsx`:
  ```ts
  export const metadata: Metadata = {
    title: "Muhammad Ilham Setiawan | Full-Stack Developer",
    description: "...",
    openGraph: { ... },
    twitter: { ... },
  }
  ```
- [ ] **Open Graph image** — buat `/public/og-image.png` (1200x630)
- [ ] **Canonical URL**
- [ ] **robots.txt** dan **sitemap.xml** (via Next.js route handlers)
- [ ] **Structured headings** — H1 hanya di hero, H2 per section, H3 untuk sub-items

### Accessibility Tasks

- [ ] **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- [ ] **ARIA labels** — untuk icon buttons, social links, hamburger menu
- [ ] **Keyboard navigation** — semua interactive element accessible via Tab
- [ ] **Focus visible** — custom focus ring yang terlihat jelas
- [ ] **Alt text** — semua gambar project dengan deskripsi meaningful
- [ ] **Color contrast** — minimum WCAG AA (4.5:1 untuk text normal)
- [ ] **Skip to content** link untuk screen reader

---

## Phase 6 — Testing & Polish

**Tujuan:** QA menyeluruh sebelum deploy.

### Checklist

- [ ] **Responsive test** — Chrome DevTools: 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px (iPad Landscape), 1440px (Desktop)
- [ ] **Browser test** — Chrome, Firefox, Safari (iOS), Edge
- [ ] **PWA install test** — test "Add to Home Screen" di Android dan iOS
- [ ] **Performance audit** — Lighthouse score target: Performance >90, Accessibility >95, SEO >90
- [ ] **Form validation** — test semua edge case pada contact form
- [ ] **Link check** — semua external link (GitHub, Instagram, TikTok, project live demo) berfungsi
- [ ] **Image check** — semua gambar project tampil dengan benar, aspect ratio terjaga
- [ ] **Typography check** — tidak ada text yang overflow atau terpotong di mobile
- [ ] **Animation check** — tidak ada layout shift (CLS) akibat animasi
- [ ] **Dark mode check** — semua element terlihat baik di dark mode

---

## Phase 7 — Deployment

**Tujuan:** Portfolio live dan accessible secara publik.

### Tasks

- [ ] **Environment check** — pastikan tidak ada environment variable yang dibutuhkan (static site)
- [ ] **Build test lokal** — `pnpm build` sukses tanpa error atau warning kritis
- [ ] **Push ke GitHub** — repo `portfolio-milsetiawan` di akun `ilsetiawan1`
- [ ] **Connect ke Vercel** — import repo, auto-deploy dari branch `main`
- [ ] **Custom domain** (opsional) — jika punya domain, konfigurasi di Vercel
- [ ] **Vercel Analytics** — aktifkan untuk tracking visitor (opsional)
- [ ] **Final review** — cek di mobile dan desktop setelah live

---

## 🛠️ Install Commands Summary

```bash
# Masuk ke folder project
cd portfolio-milsetiawan

# Dependencies utama
pnpm add framer-motion
pnpm add @ducanh2912/next-pwa

# Dev tools (opsional)
pnpm add -D @next/bundle-analyzer
```

---

## 📁 Data Structure (Static)

```typescript
// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "Laporin Aja Bro",
    description: "Platform pelaporan layanan publik...",
    image: "/images/projects/laporin-aja-bro.png",
    date: "Maret 2026",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://laporin-aja-bro.vercel.app/",
    githubUrl: "https://github.com/ilsetiawan1/laporin-aja-bro",
    isDeployed: true,
  },
  {
    id: 2,
    title: "CV Akurat Sukses Sejati",
    description: "...",
    image: "/images/projects/cv-akurat-sukses-sejati.png",
    date: "April 2026",
    techStack: ["Laravel", "MySQL", "PHP"],
    liveUrl: "https://cv-akurat-sukses-sejati.vercel.app/login",
    githubUrl: "https://github.com/ilsetiawan1/cv-akurat-sukses-sejati",
    isDeployed: true,
  },
  {
    id: 3,
    title: "Info Seputar 62",
    description: "...",
    image: "/images/projects/info-seputar-62.png",
    date: "Mei 2026",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: null,
    githubUrl: "https://github.com/ilsetiawan1/info62-cms-news-platform",
    isDeployed: false, // ← Live Demo button tidak ditampilkan
  },
]
```

---

## 🎯 Priority Order (Kejar Waktu)

Jika waktu terbatas, fokus pada urutan ini:

1. ✅ Phase 0 — Setup
2. ✅ Phase 2 — Sections (core content)
3. ✅ Phase 4 — PWA (manifest + next-pwa)
4. ✅ Phase 7 — Deploy
5. 🔄 Phase 3 — Animasi (enhancement)
6. 🔄 Phase 5 — SEO (nice to have)
7. 🔄 Phase 1 — Refactor components (cleanup)

---

*Last updated: Mei 2026*