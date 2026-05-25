export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2025",
    image: "/images/certificates/react-dev.png",
    credentialUrl: "https://www.dicoding.com",
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "September 2025",
    image: "/images/certificates/javascript-dev.png",
    credentialUrl: "https://www.dicoding.com",
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Agustus 2025",
    image: "/images/certificates/web-dev.png",
    credentialUrl: "https://www.dicoding.com",
  },
];
