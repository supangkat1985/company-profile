import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PT. Supangkat Eka Prasetya Makmur | Jasa Teknologi & Konsultan IT",
    template: "%s | PT. Supangkat Eka Prasetya Makmur",
  },
  description:
    "PT. Supangkat Eka Prasetya Makmur — mitra terpercaya untuk pengembangan web, aplikasi mobile, cloud & DevOps, konsultan IT, UI/UX, dan keamanan siber.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
