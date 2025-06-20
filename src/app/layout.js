import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Dancing_Script   } from 'next/font/google';
import { Fleur_De_Leah } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fleurDeLeah = Fleur_De_Leah({
  subsets: ['latin'],
  weight: '400', 
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript} ${fleurDeLeah}  antialiased` }
        >
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
