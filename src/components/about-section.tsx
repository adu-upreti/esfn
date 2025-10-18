"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Target, Eye, Users, Globe } from "lucide-react";

export function AboutSection() {
  const { t } = useTranslation();

  const milestones = [
    { year: "2016", event: "Nepal ratifies the Paris Agreement under UNFCCC." },
    {
      year: "2021",
      event: "Nepal & World Bank sign US$45 million FCPF agreement.",
    },
    { year: "2024", event: "8M funded through CCUS project in Nepal" },
    {
      year: "2025",
      event: "Everest Sustainability Foundation (ESF) established.",
    },
    {
      year: "2025",
      event: "Nepal launches its National Framework on MRV",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("about.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-esf-primary-light dark:bg-esf-primary-dark rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-esf-primary dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t("about.mission")}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.missionText")}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-esf-primary-light dark:bg-esf-primary-dark rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-esf-primary dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t("about.vision")}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.visionText")}
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Key Focus Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-esf-primary-light dark:bg-esf-primary-dark rounded-xl"
          >
            <Globe className="w-12 h-12 text-esf-primary dark:text-white mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              {t("about.globalReach")}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t("about.globalReachDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-esf-primary-light dark:bg-esf-primary-dark rounded-xl"
          >
            <Users className="w-12 h-12 text-esf-primary dark:text-white mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              {t("about.communityFocus")}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t("about.communityFocusDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-esf-primary-light dark:bg-esf-primary-dark rounded-xl"
          >
            <Target className="w-12 h-12 text-esf-primary dark:text-white mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              {t("about.scienceBased")}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t("about.scienceBasedDesc")}
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Journey Toward Carbon Resilience
          </h3>
          <div className="relative">
            {/* Progress Tracker */}
            <div className="absolute left-20 top-0 bottom-0 w-1 bg-white/30 rounded-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-white rounded-full"></div>
            </div>

            {/* Timeline items */}
            <div className="space-y-8 ml-28">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-center gap-8 group"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-10 h-10 bg-white rounded-full border-4 border-blue-300 shadow-lg group-hover:scale-125 transition-transform duration-300 flex-shrink-0">
                    <div className="absolute inset-1 bg-blue-600 rounded-full"></div>
                    <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group-hover:bg-white/20 transition-colors duration-300 flex-1">
                    <div className="text-blue-100 text-lg font-bold leading-relaxed group-hover:scale-105 transition-transform duration-300">
                      {milestone.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
