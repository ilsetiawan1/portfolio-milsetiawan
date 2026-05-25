# Personal Portfolio - Muhammad Ilham Setiawan

A modern, high-fidelity developer portfolio built using Next.js 16, React 19, and Tailwind CSS v4. Features a dark/light mode toggle, dynamic page animations, and an interactive tabbed Portfolio Showcase.

---

## 🚀 Key Features

*   **Responsive Modern UI**: Tailored with Tailwind CSS v4, custom HSL variables, and dark/light modes.
*   **Hero Image Polish**: Profile photo with a smooth CSS bottom opacity blur gradient mask to blend it seamlessly into the interface.
*   **Work History Timeline**: Showcases internships at Evolution IT Yogyakarta (Web Developer Intern) and LPP Radio Republik Indonesia (PKL).
*   **Tabbed Portfolio Showcase**:
    *   **Projects**: Real-world application grids featuring *Laporin Aja Bro*, *CV Akurat Sukses Sejati*, and *Portal Berita Digital (Info Seputar +62)*.
    *   **Certificates**: Renders digital course certificates (Dicoding Indonesia).
    *   **Tech Stack**: Grid of 19 skill badges displaying official colored inline SVGs.
*   **Contact Form**: Live client-side email dispatch connected securely to the **Web3Forms API**.
*   **Updated Social Media**: Fully integrated links for LinkedIn, Instagram, TikTok, GitHub, and Email.

---

## 🛠️ Tech Stack

*   **Core**: Next.js 16, React 19, TypeScript
*   **Bundler**: Webpack Compiler (stabilized for Tailwind v4 compilation)
*   **Styles**: Tailwind CSS v4
*   **Icons**: Lucide React & custom branded SVGs
*   **Forms**: Web3Forms API integration

---

## ⚙️ Local Development Setup

### 1. Install Dependencies
Make sure you have [pnpm](https://pnpm.io/) installed.
```bash
pnpm install
```

### 2. Configure Environment Variables
Create a `.env.local` file (or update the existing one) in the root directory:
```env
# Get a free access key from https://web3forms.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To generate a production-optimized build:
```bash
pnpm build
```
