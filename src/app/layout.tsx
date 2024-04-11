import "bootstrap-icons/font/bootstrap-icons.css";
import "@/app/globals.css";

import { Poppins } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Stipill",
  description: "a design and development agency",
};

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: [],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
