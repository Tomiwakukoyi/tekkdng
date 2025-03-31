import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButtons from "@/components/ScrollButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tekkd NG",
  description: "Innovation and sustainability through digital technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollButtons />
      </body>
    </html>
  );
}
