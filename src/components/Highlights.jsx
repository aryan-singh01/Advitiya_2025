"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextGenerateEffect = ({ words, className = "", isInView = false }) => {
  const normalized = words.replace(/([.,;:!?])(?=\S)/g, "$1 ");
  const wordsArray = normalized.split(/\s+/).filter(Boolean);

  return (
    <div className={className}>
      <div className="text-base md:text-lg lg:text-xl leading-loose text-center tracking-wide whitespace-normal break-words">
        <motion.div className="text-center inline">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              initial={{ opacity: 0, filter: "blur(10px)", y: 6 }}
              animate={
                isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
              }
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="inline"
              style={{
                display: "inline",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              {word}
              {idx !== wordsArray.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function Highlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const content =
    "Advitiya 2024, IIT Ropar's flagship technical fest, showcased an impressive lineup of events and activities that attracted thousands of participants. Highlights included thrilling competitions like Drone Racing, RC Car Racing, and Hackathons, alongside intellectually stimulating challenges such as Coding Competitions, Fin-Tech Challenges, and the Maths Arena. Workshops on cutting-edge technologies like Artificial Intelligence, Machine Learning, and Rocket Building provided hands-on learning opportunities. Esteemed professionals shared their insights during panel discussions, while the Inter-School Conclave fostered creativity among young minds with quizzes, exhibitions, and robotic showcases. The festival was inaugurated by Director Prof. Rajiv Ahuja and graced by Mr. Soarabh Pathak, VP of Maruti Suzuki, emphasizing its scale and significance.";

  return (
    <section
      id="highlights"
      className="min-h-screen w-full flex items-center justify-center py-12 md:py-16 relative overflow-hidden"
    >
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Highlights
            </motion.h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-lg bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 rounded-2xl p-6 md:p-10 lg:p-12 border border-purple-400/40 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
          >
            <TextGenerateEffect
              words={content}
              className="text-cyan-50 leading-relaxed text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              isInView={inView}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
