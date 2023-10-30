import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Event Dashboard",
  description: "Event Dashboard for Stixor Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div className="w-full bg-[#9106F8]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
