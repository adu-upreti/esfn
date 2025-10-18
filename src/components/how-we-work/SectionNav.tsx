import React from "react";
import { useTranslation } from "react-i18next";

interface SectionNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SectionNav: React.FC<SectionNavProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const { t } = useTranslation();

  const sections = [
    { id: "structure", label: t("howWeWork.sections.structure") },
    { id: "process", label: t("howWeWork.sections.process") },
    { id: "compliance", label: t("howWeWork.sections.compliance") },
    { id: "programs", label: t("howWeWork.sections.programs") },
  ];

  const scrollToSection = (id: string) => {
    onSectionChange(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-16 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-2 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeSection === section.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
