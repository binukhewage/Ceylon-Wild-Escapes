"use client";
import React, { useState, useMemo, useEffect } from "react";
import { FaTimes, FaExpand } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";

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
  { id: 2, src: "/images/l1.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 3, src: "/images/l2.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 15, src: "/images/l6.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 17, src: "/images/l3.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 19, src: "/images/l5.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 20, src: "/images/l7.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 21, src: "/images/l8.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },
  { id: 22, src: "/images/l9.jpg", category: "Leopard", title: "Shadow Stalker", type: "color" },

  // Elephants
  { id: 16, src: "/images/e1.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 23, src: "/images/e2.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 24, src: "/images/e3.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 25, src: "/images/e4.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 26, src: "/images/e6.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 27, src: "/images/e7.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 28, src: "/images/e8.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  { id: 29, src: "/images/e10.jpg", category: "Elephant", title: "Gentle Giant", type: "color"},
  
  // Birds
  { id: 4, src: "/images/bird.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 44, src: "/images/a1.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 45, src: "/images/a2.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 46, src: "/images/a7.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 47, src: "/images/a4.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 48, src: "/images/a5.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 49, src: "/images/a6.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },
  { id: 50, src: "/images/a8.jpg", category: "Birds", title: "Vibrant Plumage", type: "color" },

  // Reptiles 
  { id: 5, src: "/images/r3.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 37, src: "/images/r2.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 38, src: "/images/r1.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 39, src: "/images/r4.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 40, src: "/images/r7.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 41, src: "/images/r6.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 42, src: "/images/r11.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },
  { id: 43, src: "/images/r9.jpg", category: "Reptiles", title: "GreenHunter", type: "color" },

  //Bears
  { id: 6, src: "/images/b1.JPEG", category: "Sloth Bear", title: "Nocturnal Foranger", type: "color" },
  { id: 7, src: "/images/b2.JPEG", category: "Sloth Bear", title: "Nocturnal Fo", type: "color" },
  { id: 8, src: "/images/b3.JPEG", category: "Sloth Bear", title: "Nocturnal For", type: "color" },

  // Deer
  { id: 9, src: "/images/d5.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 30, src: "/images/d8.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 31, src: "/images/d1.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 32, src: "/images/d4.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 33, src: "/images/d6.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 34, src: "/images/d3.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 35, src: "/images/d9.jpg", category: "Deer", title: "Graceful Leap", type: "color" },
  { id: 36, src: "/images/d10.jpg", category: "Deer", title: "Graceful Leap", type: "color" },

  // Other Animals
  { id: 51, src: "/images/o1.jpg", category: "other", title: "Curious Primate", type: "color" },
  { id: 11, src: "/images/m1.jpg", category: "other", title: "Curious Primate", type: "color" },
  { id: 12, src: "/images/m3.jpg", category: "other", title: "Curious Primate", type: "color" },
  { id: 13, src: "/images/m2.jpg", category: "other", title: "Curious Primate", type: "color" },
  { id: 14, src: "/images/m4.jpg", category: "other", title: "Curious Primate", type: "color" },
  
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

/**
 * SMART SHUFFLE ALGORITHM
 * Ensures that two items of the same category rarely appear next to each other.
 */
const smartShuffle = (items) => {
  // 1. Create a mutable pool of items
  const pool = [...items];
  const result = [];
  let lastCategory = null;

  while (pool.length > 0) {
    // 2. Filter pool to find items that are DIFFERENT from the last category
    let validCandidates = pool.filter(item => item.category !== lastCategory);

    // 3. Fallback: If no valid candidates exist (only one category left), 
    //    we must use what remains in the pool.
    if (validCandidates.length === 0) {
      validCandidates = pool;
    }

    // 4. Pick a random item from the valid candidates
    const randomIndex = Math.floor(Math.random() * validCandidates.length);
    const selectedItem = validCandidates[randomIndex];

    // 5. Add to result and update logic
    result.push(selectedItem);
    lastCategory = selectedItem.category;

    // 6. Remove the selected item from the main pool
    const poolIndex = pool.findIndex(i => i.id === selectedItem.id);
    pool.splice(poolIndex, 1);
  }

  return result;
};


const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // --- Filtering Logic ---
  const filteredImages = useMemo(() => {
    if (!isMounted) return galleryItems; 

    if (activeCategory === "all") {
      // Use the new smartShuffle here
      return smartShuffle(galleryItems);
    }
    if (activeCategory === "bnw") {
      return galleryItems.filter(item => item.type === "bnw");
    }
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory, isMounted]);

  // Helper to determine layout mode
  const isMasonry = activeCategory === "all";

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}>
      
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 3px; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO
         ========================================= */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallerybanner.jpg" 
            alt="Gallery Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
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
            <p 
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A curated collection of moments from Sri Lanka's untamed wilderness.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. FILTER & GALLERY GRID
         ========================================= */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-32 -mt-24">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          
          {/* --- RESPONSIVE FILTER BAR --- */}
          <motion.div 
            className="mb-12 md:mb-16 sticky top-20 z-40 md:static"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <div className={`
                flex overflow-x-auto items-center gap-3 px-4 pb-4 -mx-4 
                md:mx-auto md:p-1.5 md:flex-wrap md:justify-center md:gap-2 md:w-max 
                md:backdrop-blur-xl md:border md:border-white/10 md:rounded-full md:shadow-2xl
                scrollbar-hide snap-x
             `}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      relative px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-[11px] 
                      uppercase tracking-[0.2em] font-montserrat whitespace-nowrap transition-all duration-300 
                      flex-shrink-0 snap-start border group
                      ${
                      activeCategory === cat.id
                        ? "bg-[#4a7c59] text-white border-[#4a7c59] shadow-[0_0_20px_rgba(74,124,89,0.4)]"
                        : "bg-black/80 backdrop-blur-md md:bg-transparent border-white/10 md:border-transparent text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="relative z-10">{cat.label}</span>
                    {activeCategory === cat.id && (
                       <motion.div layoutId="activePill" className="hidden md:block absolute inset-0 bg-[#4a7c59] rounded-full -z-0" />
                    )}
                  </button>
                ))}
             </div>
          </motion.div>

          {/* --- DYNAMIC LAYOUT: MASONRY FOR 'ALL', GRID FOR OTHERS --- */}
          <div className={
            isMasonry 
              ? "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" 
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          }>
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`
                    group relative overflow-hidden cursor-pointer border border-white/10 bg-[#111] 
                    hover:border-[#4a7c59]/50 shadow-lg hover:shadow-[#4a7c59]/20 rounded-none
                    ${isMasonry ? 'break-inside-avoid mb-6' : 'aspect-[4/5] h-full'} 
                  `}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* CONDITIONAL IMAGE RENDERING */}
                  {isMasonry ? (
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 ${image.type === 'bnw' ? 'grayscale' : ''}`}
                    />
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${image.type === 'bnw' ? 'grayscale' : ''}`}
                    />
                  )}
                  
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 group-hover:border-[#4a7c59]">
                     <FaExpand className="text-white text-[10px]" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

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
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
              <FaTimes size={24} />
            </button>

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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;