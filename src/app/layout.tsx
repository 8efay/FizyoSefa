import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fizyoterapist Sefa Yılmaz - Profesyonel Fizyoterapi Hizmetleri",
  description: "Uzman fizyoterapist Sefa Yılmaz ile manuel terapi, rehabilitasyon ve egzersiz danışmanlığı hizmetleri. İstanbul'da profesyonel fizyoterapi hizmetleri.",
  keywords: "fizyoterapi, manuel terapi, rehabilitasyon, egzersiz, İstanbul fizyoterapist",
  authors: [{ name: "Sefa Yılmaz" }],
  openGraph: {
    title: "Fizyoterapist Sefa Yılmaz - Profesyonel Fizyoterapi Hizmetleri",
    description: "Uzman fizyoterapist Sefa Yılmaz ile manuel terapi, rehabilitasyon ve egzersiz danışmanlığı hizmetleri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
