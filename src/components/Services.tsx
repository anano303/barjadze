"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Layout,
  Smartphone,
  PenTool,
  Monitor,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Layout,
      title: t("services.uxui.title"),
      description: t("services.uxui.desc"),
      tags: ["Figma", "Adobe XD", "Prototyping"],
    },
    {
      icon: Palette,
      title: t("services.graphic.title"),
      description: t("services.graphic.desc"),
      tags: ["Photoshop", "Illustrator", "InDesign"],
    },
    {
      icon: PenTool,
      title: t("services.branding.title"),
      description: t("services.branding.desc"),
      tags: ["Brand Identity", "Logo Design", "Style Guide"],
    },
    {
      icon: Monitor,
      title: t("services.web.title"),
      description: t("services.web.desc"),
      tags: ["Responsive", "Modern", "Clean"],
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.desc"),
      tags: ["iOS", "Android", "Cross-Platform"],
    },
    {
      icon: Layers,
      title: t("services.research.title"),
      description: t("services.research.desc"),
      tags: ["User Research", "Usability Testing", "Wireframing"],
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            {t("services.label")}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("services.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all duration-500 hover:bg-white/[0.04]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
