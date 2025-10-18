"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Building2, LineChart, Leaf, Users } from "lucide-react";

const services = [
  {
    icon: LineChart,
    key: "carbonInitiatives",
  },
  {
    icon: Building2,
    key: "localClimatePolicy",
  },
  {
    icon: Leaf,
    key: "greenTechnology",
  },
  {
    icon: Users,
    key: "advisoryCapacity",
  },
];

export function WhatWeDoSection() {
  const { t } = useTranslation();

  return (
    <section id="what-we-do" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("whatWeDo.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-shadow duration-300 border-2 hover:border-esf-primary dark:hover:border-esf-primary group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-esf-primary-light dark:bg-esf-primary-dark rounded-full flex items-center justify-center mb-4 group-hover:bg-esf-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-esf-primary dark:text-white group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {t(`whatWeDo.${service.key}`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(`whatWeDo.${service.key}Desc`)}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Paris Agreement Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-esf-primary/20 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("parisAgreement.title")}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("parisAgreement.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-8 border-esf-primary/30 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <span className="font-bold text-lg">6.2</span>
                  </div>
                  <h4 className="font-bold text-esf-primary dark:text-white text-xl">
                    {t("parisAgreement.article62.title")}
                  </h4>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                  {(() => {
                    const items = t("parisAgreement.article62.description", {
                      returnObjects: true,
                    });
                    const itemArray = Array.isArray(items) ? items : [items];
                    return itemArray.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-esf-primary dark:text-esf-primary mr-2 mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ));
                  })()}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-8 border-esf-primary/30 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <span className="font-bold text-lg">6.4</span>
                  </div>
                  <h4 className="font-bold text-esf-primary dark:text-white text-xl">
                    {t("parisAgreement.article64.title")}
                  </h4>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                  {(() => {
                    const items = t("parisAgreement.article64.description", {
                      returnObjects: true,
                    });
                    const itemArray = Array.isArray(items) ? items : [items];
                    return itemArray.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-esf-primary dark:text-esf-primary mr-2 mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ));
                  })()}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-8 border-esf-primary/30 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <span className="font-bold text-lg">6.8</span>
                  </div>
                  <h4 className="font-bold text-esf-primary dark:text-white text-xl">
                    {t("parisAgreement.article68.title")}
                  </h4>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                  {(() => {
                    const items = t("parisAgreement.article68.description", {
                      returnObjects: true,
                    });
                    const itemArray = Array.isArray(items) ? items : [items];
                    return itemArray.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-esf-primary dark:text-esf-primary mr-2 mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ));
                  })()}
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
