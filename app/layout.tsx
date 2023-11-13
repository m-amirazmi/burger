import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger App",
  description: "Burger App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
