"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { OurWorkSection } from "@/components/our-work-section";
import { CarbonCalculator } from "@/components/carbon-calculator";
import { DidYouKnowSection } from "@/components/did-you-know-section";
import { InfographicsCarousel } from "@/components/infographics-carousel";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle hash-based navigation when page loads
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Run on mount
    handleHashNavigation();

    // Also listen for hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <DidYouKnowSection />
      <CarbonCalculator />
      <InfographicsCarousel />
      <OurWorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
