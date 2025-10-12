"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Clock, Award, MapPin, Users } from "lucide-react";

const Card = ({
  category,
  isFlipped,
  onFlip,
  scale = 1,
  opacity = 1,
  zIndex = 1,
}) => {
  return (
    <div
      className="relative cursor-pointer"
      onClick={onFlip}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="relative w-80 h-96">
        {/* Card Container */}
        <motion.div
          initial={false}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full h-full preserve-3d"
        >
          {/* Front Face */}
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl ${category.bgColor} backdrop-blur-sm border border-white/30 p-6 backface-hidden overflow-hidden shadow-2xl hover:shadow-cyan-500/20`}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl" />

            {/* Image Placeholder */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gray-700/60 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium border border-gray-500/50">
              IMG
            </div>

            <div className="relative z-10 h-full flex flex-col">
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4 shadow-lg`}
                >
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Events List */}
              <div className="space-y-3 mb-6">
                {category.events.map((event) => (
                  <div
                    key={event}
                    className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors"
                  >
                    <Trophy
                      size={16}
                      className="mr-3 text-cyan-400 flex-shrink-0"
                    />
                    <span className="text-sm">{event}</span>
                  </div>
                ))}
              </div>

              {/* Click to flip hint */}
              <div className="text-center mt-auto">
                <p className="text-gray-400 text-xs mb-3">
                  Click to view details
                </p>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl ${category.bgColor} backdrop-blur-sm border border-white/30 p-6 backface-hidden rotateY-180 shadow-2xl`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">
                  {category.name} Details
                </h3>
                <div
                  className={`p-2 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                >
                  <category.icon size={18} className="text-white" />
                </div>
              </div>

              {/* Details Grid */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-black/30 border border-white/20">
                  <Clock
                    size={18}
                    className="mr-3 text-cyan-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Duration</p>
                    <p className="font-medium">{category.details.duration}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-black/30 border border-white/20">
                  <Award
                    size={18}
                    className="mr-3 text-yellow-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Prize Pool</p>
                    <p className="font-medium">{category.details.prizes}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-black/30 border border-white/20">
                  <MapPin
                    size={18}
                    className="mr-3 text-red-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-medium">{category.details.location}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-black/30 border border-white/20">
                  <Users
                    size={18}
                    className="mr-3 text-green-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs text-gray-400">
                      Expected Participants
                    </p>
                    <p className="font-medium">
                      {category.details.participants}
                    </p>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold mt-4 shadow-lg hover:shadow-xl transition-shadow`}
              >
                Register Now
              </motion.button>

              {/* Click to flip back hint */}
              <p className="text-gray-400 text-xs text-center mt-3">
                Click to flip back
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
