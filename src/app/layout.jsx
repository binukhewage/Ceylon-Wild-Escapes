import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";  

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 Full SEO Metadata
export const metadata = {
  metadataBase: new URL("https://ceylonwildescapes.com"),

  title: {
    default: "Ceylon Wild Escapes – Wildlife Tours in Sri Lanka",
    template: "%s | Ceylon Wild Escapes",
  },

  description:
    "Premium wildlife tours, safaris, and photography expeditions across Sri Lanka. Explore Yala, Wilpattu, Kumana, Minneriya and more with expert guides.",

  keywords: [
    "Sri Lanka wildlife tours",
    "Sri Lanka safari",
    "Yala safari",
    "Wilpattu safari",
    "Kumana safari",
    "Minneriya safari",
    "wildlife photography tours",
    "birdwatching Sri Lanka",
    "nature tours Sri Lanka",
    "Ceylon Wild Escapes"
  ],

  authors: [{ name: "Ceylon Wild Escapes Team" }],

  openGraph: {
    title: "Ceylon Wild Escapes – Premium Wildlife Tours in Sri Lanka",
    description:
      "Join exclusive safaris and wildlife photography tours across Sri Lanka’s most iconic national parks.",
    url: "https://ceylonwildescapes.com",
    siteName: "Ceylon Wild Escapes",
    images: [
      {
        url: "/images/cwc.png", 
        width: 1200,
        height: 630,
        alt: "Sri Lankan Leopard - Ceylon Wild Escapes",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ceylon Wild Escapes – Wildlife Tours in Sri Lanka",
    description:
      "Safari adventures, wildlife photography trips, and birdwatching tours across Sri Lanka.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  alternates: {
    canonical: "https://ceylonwildescapes.com",
  },
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GY07YX16K9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GY07YX16K9');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Navbar is hidden for Coming Soon Mode */}
        <Navbar />
        
        <main>{children}</main>
        
        {/* Footer is hidden for Coming Soon Mode */}
        <Footer />
        
        <Analytics />
      </body>
    </html>
  );
}