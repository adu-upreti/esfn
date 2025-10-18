import React, { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { SectionNav } from "./SectionNav";
import { ProgressIndicator } from "./ProgressIndicator";
import { OrganizationStructure } from "./OrganizationStructure";
import { ProjectCycle } from "./ProjectCycle";
import { ComplianceSection } from "./ComplianceSection";
import { ThematicPrograms } from "./ThematicPrograms";

export default function HowWeWorkLayout() {
  const [activeSection, setActiveSection] = useState("structure");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["structure", "process", "compliance", "programs"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ProgressIndicator activeSection={activeSection} />
      <HeroSection />
      <SectionNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <OrganizationStructure />
      <ProjectCycle />
      <ComplianceSection />
      <ThematicPrograms />
    </div>
  );
}
