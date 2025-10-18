"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isClient ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        ) : (
          // Static background during SSR
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800" />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 font-light"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-white text-esf-primary hover:bg-gray-100 dark:bg-white dark:text-esf-primary dark:hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("hero.learnMore")}
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("calculator")}
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-esf-primary dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-esf-primary px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("hero.calculateFootprint")}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
