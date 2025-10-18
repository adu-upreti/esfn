"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Calendar, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function OurWorkSection() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "GHG and Carbon Footprint Assessment – EGFIBERS Pvt. Ltd.",
      year: "2025",
      location: "Hetauda, Makwanpur District, Nepal",
      partners:
        "Eco-Green Fibers Industries Pvt. Ltd. (EGFIBERS), Ministry of Forest and Environment (MoFE), Everest Sustainability Foundation (ESF)",
      description:
        "EGFIBERS Pvt. Ltd. formally requested technical assistance from the Everest Sustainability Foundation (ESF) for the calculation of its industrial carbon footprint and the preparation of a comprehensive GHG Emission Calculation Report (Monitoring, Reporting, and Validation – MRV). The report will be submitted to the Climate Change Management Division under the Ministry of Forest and Environment (MoFE), aligning with the framework of Article 6 of the Paris Agreement (UNFCCC).",
      impact:
        "This collaboration marks a significant step toward industrial climate accountability in Nepal. It enables EGFIBERS to establish a transparent GHG baseline, enhance emission reporting practices, and align with national MRV systems. The project also supports the company’s transition toward low-carbon operations and participation in international carbon markets.",
      image: "/photos/EcoGreen.png",
    }
    ,
    {
      id: 2,
      title: "GHG and Carbon Footprint Assessment – Purnima Foods Industries Pvt. Ltd.",
      year: "2025",
      location: "Hetauda-28, Makwanpur District, Nepal",
      partners:
        "Purnima Foods Industries Pvt. Ltd., Ministry of Forest and Environment (MoFE), Everest Sustainability Foundation (ESF)",
      description:
        "Purnima Foods Industries Pvt. Ltd. formally sought technical assistance from the Everest Sustainability Foundation (ESF) to conduct its GHG and carbon footprint assessment. The engagement includes preparing a detailed Carbon Emission Calculation Report (Monitoring, Reporting, and Validation – MRV) to be submitted to the Climate Change Management Division under the Ministry of Forest and Environment (MoFE), aligning with Nepal’s commitments under Article 6 of the Paris Agreement (UNFCCC).",
      impact:
        "This initiative strengthens the industrial sector’s contribution to national climate goals by establishing GHG baselines, improving emission monitoring and reporting, and enabling participation in climate finance mechanisms. It also demonstrates Purnima Foods Industries’ commitment to sustainable and low-carbon production practices.",
      image: "/photos/PurnimaFoods.png"
    }
,    
    {
      id: 3,
      title: "Article 6 Collaboration – Bhanu Municipality",
      year: "2024",
      location: "Bhanu Municipality, Tanahun District, Nepal",
      partners:
        "Bhanu Municipality, Ministry of Forest and Environment (MoFE), Everest Sustainability Foundation",
      description:
        "Everest Sustainability Foundation (ESF) partnered with Bhanu Municipality to support the localization of Article 6 of the Paris Agreement under the UNFCCC framework. The project focuses on enhancing municipal-level climate governance through carbon footprint assessment, emission monitoring, and localized NDC development.",
      impact:
        "The collaboration enables Bhanu Municipality to quantify and reduce its carbon footprint, set localized climate targets aligned with national goals, and access international climate finance opportunities. It also strengthens institutional capacity in climate policy, reporting, and technology transfer.",
      image: "/photos/Article 6 Collaboration – Bhanu.jpg",
    }
    ,
    {
      id: 4,
      title: "Meeting With Nepal's President",
      year: "2024",
      location: "Rashtrapati Bhawan, Kathmandu",
      partners:
        "Office of the President of Nepal, Everest Sustainability Foundation (ESF)",
      description:
        "The Everest Sustainability Foundation (ESF) team met with the Rt. Honorable President of Nepal to discuss potential avenues for leveraging ESF’s expertise as a support provider to state parties on Article 6.8 of the Paris Agreement. The meeting focused on exploring collaboration models to assist subnational governments in implementing sustainable climate actions under the UNFCCC framework.",
      impact:
        "This engagement marked a significant step toward national-level recognition of ESF's role in supporting Nepal's climate governance efforts. The discussion paved the way for future partnerships that strengthen subnational climate initiatives and promote sustainable development aligned with international climate goals.",
      image: "/photos/Meeting.jpg",
    }
    ,
  ];

  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="our-work" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("ourWork.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("ourWork.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                className="cursor-pointer overflow-hidden group"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 text-esf-primary dark:text-white" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 text-esf-primary dark:text-white" />
                    {project.location}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(true)}
              className="group border-esf-primary text-esf-primary hover:bg-esf-primary hover:text-white dark:border-esf-primary dark:text-white dark:hover:bg-esf-primary dark:hover:text-white"
            >
              {t("ourWork.seeMore")}
              <span className="ml-2 group-hover:translate-x-1 transition-transform text-esf-primary group-hover:text-white dark:text-white dark:group-hover:text-white">
                →
              </span>
            </Button>
          </div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {projects.find((p) => p.id === selectedProject) && (
                  <div>
                    <div className="relative h-64">
                      <img
                        src={
                          projects.find((p) => p.id === selectedProject)!.image
                        }
                        alt={
                          projects.find((p) => p.id === selectedProject)!.title
                        }
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40"
                        onClick={() => setSelectedProject(null)}
                      >
                        <X className="w-6 h-6 text-white" />
                      </Button>
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {projects.find((p) => p.id === selectedProject)!.title}
                      </h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="w-5 h-5 text-esf-primary dark:text-white" />
                          <span>
                            {
                              projects.find((p) => p.id === selectedProject)!
                                .year
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="w-5 h-5 text-esf-primary dark:text-white" />
                          <span>
                            {
                              projects.find((p) => p.id === selectedProject)!
                                .location
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <Users className="w-5 h-5 text-esf-primary dark:text-white" />
                          <span>
                            {
                              projects.find((p) => p.id === selectedProject)!
                                .partners
                            }
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {
                          projects.find((p) => p.id === selectedProject)!
                            .description
                        }
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <p className="font-bold text-blue-600 dark:text-blue-400">
                          {t("ourWork.impact")}
                        </p>
                        <p className="text-gray-700 dark:text-gray-200">
                          {
                            projects.find((p) => p.id === selectedProject)!
                              .impact
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
