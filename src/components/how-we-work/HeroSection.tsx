import React from "react";
import { useTranslation } from "react-i18next";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 dark:from-blue-900 dark:via-blue-800 dark:to-sky-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djJ2LTJoLTd6bS0xNCAwaDd2MmgtN3YtMnptMjggMGg3djJoLTd2LTJ6bS0xNCAwaDd2MmgtN3YtMnptMTQtMTRoN3Yydi0yaC03em0tMTQgMGg3djJoLTd2LTJ6bTI4IDBoN3Yydi0yaC03em0tMTQgMGg3djJoLTd2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t("howWeWork.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            {t("howWeWork.hero.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("structure")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Our Framework
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
