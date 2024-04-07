import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: "./satoshi/satoshi.ttf",
  display: "swap",
  variable: "--font-satoshi",
});


export const metadata: Metadata = {
  title: "GoBusiness Grants",
  description: "Find the right business grant for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} w-screen flex justify-center`}>{children}</body>
    </html>
  );
}
