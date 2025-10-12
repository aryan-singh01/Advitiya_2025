"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-cyan-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-400" },
  ];

  return (
    <footer
      id="contact"
      className="relative min-h-[80vh] overflow-hidden bg-gradient-to-t from-[#1a002e] via-[#2d014a] to-[#3b0261] flex items-center justify-center"
    >
      {/* Background Decorative Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center space-y-32">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white tracking-wide"
        >
          Contact The Organizing Committee
        </motion.h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          {/* Chaitanya */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 shadow-xl hover:shadow-purple-500/30 transition-all flex flex-col items-center text-center space-y-8"
          >
            <h3 className="text-2xl font-semibold text-purple-300">
              Chaitanya Kalme
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center space-x-4 justify-center">
                <Mail className="text-purple-400" size={26} />
                <span className="text-lg">chaitanya.kalme@advitiya.in</span>
              </div>
              <div className="flex items-center space-x-4 justify-center">
                <Phone className="text-purple-400" size={26} />
                <span className="text-lg">+91 98765 XXXXX</span>
              </div>
            </div>
          </motion.div>

          {/* Aryan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 shadow-xl hover:shadow-purple-500/30 transition-all flex flex-col items-center text-center space-y-8"
          >
            <h3 className="text-2xl font-semibold text-purple-300">Aryan</h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center space-x-4 justify-center">
                <Mail className="text-purple-400" size={26} />
                <span className="text-lg">aryan.contact@advitiya.in</span>
              </div>
              <div className="flex items-center space-x-4 justify-center">
                <Phone className="text-purple-400" size={26} />
                <span className="text-lg">+91 91234 XXXXX</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-20"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.3, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-300 ${social.color} transition-colors`}
            >
              <social.icon size={48} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/10 pt-12 text-center text-gray-400 w-full"
        >
          <p className="text-lg">
            © 2026 ADVITIYA. All Rights Reserved | Made with{" "}
            <Heart size={18} className="inline mx-1 text-pink-500" /> by Team
            ADVITIYA
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
