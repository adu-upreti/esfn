import React, { useState } from "react";
import { Modal } from "./Modal";
import { projectCycleStages } from "../../data/projectCycleData";
import { useTranslation } from "react-i18next";

export const ProjectCycle: React.FC = () => {
  const { t } = useTranslation();
  const [selectedStage, setSelectedStage] = useState<
    (typeof projectCycleStages)[0] | null
  >(null);

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t("howWeWork.projectCycle.title")}
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
            {t("howWeWork.projectCycle.subtitle")}
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-8">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68f082e1709bf8f92ebf415f_1760592621034_869eae82.png"
              alt="ESF Project Cycle"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projectCycleStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {stage.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedStage}
        onClose={() => setSelectedStage(null)}
        title={selectedStage?.name || ""}
      >
        {selectedStage && (
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedStage.description}
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Key Activities:</h4>
              <ul className="space-y-2">
                {selectedStage.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-semibold">Typical Duration:</span>{" "}
              {selectedStage.duration}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
