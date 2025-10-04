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
  description: "Fizyoterapist Sefa Yılmaz ile manuel terapi, rehabilitasyon ve egzersiz danışmanlığı hizmetleri. Ağrı Merkez'de profesyonel fizyoterapi hizmetleri.",
  keywords: "fizyoterapi, manuel terapi, rehabilitasyon, egzersiz, Ağrı, fizyoterapist",
  authors: [{ name: "Sefa Yılmaz" }],
  openGraph: {
    title: "Fizyoterapist Sefa Yılmaz - Profesyonel Fizyoterapi Hizmetleri",
    description: "Fizyoterapist Sefa Yılmaz ile manuel terapi, rehabilitasyon ve egzersiz danışmanlığı hizmetleri.",
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
