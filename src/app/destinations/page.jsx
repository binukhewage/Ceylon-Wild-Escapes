"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaChevronRight,
  FaLayerGroup,
  FaExpand,
  FaClock,
  FaTree,
  FaPaw,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import destinations from "../../data/destinations.js";

// --- Font Setup ---
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const kolker = Kolker_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kolker",
});

const DestinationsPage = () => {
  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}
    >
      <style jsx global>{`
        .wildlife-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
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
          1. HERO SECTION
         ========================================= */}
      <div className="relative h-[53vh] w-full overflow-hidden bg-black">
              <div className="absolute inset-0 wildlife-texture opacity-30"></div>
              <Image
                src="/images/banner02.jpg"
                alt="Wildlife photography tours"
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{ fontFamily: "var(--font-bebas)" }}
              className="font-kolker text-5xl md:text-7xl leading-[0.75] text-white mb-6 drop-shadow-2xl"
            >
              Tour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                Destinations
              </span>
            </h1>
            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="font-lora text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md"
            >
              Discover the diverse ecosystems and incredible biodiversity of Sri
              Lanka's premier national parks
            </p>
          </motion.div>
              </div>
      </div>

      {/* =========================================
          2. DESTINATIONS GRID
         ========================================= */}
      <div className="relative bg-black pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative flex flex-col"
              >
                {/* --- 1. THE IMAGE CARD --- */}
                <Link
                  href={`/destinations/${destination.id}`}
                  className="block relative w-full h-[450px] rounded-sm overflow-hidden mb-[-40px] z-0 border-b-4 border-[#4a7c59] shadow-2xl"
                >
                  <Image
                    src={destination.images[0]}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Floating Title (Inside Image) */}
                  <div 
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  className="absolute bottom-12 left-8 z-20">
                    <h2 className="font-bold text-2xl md:text-3xl text-white drop-shadow-md transition-colors duration-300">
                      {destination.name}
                    </h2>
                  </div>
                </Link>

                {/* --- 2. THE INFO PANEL (Glassmorphic Overlay) --- */}
                <div className="relative z-10 mx-4 md:mx-6 bg-[#0a0a0a] border border-white/10 p-8 pt-10 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-[#4a7c59]/40 transition-colors duration-500">
                  {/* HUD Stats Bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6">
                    <div className="flex flex-col">
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1">
                        Area
                      </span>
                      <span className="font-lora text-white text-sm">
                        {destination.stats.area}
                      </span>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10"></div>
                    <div className="flex flex-col">
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1">
                        Established
                      </span>
                      <span className="font-lora text-white text-sm">
                        {destination.stats.established}
                      </span>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10"></div>
                    <div className="flex flex-col text-right">
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1">
                        Focus
                      </span>
                      <span className="font-lora text-white text-sm">
                        {destination.stats.focus}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-lora text-gray-400 text-sm leading-relaxed mb-6 line-clamp-5">
                    {destination.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 mb-8">
                    {destination.highlights.slice(0, 4).map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-[11px] font-montserrat uppercase tracking-wider"
                      >
                        {/* Green Dot */}
                        <span className="mt-[6px] w-2 h-2 rounded-full bg-[#4a7c59] flex-shrink-0" />

                        {/* Text */}
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/destinations/${destination.id}`}
                      className=" bg-[#4a7c59] p-3 rounded-md group/btn flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] font-bold text-white  transition-colors"
                    >
                      Explore Destination
                      <FaChevronRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
