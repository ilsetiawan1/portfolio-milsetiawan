<!-- docs/prd.md -->

# Product Requirements Document (PRD)

# Personal Portfolio Website - Muhammad Ilham Setiawan

## 1. Project Overview

### Project Name
Personal Portfolio Website – Muhammad Ilham Setiawan

### Project Type
Responsive Full-Stack Developer Portfolio Website

### Objective
Membangun website portfolio modern untuk menampilkan profil profesional, riwayat kerja/internship, sertifikasi, dan project yang pernah dibuat secara terorganisir guna mendukung personal branding serta rekrutmen kerja.

Website ini berfungsi sebagai:
* Media personal branding
* Portfolio profesional terintegrasi
* Showcase project developer
* Pendukung lamaran kerja
* Halaman rujukan recruiter melihat skill, sertifikat, dan pengalaman

---

## 2. Goals

### Primary Goals
* Menampilkan identitas profesional sebagai Full-Stack Web Developer.
* Menyediakan showcase terpadu (Projects, Certificates, dan Tech Stack) dalam satu panel interaktif.
* Memberikan kesan profesional dan modern kepada recruiter/client.
* Mempermudah akses download CV.

### Secondary Goals
* Menyediakan form kontak yang mengirim pesan langsung ke email pemilik (`m.ilsetiawan1@gmail.com`).
* Mengoptimalkan performa halaman dan SEO menggunakan Next.js.

---

## 3. Target Users
* Recruiter perusahaan / HRD
* Tech lead & Startup founder
* Client freelance
* Sesama developer & Komunitas teknologi

---

## 4. Design Direction

### Visual Style
* Modern, Minimalist, Premium, Clean, Elegant.
* Developer-centric aesthetic.

### Color Palette
#### Dark Mode
* Background: `#0A0A0A`
* Secondary Background: `#161616`
* Card Background: `#1F1F1F`
* Border: `#2A2A2A`
* Text Primary: `#FFFFFF`
* Text Secondary: `#B3B3B3`

#### Light Mode
* Background: `#F5F5F5`
* Secondary Background: `#FFFFFF`
* Card Background: `#FFFFFF`
* Border: `#E5E5E5`
* Text Primary: `#111111`
* Text Secondary: `#666666`

---

## 5. Features

### 5.1 Navbar
* **Contents**: Logo ("Lam."), Home, About, Portfolio, Contact, Dark/Light Mode Toggle, CTA "Let's Talk".
* **Requirements**: Sticky on scroll, blur background, responsive mobile menu, smooth scroll transition.

### 5.2 Hero Section
* **Contents**: Greeting text, headline ("Full-Stack Web Developer"), short description, CTA "View Projects" and "Download CV", and profile picture (`foto-profile.png`).
* **Requirements**: Opacity blur gradient mask on the bottom of the profile picture to blend it seamlessly into the card background.

### 5.3 About Section
* **Contents**: Bio, work/internship timeline:
  * **Web Developer Intern at Evolution IT Yogyakarta** (April 2026 - Sekarang)
  * **PKL at LPP Radio Republik Indonesia** (Juni 2021 - September 2021)
* **Requirements**: Vertical line timeline, hover scaling dots, readable responsive layout.

### 5.4 Portfolio Showcase Section (Unified Projects Section)
* **Description**: Section serbaguna yang dibagi menjadi 3 tab utama untuk menghemat ruang dan meningkatkan interaktivitas.
* **Tabs**:
  1. **Projects Tab**:
     * **Laporin Aja Bro**: Next.js, TypeScript, Tailwind CSS, Supabase (Maret 2026).
     * **CV Akurat Sukses Sejati**: Next.js, React, TypeScript, Supabase (April 2026).
     * **Portal Berita Digital (Info Seputar +62)**: Laravel, PHP, MySQL, Tailwind CSS (Mei 2026).
  2. **Certificates Tab**:
     * Saat ini menampilkan kartu placeholder dengan pesan **"Data belum ditambahkan"** (Sertifikat saat ini sedang dalam proses pembaruan) sebagai default state sebelum data dinamis diintegrasikan melalui database (Supabase).
  3. **Tech Stack Tab**:
     * Grid kartu teknologi berisi 19 brand logo resmi dengan ikon SVG yang akurat dan terstandarisasi (HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, PHP, Laravel, Node.js, Supabase, PostgreSQL, MySQL, MongoDB, Git, GitHub, Figma, Postman, VS Code).

### 5.5 Contact Section
* **Contents**: Form kontak (Name, Email, Message) dan tautan media sosial eksternal (GitHub, LinkedIn, Instagram, TikTok, Email).
* **Requirements**: Form validation, Web3Forms API integration (`https://api.web3forms.com/submit`) via `.env.local` to send emails directly to `m.ilsetiawan1@gmail.com`.
  * **Pemberitahuan Sistem**: Untuk mengaktifkan fitur ini, Access Key dari Web3Forms harus dikonfigurasi di file `.env.local` dengan variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

### 5.6 Footer
* **Contents**: Copyright & Year, Navigation links (About, Portfolio, Contact), Social links.

---

## 6. Technology Stack
* **Framework**: Next.js (Page / App Router)
* **UI**: React, Lucide Icons, Custom TechIcon SVGs
* **Styling**: Vanilla CSS / Tailwind CSS, custom utility classes, CSS Variables
* **Contact Delivery**: Web3Forms API integration

---

## 7. Future CMS Roadmap (Supabase Integration)
Untuk tahap selanjutnya, website akan diintegrasikan dengan database Supabase untuk pengelolaan data dinamis (Projects & Certificates) via antarmuka admin.

### 7.1 Database & API Details
* **Project Name**: `portfolio-milsetiawan`
* **Project ID**: `mmrbwgzfegfyjajjjdnt`
* **Supabase Anon Public API Key**:
  ```env
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcmJ3Z3pmZWdmeWphampqZG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2ODgzMjIsImV4cCI6MjA5NTI2NDMyMn0.rtlBhDhfDWSw28ScU8ycRhqyBpAFKoIidp-TKQZwL68
  ```
* **Supabase Service Role Key**:
  ```env
  SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcmJ3Z3pmZWdmeWphampqZG50Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTY4ODMyMiwiZXhwIjoyMDk1MjY0MzIyfQ.VefHuy55VTOTAm_AaKIvyupI9umDXcEANqwFlbVddNU
  ```

### 7.2 CMS Architecture & Folder Structure
* **Admin Login Route**: `/seputaradmin/login`
* **Authentication**: Supabase Auth (Email & Password login).
* **Database Schema**:
  1. **Table: `projects`**
     * `id` (uuid, primary key)
     * `title` (text)
     * `description` (text)
     * `image_url` (text)
     * `tech_stack` (text[], array of strings matching tech key name)
     * `project_url` (text, nullable)
     * `repo_url` (text, nullable)
     * `date` (text)
     * `category` (text)
     * `created_at` (timestamp)
  2. **Table: `certificates`**
     * `id` (uuid, primary key)
     * `title` (text)
     * `issuer` (text)
     * `credential_url` (text, nullable)
     * `issue_date` (text)
     * `image_url` (text, nullable)
     * `created_at` (timestamp)
* **CRUD Functionality**:
  * Tampilan dashboard admin setelah login yang menyediakan form Tambah, Edit, dan Hapus untuk data di tabel `projects` dan `certificates`.
  * Integrasi RLS (Row Level Security) pada Supabase untuk membatasi aksi Write/Update/Delete hanya kepada admin terautentikasi, sementara Read diizinkan secara public.
