"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Teaser() {
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, amount: 0.12 });

  const themeRef = useRef(null);
  const themeInView = useInView(themeRef, { once: true, amount: 0.12 });

  const themeContent =
    "This year, Advitiya unveils The Crucible of Tomorrow, an extraordinary narrative of innovation and ambition where the brightest minds converge to redefine the future. In a spectacular reveal, four legendary factions emerge—Voltaris, masters of code and machine; Aeris, pioneers of engineering and flight; Terranova, architects of design and innovation; and Infernix, strategists of gaming and finance. Each faction represents a cornerstone of human ingenuity, championing disciplines that shape the world. As these forces clash in an epic contest, their collaboration and rivalry will determine the next chapter of technological evolution. This is not just a competition—this is the crucible where brilliance is forged, and the future is created.";

  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Video Section */}
      <div
        ref={videoRef}
        className="relative z-10 w-full flex justify-center items-center pb-12 md:pb-16"
      >
        <div className="w-full max-w-4xl px-6 md:px-12 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.p
              className="text-purple-400 text-sm md:text-base font-semibold tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={videoInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR VIDEOS
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={videoInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontFamily: "monospace" }}
            >
              TEASER
            </motion.h2>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/30">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "50%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/C7J50AguVK8?si=Km9qCvcwGy_TYbrw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ====== BIGGER SPACER ABOVE THEME ====== */}
      <div style={{ height: 96 }} aria-hidden="true" />

      {/* Theme Section */}
      <div
        ref={themeRef}
        className="relative z-10 w-full flex flex-col justify-center items-center"
      >
        <div className="max-w-5xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={themeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={themeInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ fontFamily: "monospace" }}
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                THEME
              </span>
            </motion.h2>
          </motion.div>

          {/* Theme Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={themeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-3xl">
              <div className="backdrop-blur-md bg-gradient-to-br from-slate-800/60 via-purple-900/20 to-slate-800/60 rounded-2xl p-8 md:p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={themeInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 }}
                  className="text-gray-200 text-center text-base md:text-lg leading-relaxed whitespace-normal break-words"
                  style={{ whiteSpace: "normal" }}
                >
                  {themeContent}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* ====== BIGGER SPACER BELOW THEME ====== */}
          <div style={{ height: 120 }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
