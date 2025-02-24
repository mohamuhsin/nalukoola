import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
  title: "Nalukoola For Kawempe North | Home",
  description: "Nalukoola for Kawemppe North",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-XYZ" />
        </div>
      </body>
    </html>
  );
}
