"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
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
  FaQuoteLeft,
  FaTiktok,
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
    type: "Premium",
    title: "Pulli Trail",
    subtitle: "The Leopard Odyssey",
    heroImage: "/images/pullih.jpg",
    duration: "15 Days/14 Nights",
    price: "$5,999",
    intro: "Track Sri Lanka’s apex predator across its four major habitats.",
    highlights: ["10 Leopard Safaris", "Wilpattu Forest", "Yala Territories"],
    link: "/tours/pulli-trail",
  },
  {
    id: 2,
    type: "Signature",
    title: "Kurulu Trail",
    subtitle: "Avian Jewels of Ceylon",
    heroImage: "/images/kuruluh.jpg",
    duration: "15 Days/14 Nights",
    price: "$5,499",
    intro: "A deep dive into Sri Lanka’s richest biodiversity hotspots.",
    highlights: ["Sinharaja Endemics", "Kumana Wetlands", "Gal Oya Boat"],
    link: "/tours/kurulu-trail",
  },
  {
    id: 3,
    type: "Heritage",
    title: "Urumaya Trail",
    subtitle: "Heritage & Habitat",
    heroImage: "/images/urumayah.jpg",
    duration: " 15 Days/14 Nights",
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
    heroImage: "/images/nothernh.jpg",
    duration: "15 Days/14 Nights",
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
    heroImage: "/images/southernh.jpg",
    duration: "14 Days/13 Nights",
    price: "$5,999",
    intro: "Experience Sri Lanka's southern wilderness with luxury comfort.",
    highlights: ["Yala Leopards", "Kumana Birdlife", "Horton Plains"],
    link: "/tours/southern-wild",
  },
];

const slides = [
  {
    id: 1,
    src: "/videos/finalcwe.mp4",
    alt: "Sri Lankan leopard in the wild",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Roshan Peiris",
    role: "Lead Photographer & Founder",
    bio: "I'm Roshan Peiris, a Sri Lankan wildlife and nature photographer. Since 2019, my passion for capturing Sri Lanka's untamed beauty has grown into a full-time pursuit. After dedicating myself entirely to wildlife photography in 2024, I now guide wildlife photo safaris to share the magical experience of nature with enthusiasts.",
    image: "/images/rpei.jpg",
    social: {
      instagram: "https://www.instagram.com/ceylonwildescapes",
      facebook: "https://www.facebook.com/share/1HdMuTRY9P/?mibextid=wwXIfr",
      tiktok:
        "https://www.tiktok.com/@ceylonwildescapes?_r=1&_t=ZS-92Z7UqDR7tR",
    },
  },
];

