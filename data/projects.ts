import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Laporin Aja Bro",
    description: "Platform pelaporan layanan publik interaktif yang memungkinkan warga melaporkan permasalahan infrastruktur, pelayanan, atau keamanan secara real-time disertai pelacakan status penanganan laporan secara transparan.",
    image: "/images/projects/laporin-aja-bro.png",
    date: "Maret 2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://laporin-aja-bro.vercel.app/",
    githubUrl: "https://github.com/ilsetiawan1/laporin-aja-bro",
    isDeployed: true,
  },
  {
    id: 2,
    title: "CV Akurat Sukses Sejati",
    description: "Sistem informasi manajemen persediaan barang (inventaris otomotif internal) terintegrasi dengan fitur kelola stok masuk/keluar, data supplier, dan sistem laporan komprehensif.",
    image: "/images/projects/cv-akurat-sukses-sejati.png",
    date: "April 2026",
    techStack: ["Next.js", "React", "TypeScript", "Supabase"],
    liveUrl: "https://cv-akurat-sukses-sejati.vercel.app/login",
    githubUrl: "https://github.com/ilsetiawan1/cv-akurat-sukses-sejati",
    isDeployed: true,
  },
  {
    id: 3,
    title: "Info Seputar 62",
    description: "Platform portal berita digital modern yang menyajikan informasi terkini di Indonesia. Dilengkapi dengan manajemen konten (CMS), filter kategori dinamis, search engine internal yang cepat, dan optimasi SEO.",
    image: "/images/projects/info-seputar-62.png",
    date: "Mei 2026",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/ilsetiawan1/info62-cms-news-platform",
    isDeployed: false,
  },
];
