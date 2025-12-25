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
    <section className="relative min-h-screen w-full flex flex-col justify-center md:py-24 overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
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
              className="text-cyan-400 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase"
              initial={{ opacity: 0 }}
              animate={videoInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Videos
            </motion.p>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={videoInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontFamily: "monospace" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                TEASER
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={videoInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
            />
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-black/20 backdrop-blur-sm">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />

                <div className="relative">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: 96 }} aria-hidden="true" />

      {/* Theme Section */}
      <div
        ref={themeRef}
        className="relative z-10 w-full flex flex-col justify-center items-center"
      >
        <div className="max-w-5xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={themeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={themeInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ fontFamily: "monospace" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                THEME
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={themeInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-40 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
            />
          </motion.div>

          {/* Theme Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={themeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex justify-center"
          >
            <div className="w-full ">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                {/* Content card */}
                <div className="relative backdrop-blur-md bg-black/40 border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-400/50 rounded-br-2xl" />

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={themeInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative text-gray-100 text-center text-base md:text-lg leading-relaxed"
                  >
                    {themeContent}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom spacer */}
          <div style={{ height: 120 }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
