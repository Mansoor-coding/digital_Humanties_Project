import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curating Calm — A Visual Analysis of Slow Living on Instagram",
  description:
    "An interactive digital humanities essay exploring how slow living aesthetics are constructed, curated, and consumed across Instagram accounts and YouTube channels.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain antialiased">{children}</body>
    </html>
  );
}