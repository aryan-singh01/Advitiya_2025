// "use client";

// import { motion } from "framer-motion";
// import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
// import { useState, useEffect } from "react";
// import Tilt from "react-parallax-tilt";

// export default function Hero() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const eventDate = new Date("2025-03-15T00:00:00");

//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = eventDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const scrollToEvents = () => {
//     document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-spin-slow" />
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-spin-slow" />
//       </div>

//       <div className="container mx-auto px-4 z-10">
//         <div className="text-center">
//           {/* Main Title */}
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-6xl md:text-8xl font-bold mb-4">
//               <span className="gradient-text">ADVITIYA</span>
//             </h1>
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 glow">
//               2025
//             </h2>
//           </motion.div>

//           {/* Tagline */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl md:text-2xl text-gray-300 mb-8"
//           >
//             Innovate • Create • Celebrate
//           </motion.p>

//           {/* Event Info */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-wrap justify-center gap-6 mb-12"
//           >
//             <div className="flex items-center space-x-2 text-cyan-400">
//               <Calendar size={20} />
//               <span>March 15-17, 2025</span>
//             </div>
//             <div className="flex items-center space-x-2 text-purple-400">
//               <MapPin size={20} />
//               <span>IIT (ISM) Dhanbad</span>
//             </div>
//             <div className="flex items-center space-x-2 text-pink-400">
//               <Users size={20} />
//               <span>5000+ Participants</span>
//             </div>
//           </motion.div>

//           {/* Countdown Timer */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
//           >
//             {Object.entries(timeLeft).map(([key, value]) => (
//               <Tilt key={key} tiltMaxAngleX={10} tiltMaxAngleY={10}>
//                 <div className="glass rounded-lg p-4 neon-border">
//                   <div className="text-3xl md:text-4xl font-bold gradient-text">
//                     {value.toString().padStart(2, "0")}
//                   </div>
//                   <div className="text-sm text-gray-400 uppercase">{key}</div>
//                 </div>
//               </Tilt>
//             ))}
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
//             >
//               Register Now
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
//             >
//               View Events
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//           onClick={scrollToEvents}
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//           >
//             <ChevronDown size={32} className="text-cyan-400" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center flex flex-col items-center justify-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">ADVITIYA'26</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white glow">
              TECHFEST
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-20"
          >
            Innovate • Create • Celebrate
          </motion.p>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-24"
          >
            <div className="flex items-center space-x-3 text-cyan-400">
              <Calendar size={24} />
              <span className="text-lg font-semibold">March 15-17, 2026</span>
            </div>
            <div className="flex items-center space-x-3 text-purple-400">
              <MapPin size={24} />
              <span className="text-lg font-semibold">IIT Ropar</span>
            </div>
            <div className="flex items-center space-x-3 text-pink-400">
              <Users size={24} />
              <span className="text-lg font-semibold">1000+ Participants</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToEvents}
              className="border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 inline-block"
              style={{
                padding: "16px 40px",
                minWidth: "220px",
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View Events
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToEvents}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}