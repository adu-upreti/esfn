import React, { useState } from "react";
import { Modal } from "./Modal";
import { compliancePolicies } from "../../data/complianceData";
import { useTranslation } from "react-i18next";

export const ComplianceSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPolicy, setSelectedPolicy] = useState<
    (typeof compliancePolicies)[0] | null
  >(null);

  return (
    <section id="compliance" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t("howWeWork.compliance.title")}
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
            {t("howWeWork.compliance.subtitle")}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68f082e1709bf8f92ebf415f_1760592623156_e3975339.png"
              alt="Operational Modalities & Compliances"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {compliancePolicies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setSelectedPolicy(policy)}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-left border-l-4 border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {policy.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {policy.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedPolicy}
        onClose={() => setSelectedPolicy(null)}
        title={selectedPolicy?.name || ""}
      >
        {selectedPolicy && (
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedPolicy.description}
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Key Principles:</h4>
              <ul className="space-y-2">
                {selectedPolicy.keyPrinciples.map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-semibold">Scope:</span>{" "}
              {selectedPolicy.scope}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
