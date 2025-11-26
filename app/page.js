"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
