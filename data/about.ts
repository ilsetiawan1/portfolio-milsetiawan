export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  isEducation?: boolean;
}

export const aboutData = {
  bioParagraphs: [
    "I am a Full-Stack Developer with a deep-seated passion for architectural integrity and performance. My journey in tech is driven by the challenge of transforming complex requirements into elegant, scalable digital solutions.",
    "With experience spanning from modern frontend frameworks like Next.js to robust backend systems using Laravel, I bridge the gap between user-centric design and technical excellence."
  ],
  timeline: [
    {
      role: "Web Developer Intern",
      company: "Evolution IT Yogyakarta",
      period: "April 2026 - Sekarang",
      description: "Mendalami pengembangan back-end dengan framework Laravel 12 (MVC) untuk membangun aplikasi web terstruktur dan aman. Berhasil merancang dan membangun projek Portal Berita Digital (Info Seputar +62) sebagai output magang.",
      isEducation: false
    },
    {
      role: "PKL (Praktek Kerja Lapangan)",
      company: "LPP Radio Republik Indonesia",
      period: "Juni 2021 - September 2021",
      description: "Bertanggung jawab mengelola surat masuk dan keluar serta mengarsipkan dokumen fisik dan digital.",
      isEducation: false
    }
  ] as TimelineItem[]
};