const cards = [
  {
    id: 1,
    title: "WILDLIFE TOURS",
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
      "Breath-taking wildlife moments captured by the man behind the lens.",
  },
  {
    id: 3,
    title: "Destinations",
    subtitle: "Explore iconic habitats",
    icon: <FaMapMarkerAlt className="text-xl" />,
    image: "/images/destinationshome.jpg",
    link: "/destinations",
    stats: "06+ Locations",
    description:
      "Discover the diverse ecosystems of Sri Lanka, from misty mountains to dry zone jungles.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Milind Naik",
    role: "Wildlife Photographer",
    rating: 5,
    text: "The leopard sightings were beyond anything I could have imagined. The guides' knowledge was exceptional, getting us into the perfect position for light and composition without disturbing the animals.",
    image: "/images/review1.jpg",
    location: "India",
  },
  {
    id: 2,
    name: "Santhosh Anand",
    role: "Nature Journalist",
    rating: 5,
    text: "Ceylon Wild Escapes delivered the most authentic wildlife experience I've had in 15 years of travel. No rushing, just pure, unadulterated nature. Truly a photographer's dream.",
    image: "/images/review2.jpg",
    location: "India",
  },
  {
    id: 3,
    name: "Roy Rebeira",
    role: "Conservation Biologist",
    rating: 5,
    text: "Their ethical approach to wildlife tourism sets a new standard for the industry. It was refreshing to see a team so dedicated to preservation while providing a luxury experience.",
    image: "/images/review3.jpg",
    location: "Baharain",
  },
  {
    id: 4,
    name: "Yuhanhui Zang",
    role: "Travel Blogger",
    rating: 5,
    text: "From the luxury glamping arrangements to the thrill of tracking sloth bears, every detail was curated to perfection. Roshan's team are true masters of the wild.",
    image: "/images/review4.jpg",
    location: "China",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // -- CAROUSEL STATE --
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} bg-black text-white overflow-x-hidden`}
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
              Discover the extraordinary biodiversity of Sri Lanka a global
              hotspot with the highest species density in Asia. Experience a
              land where rare endemic wildlife and protected species thrive in a
              truly immersive natural setting. Join us for a journey through the
              untouched wilderness
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
          <h2 className=" text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
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
                <div className="relative h-[500px] w-full bg-[#1a1a1a] overflow-hidden rounded-sm shadow-2xl z-10 transition-all duration-700 ease-in-out">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover"
                  />
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

                <h3 className="font-montserrat text-md md:text-md text-gray-400 mb-8 -mt-2">
                  Founder | Lead Photographer | Tour Leader
                </h3>

                <div className="border-l-2 border-[#4a7c59]/30 pl-6 mb-8">
                  <p className="font-lora text-gray-300 text-lg leading-relaxed italic mb-4 text-justify">
                    "Since 2019, my lens has been searching for the soul of Sri
                    Lanka. To guide a tour is not just to show animals, but to
                    translate the language of the jungle to those who walk with
                    me."
                  </p>
                  <p className="font-montserrat text-xs text-gray-500 uppercase tracking-widest">
                    — From the Field
                  </p>
                </div>

                <p className="font-lora text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl text-justify">
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
                    {["instagram", "facebook", "tiktok"].map((platform, i) => (
                      <a
                        key={i}
                        href={teamMembers[0].social[platform]}
                        className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-[#4a7c59] transition-all duration-300"
                      >
                        <span className="text-gray-400 group-hover:text-[#4a7c59] text-sm transition-colors">
                          {platform === "instagram" && <FaInstagram />}
                          {platform === "facebook" && <FaFacebook />}
                          {platform === "tiktok" && <FaTiktok />}
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
            <h2 className=" text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
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
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-earth-green">{card.icon}</span>

                      <h3 className="font-bold uppercase text-2xl text-white leading-none group-hover:text-earth-green transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-6 transition-all duration-500">
                      <p className="font-lora text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {card.description}
                      </p>
                    </div>
                    <p className="font-sans text-sm text-gray-400 group-hover:hidden transition-all duration-300">
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
        <div className="text-center mb-16 md:mb-18">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
            Curated Itineraries
          </span>
          <h2 className="text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
            SIGNATURE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
              TOURS
            </span>
          </h2>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">
          {/* BACKGROUND BLUR */}
          <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none"></div>

          {/* --- PREV BUTTON (Closer to cards) --- */}
          <motion.button
            onClick={handlePrev}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-2 md:left-[10%] xl:left-[18%] top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-lg group"
          >
            <FaChevronLeft className="group-hover:text-gold transition-colors duration-300" />
          </motion.button>

          {/* --- NEXT BUTTON (Closer to cards) --- */}
          <motion.button
            onClick={handleNext}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-2 md:right-[10%] xl:right-[18%] top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-lg group"
          >
            <FaChevronRight className="group-hover:text-gold transition-colors duration-300" />
          </motion.button>

          {/* --- LEFT CARD (Previous) --- */}
          <motion.div
            className="absolute left-[5%] md:left-[15%] w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-xl overflow-hidden cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity"
            initial={{ scale: 0.8, x: -100 }}
            animate={{ scale: 0.85, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handlePrev}
          >
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
            key={activeIndex}
            className="relative w-[320px] h-[480px] md:w-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl z-30 border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={tours[activeIndex].heroImage}
              alt={tours[activeIndex].title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3
                  style={{ fontFamily: "var(--font-bebas)" }}
                  className="text-3xl md:text-4xl text-white leading-none mb-2 drop-shadow-lg font-bold uppercase"
                >
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
                </div>

                <Link
                  href={`/tours/${tours[activeIndex].id}`}
                  className="inline-flex items-center gap-2 border text-white px-8 py-3 rounded-sm font-montserrat text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Explore Tour <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALS SCROLLING SECTION --- */}
      <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
        {/* Background Gradients for Marquee Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
            Voices of the Wild
          </span>
          <h2 className="text-4xl sm:text-5xl text-white leading-[1.2] mt-4">
            CLIENT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
              TESTIMONIALS
            </span>
          </h2>
        </div>

        {/* Infinite Marquee */}
        <div className="flex overflow-hidden relative">
          <motion.div
            className="flex gap-6 pl-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 85, // Adjust speed (higher number = slower)
              ease: "linear",
            }}
          >
            {/* Duplicating array 3 times to ensure smooth loop without gaps */}
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="relative w-[350px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-4xl text-earth-green/20 mb-6 absolute top-6 right-6" />

                <div className="flex gap-1 mb-6 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      className="w-4 h-4"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="font-lora text-gray-300 text-lg leading-relaxed italic mb-8 relative z-10">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  {/*  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <div>
                    <h4 className="font-bebas text-xl text-white tracking-wide">
                      {review.name}
                    </h4>
                    <p className="font-sans text-xs text-earth-green uppercase tracking-wider">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      {/* --- NEWSLETTER --- */}
      <div className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Heading */}
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

          {/* Form / Success State */}
          <div className="relative max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  className="bg-[#111]/80 backdrop-blur-xl border border-[#4a7c59]/50 rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(74,124,89,0.15)] relative overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4a7c59]/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Check Icon */}
                    <div className="w-14 h-14 rounded-full bg-[#4a7c59]/20 flex items-center justify-center mb-4 text-[#4a7c59] border border-[#4a7c59]/30 shadow-[0_0_15px_rgba(74,124,89,0.3)]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="font-bebas text-3xl text-white mb-2 tracking-wide">
                      WELCOME TO THE{" "}
                      <span className="text-[#4a7c59]">TRIBE</span>
                    </h3>

                    <p className="font-lora text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                      You're now on the list for exclusive wildlife stories and
                      expedition updates.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative group"
                  onSubmit={handleSubscribe}
                >
                  <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 transition-all duration-300 focus-within:border-[#4a7c59]/50 focus-within:bg-black/40 focus-within:shadow-[0_0_20px_rgba(74,124,89,0.1)]">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-grow bg-transparent border-none text-white px-6 py-3 focus:ring-0 focus:outline-none font-lora text-sm placeholder:text-gray-500 w-full"
                      required
                    />

                    {/* Desktop Button */}
                    <button
                      type="submit"
                      className="hidden sm:block bg-[#4a7c59] hover:bg-[#5d8c6d] text-white font-montserrat text-[10px] uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#4a7c59]/40 font-bold"
                    >
                      Subscribe
                    </button>

                    {/* Mobile Button */}
                    <button
                      type="submit"
                      className="sm:hidden bg-[#4a7c59] text-white p-3 rounded-full flex-shrink-0 shadow-lg"
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
                        />
                      </svg>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
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
