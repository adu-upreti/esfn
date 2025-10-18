"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

export function InfographicsCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const infographics = [
    {
      id: 1,
      title: t("infographics.charts.co2Trends.title"),
      summary: t("infographics.charts.co2Trends.summary"),
      data: [
        { year: "1990", value: 21 },
        { year: "2000", value: 24 },
        { year: "2010", value: 31 },
        { year: "2020", value: 32 },
        { year: "2024", value: 34 },
      ],
    },
    {
      id: 2,
      title: t("infographics.charts.renewableEnergy.title"),
      summary: t("infographics.charts.renewableEnergy.summary"),
      data: [
        { year: "2015", value: 1800 },
        { year: "2017", value: 2200 },
        { year: "2019", value: 2800 },
        { year: "2021", value: 3500 },
        { year: "2024", value: 4200 },
      ],
    },
    {
      id: 3,
      title: t("infographics.charts.forestCover.title"),
      summary: t("infographics.charts.forestCover.summary"),
      data: [
        { year: "1990", value: 4200 },
        { year: "2000", value: 4100 },
        { year: "2010", value: 4000 },
        { year: "2020", value: 3900 },
        { year: "2024", value: 3780 },
      ],
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % infographics.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + infographics.length) % infographics.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("infographics.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("infographics.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="hidden md:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-4 overflow-hidden max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Card className="p-6 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {infographics[currentIndex].title}
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          setExpanded(
                            expanded === currentIndex ? null : currentIndex
                          )
                        }
                      >
                        <Expand className="h-5 w-5" />
                      </Button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {infographics[currentIndex].summary}
                    </p>

                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={infographics[currentIndex].data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#1e40af"
                          strokeWidth={3}
                          dot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="hidden md:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button variant="outline" onClick={prev}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" onClick={next}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {infographics.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
