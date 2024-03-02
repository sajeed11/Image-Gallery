import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Image Gallery Next.js mini project",
  description: "A simple image gallery built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
