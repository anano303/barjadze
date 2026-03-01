"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "services", "projects", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === "ka" ? "en" : "ka");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="relative group">
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="gradient-text">N</span>
              <span className="text-white">B</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === link.href.slice(1)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navBubble"
                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Right side: Lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full border border-white/5 hover:border-white/10 transition-all duration-300"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs font-bold tracking-wider">
                {locale === "ka" ? "EN" : "ქარ"}
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile: Lang + Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full border border-white/5 hover:border-white/10 transition-all duration-300"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs font-bold tracking-wider">
                {locale === "ka" ? "EN" : "ქარ"}
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-semibold text-white hover:text-purple-400 transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
            >
              {t("nav.cta")}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
