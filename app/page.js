"use client";
import Hero from "@/components/Hero/Hero";
import Header from "../components/Header/header";
import About from "@/components/About/About";
import Follow from "@/components/Follow/Follow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Follow />
      </main>
    </div>
  );
}
