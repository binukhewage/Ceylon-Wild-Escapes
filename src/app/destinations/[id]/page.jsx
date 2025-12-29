"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaPaw,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaChevronLeft,
  FaCamera,
  FaTree,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";
import destinations from "../../../data/destinations.js"; // Adjust path if needed
import Link from "next/link.js";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function DestinationPage() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id.toString() === id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-3xl text-earth-green mb-4">
            Destination Not Found
          </h1>
          <p className="font-lora text-gray-300">
            The destination you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-[#050505] text-white`}
    >
      <style jsx global>{`
        .text-earth-green { color: #4a7c59; }
        .bg-earth-green { background-color: #4a7c59; }
        .border-earth-green { border-color: #4a7c59; }
        
        /* Premium Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #4a7c59; }

        .wildlife-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* ------------------- HERO SECTION (UNCHANGED) ------------------- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 wildlife-texture"></div>
        <Image
          src={destination.heroimage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-bebas text-5xl md:text-7xl mb-4 text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {destination.name}
          </motion.h1>
          <motion.div
            className="flex items-center text-earth-green text-lg tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            <span className="font-montserrat font-medium text-white/90">
              {destination.location}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ------------------- QUICK STATS STRIP ------------------- */}
      {destination.stats && (
        <div className="border-b border-white/10 w-3/4 mx-auto mb-12">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-wrap justify-between items-center gap-6">
              <Link
                href="/destinations"
                className="inline-flex items-center text-gray-400 font-montserrat text-xs hover:text-earth-green transition-colors uppercase tracking-widest"
              >
                <FaChevronLeft className="mr-2" />
                Destinations
              </Link>

              <div className="flex gap-8 md:gap-16">
                <div className="text-center md:text-left">
                  <span className="block font-montserrat text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                    Area
                  </span>
                  <span className="font-lora text-lg text-white">
                    {destination.stats.area}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-montserrat text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                    Established
                  </span>
                  <span className="font-lora text-lg text-white">
                    {destination.stats.established}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-montserrat text-[10px] text-earth-green uppercase tracking-widest mb-1">
                    Focus
                  </span>
                  <span className="font-lora text-lg text-white ">
                    {destination.stats.focus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- MAIN CONTENT ------------------- */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-earth-green/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN (Narrative) - Spans 8 cols */}
            <motion.div 
              className="lg:col-span-8 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* About Section - Editorial Style */}
              <motion.div variants={itemVariants}>
                <h2 className="font-bebas text-2xl text-white/90 mb-8 border-l-4 border-earth-green pl-6">
                 About {destination.slug}
                </h2>

                <div className="prose prose-lg prose-invert max-w-none text-justify">
                  {Array.isArray(destination.longDescription) ? (
                    destination.longDescription.map((para, index) => {
                      // Styling first paragraph differently for impact
                      if (index === 0) {
                        return (
                          <p key={index} className="font-lora text-lg text-gray-400 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bebas first-letter:text-earth-green first-letter:mr-3 first-letter:float-left">
                            {para}
                          </p>
                        );
                      }
                      // Handling subheaders if they are in the array (based on your data structure sometimes having titles)
                      if (para.length < 100 && !para.includes('.')) {
                         return <h3 
                         
                         key={index} className="font-bebas text-sm text-white mt-8 mb-4 tracking-wide italic">{para}</h3>
                      }
                      return (
                        <p key={index} className="font-lora text-gray-400 text-lg leading-loose mb-6 text-justify">
                          {para}
                        </p>
                      );
                    })
                  ) : (
                    <p className="font-lora text-gray-300 leading-relaxed text-lg">
                      {destination.longDescription}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Wildlife - Horizontal Pills */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
                <h3 className=" uppercase font-bebas text-xl text-white mb-6">Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {destination.animals?.map((animal, i) => (
                    <div key={i} className="flex items-center px-5 py-2 rounded-md border border-white/10 bg-[#111] hover:bg-earth-green hover:border-earth-green hover:text-white transition-all duration-300 group cursor-default">
                      <FaPaw className="text-earth-green text-xs mr-3 group-hover:text-white transition-colors" />
                      <span className="font-lora text-sm text-gray-300 group-hover:text-white">
                        {animal}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN (Sidebar) - Spans 4 cols */}
            <div className="lg:col-span-4 space-y-8 h-full">
              <div className="sticky top-8 space-y-8">

                {/* Map Card */}
                <motion.div
                  className="bg-[#0f0f0f] border border-white/10 p-4 rounded-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-earth-green to-[#6b8e23]" />
                  <div className="flex justify-between items-end mb-4 px-1">
                     <h3 className="font-bebas text-xl text-white tracking-wide">Location</h3>
                     <a href={destination.googleMapUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-montserrat text-earth-green flex items-center hover:text-white transition-colors">
                        Open Maps <FaExternalLinkAlt className="ml-2 text-[10px]" />
                     </a>
                  </div>
                  
                  <div className="w-full h-64 bg-zinc-900 hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <iframe
                      src={destination.googleMapUrl}
                      width="100%"
                      height="100%"
                      className="border-0 opacity-80 hover:opacity-100 transition-opacity"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </motion.div>
                
                {/* ------------------- EXPLORE TOURS CARD (UPDATED) ------------------- */}
                <motion.div
                  className="bg-[#0f0f0f] border border-white/10 p-8 relative overflow-hidden group shadow-2xl rounded-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                   {/* Decorative top line */}
                 
                  
                  <h3 className="font-bebas text-xl text-white mb-6 tracking-wide">
                    Plan Your Visit
                  </h3>

                  <div className="space-y-6 mb-8">
                    {/* Time */}
                    <div className="flex items-start">
                      <div className="p-2 border border-white/10 rounded bg-black mr-4">
                        <FaClock className="text-earth-green text-lg" />
                      </div>
                      <div>
                        <div className="font-montserrat text-xs font-bold text-white uppercase tracking-wider mb-1">
                          Best Season
                        </div>
                        <div className="font-lora text-gray-400 text-sm italic">
                          Year-round opportunities
                        </div>
                      </div>
                    </div>

                    {/* Access */}
                    <div className="flex items-start">
                      <div className="p-2 border border-white/10 rounded bg-black mr-4">
                        <FaTree className="text-earth-green text-lg" />
                      </div>
                      <div>
                        <div className="font-montserrat text-xs font-bold text-white uppercase tracking-wider mb-1">
                          Experience Type
                        </div>
                        <div className="font-lora text-gray-400 text-sm italic">
                          {destination.accesstype}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Text */}
                  <div className="text-center mb-4">
                    <p className=" uppercase font-lora text-gray-400 italic text-xs">
                     * Book a tour with this destination
                    </p>
                  </div>

                  {/* Explore Button */}
                  <button className="w-full bg-earth-green hover:bg-[#3d6649] text-white font-montserrat font-bold py-4 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest text-xs shadow-lg hover:shadow-earth-green/20 flex items-center justify-center group">
                    Explore Tours
                    <FaChevronLeft className="rotate-180 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                </motion.div>
              </div>
            </div>
          </div>

          {/* ------------------- GALLERY SECTION ------------------- */}
          <motion.div
            className="w-full pb-24 border-t border-white/5 mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-end mb-10 px-2">
                <div>
                    <span className="font-montserrat text-earth-green text-xs uppercase tracking-widest block mt-5 mb-2">Visual Journey</span>
                    <h3 className="font-bebas text-xl md:text-2xl text-white">
                    CAPTURING {destination.shortName}
                    </h3>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-60'}`}
                >
                  <Image
                    src={img}
                    alt={`${destination.name} - ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-black/80 text-white text-[10px] font-montserrat uppercase tracking-widest px-3 py-1">
                        View Full Size
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}