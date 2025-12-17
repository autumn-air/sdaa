import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sex, Drugs, & Alcohol",
  description: "By Autumn Rockwell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
