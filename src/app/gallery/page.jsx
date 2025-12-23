"use client";
import React, { useState, useMemo } from "react";
import {
  FaSearch,
  FaTimes,
  FaExpand,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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


const galleryItems = [
  // Leopards
  { id: 1, src: "/images/willep.jpg", category: "Leopard", title: "Apex Predator", type: "color" },
  { id: 3, src: "/images/yala-d.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" }, // B&W Example

  // Elephants
  { id: 4, src: "/images/eleb.jpg", category: "Elephant", title: "Gentle Giant", type: "color" },


  // Bears
  { id: 7, src: "/images/bearsl.jpg", category: "Sloth Bear", title: "Forest Guardian", type: "color" },
  
  // Birds
  { id: 8, src: "/images/bird.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  

  // Reptiles & Deer
  { id: 10, src: "/images/deer.jpg", category: "Deer", title: "Alert", type: "color" },
  { id: 11, src: "/images/liz.jpg", category: "Reptiles", title: "Green Hunter", type: "color" },
  
  // More B&W Examples
  { id: 12, src: "/images/leps.jpg", category: "Leopard", title: "Raw Power", type: "bnw" },
];

// --- Categories for Filter ---
const categories = [
  { id: "all", label: "All Archives" },
  { id: "Leopard", label: "Leopards" },
  { id: "Elephant", label: "Elephants" },
  { id: "Sloth Bear", label: "Bears" },
  { id: "Deer", label: "Deer" },
  { id: "Birds", label: "Avians" },
  { id: "Reptiles", label: "Reptiles" },
  { id: "bnw", label: "Monochrome" }, 
  { id: "other", label: "other animals" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // --- Filtering Logic ---
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    if (activeCategory === "bnw") return galleryItems.filter(item => item.type === "bnw");
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}>
      
      {/* Scrollbar Customization & Hide Utility */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 3px; }
        
        /* Hide scrollbar for the mobile filter menu */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO
         ========================================= */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/wilpattu.jpg" // High res texture image
            alt="Gallery Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* THE BLEND: Gradient to black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-kolker text-5xl md:text-7xl leading-[0.75] text-white mb-6 tracking-tight drop-shadow-2xl">
              WILD LIFE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">ARCHIVES</span>
            </h1>
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A curated collection of moments from Sri Lanka's untamed wilderness.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. FILTER & GALLERY GRID
         ========================================= */}
      {/* Relative z-10 ensures it sits above hero blend but below fixed navbar (z-50) */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-32 -mt-24">
        
        {/* Ambient Glow Left */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          
          {/* --- RESPONSIVE FILTER BAR --- */}
          {/* Mobile: Sticky, Horizontal Scroll | Desktop: Static, Centered Glass Pill */}
          <motion.div 
            className="mb-12 md:mb-16 sticky top-20 z-40 md:static"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* FIXED: Changed to Template Literal (backticks) to support multi-line class string safely */}
             <div className={`
                flex 
                overflow-x-auto 
                items-center
                gap-3 
                px-4 
                pb-4 
                -mx-4 
                md:mx-auto 
                md:p-1.5 
                md:flex-wrap 
                md:justify-center 
                md:gap-2 
                md:w-max 
                md:bg-white/5 
                md:backdrop-blur-xl 
                md:border 
                md:border-white/10 
                md:rounded-full 
                md:shadow-2xl
                scrollbar-hide 
                snap-x
             `}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      relative 
                      px-5 py-2 md:px-6 md:py-2.5 
                      rounded-full 
                      text-[10px] md:text-[11px] 
                      uppercase 
                      tracking-[0.2em] 
                      font-montserrat 
                      whitespace-nowrap 
                      transition-all 
                      duration-300 
                      flex-shrink-0 
                      snap-start
                      border
                      group
                      ${
                      activeCategory === cat.id
                        ? "bg-[#4a7c59] text-white border-[#4a7c59] shadow-[0_0_20px_rgba(74,124,89,0.4)]"
                        : "bg-black/80 backdrop-blur-md md:bg-transparent border-white/10 md:border-transparent text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="relative z-10">{cat.label}</span>
                    {activeCategory === cat.id && (
                       // Desktop Only Active Background Animation
                       <motion.div layoutId="activePill" className="hidden md:block absolute inset-0 bg-[#4a7c59] rounded-full -z-0" />
                    )}
                  </button>
                ))}
             </div>
          </motion.div>

          {/* --- GALLERY GRID (Masonry Feel) --- */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#111] hover:border-[#4a7c59]/50 shadow-lg hover:shadow-[#4a7c59]/20"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${image.type === 'bnw' ? 'grayscale' : ''}`}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="absolute bottom-0 left-0 w-full p-6">
                        <span className="font-montserrat text-[#4a7c59] text-[9px] uppercase tracking-widest block mb-1">
                           {image.category}
                        </span>
                        <h3 className="font-bebas text-2xl text-white tracking-wide">
                           {image.title}
                        </h3>
                     </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 group-hover:border-[#4a7c59]">
                     <FaExpand className="text-white text-[10px]" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
               <p className="font-lora text-gray-500 italic">No images found in this collection.</p>
            </div>
          )}

        </div>
      </div>

      {/* =========================================
          3. LIGHTBOX MODAL
         ========================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Btn */}
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
              <FaTimes size={24} />
            </button>

            {/* Main Image Container */}
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="relative max-w-7xl w-full h-[85vh] flex items-center justify-center"
               onClick={(e) => e.stopPropagation()}
            >
               <Image
                 src={selectedImage.src}
                 alt={selectedImage.title}
                 fill
                 className={`object-contain ${selectedImage.type === 'bnw' ? 'grayscale' : ''}`}
                 quality={100}
               />
               
               {/* Caption */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-center w-[90%] md:w-auto">
                  <span className="font-montserrat text-[#4a7c59] text-[10px] uppercase tracking-widest mr-0 md:mr-3 block md:inline mb-1 md:mb-0">
                     {selectedImage.category}
                  </span>
                  <span className="font-bebas text-xl text-white tracking-wide">
                     {selectedImage.title}
                  </span>
               </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;