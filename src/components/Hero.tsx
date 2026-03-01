"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Cursor glow */}
      <div ref={cursorGlowRef} className="cursor-glow hidden md:block" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 100, 0],
            y: [0, 100, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -40, 80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:py-32 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-green-400 text-[11px] sm:text-sm font-medium leading-tight">
              {t("hero.available")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-white">{t("hero.firstName")}</span>
            <br />
            <span className="gradient-text">{t("hero.lastName")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6 flex-wrap"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide text-center lg:text-left">
              {t("hero.role")}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 w-full sm:w-auto"
            >
              {t("hero.portfolio")}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 hover:border-white/20 w-full sm:w-auto"
            >
              {t("hero.contactMe")}
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          {/* Decorative ring */}
          <div
            className="absolute inset-0 -m-4 rounded-full border border-purple-500/20 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-0 -m-8 rounded-full border border-indigo-500/10 animate-spin"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          />

          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-pulse-glow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-10" />
            <Image
              src="/nino.jfif"
              alt="ნინო ბარჯაძე"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-4 top-12 glass px-4 py-2 rounded-2xl"
          >
            <span className="text-sm font-medium">🎨 UX/UI</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -left-4 bottom-16 glass px-4 py-2 rounded-2xl"
          >
            <span className="text-sm font-medium">✨ Branding</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 border-t border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-sm text-gray-600 mx-8 font-medium tracking-widest uppercase"
            >
              UX Design • UI Design • Branding • Logo Design • Web Design •
              Graphic Design •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
