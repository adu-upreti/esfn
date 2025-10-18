"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";

export function DidYouKnowSection() {
  const { t } = useTranslation();
  const [currentFact, setCurrentFact] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [shuffledFacts, setShuffledFacts] = useState<any[]>([]);

  const allFacts = [
    {
      id: 1,
      title: t("didYouKnow.facts.carbonFootprint.title"),
      content: t("didYouKnow.facts.carbonFootprint.content"),
      icon: "🌍",
      category: "Environment",
      color: "from-esf-primary to-esf-primary-hover",
    },
    {
      id: 2,
      title: t("didYouKnow.facts.renewableEnergy.title"),
      content: t("didYouKnow.facts.renewableEnergy.content"),
      icon: "⚡",
      category: "Energy",
      color: "from-esf-primary/90 to-esf-primary",
    },
    {
      id: 3,
      title: t("didYouKnow.facts.deforestation.title"),
      content: t("didYouKnow.facts.deforestation.content"),
      icon: "🌳",
      category: "Forests",
      color: "from-esf-primary/80 to-esf-primary/90",
    },
    {
      id: 4,
      title: t("didYouKnow.facts.oceanAcidification.title"),
      content: t("didYouKnow.facts.oceanAcidification.content"),
      icon: "🌊",
      category: "Oceans",
      color: "from-esf-primary/70 to-esf-primary/80",
    },
    {
      id: 5,
      title: t("didYouKnow.facts.recycling.title"),
      content: t("didYouKnow.facts.recycling.content"),
      icon: "♻️",
      category: "Waste",
      color: "from-esf-primary/60 to-esf-primary/70",
    },
    {
      id: 6,
      title: t("didYouKnow.facts.transport.title"),
      content: t("didYouKnow.facts.transport.content"),
      icon: "🚗",
      category: "Transport",
      color: "from-esf-primary/50 to-esf-primary/60",
    },
    {
      id: 7,
      title: t("didYouKnow.facts.food.title"),
      content: t("didYouKnow.facts.food.content"),
      icon: "🥗",
      category: "Food",
      color: "from-esf-primary/40 to-esf-primary/50",
    },
    {
      id: 8,
      title: t("didYouKnow.facts.climateChange.title"),
      content: t("didYouKnow.facts.climateChange.content"),
      icon: "🌡️",
      category: "Climate",
      color: "from-esf-primary/30 to-esf-primary/40",
    },
    {
      id: 9,
      title: t("didYouKnow.facts.plasticPollution.title"),
      content: t("didYouKnow.facts.plasticPollution.content"),
      icon: "🗑️",
      category: "Pollution",
      color: "from-esf-primary/20 to-esf-primary/30",
    },
    {
      id: 10,
      title: t("didYouKnow.facts.energyEfficiency.title"),
      content: t("didYouKnow.facts.energyEfficiency.content"),
      icon: "💡",
      category: "Efficiency",
      color: "from-esf-primary/10 to-esf-primary/20",
    },
    {
      id: 11,
      title: t("didYouKnow.facts.waterConservation.title"),
      content: t("didYouKnow.facts.waterConservation.content"),
      icon: "💧",
      category: "Water",
      color: "from-esf-primary/5 to-esf-primary/10",
    },
    {
      id: 12,
      title: t("didYouKnow.facts.sustainableFashion.title"),
      content: t("didYouKnow.facts.sustainableFashion.content"),
      icon: "👕",
      category: "Fashion",
      color: "from-esf-primary to-esf-primary-hover",
    },
    {
      id: 13,
      title: t("didYouKnow.facts.renewableStorage.title"),
      content: t("didYouKnow.facts.renewableStorage.content"),
      icon: "🔋",
      category: "Storage",
      color: "from-esf-primary/90 to-esf-primary",
    },
    {
      id: 14,
      title: t("didYouKnow.facts.carbonCapture.title"),
      content: t("didYouKnow.facts.carbonCapture.content"),
      icon: "🌬️",
      category: "Technology",
      color: "from-esf-primary/80 to-esf-primary/90",
    },
    {
      id: 15,
      title: t("didYouKnow.facts.biodiversity.title"),
      content: t("didYouKnow.facts.biodiversity.content"),
      icon: "🦋",
      category: "Biodiversity",
      color: "from-esf-primary/70 to-esf-primary/80",
    },
    {
      id: 16,
      title: t("didYouKnow.facts.greenBuildings.title"),
      content: t("didYouKnow.facts.greenBuildings.content"),
      icon: "🏢",
      category: "Buildings",
      color: "from-esf-primary/60 to-esf-primary/70",
    },
    {
      id: 17,
      title: t("didYouKnow.facts.electricVehicles.title"),
      content: t("didYouKnow.facts.electricVehicles.content"),
      icon: "🚙",
      category: "Vehicles",
      color: "from-esf-primary/50 to-esf-primary/60",
    },
    {
      id: 18,
      title: t("didYouKnow.facts.foodWaste.title"),
      content: t("didYouKnow.facts.foodWaste.content"),
      icon: "🍎",
      category: "Waste",
      color: "from-esf-primary/40 to-esf-primary/50",
    },
    {
      id: 19,
      title: t("didYouKnow.facts.renewableJobs.title"),
      content: t("didYouKnow.facts.renewableJobs.content"),
      icon: "👷",
      category: "Jobs",
      color: "from-esf-primary/30 to-esf-primary/40",
    },
    {
      id: 20,
      title: t("didYouKnow.facts.oceanPlastic.title"),
      content: t("didYouKnow.facts.oceanPlastic.content"),
      icon: "🐠",
      category: "Oceans",
      color: "from-esf-primary/20 to-esf-primary/30",
    },
    {
      id: 21,
      title: t("didYouKnow.facts.carbonNeutral.title"),
      content: t("didYouKnow.facts.carbonNeutral.content"),
      icon: "🎯",
      category: "Goals",
      color: "from-esf-primary/10 to-esf-primary/20",
    },
    {
      id: 22,
      title: t("didYouKnow.facts.sustainableTransport.title"),
      content: t("didYouKnow.facts.sustainableTransport.content"),
      icon: "🚴",
      category: "Transport",
      color: "from-esf-primary to-esf-primary-hover",
    },
    {
      id: 23,
      title: t("didYouKnow.facts.renewableWater.title"),
      content: t("didYouKnow.facts.renewableWater.content"),
      icon: "💦",
      category: "Water",
      color: "from-esf-primary/90 to-esf-primary",
    },
    {
      id: 24,
      title: t("didYouKnow.facts.climateFinance.title"),
      content: t("didYouKnow.facts.climateFinance.content"),
      icon: "💰",
      category: "Finance",
      color: "from-esf-primary/80 to-esf-primary/90",
    },
    {
      id: 25,
      title: t("didYouKnow.facts.sustainableCities.title"),
      content: t("didYouKnow.facts.sustainableCities.content"),
      icon: "🏙️",
      category: "Cities",
      color: "from-esf-primary/70 to-esf-primary/80",
    },
    {
      id: 26,
      title: t("didYouKnow.facts.renewableStorage2.title"),
      content: t("didYouKnow.facts.renewableStorage2.content"),
      icon: "⚡",
      category: "Storage",
      color: "from-esf-primary/60 to-esf-primary/70",
    },
    {
      id: 27,
      title: t("didYouKnow.facts.carbonPricing.title"),
      content: t("didYouKnow.facts.carbonPricing.content"),
      icon: "📊",
      category: "Policy",
      color: "from-esf-primary/50 to-esf-primary/60",
    },
    {
      id: 28,
      title: t("didYouKnow.facts.sustainableAgriculture.title"),
      content: t("didYouKnow.facts.sustainableAgriculture.content"),
      icon: "🌾",
      category: "Agriculture",
      color: "from-esf-primary/40 to-esf-primary/50",
    },
    {
      id: 29,
      title: t("didYouKnow.facts.renewableHeat.title"),
      content: t("didYouKnow.facts.renewableHeat.content"),
      icon: "🔥",
      category: "Heating",
      color: "from-esf-primary/30 to-esf-primary/40",
    },
    {
      id: 30,
      title: t("didYouKnow.facts.circularEconomy.title"),
      content: t("didYouKnow.facts.circularEconomy.content"),
      icon: "🔄",
      category: "Economy",
      color: "from-esf-primary/20 to-esf-primary/30",
    },
    {
      id: 31,
      title: t("didYouKnow.facts.renewableHydrogen.title"),
      content: t("didYouKnow.facts.renewableHydrogen.content"),
      icon: "⚗️",
      category: "Hydrogen",
      color: "from-esf-primary/10 to-esf-primary/20",
    },
    {
      id: 32,
      title: t("didYouKnow.facts.climateAdaptation.title"),
      content: t("didYouKnow.facts.climateAdaptation.content"),
      icon: "🛡️",
      category: "Adaptation",
      color: "from-esf-primary to-esf-primary-hover",
    },
    {
      id: 33,
      title: t("didYouKnow.facts.renewableMicrogrids.title"),
      content: t("didYouKnow.facts.renewableMicrogrids.content"),
      icon: "🏘️",
      category: "Microgrids",
      color: "from-esf-primary/90 to-esf-primary",
    },
  ];

  // Shuffle facts on component mount
  useEffect(() => {
    const shuffled = [...allFacts].sort(() => Math.random() - 0.5);
    setShuffledFacts(shuffled);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || shuffledFacts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % shuffledFacts.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, shuffledFacts.length]);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % shuffledFacts.length);
    setIsAutoPlaying(false);
  };

  const prevFact = () => {
    setCurrentFact(
      (prev) => (prev - 1 + shuffledFacts.length) % shuffledFacts.length
    );
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const shuffleFacts = () => {
    const shuffled = [...allFacts].sort(() => Math.random() - 0.5);
    setShuffledFacts(shuffled);
    setCurrentFact(0);
  };

  const currentFactData = shuffledFacts[currentFact] || shuffledFacts[0];

  return (
    <section
      id="did-you-know"
      className="py-20 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("didYouKnow.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("didYouKnow.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Fact Display */}
          <motion.div
            key={currentFact}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card
              className={`p-8 h-full flex flex-col justify-center bg-gradient-to-br ${
                currentFactData?.color || "from-green-500 to-blue-500"
              } text-white`}
            >
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {currentFactData?.icon}
                </motion.div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {currentFactData?.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {currentFactData?.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {currentFactData?.content}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Navigation and Facts List */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-esf-primary dark:text-white" />
                  {t("didYouKnow.moreFacts")}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shuffleFacts}
                    className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Shuffle
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleAutoPlay}
                    className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <RefreshCw
                      className={`w-4 h-4 ${
                        isAutoPlaying ? "animate-spin" : ""
                      }`}
                    />
                    {isAutoPlaying
                      ? t("didYouKnow.pause")
                      : t("didYouKnow.play")}
                  </Button>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mb-6">
                <Button
                  variant="outline"
                  onClick={prevFact}
                  className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t("didYouKnow.previous")}
                </Button>

                <Button
                  variant="outline"
                  onClick={nextFact}
                  className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t("didYouKnow.next")}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentFact + 1) / shuffledFacts.length) * 100
                    }%`,
                  }}
                />
              </div>

              {/* Facts List */}
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {shuffledFacts.slice(0, 12).map((fact, index) => (
                  <motion.div
                    key={fact.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      shuffledFacts.indexOf(fact) === currentFact
                        ? "bg-green-100 dark:bg-green-900 border-2 border-green-500"
                        : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setCurrentFact(shuffledFacts.indexOf(fact));
                      setIsAutoPlaying(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{fact.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {fact.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {fact.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
