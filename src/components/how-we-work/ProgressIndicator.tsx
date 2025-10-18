import React from "react";

interface ProgressIndicatorProps {
  activeSection: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  activeSection,
}) => {
  const sections = [
    { id: "structure", label: "Structure", number: 1 },
    { id: "process", label: "Process", number: 2 },
    { id: "compliance", label: "Compliance", number: 3 },
    { id: "programs", label: "Programs", number: 4 },
  ];

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const progress = ((activeIndex + 1) / sections.length) * 100;

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col gap-8">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                index <= activeIndex
                  ? "bg-blue-600 text-white scale-110"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500"
              }`}
            >
              {section.number}
            </div>
            <span
              className={`text-sm font-medium transition-opacity ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {section.label}
            </span>
          </div>
        ))}
        <div className="absolute left-5 top-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10">
          <div
            className="w-full bg-blue-600 transition-all duration-500"
            style={{ height: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
