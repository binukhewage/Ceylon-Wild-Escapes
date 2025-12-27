// src/data/tours.js

export const tours = [
  // ======================================================
  // 1. Pulli Trail – The Leopard Odyssey
  // ======================================================
  {
    id: 1,
    type: "Premium",
    title: "Pulli Trail",
    subtitle: "The Leopard Odyssey",
    highlight: "Follow the tracks of the spotted king where nature rules",
    focus: "Big Cat Tracking, Dry Zone Safaris, Highland Cloud Forests and Coastal Wilderness",
    description: "A dedicated safari journey focused on tracking the elusive Sri Lankan Leopard across four key habitats Wilpattu, Kumana, Horton Plains, and Yala featuring ten expertly curated safaris designed to maximize sightings and immerse you in the wild heart of Ceylon.",
    
    heroImage: "/images/we.jpg",
    overviewImage: "/images/l2.jpg",
    
    duration: "15 Days / 14 Nights",
    price: "$5,999",
    intro: "Track Sri Lanka’s apex predator across its four major habitats: Wilpattu, Horton Plains, Kumana, and Yala. Includes 10 safari opportunities with expert leopard trackers.",
    
    images: [
      "/images/wilpattu-dd.jpg", 
      "/images/d1.jpg", 
      "/images/a1.jpg", 
      "/images/a3.jpg",
    ],

    galleryImages: [
      "/images/l1.jpg",
      "/images/l2.jpg",
      "/images/l3.jpg",
      "/images/l4.jpg",
      "/images/l5.jpg",
      "/images/l6.jpg",
    ],

    highlights: [
      "10 Leopard Safaris",
      "Wilpattu Dry Forest ",
      "Kumana Coastal Wetlands",
      "Yala Leopard Territories",
      "Horton Plains Cloud Forests",
    ],

    parts: [
      {
        name: "PART 1: The Northern Wilds – Wilpattu & Nuwara Eliya (Day 1–7)",
        image: "/images/l2.jpg",
        days: [
          {
            day: "Day 1",
            destination: "Arrival & Negombo",
            accommodation: "3–5 Star Hotel (BB)",
            activities: [
              "Arrive at Bandaranaike International Airport(CMB). Meet your private guide and transfer to your hotel near the coast. If you arrive early, there is plenty of time for you to enjoy Negombo beach.", 
              "Evening Tour Briefing: Your guide/naturalist will meet you before the dinner. Enjoy a welcome dinner and detailed briefing on the leopard tracking protocols and the trails ahead."
            ]
          },
          {
            day: "Day 2",
            destination: "Transfer to Wilpattu",
            accommodation: "Thimbiriwewa Resort (FB)",
            activities: [
              "After Breakfast, transfer to the lodge bordering Wilpattu National Park (Drive time approx. 4-5 hours). Lunch will be at the Resort. Settle in and prepare for your first safari.", 
              "Afternoon Safari: By 02.00pm head into Wilpattu to begin the hunt for leopard, sloth bear, and large herds of spotted deer around the park's characteristic Villus (natural waterholes). We will be returning from the park by 06 pm. Dinner will be served at the resort."
            ]
          },
          {
            day: "Day 3–5",
            destination: "Wilpattu Full Immersion",
            accommodation: "Thimbiriwewa Resort (FB)",
            activities: "Full-Day Safaris: Three consecutive full days of dedicated exploration in Wilpattu. Focus on the core leopard territories, searching along the expansive open plains and dense dry forest patches. Utilize the early morning and late afternoon hours for the best predator sightings. Safari will begin at 5.30am from the resort & Safari will end at 06.00pm. Picnic Breakfast & lunch will be served inside the park during the safari. Restrooms are available inside the park with proper toiletries. Dinner will be served at the resort.",
          },
          {
            day: "Day 6",
            destination: "Transfer to Nuwara Eliya",
            accommodation: "Nuwara Eliya Hotel (FB)",
            activities: [
              "After Breakfast drive to Nuwara Eliya (Drive time approx. 06hrs). Lunch will be served on the way to Nuwara Eliya. Evening city tours are available for you to enjoy cold climate after 04 days of continues safaris in the wild. Dinner will be served at the Hotel"
            ],
          },
          {
            day: "Day 7",
            destination: "Horton Plains National Park",
            accommodation: "Nuwara Eliya Hotel (FB)",
            activities: "Leave hotel 05.00am to Horton plains National Park where you will be able to see mountain leopards (very rare) which are adapted to cold weather along with lot of other animals which most of them are endemics to Sri Lanka. Picnic Breakfast & Lunch will be served inside the park. Dinner will be served at the Hotel.",
          },
        ],
      },

      {
        name: "PART 2: The Remote Coast – Kumana National Park (Day 8–11)",
        image: "/images/a1.jpg", 
        days: [
          {
            day: "Day 8",
            destination: "Transfer to Kumana",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities: [
              "Scenic Transfer: After breakfast, begin the long, immersive transfer to the East Coast (approx. 06 hours). Lunch will be served on the way to Arugam Bay. Settle into your accommodation near Kumana/Arugam Bay.",
              "Afternoon Relaxation: Enjoy a well-deserved afternoon relaxing on the beach or by the pool, preparing for the remote wilderness ahead."
            ],
          },
          {
            day: "Day 9–11",
            destination: "Kumana Deep Wilderness",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities: "Full-Day Safari: Three consecutive full days to explore the untamed wild. Leave the hotel by 05.00am to Kumana National Park. Explore the remote Kumana National Park, famous for the Leopards and Kumana Villu. Focus on coastal leopards, and the incredible diversity of endemic and migratory birds. Picnic Breakfast & Lunch will be served inside the park. Safari will end at 06.00pm. Dinner will be served at the hotel.",
          },
        ],
      },

      {
        name: "PART 3: The Southern Corridor – Yala & Departure (Day 12–15)",
        image: "/images/a3.jpg",
        days: [
          {
            day: "Day 12",
            destination: "Transfer to Yala",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities: "Morning Transfer: Drive south to the Yala region (approx. 4.5 hours). Lunch will be served on the way to Yala. Evening Half-Day Safari in Yala (Block 5) a strategy often used to target specific leopard territories away from the main crowds. Safari will end at 06.00pm. Dinner will be served at the resort.",
          },
          {
            day: "Day 13–14",
            destination: "Yala Full-Day Safaris",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities: "Full-Day Safari: Two consecutive full days in Yala National Park, utilizing your guide's expertise in the famous big cat areas to achieve the perfect sighting. Leave the hotel by 05.00am to Yala National Park, the high-stakes days for your Leopard Odyssey. Picnic Breakfast & Lunch will be served inside the park. Safari will end at 06.00pm. Dinner will be served at the resort.",
          },
          {
            day: "Day 15",
            destination: "Transfer to Colombo & Departure",
            accommodation: "-",
            activities: [
              "Following breakfast, Transfer to CMB: Begin the scenic drive back towards the capital region (CMB).",
              "Evening City Tour: Enjoy a brief overview of Colombo's cultural and commercial highlights",
              "Transfer to Bandaranaike International Airport (CMB) for your international departure, concluding your Leopard Odyssey."
            ],
          },
        ],
      },
    ],

    inclusions: [
      "Accommodation: The tour package includes accommodation for 14 nights at good 3-star hotels and specialized safari chalets",
      "Room Sharing: Accommodation is based on twin/double sharing basis, ensuring a comfortable stay for travelers. Single Occupancy (with supplement)",
      "Meals: Daily breakfast (BB) throughout and Breakfast and Lunch during all safari stays.",
      "Food Preferences: Please inform us of your preferred food option when making your booking. The tour operator will ensure that your dietary preferences are accommodated during meals.",
      "Activities: 10 Total Safari Opportunities (seven full and three half-day sessions) in custom safari jeeps with expert trackers and licensed guides in Wilpattu, Kumana, and Yala. Park entrance fees, jeep fees and any government taxes are included.",
      "Transportation: All transfers and local transportation included.",
    ],
    destinations: [
      "Wilpattu National Park ",
      "Horton Plains National Park",
      "Kumaana National Park",
      "Yala National Park",
    ],

    exclusions: ["Any meals other than meals included in the hotel package.", "Any extra beverages or food.", "Any Tips to the staff.", "Any personal effects not mentioned here."],
  },

  // ======================================================
  // 2. Kurulu Trail – Avian Jewels of Ceylon
  // ======================================================
  {
    id: 2,
    type: "Premium",
    title: "Kurulu Trail",
    subtitle: "Avian Jewels of Ceylon",
    highlight: "A curated journey to spot the rare and colorful birds of Paradise",
    focus: "Endemic Bird Tracking, Lowland Rainforest, and Montane Ecosystems",
    description: "This expedition traverses the island's most critical bio-diversity hotspots, including Sinharaja (Rainforest), Kumana (Coastal Wetlands), Gal Oya (Reservoir & Dry Zone), Nilgala (Reservoir & Dry Zone) and Horton Plains (Montane Zone), ensuring exposure to a maximum number of Sri Lanka's endemic bird species.",
    
    heroImage: "/images/hero12.jpg",
    overviewImage: "/images/sinharaja-d.webp",
    duration: "15 Days / 14 Nights",
    price: "$5,499",
    intro: "A deep dive into Sri Lanka’s richest biodiversity hotspots including Sinharaja, Kumana, Gal Oya, and Horton Plains. A perfect expedition for endemic bird watchers and nature photographers.",
    
    images: [
      "/images/kumana.jpg",
      "/images/sinharaja-d.webp",
      "/images/kumana.jpg",
    ],
    galleryImages: [
      "/images/kumana.jpg",
      "/images/hp-d.jpeg",
      "/images/yala-d.jpg",
      "/images/hp.jpg",
      "/images/elewater.jpg",
      "/images/we.jpg",
    ],
    highlights: [
      "Sinharaja Endemic Birds",
      "Kumana Wetlands",
      "Migratory Birds",
      "Gal Oya Boat Safari",
      "Horton Plains Montane Species",
    ],

    parts: [
      {
        name: "PART 1: The Western Gate & Rainforest Immersion (Day 1 - 4)",
        image: "/images/sinharaja-d.webp",
        days: [
          {
            day: "Day 1",
            destination: "Arrival & Negombo",
            accommodation: "5* Hotel (BB)",
            activities: [
              "Arrive at CMB. Meet your private guide and transfer to your hotel. Evening Tour Briefing: Enjoy a welcome dinner and detailed briefing on the birding protocols for the journey ahead."
            ],
          },
          {
            day: "Day 2",
            destination: "Transfer to Sinharaja",
            accommodation: "Blue Magpie Hotel (FB)",
            activities: [
              "Morning transfer (approx. 4-5 hours) to the Sinharaja Rainforest buffer zone.",
              "Afternoon Trek: Commence a half-day trekking session, exploring the fringe habitats and local village for low-country endemics."
            ],
          },
          {
            day: "Day 3",
            destination: "Sinharaja: Core Forest Tracking",
            accommodation: "Blue Magpie Hotel (FB)",
            activities: "Full-Day Trekking: Spend the day inside the UNESCO World Heritage Sinharaja Rainforest, focusing on the famed mixed-species feeding flocks that hold most of the island's 34 endemics.",
          },
          {
            day: "Day 4",
            destination: "Sinharaja: Deep Endemic Search",
            accommodation: "Blue Magpie Hotel (FB)",
            activities: "Full-Day Trekking: Second full day dedicated to tracking key targets such as the Sri Lanka Blue Magpie, Red-faced Malkoha, and the Ashy-headed Laughingthrush within the forest interior.",
          },
        ],
      },

      {
        name: "PART 2: Wetlands, Coast & Dry Zone (Day 5–10)",
        image: "/images/kumana.jpg",
        days: [
          {
            day: "Day 5",
            destination: "Transfer to Kumana",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities: [
              "Long Scenic Transfer: Depart Sinharaja for the East Coast (approx. 7 hours). Settle into your accommodation near the beach.",
              "Evening Relaxation: Enjoy a quiet evening on the beach or resting after the journey."
            ],
          },
          {
            day: "Day 6",
            destination: "Kumana: Birding Safari",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities: "Full-Day Safari: Explore Kumana National Park, famous for the Kumana Villu (natural waterholes). Focus on migratory waterfowl, storks, spoonbills, and the coastal bird species.",
          },
          {
            day: "Day 7",
            destination: "Kumana & Deep Wilderness",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities: "Full-Day Safari: Second day in Kumana, pushing deeper into the untouched coastal wilderness. Excellent opportunity for general wildlife viewing (leopards, elephants) alongside specialized bird photography.",
          },
          {
            day: "Day 8",
            destination: "Transfer to Gal Oya & Boat Safari",
            accommodation: "Gal Oya Local Hotel (FB)",
            activities: [
              "Morning Transfer: Transfer to the remote Gal Oya region (approx. 3 hours).",
              "Afternoon Boat Safari: Evening boat safari on the Gal Oya reservoir, focusing on observing swimming elephants and raptors soaring over the water."
            ],
          },
          {
            day: "Day 9",
            destination: "Nilgala Forest Reserve",
            accommodation: "Gal Oya Local Hotel (FB)",
            activities: "Full-Day Exploration: Trekking and jeep safari in Nilgala Forest Reserve, renowned for its rich dry zone birdlife and unique forest structure away from common tourist trails.",
          },
          {
            day: "Day 10",
            destination: "Nilgala Continued & Transfer Prep",
            accommodation: "Gal Oya Local Hotel (FB)",
            activities: "Full-Day Exploration: A second dedicated day in the Nilgala area to maximize sightings of dry-zone specialties before heading to the central highlands.",
          },
        ],
      },

      {
        name: "PART 3: High Altitude & Departure (Day 11–15)",
        image: "/images/hp-d.jpeg",
        days: [
          {
            day: "Day 11",
            destination: "Transfer to Nuwara Eliya",
            accommodation: "Whistling Thrush / Local Hotel (FB)",
            activities: [
              "Scenic Mountain Transfer: Transfer to the hill country town of Nuwara Eliya (approx. 3.5 hours).",
              "Afternoon Relaxation: Take a leisurely city tour or relax at the hotel, acclimatizing to higher altitude."
            ],
          },
          {
            day: "Day 12",
            destination: "Horton Plains: Montane Endemics",
            accommodation: "Whistling Thrush / Local Hotel (FB)",
            activities: "Full-Day Trekking: Dedicated trekking in Horton Plains National Park (a UNESCO World Heritage site). Focus on high-altitude endemics, including the Sri Lanka Whistling Thrush and the elusive Sri Lanka Bush Warbler.",
          },
          {
            day: "Day 13",
            destination: "Horton Plains: Plateau Exploration",
            accommodation: "Whistling Thrush / Local Hotel (FB)",
            activities: "Full-Day Trekking: Second full day exploring the cloud forest and montane grassland habitats, maximizing opportunities for the difficult-to-find plateau species.",
          },
          {
            day: "Day 14",
            destination: "CMB & City Tour",
            accommodation: "3* Hotel Colombo (FB)",
            activities: [
              "Transfer to Colombo: Begin the scenic drive back towards the capital region (CMB) (approx. 5 hours).",
              "Evening City Tour: Enjoy a final city tour, exploring Colombo's history and architecture."
            ],
          },
          {
            day: "Day 15",
            destination: "Departure",
            accommodation: "-",
            activities: "Following breakfast, transfer to Bandaranaike International Airport (CMB) for your international departure, concluding the Kurulu Trail.",
          },
        ],
      },
    ],

    inclusions: [
      "Accommodation: 14 nights in specified hotels/resorts or similar hotels",
     "Room Sharing: Accommodation is based on twin/double sharing basis, ensuring a comfortable stay for travelers. Single Occupancy (with supplement)",
      "Meals: Daily breakfast (BB) throughout and Breakfast and Lunch during all safari stays.",
      "Food Preferences: Please inform us of your preferred food option when making your booking. The tour operator will ensure that your dietary preferences are accommodated during meals.",
      "Activities: Guided trekking in Sinharaja and Horton Plains, full-day safaris in Kumana, and the exclusive boat safari in Gal Oya",
      "Transportation: All transfers and local transportation",
    ],
    destinations: [
      "Sinharaja Rain Forest Reserve ",
      "Kumana National Park",
      "Nilgala Forest Reserve",
      "Horton Plains",
    ],
    exclusions: ["Any meals other than meals included in the hotel package.", "Any extra beverages or food.", "Any Tips to the staff.", "Any personal effects not mentioned here."],
  },

  // ======================================================
  // 3. Urumaya Trail – Heritage & Habitat
  // ======================================================
  {
    id: 3,
    type: "Premium",
    title: "Urumaya Trail",
    subtitle: "Heritage & Habitat",
    highlight: "Where Ancient Civilization Meets the Untamed Wild.",
    focus: "Culture, History (Ancient Cities), Highland Tea Country, Wildlife, and Southern Coast",
    description: "This expedition connects the cultural heartland of Sri Lanka (Anuradhapura, Habarana, Kandy) with the temperate highlands (Nuwara Eliya, Horton Plains), premier wildlife viewing (Yala), and the relaxing beaches of the South (Hikkaduwa/Galle).",
    
    heroImage: "/images/we.jpg",
    overviewImage: "/images/anu.jpeg",
    duration: "14 Days / 13 Nights",
    price: "$4,999",
    intro: "A perfect blend of culture, history, wildlife, tea country, and coastal relaxation. Visit ancient cities, go on safaris, explore rainforests, and unwind on golden beaches.",
    
    images: ["/images/anu.jpeg", "/images/minneriya.jpg", "/images/yala1.jpg"],
    highlights: [
      "Anuradhapura Ancient City",
      "Sigiriya & Pidurangala",
      "Kandy Cultural Heritage",
      "Yala Safari",
      "Sinharaja Rainforest",
      "Hikkaduwa Beach",
    ],

    parts: [
      {
        name: "PART 1: Arrival and The Cultural Triangle (Day 1-4)",
        image: "/images/anu.jpeg",
        days: [
          {
            day: "Day 1",
            destination: "Arrival, Negombo & Wilpattu Transfer",
            accommodation: "5* Hotel (BB)",
            activities: [
              "Arrive at CMB. Morning City Tour in Negombo. Enjoy Lunch before departing north.",
              "Transfer to Wilpattu area (approx. 4-5 hrs). Tour Briefing in the evening."
            ],
          },
          {
            day: "Day 2",
            destination: "Wilpattu & Anuradhapura",
            accommodation: "Blue Magpie Hotel (FB)",
            activities: [
              "Morning Safari (1/2 day): Explore Wilpattu National Park for wildlife viewing (leopards, sloth bear, elephants). Lunch at the hotel.",
              "Afternoon Heritage Tour: Visit the sacred ancient city of Anuradhapura (A'Pura). Transfer to Habarana area (approx. 2 hrs)."
            ],
          },
          {
            day: "Day 3",
            destination: "Habarana Wildlife & Village Experience",
            accommodation: "Bay Vista Arugam Bay / Jungle Queen (FB)",
            activities: [
              "Morning Village Tour: Experience traditional Sri Lankan village life in Habarana, including a Bullock Cart ride and a traditional cooking demonstration/lunch.",
              "Afternoon Safari: Jeep safari at Minneriya or Kaudulla National Park (depending on elephant movements)."
            ],
          },
          {
            day: "Day 4",
            destination: "Sigiriya & Transfer to Kandy",
            accommodation: "Bay Vista Arugam Bay / Jungle Queen (FB)",
            activities: [
              "Morning Climb: Ascend Pidurangala Rock for sunrise views and an excellent perspective of Sigiriya Rock.",
              "Late Morning Climb: Climb Sigiriya Rock Fortress (or Lion Rock).",
              "Afternoon Transfer: Depart for Kandy (approx. 3-4 hrs)."
            ],
          },
        ],
      },

      {
        name: "PART 2: The Hill Country (Day 5–8)",
        image: "/images/horton1.jpg",
        days: [
          {
            day: "Day 5",
            destination: "Dambulla & Kandy Culture",
            accommodation: "Hotel (FB)",
            activities: [
              "Morning Visit: Stop at the Dambulla Cave Temple en route to Kandy, followed by a visit to a local Spice Garden. Lunch.",
              "Evening: Attend a Kandyan Cultural Show and visit the sacred Temple of the Tooth Relic (Maligawa)."
            ],
          },
          {
            day: "Day 6",
            destination: "Kandy Exploration",
            accommodation: "Hotel (FB)",
            activities: [
              "Morning: Visit the stunning Peradeniya Botanical Gardens.",
              "Afternoon: Kandy City Tour, exploring local markets, viewpoints, and temples.",
              "Evening: Relax with a gentle Lake Round walk."
            ],
          },
          {
            day: "Day 7",
            destination: "Transfer to Nuwara Eliya",
            accommodation: "Hotel (FB)",
            activities: [
              "Morning Leisure.",
              "Afternoon Transfer: Drive to the tea country of Nuwara Eliya (approx. 3.5 hours). Check into your hotel. The afternoon is reserved for relaxing and acclimatizing to the altitude."
            ],
          },
          {
            day: "Day 8",
            destination: "Nuwara Eliya & Transfer to Yala",
            accommodation: "Whistling Thrush (FB)",
            activities: [
              "Morning Visit: Explore a traditional Tea Plantation and Factory to learn about the process and taste world-famous Ceylon tea.",
              "Late Morning: Begin the journey to the South.",
              "Afternoon Transfer: Long, scenic drive to Yala (approx. 5 hours)."
            ],
          },
        ],
      },

      {
        name: "PART 3: Safari, Rainforest & Southern Coast (Day 9–14)",
        image: "/images/yala1.jpg",
        days: [
          {
            day: "Day 9",
            destination: "Yala National Park",
            accommodation: "HOTEL (FB)",
            activities: [
              "Evening Relaxation: Check in and relax after the long transfer.",
              "Day 2 Full-Day Safari: Dedicated full-day jeep safari in Yala National Park, focusing on tracking leopard, sloth bear, and large herds of elephants."
            ],
          },
          {
            day: "Day 10",
            destination: "Yala to Sinharaja",
            accommodation: "HOTEL (FB)",
            activities: [
              "Morning Activity: Final short safari or cultural visit. Transfer towards Sinharaja.",
              "Mid-Day Stop: Visit the Ratnapura Gem Museum and Mine to learn about the island's precious stones.",
              "Continue to Sinharaja (approx. 4 hours total drive). Evening Relaxation in the rainforest buffer zone."
            ],
          },
          {
            day: "Day 11",
            destination: "Sinharaja Rainforest & Galle",
            accommodation: "Sinharaja Forest (FB)",
            activities: [
              "Morning Hiking (1/2 day): Trekking in the Sinharaja Rainforest to search for endemic birds and unique flora. Lunch.",
              "Afternoon Transfer: Drive to the Southern Coast/Galle area (approx. 3 hours)."
            ],
          },
          {
            day: "Day 12",
            destination: "Galle Fort & Hikkaduwa",
            accommodation: "Hikkaduwa (BB)",
            activities: [
              "Morning Visit: Explore the historical Galle Fort (a UNESCO World Heritage site), walking the ramparts and browsing the colonial-era architecture, boutiques, and cafes.",
              "Afternoon: Relax at the hotel or on the beach in Hikkaduwa."
            ],
          },
          {
            day: "Day 13",
            destination: "Hikkaduwa Coastal Fun",
            accommodation: "Hikkaduwa (BB)",
            activities: [
              "Morning Activities: Visit the Coral Gardens for snorkeling or glass-bottom boat tours (seasonal). Visit a local Turtle Beach/Hatchery to observe conservation efforts.",
              "The rest of the day is for relaxing on the beach."
            ],
          },
          {
            day: "Day 14",
            destination: "Colombo & Departure",
            accommodation: "-",
            activities: [
              "Morning City Tour (1/2 day): Transfer to Colombo. Explore the capital's key highlights (e.g., Gangaramaya Temple, Independence Square). Lunch in Colombo.",
              "Afternoon: Final transfer to Bandaranaike International Airport (CMB) for your international departure."
            ],
          },
        ],
      },
    ],

    inclusions: [
      "Accommodation: 13 nights in specified hotels/resorts or similar hotels",
      "Room Sharing: Accommodation is based on twin/double sharing basis, ensuring a comfortable stay for travelers. Single Occupancy (with supplement)",
      "Meals: Daily breakfast (BB) throughout and Breakfast and Lunch during all safari stays.",
      "Food Preferences: Please inform us of your preferred food option when making your booking. The tour operator will ensure that your dietary preferences are accommodated during meals.",
      "Activities: Wilpattu Safari, Minneriya/Kaudulla Safari, Sigiriya & Pidurangala climbs, Cultural Show, Gem Museum visit, Sinharaja Trekking, and Galle Fort visit",
      "Transportation: All transfers and local transportation",
    ],
    destinations: [
      "Wilpattu National Park",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Yala National Park",
      "Sinharaja Rainforest Reserve",
      "Galle",
    ],
    exclusions: ["Any meals other than meals included in the hotel package.", "Any extra beverages or food.", "Any Tips to the staff.", "Any personal effects not mentioned here."],
  },

  // ======================================================
  // 4. Northern Wild Trail
  // ======================================================
  {
    id: 4,
    type: "Luxury",
    title: "Northern Wild Trail",
    subtitle: "Tracing the pulse of the primal North",
    highlight: "An exclusive escape through the ancient waterholes of the primal North",
    focus: "Leopard & Bear Tracking, The Elephant Gathering, and UNESCO Rainforest Exploration",
    description: "Named for the vital 'villu' (natural waterholes) of the dry zone, this exclusive escape charts a course from the ancient plains of the North to the misty peaks of the Central Highlands, concluding in the prehistoric Sinharaja Rainforest.",
    
    heroImage: "/images/nwt-b.jpg",
    overviewImage: "/images/minneriya-d.jpg",
    duration: "14 Days / 13 Nights",
    price: "$5,999",
    intro: "Luxury wildlife expedition across Sri Lanka's top national parks, featuring Wilpattu's leopards, the Great Elephant Gathering, and cloud forest biodiversity.",
    
    images: [
      "/images/nwt-b.jpg",
      "/images/minneriya-d.jpg",
      "/images/horton1.jpg",
    ],
    highlights: [
      "Wilpattu Leopards",
      "Minneriya Elephants",
      "Horton Plains Biodiversity",
      "Sinharaja Endemics",
    ],
    
    parts: [
      {
        name: "PART 1: The Dry Zone & Predator Plains (Day 1-5)",
        image: "/images/nwt-b.jpg",
        days: [
          {
            day: "Day 1",
            destination: "Arrival & Negombo",
            accommodation: "5* Hotel (BB)",
            activities: "Arrive at CMB. Transfer to Jetwing Lagoon in Negombo for a restful evening on the coast.",
          },
          {
            day: "Day 2",
            destination: "Transfer to Wilpattu",
            accommodation: "Luxury Glamping (FB)",
            activities: "A 4-hour journey to the Northwest. Settle into Mahoora Luxury Glamping by 5:00 pm for an evening in the wild.",
          },
          {
            day: "Day 3",
            destination: "Wilpattu: Leopard Search",
            accommodation: "Luxury Glamping (FB)",
            activities: "Full-Day Jeep Safari (5:30 am - 6:00 pm). Track the elusive Sri Lankan leopard and sloth bear across the park's iconic waterholes.",
          },
          {
            day: "Day 4",
            destination: "Deep Wilpattu: Wilderness",
            accommodation: "Luxury Glamping (FB)",
            activities: "Second full-day safari with picnic breakfast and lunch. Dedicated time for wildlife photography in the dry zone scrub forest.",
          },
          {
            day: "Day 5",
            destination: "Primal Wilpattu: Tracking",
            accommodation: "Luxury Glamping (FB)",
            activities: "Final full-day safari in Wilpattu to maximize opportunities for rare wildlife encounters.",
          },
        ],
      },
      {
        name: "PART 2: The Gathering & Central Highlands (Day 6-11)",
        image: "/images/minneriya-d.jpg",
        days: [
          {
            day: "Day 6",
            destination: "Habarana Lake",
            accommodation: "5* Hotel (FB)",
            activities: "Transfer to Habarana (2 hours). Sunset photography excursions by the Habarana Lake (3:00 pm - 6:00 pm).",
          },
          {
            day: "Day 7",
            destination: "Minneriya: The Gathering",
            accommodation: "5* Hotel (FB)",
            activities: "Half Day Jeep Safari. Witness the massive elephant gathering near Minneriya's ancient tanks.",
          },
          {
            day: "Day 8",
            destination: "Nuwara Eliya Ascent",
            accommodation: "Holiday Bungalow (FB)",
            activities: "A 5-hour scenic drive to the highlands. Check into the Ambewela Holiday Cottage for a cool climate retreat.",
          },
          {
            day: "Day 9",
            destination: "Horton Plains: Cloud Forest",
            accommodation: "Holiday Bungalow (FB)",
            activities: "Morning Safari (5:30 am - 12:00 pm) to track rare montane birds. Evening safari down the rugged Ohiya Road.",
          },
          {
            day: "Day 10",
            destination: "Horton Plains: Plateau Exploration",
            accommodation: "Holiday Bungalow (FB)",
            activities: "Second day of montane exploration. Focus on endemic species within the UNESCO-protected cloud forests.",
          },
          {
            day: "Day 11",
            destination: "Pelmadulla Transition",
            accommodation: "3* Hotel (FB)",
            activities: "Transfer to Pelmadulla (3.5 hours). Enjoy a scenic lunch at the Terrace Cinnamon View during this highland rest day.",
          },
        ],
      },
      {
        name: "PART 3: Rainforest Immersion & Departure (Day 12-14)",
        image: "/images/sinharaja-d.webp",
        days: [
          {
            day: "Day 12",
            destination: "Sinharaja: Birding Intro",
            accommodation: "3* Hotel (FB)",
            activities: "Transfer to the Sinharaja Rainforest. Evening bird photography tour in the local village buffer zone (3:00 pm - 6:00 pm).",
          },
          {
            day: "Day 13",
            destination: "Sinharaja: Core Forest",
            accommodation: "3* Hotel (FB)",
            activities: "Morning Hike (5:30 am - 12:30 pm) deep into the primary forest. Seek out the 34 endemic bird species and diverse flora.",
          },
          {
            day: "Day 14",
            destination: "Departure",
            accommodation: "Airport Garden Hotel (Dinner)",
            activities: "Final morning hike in Sinharaja. Transfer to Katunayake (3.5 hours) for a farewell dinner before your international departure.",
          },
        ],
      },
    ],
    inclusions: [
      "Accommodation: 13 nights in a curated mix of 5* hotels, luxury glamping, and specialized lodges",
      "Room Sharing: Accommodation is based on twin/double sharing basis, ensuring a comfortable stay for travelers. Single Occupancy (with supplement)",
      "Meals: Daily breakfast (BB) throughout and Breakfast and Lunch during all safari stays.",
      "Food Preferences: Please inform us of your preferred food option when making your booking. The tour operator will ensure that your dietary preferences are accommodated during meals.",
      "Activities: Four full-day safaris (Wilpattu) and one half-day safari (Minneriya), three montane safaris (Horton Plains), and two rainforest hikes (Sinharaja)",
      "Transportation: All transfers and local transportation",
    ],
    destinations: [
      "Wilpattu National Park",
      "Minneriya National Park",
      "Horton Plains National Park",
      "Sinharaja Forest Reserve",
    ],
    exclusions: ["Any meals other than meals included in the hotel package.", "Any extra beverages or food.", "Any Tips to the staff.", "Any personal effects not mentioned here."],
  },

  // ======================================================
  // 5. Southern Wild Trail
  // ======================================================
  {
    id: 5,
    type: "Luxury",
    title: "Southern Wild Trail",
    subtitle: "Capturing the Heartbeat of the Ancient South",
    highlight: "Tracing the vibrant rhythm of the untouched southern wild",
    focus: "Leopard Photography, Remote Wetland Sanctuaries, and UNESCO Cloud Forests",
    description: "This immersive venture into the untamed wild takes you into the depth of the wilderness across Sri Lanka's three major life zones. Your expedition begins in the misty Montane Zone of Horton Plains, descends into the endemic-rich canopy of the Sinharaja Rainforest, and sweeps across the South and East to experience the famous leopard concentrations of Yala and the remote wetlands of Kumana.",
    
    heroImage: "/images/kumana.jpg", 
    overviewImage: "/images/yala.jpg",
    duration: "14 Days / 13 Nights",
    price: "$5,999",
    intro: "Experience Sri Lanka's southern wilderness with luxury comfort. From the misty heights of Horton Plains to the remote coastal wetlands of Kumana and the leopard-dense Yala.",
    
    images: ["/images/kumana.jpg", "/images/kumana1.jpg", "/images/yala.jpg"],
    highlights: [
      "Yala Leopards",
      "Kumana Birdlife",
      "Horton Plains Landscape",
      "Sinharaja Rainforest",
    ],
    
    parts: [
      {
        name: "PART 1: The Montane Zone & Cloud Forests (Day 01-04)",
        image: "/images/horton1.jpg",
        days: [
          {
            day: "Day 01",
            destination: "Negombo",
            accommodation: "Jetwing Lagoon (BB) 5*",
            activities: "Arrival at CMB and transfer to the coast for a restful first night.",
          },
          {
            day: "Day 02",
            destination: "Nuwara Eliya",
            accommodation: "Ambewela Holiday Cottage (FB)",
            activities: "5.5-hour journey to the highlands with lunch in Kithulgala; arrival at the cottage by 5:00 pm.",
          },
          {
            day: "Day 03",
            destination: "Horton Plains",
            accommodation: "Ambewela Holiday Cottage (FB)",
            activities: "Morning Safari (5:30 am - 12:00 pm) followed by an Evening Safari down the rugged Ohiya Road.",
          },
          {
            day: "Day 04",
            destination: "Horton Plains",
            accommodation: "Ambewela Holiday Cottage (FB)",
            activities: "Second morning safari to track the elusive Sri Lankan leopard and shaggy-coated sambar deer.",
          },
        ],
      },
      {
        name: "PART 2: The Coastal Wetlands & Remote East (Day 05-08)",
        image: "/images/kumana1.jpg",
        days: [
          {
            day: "Day 05",
            destination: "Arugam Bay",
            accommodation: "Bay Vista (HB)",
            activities: "7.5-hour drive to the East Coast; optional Night Safari after dinner (8:30 pm - 10:30 pm).",
          },
          {
            day: "Day 06",
            destination: "Kumana National Park",
            accommodation: "Luxury Tented Camp (FB)",
            activities: "Transfer to the park for an Evening Jeep Safari (2:00 pm - 6:00 pm) among untouched lagoons.",
          },
          {
            day: "Day 07",
            destination: "Kumana National Park",
            accommodation: "Luxury Tented Camp (FB)",
            activities: "Full-Day Jeep Safari (6:00 am - 6:00 pm) focusing on rare migratory birds and coastal predators.",
          },
          {
            day: "Day 08",
            destination: "Kumana National Park",
            accommodation: "Luxury Tented Camp (FB)",
            activities: "Second full day-immersion in the remote wetlands, ideal for undisturbed wildlife behavior photography.",
          },
        ],
      },
      {
        name: "PART 3: The Savannah & Predator Plains (Day 09-14)",
        image: "/images/yala.jpg",
        days: [
          {
            day: "Day 09",
            destination: "Yala (Kirinda)",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities: "6-hour transfer to the Southern coast with lunch at Wellawaya; evening relaxation by the shore.",
          },
          {
            day: "Day 10",
            destination: "Yala National Park",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities: "Full-Day Jeep Safari (5:30 am - 6:00 pm) tracking one of the world's highest densities of leopards.",
          },
          {
            day: "Day 11",
            destination: "Yala National Park",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities: "Second full-day safari focusing on elephants, sloth bears, and the park's diverse birdlife.",
          },
          {
            day: "Day 12",
            destination: "Sinharaja Rainforest",
            accommodation: "Blue Magpie Lodge (FB)",
            activities: "Transfer to the rainforest (8:00 am departure); Bird photography tour in the local village (3:00 pm - 6:00 pm).",
          },
          {
            day: "Day 13",
            destination: "Sinharaja Rainforest",
            accommodation: "Blue Magpie Lodge (FB)",
            activities: "Morning Hike (5:30 am - 12:30 pm) to find endemic species like the Blue Magpie and Red-faced Malkoha.",
          },
          {
            day: "Day 14",
            destination: "Departure",
            accommodation: "Airport Garden Hotel (Dinner)",
            activities: "Final morning rainforest hike; transfer to Katunayake for a farewell dinner and late-night flight.",
          },
        ],
      },
    ],
    inclusions: [
      "Accommodation: 13 nights in a curated mix of 5* hotels, luxury glamping, and specialized lodges",
      "Room Sharing: Accommodation is based on twin/double sharing basis, ensuring a comfortable stay for travelers. Single Occupancy (with supplement)",
      "Meals: Daily breakfast (BB) throughout and Breakfast and Lunch during all safari stays.",
      "Food Preferences: Please inform us of your preferred food option when making your booking. The tour operator will ensure that your dietary preferences are accommodated during meals.",
      "Activities: Six full-day safaris (Horton Plains, Kumana and Yala) and three rainforest hikes (Sinharaja)",
      "Transportation: All transfers and local transportation",
    ],
    destinations: [
      "Horton Plains National Park",
      "Kumana National Park",
      "Yala National Park",
      "Sinharaja Rainforest Reserve",
    ],
    exclusions: ["Any meals other than meals included in the hotel package.", "Any extra beverages or food.", "Any Tips to the staff.", "Any personal effects not mentioned here."],
  },
];