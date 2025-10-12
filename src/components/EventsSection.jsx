"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Music,
  Gamepad2,
  Briefcase,
  Palette,
  Users,
  Trophy,
  Clock,
  Award,
  MapPin,
} from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

const eventCategories = [
  {
    name: "Technical",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    events: ["Hackathon", "Code Sprint", "Robotics"],
    description: "Challenge your technical prowess",
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&crop=entropy&auto=format",
    ctaText: "Register Now",
    ctaLink: "#",
    details: {
      duration: "2-3 Days",
      prizes: "₹2L+",
      location: "Tech Labs",
      participants: "1000+",
    },
    content: () => (
      <div className="space-y-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Dive into the world of technology and innovation with our technical
          events. From intensive hackathons to competitive programming
          challenges, showcase your coding skills and technical expertise.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-cyan-400" />
            <span className="text-sm">2-3 Days</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm">₹2L+ Prizes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-red-400" />
            <span className="text-sm">Tech Labs</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={16} className="text-green-400" />
            <span className="text-sm">1000+ People</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">
            Featured Events:
          </h4>
          <div className="space-y-1">
            {["24-hour Hackathon", "Algorithm Sprint", "Robotics Battle"].map(
              (event) => (
                <div
                  key={event}
                  className="flex items-center justify-center gap-2"
                >
                  <Trophy size={14} className="text-cyan-400" />
                  <span className="text-sm">{event}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Cultural",
    icon: Music,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    events: ["Dance Battle", "Music Night", "Drama"],
    description: "Express your artistic side",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop&crop=entropy&auto=format",
    ctaText: "Register Now",
    ctaLink: "#",
    details: {
      duration: "1-2 Days",
      prizes: "₹1.5L+",
      location: "Main Auditorium",
      participants: "800+",
    },
    content: () => (
      <div className="space-y-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Celebrate creativity and cultural diversity through our vibrant
          cultural events. From mesmerizing dance performances to soul-stirring
          musical nights, express your artistic talents.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-purple-400" />
            <span className="text-sm">1-2 Days</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm">₹1.5L+ Prizes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-red-400" />
            <span className="text-sm">Auditorium</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={16} className="text-green-400" />
            <span className="text-sm">800+ People</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">
            Featured Events:
          </h4>
          <div className="space-y-1">
            {["Dance Battle", "Musical Night", "Drama Competition"].map(
              (event) => (
                <div
                  key={event}
                  className="flex items-center justify-center gap-2"
                >
                  <Trophy size={14} className="text-purple-400" />
                  <span className="text-sm">{event}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    events: ["BGMI", "Valorant", "FIFA"],
    description: "Battle in virtual arenas",
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop&crop=entropy&auto=format",
    ctaText: "Register Now",
    ctaLink: "#",
    details: {
      duration: "3 Days",
      prizes: "₹2.5L+",
      location: "Gaming Arena",
      participants: "1200+",
    },
    content: () => (
      <div className="space-y-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Enter the ultimate gaming battleground and compete in the most popular
          esports tournaments. From mobile gaming to PC competitions, prove your
          gaming supremacy.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-green-400" />
            <span className="text-sm">3 Days</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm">₹2.5L+ Prizes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-red-400" />
            <span className="text-sm">Gaming Arena</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={16} className="text-green-400" />
            <span className="text-sm">1200+ People</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">
            Featured Events:
          </h4>
          <div className="space-y-1">
            {[
              "BGMI Tournament",
              "Valorant Championship",
              "FIFA Competition",
            ].map((event) => (
              <div
                key={event}
                className="flex items-center justify-center gap-2"
              >
                <Trophy size={14} className="text-green-400" />
                <span className="text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Business",
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    events: ["B-Plan", "Case Study", "Stock Market"],
    description: "Showcase business acumen",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=entropy&auto=format",
    ctaText: "Register Now",
    ctaLink: "#",
    details: {
      duration: "2 Days",
      prizes: "₹1.8L+",
      location: "Conference Hall",
      participants: "600+",
    },
    content: () => (
      <div className="space-y-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Demonstrate your entrepreneurial spirit and business expertise in our
          comprehensive business events. From innovative business plans to
          strategic case studies, showcase your commercial acumen.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-orange-400" />
            <span className="text-sm">2 Days</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm">₹1.8L+ Prizes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-red-400" />
            <span className="text-sm">Conference Hall</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={16} className="text-green-400" />
            <span className="text-sm">600+ People</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">
            Featured Events:
          </h4>
          <div className="space-y-1">
            {[
              "Business Plan Competition",
              "Case Study Analysis",
              "Stock Market Simulation",
            ].map((event) => (
              <div
                key={event}
                className="flex items-center justify-center gap-2"
              >
                <Trophy size={14} className="text-orange-400" />
                <span className="text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Design",
    icon: Palette,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    events: ["UI/UX", "Poster Design", "3D Modeling"],
    description: "Create visual masterpieces",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=entropy&auto=format",
    ctaText: "Register Now",
    ctaLink: "#",
    details: {
      duration: "2 Days",
      prizes: "₹1.2L+",
      location: "Design Studio",
      participants: "500+",
    },
    content: () => (
      <div className="space-y-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Unleash your creativity and design prowess in our comprehensive design
          competitions. From digital interfaces to visual graphics, create
          stunning masterpieces that inspire.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-indigo-400" />
            <span className="text-sm">2 Days</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm">₹1.2L+ Prizes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-red-400" />
            <span className="text-sm">Design Studio</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={16} className="text-green-400" />
            <span className="text-sm">500+ People</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">
            Featured Events:
          </h4>
          <div className="space-y-1">
            {[
              "UI/UX Design Challenge",
              "Digital Poster Competition",
              "3D Modeling Contest",
            ].map((event) => (
              <div
                key={event}
                className="flex items-center justify-center gap-2"
              >
                <Trophy size={14} className="text-indigo-400" />
                <span className="text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Literary",
    icon: Users,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    events: ["Debate", "Quiz", "Poetry Slam"],
    description: "Words are your weapons",
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=entropy&auto=format",
    ctaText: "Register Now",
    ctaLink: "#",
    details: {
      duration: "1 Day",
      prizes: "₹1L+",
      location: "Library Hall",
      participants: "400+",
    },
    content: () => (
      <div className="space-y-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Engage in intellectual battles and showcase your literary prowess in
          our diverse literary events. From compelling debates to creative
          poetry, let your words make an impact.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-yellow-400" />
            <span className="text-sm">1 Day</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm">₹1L+ Prizes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-red-400" />
            <span className="text-sm">Library Hall</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={16} className="text-green-400" />
            <span className="text-sm">400+ People</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">
            Featured Events:
          </h4>
          <div className="space-y-1">
            {[
              "Parliamentary Debate",
              "General Knowledge Quiz",
              "Poetry Slam Competition",
            ].map((event) => (
              <div
                key={event}
                className="flex items-center justify-center gap-2"
              >
                <Trophy size={14} className="text-yellow-400" />
                <span className="text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path d="m18 6l-12 12" />
    <path d="m6 6l12 12" />
  </motion.svg>
);

export default function EventsSection() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {/* Modal overlay */}
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>

          {/* Modal */}
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                <motion.button
                  key={`button-${active.name}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-6 right-6 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-10"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>

                {/* Modal card: flex column, max-h so we can scroll internal content */}
                <motion.div
                  layoutId={`card-${active.name}-${id}`}
                  ref={ref}
                  className="w-full max-w-[700px] max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden m-4 shadow-lg"
                >
                  {/* Image: take fixed space */}
                  <motion.div
                    layoutId={`image-${active.name}-${id}`}
                    className="flex-none"
                  >
                    <Image
                      priority
                      width={700}
                      height={220}
                      src={active.src}
                      alt={active.name}
                      className="w-full h-44 object-cover"
                    />
                  </motion.div>

                  {/* Content container: flex-1 and scrollable */}
                  <div className="p-6 flex-1 flex flex-col min-h-0">
                    {/* Title + short desc */}
                    <div className="text-center mb-2">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl mb-1"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 mx-auto max-w-xl text-center"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    {/* CTA */}
                    <div className="text-center mb-4">
                      <motion.a
                        layoutId={`button-${active.name}-${id}`}
                        href={active.ctaLink}
                        className={`inline-block px-6 py-3 text-sm rounded-full font-bold bg-gradient-to-r ${active.color} text-white hover:shadow-lg transition-all`}
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>

                    {/* Full details (scrolls if too tall) */}
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="overflow-auto flex-1 min-h-0 text-neutral-600 dark:text-neutral-400 space-y-4"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          {/* Header (forced centered) */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center text-center"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 sm:mb-8">
              Events
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 text-center">
              FLAGSHIP EVENTS ACROSS DIVERSE CATEGORIES
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-none items-stretch">
              {eventCategories.map((category, index) => (
                <motion.div
                  layoutId={`card-${category.name}-${id}`}
                  key={`card-${category.name}-${id}`}
                  onClick={() => setActive(category)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group cursor-pointer w-full h-full"
                >
                  {/* Card: fill grid cell, flex column */}
                  <div
                    className={`relative overflow-hidden rounded-xl ${category.bgColor} backdrop-blur-sm border border-white/20 p-0 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 flex flex-col h-full`}
                  >
                    {/* Image (fixed) */}
                    <motion.div
                      layoutId={`image-${category.name}-${id}`}
                      className="flex-none"
                    >
                      <Image
                        width={600}
                        height={240}
                        src={category.src}
                        alt={category.name}
                        className="w-full h-44 rounded-t-lg object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>

                    {/* Body (flex-1) */}
                    <div className="flex-1 flex flex-col items-center text-center justify-between p-4 min-h-0">
                      <div className="w-full">
                        <div className="flex items-center justify-center mb-2">
                          <div
                            className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-3 shadow-lg`}
                          >
                            <category.icon size={24} className="text-white" />
                          </div>
                          <motion.h3
                            layoutId={`title-${category.name}-${id}`}
                            className="font-bold text-white text-xl"
                          >
                            {category.name}
                          </motion.h3>
                        </div>

                        <motion.p
                          layoutId={`description-${category.description}-${id}`}
                          className="text-gray-300 mb-2"
                        >
                          {category.description}
                        </motion.p>

                        {/* events: scroll inside card if needed */}
                        <div className="w-full flex-1 overflow-auto space-y-3 px-2 min-h-0">
                          {category.events.map((event, eventIndex) => (
                            <motion.div
                              key={event}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.04 + eventIndex * 0.03,
                              }}
                              className="flex items-center justify-center text-gray-300"
                            >
                              <Trophy
                                size={16}
                                className="mr-3 text-cyan-400"
                              />
                              <span className="text-sm">{event}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="w-full mt-3">
                        <div className="grid grid-cols-2 gap-3 w-full mb-2 text-sm">
                          <div className="text-center p-3 rounded bg-black/20">
                            <div className="text-cyan-400 font-semibold">
                              {category.details.duration}
                            </div>
                            <div className="text-gray-400 text-xs">
                              Duration
                            </div>
                          </div>
                          <div className="text-center p-3 rounded bg-black/20">
                            <div className="text-yellow-400 font-semibold">
                              {category.details.prizes}
                            </div>
                            <div className="text-gray-400 text-xs">Prizes</div>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Click to view details
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Info - centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="w-full flex flex-col items-center text-center"
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <p className="text-gray-400 text-base sm:text-lg mb-6 mx-auto">
                Click on any event card to explore detailed information,
                schedules, and registration links
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-gray-500 flex-wrap">
                <span>• Interactive details</span>
                <span>• Real-time registration</span>
                <span>• Prize breakdown</span>
                <span>• Venue information</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
