import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header.js";
import ConditionalHeader from "./components/conditional-header.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlockBased",
  description: "The everything app for crypto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
