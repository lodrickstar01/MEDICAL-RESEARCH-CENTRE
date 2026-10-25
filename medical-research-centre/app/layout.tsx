import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medical Research Centre | Learn • Research • Advance",
  description: "A home for medical knowledge, learning and professional research.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
