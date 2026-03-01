"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    title: "Only Georgian",
    category: "Branding & Web Design",
    descKey: "projects.onlyGeorgian.desc",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cf8c17233070443.Y3JvcCwyNjM4LDIwNjQsMTE3LDA.png",
    link: "https://www.behance.net/gallery/233070443/Only-Georgian",
    tags: ["Branding", "Web Design", "UX/UI"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "BestSoft",
    category: "UX Case Study",
    descKey: "projects.bestsoft.desc",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/29b305216473059.Y3JvcCw1NTIzLDQzMjAsMTA4MCww.png",
    link: "https://www.behance.net/gallery/216473059/BestSoft",
    tags: ["UX Research", "UI Design", "Case Study"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "ComicShelf",
    category: "UX Case Study",
    descKey: "projects.comicshelf.desc",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ef59d9216296115.Y3JvcCw1NTI2LDQzMjMsMTA4MCww.png",
    link: "https://www.behance.net/gallery/216296115/ComicShelf",
    tags: ["UX/UI", "Mobile App", "Case Study"],
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "EDU ACADEMY",
    category: "UX Case Study",
    descKey: "projects.eduacademy.desc",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/659952213320745.Y3JvcCwzNDA5LDI2NjYsMzAzLDI2MQ.png",
    link: "https://www.behance.net/gallery/213320745/EDU-ACADEMY-Case-Study",
    tags: ["Education", "UX Research", "UI Design"],
    color: "from-purple-500/20 to-indigo-500/20",
  },
];

const categories = ["all", "Branding", "UX Case Study"];

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeCategory));

  const categoryLabels: Record<string, string> = {
    all: t("projects.all"),
    Branding: "Branding",
    "UX Case Study": "UX Case Study",
  };

  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            {t("projects.label")}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("projects.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t("projects.description")}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "text-gray-400 border border-white/5 hover:border-white/10 hover:text-gray-300"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative project-card block rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-purple-500/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-purple-400 font-medium tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {t(project.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 sm:mt-14"
        >
          <a
            href="https://www.behance.net/ninobarjadze1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-white rounded-full border border-white/10 hover:bg-white/5 hover:border-purple-500/20 transition-all duration-300"
          >
            {t("projects.viewAll")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
