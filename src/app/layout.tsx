import "bootstrap-icons/font/bootstrap-icons.css";
import "@/app/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Stipill Solutions and Services — Web, App, SEO & Motion Studio",
  description:
    "Stipill designs, builds and grows digital products: technical consultancy, custom web and mobile development, SEO & AI search optimization, and animated brand videos.",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
