export interface Certificate {
  id: number;
  title_id: string;
  title_en: string;
  issuer: string;
  date_id: string;
  date_en: string;
  image: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title_id: "Belajar Membuat Aplikasi Web dengan React",
    title_en: "Learning to Build Web Applications with React",
    issuer: "Dicoding Indonesia",
    date_id: "Oktober 2025",
    date_en: "October 2025",
    image: "/images/certificates/react-dev.png",
    credentialUrl: "https://www.dicoding.com",
  },
  {
    id: 2,
    title_id: "Belajar Dasar Pemrograman JavaScript",
    title_en: "Learning the Basics of JavaScript Programming",
    issuer: "Dicoding Indonesia",
    date_id: "September 2025",
    date_en: "September 2025",
    image: "/images/certificates/javascript-dev.png",
    credentialUrl: "https://www.dicoding.com",
  },
  {
    id: 3,
    title_id: "Belajar Dasar Pemrograman Web",
    title_en: "Learning the Basics of Web Programming",
    issuer: "Dicoding Indonesia",
    date_id: "Agustus 2025",
    date_en: "August 2025",
    image: "/images/certificates/web-dev.png",
    credentialUrl: "https://www.dicoding.com",
  },
];
