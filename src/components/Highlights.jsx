"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
              className="inline-block mr-2.5"
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
      <div className="text-base md:text-lg lg:text-xl leading-loose text-center tracking-wide">
        {renderWords()}
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
              Highlights
            </motion.h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-gradient-to-br from-slate-800/40 via-purple-900/20 to-slate-800/40 rounded-2xl p-6 md:p-10 lg:p-12 border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          >
            <TextGenerateEffect
              words={content}
              className="text-gray-300 leading-relaxed text-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
