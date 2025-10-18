"use client";

import { Navbar } from "@/components/navbar";
import HowWeWorkLayout from "@/components/how-we-work/HowWeWorkLayout";
import { Footer } from "@/components/footer";

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HowWeWorkLayout />
      <Footer />
    </main>
  );
}
