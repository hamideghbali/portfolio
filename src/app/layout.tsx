import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="bg-gradient-to-r from-purple-50 via-white to-purple-50 ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
