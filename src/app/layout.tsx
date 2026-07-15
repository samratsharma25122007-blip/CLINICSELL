import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Myrackle Clinic — Expert Medical Care & Advanced Treatments",
  description:
    "Myrackle Clinic offers expert medical care, advanced treatments, and easy online appointment booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Background />
        {children}
      </body>
    </html>
  );
}
