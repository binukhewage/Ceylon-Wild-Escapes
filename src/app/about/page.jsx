"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaPaw,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChevronRight,
  FaBolt,
  FaMapMarkedAlt,
  FaQuoteLeft,
  FaTiktok,
} from "react-icons/fa";
import {
  Bebas_Neue,
  Kolker_Brush,
  Lora,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import { GiElephant } from "react-icons/gi";

// --- Font Setup ---
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const kolker = Kolker_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kolker",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"], // Ensure italics are loaded
});

const About = () => {
  // Data
  const teamMembers = [
    {
      id: 1,
      name: "Roshan Peiris",
      role: "Lead Photographer & Founder",
      bio: [
        "For years, my world was defined by the relentless pace of the corporate boardroom spreadsheets, high-stakes deadlines, and the hum of the city. But in the quiet moments between meetings, I found myself dreaming of a different rhythm: the steady pulse of the primal North and the deep, ancient heartbeat of the Southern wild.",
        "Driven by a lifelong passion for wildlife and storytelling, I took the leap he had always dreamed of. I traded the corporate ladder for the jungle canopy, exchanging the pressure of the clock for the thrill of a distant alarm call and the search for perfect, golden forest light. This transition led to the birth of Ceylon Wild Escapes, a boutique photo safari experience where every moment with nature is a frame waiting to be captured.",
      ],
      image: "/images/roshabout.jpg",
      gear: [
        "Canon R3 Master Body",
        "600mm f/4 IS III",
        "Leica Trinovid Binoculars",
      ],
      social: {
        instagram: "https://www.instagram.com/wildescapesbyroshan",
        facebook: "https://www.facebook.com/share/1HdMuTRY9P/?mibextid=wwXIfr",
        tiktok: "https://www.tiktok.com/@ceylonwildescapes?_r=1&_t=ZS-92Z7UqDR7tR",
      },
    },
  ];

  return (
    <div
      className={`${playfair.variable} ${bebas.variable} ${kolker.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white overflow-hidden selection:bg-[#4a7c59] selection:text-white`}
    >
      {/* Scrollbar Style */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #4a7c59;
          border-radius: 3px;
        }
      `}</style>

      {/* =========================================
                    1. CINEMATIC HERO
          ========================================= */}

      <div className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-b1.jpg" // Ensure path is correct
            alt="Wildlife photography"
            fill
            className="object-cover opacity-60 bg-black/30"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
        </div>

        {/* Hero Content */}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{ fontFamily: "var(--font-bebas)" }}
              className="font-kolker text-5xl sm:text-7xl leading-[1.2] text-white mb-6"
            >
              ABOUT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                CEYLON WILD ESCAPES
              </span>
            </h1>

            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="font-lora text-gray-300 text-md md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Capturing the soul of Sri Lanka through exclusive photography and
              immersive, luxurious expeditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. OUR STORY (Kept as requested)
         ========================================= */}
      <div className="relative pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="uppercase font-kolker text-2xl md:text-3xl text-white leading-none mb-8">
                JOURNEY <span className="text-[#4a7c59]">BEYOND</span> THE MAP
              </h2>

              <div className="font-lora text-gray-400 text-lg leading-relaxed space-y-6 border-l border-white/10 pl-6 md:pl-10 text-justify">
                <p>
                  We believe a safari should be more than just a sighting; it
                  should be a deep immersion. Our journeys are meticulously
                  designed for the discerning traveler and the dedicated
                  photographer who crave more than just a glimpse of an animal,
                  but it is for those who want to feel the forest, learn about
                  animal behavior, and chase the perfect light alongside a guide
                  who shares that same fire.
                </p>
                <p className="text-justify">
                  We don’t just "visit" parks we traverse distinct ecological
                  zones, from the misty high-altitude plateaus to the dense
                  primary rainforests, ensuring you experience the fullest
                  spectrum of Sri Lanka's biodiversity.
                </p>
              </div>

              {/* Minimal Stats Row */}
              <div className="flex gap-12 pt-8 border-t border-white/5 mt-8">
                <div>
                  <span className="block font-bebas text-4xl text-white">
                    15K+
                  </span>
                  <span className="block font-montserrat text-[9px] uppercase tracking-widest text-[#4a7c59]">
                    Shots Captured
                  </span>
                </div>
                <div>
                  <span className="block font-bebas text-4xl text-white">
                    50+
                  </span>
                  <span className="block font-montserrat text-[9px] uppercase tracking-widest text-[#4a7c59]">
                    Guests Hosted
                  </span>
                </div>
                <div>
                  <span className="block font-bebas text-4xl text-white">
                    08
                  </span>
                  <span className="block font-montserrat text-[9px] uppercase tracking-widest text-[#4a7c59]">
                    Parks Mapped
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Decorative Image (Round Logo Style) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative h-[400px] w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4a7c59]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <Image
                    src="/images/cwe.png"
                    alt="Story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          3. MEET THE FOUNDER (Premium Profile Layout)
         ========================================= */}
      <div className="relative py-32 bg-[#050505] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="text-center mb-20">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
              Our Journey
            </span>
          </motion.div>

          <motion.h2
            className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            FROM PASSION TO <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
              PURPOSE
            </span>
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Column (Smaller) */}
            <motion.div
              className="w-full lg:w-2/5 relative group flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[450px] w-full max-w-md rounded-sm overflow-hidden border-r-4 border-[#4a7c59]">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                {/* Image Overlay Text */}
                <div className="absolute bottom-8 left-8">
                  <p className="font-kolker text-4xl text-white leading-none">
                    {teamMembers[0].name}
                  </p>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#4a7c59]">
                    Founder & Lead Guide
                  </p>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-white/20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#4a7c59]/50"></div>
            </motion.div>

            {/* Content Column (Wider) */}
            <motion.div
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaQuoteLeft className="text-[#4a7c59] text-3xl mb-6 opacity-50" />

              <h3 className="font-bebas text-3xl text-white mb-8 font-bold">
                Roshan’s Journey from Sales Fields and Boardrooms to the Wild
              </h3>

              <div className="space-y-6 mb-10 text-justify">
                {teamMembers[0].bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-lora text-gray-400 text-lg leading-relaxed border-l-2 border-[#4a7c59]/20 pl-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Gear & Socials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">
                    Connect
                  </p>
                  <div className="flex gap-4">
                    {Object.entries(teamMembers[0].social).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#4a7c59] hover:border-[#4a7c59] transition-all duration-300"
                      >
                        {key === "instagram" && <FaInstagram />}
                        {key === "facebook" && <FaFacebook />}
                        {key === "tiktok" && <FaTiktok />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================
          4. THE CWE STANDARD (Bento Grid Features)
         ========================================= */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
                Our difference
              </span>
            </motion.div>

            <motion.h2
              className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              WHY <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                CEYLON WILD ESCAPES
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Large Card */}
            <motion.div
              className="md:col-span-2 bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GiElephant className="text-9xl text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#4a7c59] mb-6">
                  <FaCamera />
                </div>
                <h3 className="font-bebas text-3xl text-white mb-3">
                  Photographer-Led Expertise
                </h3>
                <p className="font-lora text-gray-400 max-w-lg text-justify">
                  We understand the unique needs of photographers, from modified
                  vehicles and unobstructed shooting positions to precisely
                  timing park entries and exits to capture the best natural
                  light and wildlife behavior.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Tall Card */}
            <motion.div
              className="md:row-span-2 bg-[#0d0d0c] border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4a7c59]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#4a7c59] mb-6">
                <FaPaw />
              </div>

              <h3 className="font-bebas text-3xl text-white mb-3">
                Prime Access
              </h3>

              <p className="font-lora text-gray-400 mb-6 leading-relaxed">
                We have meticulously curated five distinct expeditions, each
                showcasing a unique facet of Sri Lanka’s untamed beauty—from
                leopard-dense predator plains and ancient dry-zone wilderness to
                misty highland plateaus and remote coastal wetlands.
              </p>

              {/* PREMIUM TOURS */}
              <div className="mb-5">
                <span className="block mb-3 font-montserrat text-[9px] uppercase tracking-[0.3em] text-[#4a7c59]">
                  Premium Expeditions
                </span>
                <ul className="space-y-3 font-montserrat text-[10px] uppercase tracking-wider text-gray-500">
                  <li className="flex items-center gap-2">
                    <FaBolt className="text-[#4a7c59]" />
                    Pulli Trail — Wilpattu, Yala & Horton Plains
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBolt className="text-[#4a7c59]" />
                    Kurulu Trail — Sinharaja & Kumana Wetlands
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBolt className="text-[#4a7c59]" />
                    Urumaya Trail — Cultural Heartlands & Wildlife
                  </li>
                </ul>
              </div>

              {/* LUXURY TOURS */}
              <div>
                <span className="block mb-3 font-montserrat text-[9px] uppercase tracking-[0.3em] text-[#8fbc9d]">
                  Luxury Expeditions
                </span>
                <ul className="space-y-3 font-montserrat text-[10px] uppercase tracking-wider text-gray-500">
                  <li className="flex items-center gap-2">
                    <FaBolt className="text-[#4a7c59]" />
                    Southern Wild Trail — Yala, Kumana & Cloud Forests
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBolt className="text-[#4a7c59]" />
                    Northern Wild Trail — Wilpattu & The Elephant Gathering
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-[#111] border border-white/10 rounded-2xl p-8 group hover:border-[#4a7c59]/50 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#4a7c59] mb-6">
                <FaUsers />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-2">
                Small-Group Intimacy
              </h3>
              <p className="font-lora text-sm text-gray-400 text-justify">
                We prioritize quality over quantity by operating with small,
                private groups, allowing for flexibility in the field, quieter
                encounters with wildlife, and a more personal, unhurried
                connection with the environment.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="bg-[#111] border border-white/10 rounded-2xl p-8 group hover:border-[#4a7c59]/50 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#4a7c59] mb-6">
                <FaLeaf />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-2">
                Sustainable Storytelling
              </h3>
              <p className="font-lora text-sm text-gray-400 text-justify">
                Every journey is guided by ethical wildlife practices,
                respectful distances, and conservation-first principles,
                ensuring our presence supports local communities and contributes
                to the long-term preservation of Sri Lanka’s wild landscapes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
