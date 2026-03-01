"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  { name: "Figma", level: 95 },
  { name: "Adobe XD", level: 90 },
  { name: "Photoshop", level: 92 },
  { name: "Illustrator", level: 88 },
  { name: "UX Research", level: 85 },
  { name: "Prototyping", level: 90 },
];

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "4+", label: t("about.stat.projects") },
    { number: "2+", label: t("about.stat.experience") },
    { number: "100%", label: t("about.stat.clients") },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            {t("about.label")}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <Image
                src="/nino.jpg"
                alt="ნინო ბარჯაძე"
                fill
                className="object-cover"
              />
              {/* Overlay stats */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className="text-xl sm:text-2xl font-bold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-purple-500/20 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-indigo-500/10 rounded-2xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("about.subtitle1")}
              <br />
              <span className="text-purple-400">{t("about.subtitle2")}</span>
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-6">
                {t("about.skills")}
              </h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.6 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
