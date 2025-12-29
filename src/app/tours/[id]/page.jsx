"use client";

import React, { useState } from "react";
import { tours } from "../../../data/tours";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaChevronLeft,
  FaSafari,
  FaMapMarkerAlt,
  FaTimes,
  FaStar,
  FaExpand,
  FaLayerGroup,
  FaHotel,
  FaCheck,
  FaSlidersH,
  FaShip,
  FaPlane,
  FaArrowRight,
  FaRoute,
  FaTree,
  FaMountain,
} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";

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
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// --- Modal Component ---
const ImageModal = ({ isOpen, onClose, imgSrc, altText }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-5xl w-full h-auto max-h-[90vh] bg-transparent rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#4a7c59]/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-[#4a7c59] text-white rounded-full transition-colors border border-white/10"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={imgSrc}
                alt={altText}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---
export default function TourDetails(props) {
  const unwrappedParams = React.use(props.params);
  const { id } = unwrappedParams;

  const tour = tours.find((t) => t.id === parseInt(id));
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState("");

  if (!tour) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="font-bebas text-4xl text-red-500">
          Expedition Not Found
        </h1>
      </div>
    );
  }

  const galleryImages = tour.galleryImages || [tour.images[0], tour.images[1]];

  const getPartImage = (index) => {
    if (tour.images && tour.images[index + 1]) return tour.images[index + 1];
    return galleryImages[index % galleryImages.length];
  };

  const openGalleryModal = (imgSrc) => {
    setCurrentGalleryImage(imgSrc);
    setIsGalleryModalOpen(true);
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}
    >
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
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>
        </div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{ fontFamily: "var(--font-bebas)" }}
              className="text-5xl md:text-7xl leading-[1.2] text-white mb-3 drop-shadow-2xl"
            >
              <span className="block">
                {tour.title.split(/[–]/)[0].trim()}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                  {tour.title.split(/[–]/)[1]?.trim()}
                </span>
              </span>
            </h1>

            <motion.p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="flex items-center justify-center gap-2 text-md max-w-4xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <FaClock className="text-[#8fbc9d]" />
              <span>{tour.duration}</span>
            </motion.p>
            <motion.p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="font text-md max-w-4xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {tour.focus}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. MAIN CONTENT
         ========================================= */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-32 -mt-10 z-20">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          {/* --- BACK BUTTON --- */}
          <div className="mb-6">
            <Link
              href="/tours"
              className="group inline-flex items-center gap-3 font-montserrat text-[10px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-all px-5 py-2.5 rounded-full backdrop-blur-md"
            >
              <FaChevronLeft className="text-[8px] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Archives</span>
            </Link>
          </div>

          {/* --- TOP GRID: OVERVIEW --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
            {/* OVERVIEW CARD (UPDATED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl group flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={tour.overviewImage || tour.images[0]}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content Section (Replaced Description with Inclusions/Exclusions) */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                {/* Header & Action Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-white/5">
                  <h3 className=" font-bold text-2xl text-white transition-colors duration-300 tracking-wide font-bebas">
                    Tour Overview
                  </h3>
                  
                </div>

                {/* INCLUSIONS & EXCLUSIONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included Column */}
                  <div>
                    <h4 className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-4 font-bold flex items-center gap-2">
                      <FaCheck /> This Tour Includes
                    </h4>
                    <ul className="space-y-3">
                      {tour.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#4a7c59] flex-shrink-0 shadow-[0_0_5px_#4a7c59]"></div>
                          <span className="font-lora text-gray-300 text-sm leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded Column */}
                  <div>
                    <h4 className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold flex items-center gap-2">
                      <FaTimes className="text-red-500" /> This Tour Excludes
                    </h4>
                    <ul className="space-y-3">
                      {tour.exclusions?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-700 flex-shrink-0"></div>
                          <span className="font-lora text-gray-400 text-sm leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                      {/* Default exclusions if none provided */}
                      {!tour.exclusions && (
                        <>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-700 flex-shrink-0"></div>
                            <span className="font-lora text-gray-400 text-sm leading-snug">
                              International Flights
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-700 flex-shrink-0"></div>
                            <span className="font-lora text-gray-400 text-sm leading-snug">
                              Travel Insurance
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-700 flex-shrink-0"></div>
                            <span className="font-lora text-gray-400 text-sm leading-snug">
                              Tips & Gratuities
                            </span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ROUTE MAP CARD */}
{/* ROUTE MAP CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-bold text-2xl text-white mb-2 tracking-wide font-bebas">
                    Route of {tour.title}
                  </h4>
                  <p className="font-montserrat text-[10px] text-white/70 uppercase tracking-widest">
                    Key Destinations & Journey Map
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#4a7c59]/10 flex items-center justify-center border border-[#4a7c59]/20">
                  <FaRoute className="text-[#4a7c59]" />
                </div>
              </div>

              {/* Interactive Map Section - NOW USING IMAGE */}
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="relative w-full h-64 rounded-xl overflow-hidden group transition-all border border-white/10 mb-6"
              >
                {/* 1. Map Image Preview */}
                <Image
                  src={tour.routeimage} // Make sure this image exists in public/images
                  alt="Sri Lanka Route Map"
                  fill
                  className="object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* 2. Dark Gradient Overlay (for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                {/* 3. Hover Overlay (Call to Action) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FaExpand className="text-white text-2xl mx-auto mb-3 opacity-80" />
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
                      View Full Map
                    </span>
                  </div>
                </div>
              </button>

              {/* Destinations Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-bebas text-lg text-white tracking-wide">
                    Key Destinations
                  </h5>
                </div>

                {/* Destinations List */}
                <div className="space-y-3">
                  {(
                    tour.destinations || [
                      "Sinharaja Rain Forest Reserve",
                      "Kumana National Park",
                      "Nilgala Forest Reserve",
                      "Horton Plains",
                    ]
                  ).map((destination, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/[0.02] to-transparent hover:from-white/[0.04] border border-white/5 hover:border-white/10 transition-all duration-300"
                    >
                      {/* Number Badge */}
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center font-montserrat font-bold text-xs text-white">
                          {index + 1}.
                        </div>
                      </div>

                      {/* Destination Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-lora text-white text-sm truncate group-hover:text-[#8fbc9d] transition-colors">
                          {destination}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaMapMarkerAlt className="text-[#4a7c59]" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Journey Stats */}
                <div className="pt-4 mt-4 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <p className="font-montserrat text-[10px] uppercase tracking-widest text-white/50">
                        Tour Style 
                      </p>
                      <p className="font-bebas text-white text-lg">Expedition</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <p className="font-montserrat text-[10px] uppercase tracking-widest text-white/50">
                        Terrain
                      </p>
                      <p className="font-bebas text-white text-lg">Mixed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- DETAILED ITINERARY HEADER --- */}
          <div className="text-center mb-16">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#4a7c59] mb-3">
              Journey Through Ceylon
            </p>
            <h2 className=" uppercase text-3xl md:text-5xl text-white leading-none">
              Detailed{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                Itinerary
              </span>
            </h2>
          </div>

          {/* --- ITINERARY PARTS --- */}
          <div className="space-y-24 mb-24 text-justify">
            {tour.parts?.map((part, partIndex) => (
              <div key={partIndex} className="relative">
                {part.name && (
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-[#4a7c59]"></div>
                    <h4 className="font-bold text-2xl text-white tracking-wider uppercase">
                      {part.name}
                    </h4>
                  </div>
                )}

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                    partIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl lg:sticky lg:top-24 ${
                      partIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={getPartImage(partIndex)}
                      alt={part.name || `Part ${partIndex + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                  </motion.div>

                  <div
                    className={`space-y-4 ${
                      partIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {part.days.map((day, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        initial={{
                          opacity: 0,
                          x: partIndex % 2 === 1 ? -20 : 20,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: dayIndex * 0.1 }}
                        className="group relative pl-8 border-l border-white/10 hover:border-[#4a7c59] transition-colors duration-300"
                      >
                        <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-[#111] border border-white/30 group-hover:bg-[#4a7c59] group-hover:border-[#4a7c59] group-hover:shadow-[0_0_10px_#4a7c59] transition-all z-10"></div>
                        <div className="bg-[#111]/60 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:bg-white/[0.03] transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-3">
                            <span className="font-montserrat text-[#4a7c59] text-[10px] font-bold uppercase tracking-widest border border-[#4a7c59]/20 px-2 py-1 rounded bg-[#4a7c59]/5">
                              {day.day}
                            </span>
                            <span className="font-bebas text-2xl text-white">
                              {day.destination}
                            </span>
                          </div>
                          <div className="font-lora text-gray-400 text-sm leading-relaxed pl-1 mb-4 space-y-2">
                            {Array.isArray(day.activities) ? (
                              day.activities.map((activity, idx) => (
                                <p key={idx}>{activity}</p>
                              ))
                            ) : (
                              <p>{day.activities}</p>
                            )}
                          </div>

                          {day.accommodation && (
                            <div className="flex items-center gap-2 text-[10px] font-montserrat text-white/50 uppercase tracking-wider pl-1 border-t border-white/5 pt-3">
                              <FaHotel className="text-[#4a7c59]" />
                              {day.accommodation}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          

          {/* =========================================
              5. EXISTING SECTION: VISUAL ARCHIVES
             ========================================= */}
          <div className="mb-16 text-center">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#4a7c59] mb-3">
              UNFORGETTABLE SIGHTS
            </p>
            <h2 className="uppercase text-3xl md:text-5xl text-white leading-none">
              what to see on <span className="text-[#4a7c59]">this tour</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-32">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group border border-white/10 hover:border-[#4a7c59] shadow-lg"
                onClick={() => openGalleryModal(img)}
              >
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                  <FaExpand className="text-white text-xs" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* =========================================
              6. UPDATED FINAL CTA
             ========================================= */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <div className="relative bg-[#0d0d0c] border border-white/10 rounded-3xl p-12 overflow-hidden shadow-2xl group">
              {/* Animated Gradient Border Effect */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(74,124,89,0.4),transparent_70%)]"></div>

              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-4 relative z-10">
                Limited Availability
              </p>
              <h4 className="font-bebas text-2xl md:text-3xl text-white mb-8 relative z-10 uppercase">
                Reserve Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                  Expedition
                </span>
              </h4>

              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link
                  href="/booking"
                  className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-3 py-4 px-10 rounded-md bg-[#4a7c59] text-white font-montserrat text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_30px_rgba(74,124,89,0.3)] hover:shadow-[0_0_50px_rgba(74,124,89,0.5)] transition-all hover:-translate-y-1"
                >
                  <span>Book This Tour</span>
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="mt-8 text-gray-500 font-lora text-xs italic relative z-10">
                *Secure your spot for the upcoming season. No payment required
                to inquire.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ImageModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        imgSrc="/images/route.png"
        altText="Route Map"
      />
      <ImageModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        imgSrc={currentGalleryImage}
        altText="Gallery View"
      />
    </div>
  );
}
