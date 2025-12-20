"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSafari,
  FaCamera,
  FaPaw,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaTag,
  FaRegClock,
} from "react-icons/fa";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import { Star } from "lucide-react";

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

// --- DATA ---
const tours = [
  {
    id: 1,
    type: "Signature",
    title: "Kurulu Trail",
    subtitle: "Avian Jewels of Ceylon",
    heroImage: "/images/hero12.jpg",
    duration: "15 Days",
    price: "$5,499",
    intro: "A deep dive into Sri Lanka’s richest biodiversity hotspots.",
    highlights: ["Sinharaja Endemics", "Kumana Wetlands", "Gal Oya Boat"],
    link: "/tours/kurulu-trail",
  },
  {
    id: 2,
    type: "Premium",
    title: "Pulli Trail",
    subtitle: "The Leopard Odyssey",
    heroImage: "/images/wilpattu-dd.jpg",
    duration: "15 Days",
    price: "$5,999",
    intro: "Track Sri Lanka’s apex predator across its four major habitats.",
    highlights: ["10 Leopard Safaris", "Wilpattu Forest", "Yala Territories"],
    link: "/tours/pulli-trail",
  },
  {
    id: 3,
    type: "Heritage",
    title: "Urumaya Trail",
    subtitle: "Heritage & Habitat",
    heroImage: "/images/anu.jpeg",
    duration: "14 Days",
    price: "$4,999",
    intro:
      "A perfect blend of culture, history, wildlife, and coastal relaxation.",
    highlights: ["Anuradhapura", "Sigiriya Rock", "Yala Safari"],
    link: "/tours/urumaya-trail",
  },
  {
    id: 4,
    type: "Luxury",
    title: "Northern Wild",
    subtitle: "Untamed North",
    heroImage: "/images/minneriya-d.jpg",
    duration: "14 Days",
    price: "$5,999",
    intro: "Luxury wildlife expedition across Sri Lanka's top national parks.",
    highlights: ["Wilpattu Leopards", "The Gathering", "Luxury Glamping"],
    link: "/tours/northern-wild",
  },
  {
    id: 5,
    type: "Luxury",
    title: "Southern Wild",
    subtitle: "Coastal Wilderness",
    heroImage: "/images/yala.jpg",
    duration: "14 Days",
    price: "$5,999",
    intro: "Experience Sri Lanka's southern wilderness with luxury comfort.",
    highlights: ["Yala Leopards", "Kumana Birdlife", "Horton Plains"],
    link: "/tours/southern-wild",
  },
];

const slides = [
  {
    id: 1,
    src: "/videos/cwclp.mp4",
    alt: "Sri Lankan leopard in the wild",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Roshan Peiris",
    role: "Lead Photographer & Founder",
    bio: "I'm Roshan Peiris, a Sri Lankan wildlife and nature photographer. Since 2019, my passion for capturing Sri Lanka's untamed beauty has grown into a full-time pursuit. After dedicating myself entirely to wildlife photography in 2024, I now guide wildlife photo safaris to share the magical experience of nature with enthusiasts.",
    image: "/images/roshan.JPG",
    social: {
      instagram: "https://instagram.com/roshan",
      facebook: "https://facebook.com/roshan",
      twitter: "https://twitter.com/roshan",
    },
  },
];

