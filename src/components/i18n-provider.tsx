"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const initI18n = async () => {
      try {
        if (!i18n.isInitialized) {
          await i18n.init();
        }
        setIsReady(true);
      } catch (error) {
        console.error("Failed to initialize i18n:", error);
        setIsReady(true); // Still render children even if i18n fails
      }
    };

    initI18n();
  }, []);

  // During SSR, always render children to avoid hydration mismatch
  if (!isClient) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
