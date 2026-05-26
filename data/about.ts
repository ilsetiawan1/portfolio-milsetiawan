export interface TimelineItem {
  role: string;
  role_en?: string;
  company: string;
  period: string;
  description_id: string;
  description_en: string;
  details_id?: string;
  details_en?: string;
  isEducation?: boolean;
}

export const aboutData = {
  bioParagraphs: {
    id: [
      "Saya adalah seorang Full-Stack Developer dengan minat mendalam pada integritas arsitektur dan performa. Perjalanan saya di dunia teknologi didorong oleh tantangan untuk mengubah kebutuhan kompleks menjadi solusi digital yang elegan dan skalabel.",
      "Dengan pengalaman mulai dari frontend framework modern seperti Next.js hingga sistem backend yang kokoh menggunakan Laravel, saya menjembatani celah antara desain yang berfokus pada pengguna dan keunggulan teknis."
    ],
    en: [
      "I am a Full-Stack Developer with a deep-seated passion for architectural integrity and performance. My journey in tech is driven by the challenge of transforming complex requirements into elegant, scalable digital solutions.",
      "With experience spanning from modern frontend frameworks like Next.js to robust backend systems using Laravel, I bridge the gap between user-centric design and technical excellence."
    ]
  },
  timeline: [
    {
      role: "Web Developer Intern",
      company: "Evolution IT Yogyakarta",
      period: "April 2026 - Juni 2026",
      description_id: "Mendalami pengembangan back-end dengan framework Laravel 12 (MVC) untuk membangun aplikasi web terstruktur dan aman.",
      details_id: "Berhasil merancang dan membangun projek Portal Berita Digital (Info Seputar +62) sebagai output magang.",
      description_en: "Diving deep into backend development with the Laravel 12 framework (MVC) to build structured and secure web applications.",
      details_en: "Successfully designed and built the Digital News Portal (Info Seputar +62) project as an internship output.",
      isEducation: false
    },
    {
      role: "PKL (Praktek Kerja Lapangan)",
      role_en: "Internship (PKL)",
      company: "LPP Radio Republik Indonesia",
      period: "Juni 2021 - September 2021",
      description_id: "Bertanggung jawab mengelola surat masuk dan keluar serta mengarsipkan dokumen fisik dan digital.",
      description_en: "Responsible for managing incoming and outgoing correspondence and archiving physical and digital documents.",
      isEducation: false
    }
  ] as TimelineItem[]
};