const cards = [
  {
    id: 1,
    title: "Wildlife Tours",
    subtitle: "Expert-guided safari adventures",
    icon: <FaSafari className="text-xl" />,
    image: "/images/safari.jpg",
    link: "/tours",
    stats: "98% Success Rate",
    description:
      "Our expert trackers ensure you witness Sri Lanka's most spectacular wildlife moments.",
  },
  {
    id: 2,
    title: "Gallery",
    subtitle: "Stunning wildlife photography",
    icon: <FaCamera className="text-xl" />,
    image: "/images/bird.jpg",
    link: "/gallery",
    stats: "10,000+ Images",
    description:
      "Award-winning photography from our team of professional wildlife photographers.",
  },
  {
    id: 3,
    title: "Destinations",
    subtitle: "Explore iconic habitats",
    icon: <FaMapMarkerAlt className="text-xl" />,
    image: "/images/wilpattu.jpg",
    link: "/destinations",
    stats: "06+ Locations",
    description:
      "Discover the diverse ecosystems of Sri Lanka, from misty mountains to dry zone jungles.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wildlife Photographer",
    rating: 5,
    text: "The leopard sightings were beyond anything I could have imagined. The guides' knowledge was exceptional.",
    image: "/images/review1.jpg",
    location: "UK",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Nature Journalist",
    rating: 5,
    text: "Ceylon Wild Clicks delivered the most authentic wildlife experience I've had in 15 years of travel.",
    image: "/images/review2.jpg",
    location: "USA",
  },
  {
    id: 3,
    name: "Dr. Priya Fernando",
    role: "Conservation Biologist",
    rating: 5,
    text: "Their ethical approach to wildlife tourism sets a new standard for the industry. Highly recommended.",
    image: "/images/review3.jpg",
    location: "Australia",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState("");
  const [currentTourIndex, setCurrentTourIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // -- CAROUSEL STATE --
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item centered

  // Handle Rotation
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % tours.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  // Helper to get the correct index for rendering (circular buffer logic)
  const getIndex = (offset) => {
    return (activeIndex + offset + tours.length) % tours.length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openViewer = (src) => {
    setViewerImage(src);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = "auto";
  };

  // Logic for Tour Slider scrolling
  const scrollTours = (direction) => {
    const container = document.getElementById("tours-container");
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} bg-black text-white`}
    >
      <style jsx>{`
        .text-earth-green {
          color: #4a7c59;
        }
        .bg-earth-green {
          background-color: #4a7c59;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full overflow-hidden bg-[#131f14]">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            </div>
          ))}
          {/* Vertical fade to blend video into the next black section */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 pt-20 md:py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="font-montserrat text-[10px] md:text-xs uppercase tracking-[0.3em] text-earth-green">
                Journey Beyond The Map
              </span>
            </div>
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide mb-2 leading-none">
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "2px white",
                  fontFamily: "var(--font-bebas)",
                }}
              >
                CEYLON
              </span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-bebas">
              WILD <span className="text-earth-green">ESCAPES</span>
            </h2>
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed border-l-2 border-[#4a7c59] pl-4 md:pl-6">
              Discover immersive wildlife experiences in Sri Lanka's most
              breathtaking natural habitats. Join us for a journey through the
              untouched wilderness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tours"
                className="bg-[#4a7c59] hover:bg-[#6b8e23] text-white font-montserrat font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm shadow-lg transition-all uppercase tracking-widest text-[10px] md:text-xs text-center"
              >
                Tours
              </Link>
              <Link
                href="/gallery"
                className="border border-white/30 hover:border-[#6b8e23] text-white hover:text-[#6b8e23] font-montserrat font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all uppercase tracking-widest text-[10px] md:text-xs text-center"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- MEET THE TEAM --- */}
      <section className="relative bg-black py-24 md:py-32 px-6 overflow-hidden">
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
            The Visionary
          </span>
          <h2 className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
            BEHIND <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
              THE LENSE
            </span>
          </h2>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[120px] opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[100px] opacity-5 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative Border Frame */}
                <div className="absolute inset-0 border border-[#4a7c59]/30 translate-x-4 translate-y-4 rounded-sm z-0"></div>

                {/* Image Container */}
                {/* UPDATED: Removed grayscale class so the image has color by default */}
                <div className="relative h-[500px] w-full bg-[#1a1a1a] overflow-hidden rounded-sm shadow-2xl z-10 transition-all duration-700 ease-in-out">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay for text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bebas text-4xl md:text-5xl text-white mb-2 leading-none">
                  Roshan Peiris
                </h2>

                <h3 className="font-kolker text-md md:text-md text-gray-400 mb-8 -mt-2">
                  Founder | Lead Photographer | Guide
                </h3>

                <div className="border-l-2 border-[#4a7c59]/30 pl-6 mb-8">
                  <p className="font-lora text-gray-300 text-lg leading-relaxed italic mb-4">
                    "Since 2019, my lens has been searching for the soul of Sri
                    Lanka. To guide a tour is not just to show animals, but to
                    translate the language of the jungle to those who walk with
                    me."
                  </p>
                  <p className="font-montserrat text-xs text-gray-500 uppercase tracking-widest">
                    — From the Field
                  </p>
                </div>

                <p className="font-lora text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
                  After dedicating myself entirely to wildlife photography in
                  2024, I founded Ceylon Wild Escapes to share the magical
                  experience of nature with enthusiasts. We prioritize ethical
                  tracking and getting you the perfect light for that
                  award-winning shot.
                </p>

                {/* Stats & Socials Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 border-t border-white/10 pt-8">
                  <div className="flex gap-8">
                    <div>
                      <span className="block font-bebas text-3xl text-white">
                        06+
                      </span>
                      <span className="block font-montserrat text-[10px] uppercase tracking-widest text-[#4a7c59]">
                        Years Active
                      </span>
                    </div>
                    <div>
                      <span className="block font-bebas text-3xl text-white">
                        10+
                      </span>
                      <span className="block font-montserrat text-[10px] uppercase tracking-widest text-[#4a7c59]">
                        Expeditions
                      </span>
                    </div>
                  </div>

                  <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>

                  <div className="flex gap-4">
                    {["instagram", "facebook", "twitter"].map((platform, i) => (
                      <a
                        key={i}
                        href={teamMembers[0].social[platform]}
                        className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-[#4a7c59] transition-all duration-300"
                      >
                        <span className="text-gray-400 group-hover:text-[#4a7c59] text-sm transition-colors">
                          {platform === "instagram" && <FaInstagram />}
                          {platform === "facebook" && <FaFacebook />}
                          {platform === "twitter" && <FaTwitter />}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <div className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
              Our Expertise
            </span>
            <h2 className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
              PREMIUM <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                WILDLIFE EXPERIENCES
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="group relative h-[450px] md:h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20">
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                    <span className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-xs font-sans tracking-widest text-earth-green uppercase">
                      {card.stats}
                    </span>
                    <button
                      onClick={() => openViewer(card.image)}
                      className="p-3 rounded-full bg-white/10 hover:bg-earth-green text-white transition-colors backdrop-blur-md"
                    >
                      <FaExpand className="text-xs" />
                    </button>
                  </div>
                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="mb-2 text-earth-green">{card.icon}</div>
                    <h3 className="font-kolker text-3xl text-white mb-2 leading-none group-hover:text-earth-green transition-colors">
                      {card.title}
                    </h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-6 transition-all duration-500">
                      <p className="font-lora text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {card.description}
                      </p>
                    </div>
                    <p className="font-lora text-sm text-gray-400 group-hover:hidden transition-all duration-300">
                      {card.subtitle}
                    </p>
                    <Link
                      href={card.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-white  hover:border-earth-green pb-1 transition-all w-fit"
                    >
                      Discover
                      <FaArrowRight className="w-3 h-3 text-earth-green" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SPOTLIGHT TOURS CAROUSEL --- */}

      <section className="py-20 bg-black border-white/5 relative overflow-hidden">
        {/* Header */}

        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
            Curated Itineraries
          </span>
          <h2 className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
            SIGNATURE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
              TOURS
            </span>
          </h2>
        </div>

        {/* CAROUSEL CONTAINER */}

        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">
          {/* BACKGROUND BLUR (Optional atmospheric effect) */}
          <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none"></div>
          {/* --- LEFT CARD (Previous) --- */}
          <motion.div
            className="absolute left-[5%] md:left-[15%] w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-xl overflow-hidden cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity"
            initial={{ scale: 0.8, x: -100 }}
            animate={{ scale: 0.85, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handlePrev}
          >
            {/* UPDATED: Removed grayscale/sepia filter so it keeps colors */}
            <Image
              src={tours[getIndex(-1)].heroImage}
              alt="Previous"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>

          {/* --- RIGHT CARD (Next) --- */}

          <motion.div
            className="absolute right-[5%] md:right-[15%] w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-xl overflow-hidden cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity"
            initial={{ scale: 0.8, x: 100 }}
            animate={{ scale: 0.85, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleNext}
          >
            {/* UPDATED: Removed grayscale/sepia filter so it keeps colors */}
            <Image
              src={tours[getIndex(1)].heroImage}
              alt="Next"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>

          {/* --- CENTER CARD (Active) --- */}

          <motion.div
            key={activeIndex} // Key change triggers animation
            className="relative w-[320px] h-[480px] md:w-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl z-30 border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* IMAGE */}

            <Image
              src={tours[activeIndex].heroImage}
              alt={tours[activeIndex].title}
              fill
              className="object-cover"
              priority
            />

            {/* OVERLAY GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

            {/* CONTENT */}

            <div className="absolute bottom-0 left-0 w-full p-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 mb-4 border border-gold/50 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full bg-black/40 backdrop-blur-md">
                  {tours[activeIndex].type}
                </span>

                <h3 className="font-cormorant text-3xl md:text-4xl text-white leading-none mb-2 drop-shadow-lg font-bold uppercase">
                  {tours[activeIndex].title}
                </h3>

                <p className="font-montserrat text-xs text-gray-300 uppercase tracking-widest mb-6">
                  {tours[activeIndex].subtitle}
                </p>

                <div className="flex justify-center items-center gap-6 text-sm text-gray-300 mb-6 font-lora italic">
                  <span className="flex items-center gap-2">
                    <FaRegClock className="text-gold" />{" "}
                    {tours[activeIndex].duration}
                  </span>

                  <span className="flex items-center gap-2">
                    From {tours[activeIndex].price}
                  </span>
                </div>

                <Link
                  href={`/tours/${tours[activeIndex].id}`}
                  className="inline-flex items-center gap-2 border text-white px-8 py-3 rounded-sm font-montserrat text-xs font-bold uppercase tracking-widest hover: transition-colors duration-300"
                >
                  Explore Tour <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2 items-center">
            {tours.map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-gold" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="relative w-full py-20 md:py-15 bg-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 mb-12 md:mb-16">
          <div className="text-center">
            <span className="text-[#4a7c59] font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
              client experiences
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white mb-4">
              TRAVELLER <span className="text-earth-green">TESTIMONIALS</span>
            </h2>
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-8 px-4 md:px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
              style={{ width: "fit-content" }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={index}
                  className="w-[85vw] sm:w-[350px] md:w-[450px] flex-shrink-0 group"
                >
                  <div className="h-full p-6 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#4a7c59]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a7c59]/10 relative overflow-hidden">
                    <div className="absolute top-4 right-8 text-9xl font-serif text-white/5 select-none leading-none group-hover:text-[#4a7c59]/10 transition-colors duration-500">
                      &rdquo;
                    </div>
                    <div className="flex gap-1 mb-6 text-[#4a7c59]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="currentColor"
                          stroke="none"
                        />
                      ))}
                    </div>
                    <p className="font-lora text-base md:text-lg text-gray-300 leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4a7c59] to-gray-600 flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-sans text-sm tracking-wide uppercase">
                          {review.name}
                        </h4>
                        <span className="text-gray-500 text-xs tracking-wider">
                          {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <div className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-center mb-10 md:mb-12">
            <div className="mb-4">
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
                Wild Updates
              </span>
            </div>
            <h2 className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
              UNLOCK THE <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                UNTAMED
              </span>
            </h2>
            <p className="font-lora text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              Join our exclusive circle. Receive curated wildlife stories,
              photography secrets, and expedition invites.
            </p>
          </div>
          <div className="relative max-w-lg mx-auto">
            {isSubscribed ? (
              <div className="bg-white/5 backdrop-blur-md border border-earth-green/30 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-earth-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-earth-green">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-kolker text-4xl text-white mb-2">
                  Welcome to the Tribe
                </h3>
              </div>
            ) : (
              <form className="relative group" onSubmit={handleSubscribe}>
                <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 transition-all duration-300 focus-within:border-earth-green/50">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-grow bg-transparent border-none text-white px-4 md:px-6 py-2 focus:ring-0 focus:outline-none font-lora text-sm placeholder:text-gray-500 w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="hidden sm:block bg-[#4a7c59] hover:bg-[#5d8c6d] text-white font-sans text-[10px] uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
                  >
                    Subscribe
                  </button>
                  <button
                    type="submit"
                    className="sm:hidden bg-[#4a7c59] text-white p-3 rounded-full flex-shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* --- IMAGE VIEWER MODAL --- */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeViewer}
        >
          <button
            className="absolute top-6 right-6 text-white text-xl z-50 hover:text-earth-green transition-colors"
            onClick={closeViewer}
          >
            &times;
          </button>
          <div
            className="relative max-w-6xl w-full h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={viewerImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;