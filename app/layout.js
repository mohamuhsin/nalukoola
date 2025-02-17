import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";

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
  title: "Luyimbazi Elias Nalukoola | Home",
  description: "Ekkula Ly'omuntu W'abulijjo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
