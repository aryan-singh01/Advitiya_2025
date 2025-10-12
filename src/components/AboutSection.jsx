"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const TextGenerateEffect = ({ words, className = "" }) => {
  const wordsArray = words.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const renderWords = () => {
    return (
      <motion.div ref={ref} className="text-center">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
              }}
              className="inline-block mr-2"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="text-base md:text-lg lg:text-xl leading-loose text-center">
        {renderWords()}
      </div>
    </div>
  );
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const content =
    'Advitiya 2026, IIT Ropar\'s annual tech fest, themed "The Crucible of Tomorrow," is set to be a landmark event showcasing the best of technological innovation and intellectual prowess. The fest will feature a wide range of competitions, including coding marathons, AI challenges, and cybersecurity battles; robotics showcases and aerospace contests; creative design and mathematical problem-solving events; as well as gaming and financial strategy tournaments. Complementing these high-energy contests are captivating talks and panel discussions by renowned technologists, industry leaders, and entrepreneurs, offering fresh insights into cutting-edge advancements and the future of technology. Advitiya 2026 is a stage where talent, ideas, and collaboration converge to shape a brighter tomorrow.';

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center py-16 md:py-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex justify-center items-center">
        <div className="max-w-6xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The annual techno-cultural fest of IIT ROPAR that
              celebrates innovation, creativity, and the spirit of youth
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-gradient-to-br from-slate-800/40 via-purple-900/20 to-slate-800/40 rounded-2xl p-6 md:p-10 lg:p-12 border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          >
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Where Dreams Meet Reality
            </motion.h3>

            <TextGenerateEffect words={content} className="text-gray-300" />

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 font-semibold text-sm md:text-base">
                  50+ Events
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-purple-400 font-semibold text-sm md:text-base">
                  100+ Colleges
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                <span className="text-pink-400 font-semibold text-sm md:text-base">
                  5000+ Participants
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
