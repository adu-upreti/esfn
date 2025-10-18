import React, { useState } from "react";
import { Modal } from "./Modal";
import { organizationUnits } from "../../data/organizationData";
import { useTranslation } from "react-i18next";

export const OrganizationStructure: React.FC = () => {
  const { t } = useTranslation();
  const [selectedUnit, setSelectedUnit] = useState<
    (typeof organizationUnits)[0] | null
  >(null);

  return (
    <section id="structure" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t("howWeWork.organizationStructure.title")}
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
            {t("howWeWork.organizationStructure.subtitle")}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68f082e1709bf8f92ebf415f_1760592616941_f0b51423.png"
              alt="Organizational Structure"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {organizationUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(unit)}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {unit.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {unit.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedUnit}
        onClose={() => setSelectedUnit(null)}
        title={selectedUnit?.name || ""}
      >
        {selectedUnit && (
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedUnit.description}
            </p>
            <h4 className="font-bold text-lg mb-3">Key Responsibilities:</h4>
            <ul className="space-y-2">
              {selectedUnit.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
};
