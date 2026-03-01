"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    name: "Behance",
    url: "https://www.behance.net/ninobarjadze1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
    color: "hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ninobarjadze/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:text-blue-500",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ninuca.barjadze",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ninucabarjadze",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
      </svg>
    ),
    color: "hover:text-pink-500",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle",
  );

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const formData = new FormData(formRef.current!);
      const response = await fetch("https://formspree.io/f/mgegdqja", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("sent");
        formRef.current?.reset();
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("idle");
      }
    } catch {
      setFormStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            {t("contact.label")}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.email")}
                  </h4>
                  <a
                    href="mailto:barjadzenino@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors animated-underline text-sm sm:text-base break-all"
                  >
                    barjadzenino@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.phone")}
                  </h4>
                  <a
                    href="tel:+995555568663"
                    className="text-gray-400 hover:text-purple-400 transition-colors animated-underline text-sm sm:text-base"
                  >
                    +995 555 568 663
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.location")}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {t("contact.locationValue")}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.status")}
                  </h4>
                  <p className="text-green-400 text-sm sm:text-base">
                    {t("contact.statusValue")}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5 sm:mb-6">
                {t("contact.social")}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.06] transition-all duration-300`}
                  >
                    <span
                      className={`text-gray-400 ${social.color} transition-colors`}
                    >
                      {social.icon}
                    </span>
                    <span className="text-sm text-gray-300 truncate">
                      {social.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400 transition-colors ml-auto flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Large CTA text */}
            <div className="mt-12 sm:mt-16 hidden lg:block">
              <p
                className="text-5xl xl:text-6xl font-bold text-white/[0.03] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s create
                <br />
                something
                <br />
                amazing.
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300 text-sm sm:text-base"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300 text-sm sm:text-base"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300 text-sm sm:text-base"
                  placeholder={t("contact.form.subjectPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-70"
              >
                {formStatus === "idle" && (
                  <>
                    {t("contact.form.send")}
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {formStatus === "sending" && (
                  <>
                    {t("contact.form.sending")}
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </>
                )}
                {formStatus === "sent" && <>{t("contact.form.sent")}</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
