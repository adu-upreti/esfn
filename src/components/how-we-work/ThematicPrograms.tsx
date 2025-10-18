import React, { useState } from "react";
import { Modal } from "./Modal";
import { thematicPrograms } from "../../data/programsData";
import { useTranslation } from "react-i18next";

export const ThematicPrograms: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProgram, setSelectedProgram] = useState<
    (typeof thematicPrograms)[0] | null
  >(null);

  return (
    <section id="programs" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t("howWeWork.thematicPrograms.title")}
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
            {t("howWeWork.thematicPrograms.subtitle")}
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-8">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68f082e1709bf8f92ebf415f_1760592626003_9f857d90.png"
              alt="Thematic Programs"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {thematicPrograms.map((program, idx) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="p-6 bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {program.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {program.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.name || ""}
      >
        {selectedProgram && (
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProgram.description}
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Focus Areas:</h4>
              <ul className="space-y-2">
                {selectedProgram.focus.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
