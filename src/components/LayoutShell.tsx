"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();

  useEffect(() => {
    // Update html lang attribute when language changes
    document.documentElement.lang = locale === "ka" ? "ka" : "en";

    // Update URL hash to reflect language
    const currentHash = window.location.hash;
    const sectionHash = currentHash.replace(/^#(ka|en)\/?/, "#");

    if (locale === "en") {
      // Only update if not already set
      if (!currentHash.startsWith("#en")) {
        const section = currentHash.replace("#", "") || "";
        const newHash = section && section !== "ka" && section !== "en" ? `#en/${section}` : "#en";
        window.history.replaceState(null, "", newHash);
      }
    } else {
      // For Georgian (default), remove /en prefix
      if (currentHash.startsWith("#en")) {
        const section = currentHash.replace("#en/", "").replace("#en", "");
        const newHash = section ? `#${section}` : "#";
        window.history.replaceState(null, "", newHash || window.location.pathname);
      }
    }
  }, [locale]);

  // On initial load, detect language from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#en")) {
      // Will be picked up by LanguageContext
      const event = new CustomEvent("setLangFromUrl", { detail: "en" });
      window.dispatchEvent(event);
    }
  }, []);

  return <>{children}</>;
}
