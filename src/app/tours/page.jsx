"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaQuoteRight,
  FaSlidersH,
  FaShip,
  FaPlane,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { tours } from "../../data/tours.js";

// --- Font Setup ---
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// --- COMPONENT: Premium Filter Bar ---
const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "Premium", "Luxury"];

  return (
    <div className="flex justify-center mb-24 relative z-20">
      <div className="inline-flex items-center gap-2 md:gap-4 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              relative px-6 py-2 rounded-full text-xs md:text-sm font-montserrat uppercase tracking-[0.2em] transition-all duration-300
              ${activeFilter === filter ? "text-black" : "text-gray-400 hover:text-white"}
            `}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-[#4a7c59] rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: The Overlapping Editorial Card ---
const EditorialTour = ({ tour, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mb-32 md:mb-48 last:mb-0"
    >
      {/* 0. Background Number Watermark */}
      <div 
        className={`absolute -top-20 md:-top-32 ${isEven ? "-left-10" : "-right-10"} z-0 opacity-[0.03] select-none`}
      >
        <span className="font-bebas text-[15rem] md:text-[20rem] text-white leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center relative z-10`}>
        
        {/* 1. IMAGE CONTAINER (Wide & Cinematic) */}
        <div className="w-full lg:w-[75%] relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8] overflow-hidden rounded-sm shadow-2xl group cursor-pointer">
           <Link href={`/tours/${tour.id}`}>
              <Image
                src={tour.images[0]}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-100"
              />
              {/* Vertical Text Label */}
              <div className={`absolute top-8 ${isEven ? "right-8" : "left-8"} hidden md:block`}>
                 <div className="flex flex-col gap-6">
                    <span className="writing-vertical-lr text-[10px] font-montserrat uppercase tracking-[0.3em] text-white/80 border-l border-white/30 pl-3 h-24 flex items-center">
                       {tour.type} Collection
                    </span>
                 </div>
              </div>
           </Link>
        </div>

        {/* 2. TEXT CONTENT BOX (Overlapping the Image) */}
        <div 
          className={`
            w-[90%] lg:w-[45%] 
            bg-[#0a0a0a] border border-white/10 
            p-8 md:p-12 lg:p-14 
            mt-[-4rem] lg:mt-0 
            lg:absolute ${isEven ? "right-0" : "left-0"} 
            shadow-[0_20px_50px_rgba(0,0,0,0.7)]
            group hover:border-[#4a7c59]/50 transition-colors duration-500
          `}
        >
          {/* Top Meta */}
          <div className="flex items-center gap-4 mb-8 text-[#4a7c59] font-montserrat text-[10px] uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2"><FaClock /> {tour.duration}</span>
            <span className="w-px h-3 bg-white/20"></span>
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> Sri Lanka</span>
          </div>

          {/* Title */}
          <h2 className="font-bebas text-3xl  text-white mb-6 leading-[1.2]">
            <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:to-[#4a7c59] transition-all duration-500">
              {tour.title}
            </span>
            <span className="block font-montserrat text-sm uppercase tracking-[0.3em] mt-1 text-gray-400">
              {tour.subtitle}
            </span>
          </h2>

          {/* Quote/Subtitle */}
          <div className="mb-6 relative">
             <FaQuoteRight className="absolute -top-2 -left-2 text-3xl text-white/5" />
             <p className="font-cormorant text-xl md:text-2xl text-gray-300 italic relative z-10 pl-4">
               {tour.highlight || "A curated journey through the untouched wilderness."}
             </p>
          </div>

          {/* Description */}
          <p className="font-lora text-sm text-gray-400 leading-relaxed mb-8 line-clamp-3 md:line-clamp-4">
             {tour.description}
          </p>

          {/* Action */}
          <Link
            href={`/tours/${tour.id}`}
            className="inline-flex items-center gap-4 group/btn pb-1 border-b border-transparent hover:border-[#4a7c59] transition-all"
          >
            <span className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-white">
              Explore Itinerary
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#4a7c59] group-hover/btn:border-[#4a7c59] transition-all duration-300">
               <FaArrowRight className="text-[10px] text-white -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
            </div>
          </Link>

        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
const TourPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Logic
  const filteredTours = tours.filter((tour) => {
    if (activeFilter === "All") return true;
    return tour.type === activeFilter;
  });
  
  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${cormorant.variable} min-h-screen bg-[#050505] text-white`}>
      <style jsx global>{`
        .writing-vertical-lr { writing-mode: vertical-lr; transform: rotate(180deg); }
        .wildlife-texture {
           background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture opacity-30"></div>
        <Image
          src="/images/itenary-b.jpg"
          alt="Wildlife photography tours"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-bebas text-4xl md:text-7xl mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className=" text-white">TOUR</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]"> ITINERARIES</span>
          </motion.h1>
          <motion.p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-lg max-w-3xl text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Immerse yourself in unparalleled wildlife encounters and cultural
            journeys through Sri Lanka's most breathtaking landscapes
          </motion.p>
        </div>
      </div>

      {/* --- THE COLLECTION --- */}
      <div className="relative pt-12 pb-32">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          {/* FILTER BAR */}
          <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          {/* TOUR LIST */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              {filteredTours.map((tour, index) => (
                <EditorialTour key={tour.id} tour={tour} index={index} />
              ))}
            </AnimatePresence>
            
            {filteredTours.length === 0 && (
              <div className="text-center py-20 text-gray-500 font-montserrat uppercase tracking-widest text-sm">
                No tours found in this collection.
              </div>
            )}
          </div>

          {/* =========================================
              4. NEW SECTION: CONCIERGE SERVICES (3 Tiles)
             ========================================= */}
          <div className="pt-32">
            <div className="text-center mb-12">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#4a7c59] mb-3">
                Concierge Services
              </p>
              <h2 className=" uppercase text-3xl md:text-5xl text-white leading-none">
                Tailored <span className="text-[#4a7c59]">For You</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tile 1: Customization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-8 hover:border-[#4a7c59]/50 transition-all duration-500 overflow-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] mb-6 border border-[#4a7c59]/20 group-hover:scale-110 transition-transform">
                  <FaSlidersH className="text-lg" />
                </div>
                <h3 className="font-bold uppercase text-2xl text-white mb-3">
                  Customizable Tours
                </h3>
                <p className="font-lora text-gray-400 text-sm leading-relaxed">
                  Every itinerary is a blueprint. We can adjust duration,
                  accommodation levels, and pacing to suit your specific travel
                  style.
                </p>
              </motion.div>

              {/* Tile 2: Excursions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-8 hover:border-[#4a7c59]/50 transition-all duration-500 overflow-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] mb-6 border border-[#4a7c59]/20 group-hover:scale-110 transition-transform">
                  <FaShip className="text-lg" />
                </div>
                <h3 className="font-bold text-2xl text-white mb-3 uppercase">
                  Excursions
                </h3>
                <ul className="space-y-2 font-lora text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#4a7c59] rounded-full"></div>{" "}
                    Whale Watching in Mirissa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#4a7c59] rounded-full"></div>{" "}
                    Makandawa Rainforest Trek
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#4a7c59] rounded-full"></div>{" "}
                    White Water Rafting
                  </li>
                  <li className="italic text-xs opacity-60 mt-5">
                    + More options available
                  </li>
                </ul>
              </motion.div>

              {/* Tile 3: Logistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-8 hover:border-[#4a7c59]/50 transition-all duration-500 overflow-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] mb-6 border border-[#4a7c59]/20 group-hover:scale-110 transition-transform">
                  <FaPlane className="text-lg" />
                </div>
                <h3 className="font-bold uppercase text-2xl text-white mb-3">
                  Flight & Visa Support
                </h3>
                <p className="font-lora text-gray-400 text-sm leading-relaxed">
                  We assist with International Flight bookings and Tourist Visa
                  (ETA) arrangements to ensure a seamless arrival experience.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default TourPage;