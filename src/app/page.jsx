"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaCheck, FaArrowRight, FaRedo } from "react-icons/fa";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";

// --- FONTS ---
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
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kolker",
});

// 🔴 YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLWaFWFZoKc0WTR-fZmh5yuNbPpfuwdhzNioxuAa5n56zOd9twD_QRMkURF8yKBwlP9w/exec";

const ComingSoonPage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white overflow-hidden font-sans`}
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* 1. The Background Image */}
        {/* MAKE SURE YOU HAVE A FILE AT /public/images/bg.jpg */}
        <Image
          src="/images/csbg.jpg"
          alt="Background"
          fill
          className="object-cover select-none"
          priority
        />

        {/* 2. The Black Overlay (Adjust opacity here: bg-black/70, /80, etc.) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* 3. The existing Green Gradients (layered on top of the dark overlay) */}
        
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#4a7c59]/20 to-transparent" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo & Tagline Grouped */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl">
            <Image
              src="/images/cwc.png"
              alt="Ceylon Wild Escapes"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Tagline moved here closer to logo */}
          <h1 className="font-montserrat text-sm uppercase tracking-[0.3em] text-[#4a7c59] mt-6 text-center font-bold drop-shadow-sm">
            Journey Beyond The Map
          </h1>
        </motion.div>

        {/* Headline (Main Text) */}
        <div className="text-center mb-12 drop-shadow-lg ">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase mb-6 font-bold">
            Something <span className="text-[#4a7c59]">Wild</span> Is Coming
          </h2>
          <p className="font-lora text-gray-300 max-w-md mx-auto text-lg">
            Premium wildlife tours, safaris, and photography experiences across
            Sri Lanka.
          </p>
        </div>

        {/* Waitlist Container */}
        <div className="w-full max-w-md backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {isSubscribed ? (
              // Success View
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-black/60 border border-[#4a7c59]/30 rounded-2xl p-8 text-center shadow-2xl"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#4a7c59]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-[#4a7c59] text-xl" />
                  </div>
                  <h3 className="font-kolker text-4xl mb-2 text-white">
                    You're On The List
                  </h3>
                  <p className="font-lora text-gray-300 text-sm">
                    We’ll notify you when we launch.
                  </p>
                </div>

                {/* Button to add another email */}
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-xs font-montserrat uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto py-2 px-4 hover:bg-white/5 rounded-full"
                >
                  <FaRedo className="text-[10px]" /> Add another email
                </button>
              </motion.div>
            ) : (
              // Form View
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                action={GOOGLE_SCRIPT_URL}
                method="POST"
                target="hidden_iframe"
                className="bg-black/60 border border-white/10 rounded-2xl p-8 shadow-2xl"
              >
                {/* TEXT ABOVE INPUT */}
                <p className="font-montserrat text-xs uppercase tracking-widest text-gray-300 text-center mb-4 font-bold">
                  Be the first to know when we launch
                </p>

                <div className="relative mb-4">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-gray-400 focus:border-[#4a7c59] focus:bg-black/80 outline-none transition-all relative z-0 backdrop-blur-md"
                  />
                </div>

                {/* hidden source */}
                <input type="hidden" name="source" value="Coming Soon Page" />

                <button
                  type="submit"
                  onClick={() => {
                    setTimeout(() => {
                      setIsSubscribed(true);
                    }, 600); // allow form submit first
                  }}
                  className="w-full bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d] py-4 rounded-full uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all text-sm md:text-base font-bold shadow-lg shadow-[#4a7c59]/20"
                >
                  Join Waitlist <FaArrowRight />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Hidden iframe (prevents page reload) */}
        <iframe name="hidden_iframe" style={{ display: "none" }} />

        {/* Footer */}
        <p className="absolute bottom-8 text-xs tracking-widest text-gray-500 uppercase mix-blend-plus-lighter">
          © 2024 Ceylon Wild Escapes
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;