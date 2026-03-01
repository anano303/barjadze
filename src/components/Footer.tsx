"use client";

import { ArrowUp, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 sm:py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="gradient-text">N</span>
              <span className="text-white">B</span>
            </span>
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()}{" "}
              {locale === "ka" ? "ნინო ბარჯაძე" : "Nino Barjadze"}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href="https://www.behance.net/ninobarjadze1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors animated-underline"
            >
              Behance
            </a>
            <a
              href="https://www.linkedin.com/in/ninobarjadze/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors animated-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/ninuca.barjadze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors animated-underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ninucabarjadze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors animated-underline"
            >
              Instagram
            </a>
          </div>

          {/* Made with love + Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{t("footer.madeWith")}</span>
              <Heart className="w-3 h-3 text-purple-400 fill-purple-400" />
              <span>{t("footer.inTbilisi")}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
