// SHA TOURISM - SEED & PLACEHOLDER DATASET
// All items are clearly flagged with [Awaiting Document Confirmation] where actual values
// will be synchronized once the official business document is uploaded.

export const DATA_DISCLAIMER = {
  notice: "All package itineraries, hotel listings, vehicle tariffs and reviews below are structured placeholders and authentic Ooty regional models awaiting final synchronization with Sha Tourism's official business document.",
  badgeText: "Awaiting Document Confirmation"
};

export const TOUR_PACKAGES = [
  {
    id: "pkg-ooty-weekend-2d1n",
    name: "Classic Ooty Weekend Escapade",
    slug: "classic-ooty-weekend-escapade",
    category: "Weekend Packages",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    price: 6499,
    priceNote: "per couple / double occupancy",
    rating: 4.9,
    reviewsCount: 38,
    isPopular: true,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    bannerImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Ideal short weekend escape covering Ooty Lake, Botanical Garden, Doddabetta Peak, and sprawling tea plantations with comfortable stay & cab.",
    highlights: [
      "Panoramic views from Doddabetta Peak (8,650 ft)",
      "Serene boating experience at Ooty Lake",
      "Leisure walk through 55-acre Botanical Gardens",
      "Tea factory visit with fresh Nilgiri tea tasting",
      "Private hill cab with dedicated local driver"
    ],
    hotelAccommodation: {
      type: "Deluxe Mountain View Room",
      stayLocation: "Ooty Town / Fern Hill",
      inclusions: "Complimentary breakfast & Wi-Fi",
      badge: "Standard 3-Star Comfort Stay"
    },
    transportation: {
      vehicleType: "Private Sedan (Dzire / Etios)",
      coverage: "Pick-up, drop-off, and local sightseeing included",
      driverBata: "Driver charges, fuel & parking included"
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ooty & Town Sightseeing",
        description: "Warm welcome in Ooty by Sha Tourism representative. Check into hotel and refresh. Post breakfast, proceed to the Government Botanical Garden with 1,000+ exotic floral species, followed by picturesque Ooty Lake for boating. Spend the evening shopping for homemade Ooty chocolates, Nilgiri oils, and spices in Commercial Road.",
        meals: "Breakfast (if morning arrival), Welcome tea"
      },
      {
        day: 2,
        title: "Doddabetta Summit & Tea Garden Trail",
        description: "Early morning drive through misty pine woods to Doddabetta Peak for sweeping vistas of the Nilgiri mountain ranges. Visit the Nilgiri Tea Factory and Museum to witness tea processing. Tour the lush Government Rose Garden featuring 20,000+ rose varieties. Later, transfer to Ooty bus stand or railway station for return journey.",
        meals: "Breakfast included"
      }
    ],
    inclusions: [
      "1 Night accommodation in deluxe room on twin sharing basis",
      "Daily wholesome South & North Indian breakfast",
      "All transfers & sightseeing in dedicated private cab",
      "Toll, parking fees, and driver allowances",
      "Sha Tourism local travel assistance and 24/7 hotline support"
    ],
    exclusions: [
      "Entry tickets to Botanical Garden, Rose Garden, Boating fees",
      "Lunches, dinners, and personal beverage expenses",
      "Camera fees and personal activities",
      "GST as applicable"
    ],
    importantNotes: [
      "Carry light woolens as evenings and early mornings in Ooty can be chilly year-round.",
      "Check-in time is standard 12:00 PM; early check-in subject to room availability.",
      "Customizable according to arrival train/flight timings."
    ]
  },
  {
    id: "pkg-ooty-honeymoon-3d2n",
    name: "Romantic Ooty & Coonoor Honeymoon Bliss",
    slug: "romantic-ooty-coonoor-honeymoon-bliss",
    category: "Couple Packages",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: 11999,
    priceNote: "per couple (all-inclusive honeymoon perks)",
    rating: 5.0,
    reviewsCount: 52,
    isPopular: true,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "An enchanting romantic holiday featuring luxury tea estate stay, candle-light dinner, flower bed decoration, and private sightseeing in Ooty and Coonoor.",
    highlights: [
      "2 Nights in a romantic tea estate cottage with fireplace",
      "Special flower bed decoration & honeymoon cake on arrival",
      "1 Romantic Candle-light Dinner under misty stars",
      "Scenic Coonoor day excursion: Sim's Park & Dolphin's Nose",
      "Pykara Lake boat ride & picturesque Pine Forest walk",
      "Private premium sedan with courteous chauffeur"
    ],
    hotelAccommodation: {
      type: "Honeymoon Suite / Hillside Valley View Cottage",
      stayLocation: "Lovedale / Coonoor Valley Road",
      inclusions: "Bed tea, daily buffet breakfast, flower bed setup, candle-lit dinner",
      badge: "Handpicked Romantic Heritage Property"
    },
    transportation: {
      vehicleType: "Private AC Sedan (Dzire / Etios)",
      coverage: "Seamless private transport from start to finish",
      driverBata: "All fuel, parking, hill taxes included"
    },
    itinerary: [
      {
        day: 1,
        title: "Ooty Arrival & Romantic Welcome",
        description: "Arrive in Ooty. Private transfer to your secluded hilltop resort. Enjoy a refreshing welcome drink followed by leisure time in your decorated suite. In the afternoon, take a relaxed stroll through the Government Rose Garden, followed by an intimate pedal boat ride at Ooty Lake. Relish a special candle-light dinner at the resort.",
        meals: "Honeymoon Cake, Candle-light Dinner"
      },
      {
        day: 2,
        title: "Coonoor Day Tour & Tea Country",
        description: "After breakfast, embark on a scenic drive to Coonoor. Visit Sim's Park, a rare botanic garden nestled in a deep ravine. Stop at Lamb's Rock and Dolphin's Nose for panoramic views of Catherine Falls and Nilgiri tea slopes. Explore tea factories and taste authentic green and white Nilgiri teas. Return to Ooty for a cozy evening by the fireplace.",
        meals: "Buffet Breakfast"
      },
      {
        day: 3,
        title: "Pykara Waterfalls, Pine Forest & Departure",
        description: "Post breakfast, check out and drive towards Pykara. Walk amidst the towering pine trees at Shooting Point (Pine Forest) and visit the cascading Pykara Waterfalls and the tranquil Pykara Lake for speedboating. In the afternoon, transfer to Ooty/Mettupalayam for your homeward journey with sweet memories.",
        meals: "Buffet Breakfast"
      }
    ],
    inclusions: [
      "2 Nights in Honeymoon Suite with valley view",
      "Special Honeymoon inclusions: Bed decoration, chocolate cake, candle-light dinner",
      "Daily breakfast at the resort restaurant",
      "Entire 3-day sightseeing in dedicated private sedan",
      "Driver allowance, parking, state permits, and fuel",
      "Sha Tourism personalized concierge service"
    ],
    exclusions: [
      "Heritage toy train ride tickets (subject to IRCTC availability)",
      "Entry tickets & boating charges",
      "Lunch expenses",
      "Anything not mentioned in inclusions"
    ],
    importantNotes: [
      "Toy train tickets between Ooty and Coonoor can be arranged on request subject to railway quota.",
      "Customization for anniversary or special celebration cakes is available on WhatsApp."
    ]
  },
  {
    id: "pkg-ooty-family-4d3n",
    name: "Nilgiri Grand Family Holiday & Safari",
    slug: "nilgiri-grand-family-holiday-safari",
    category: "Family Packages",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: 18500,
    priceNote: "per family (2 Adults + 2 Kids / 3 Adults)",
    rating: 4.8,
    reviewsCount: 64,
    isPopular: true,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    bannerImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "A comprehensive family tour covering Ooty, Coonoor, Pykara, and Mudumalai Tiger Reserve with spacious family rooms and a private Innova/Ertiga.",
    highlights: [
      "Spacious family cottage stay with lawn and campfire",
      "Mudumalai Wildlife Safari & Theppakadu Elephant Camp",
      "Nilgiri Mountain Railway (Toy Train) experience",
      "Pykara Lake speedboat and picturesque waterfalls",
      "Doddabetta summit view and Tea Museum tour",
      "Dedicated spacious private SUV (Innova / Ertiga)"
    ],
    hotelAccommodation: {
      type: "Spacious Family Suite / Two Interconnected Rooms",
      stayLocation: "Ooty Valley / Doddabetta Slopes",
      inclusions: "Daily buffet breakfast, kids play zone access",
      badge: "Family-Friendly Resort with Lawns"
    },
    transportation: {
      vehicleType: "Private SUV (Toyota Innova / Ertiga)",
      coverage: "Complete door-to-door transportation for 4 full days",
      driverBata: "Included"
    },
    itinerary: [
      {
        day: 1,
        title: "Ooty Arrival & Leisure Sightseeing",
        description: "Arrival in Ooty. Check in to family resort. Post lunch, visit the sprawling Government Botanical Gardens where kids love the fossil tree and vast glasshouse. Later head to Ooty Lake for paddle boating and horse riding on the banks. Stroll in the evening market for souvenirs.",
        meals: "Welcome drink & evening tea"
      },
      {
        day: 2,
        title: "Coonoor Heritage & Tea Gardens",
        description: "Board the charming Nilgiri Mountain Toy Train from Ooty to Coonoor. Our driver meets you at Coonoor station. Explore Sim's Park, Highfield Tea Factory, and Dolphin's Nose viewpoint. Kids enjoy chocolate tasting and eucalyptus oil distillery tours. Drive back to Ooty through tea carpeted hills.",
        meals: "Buffet Breakfast"
      },
      {
        day: 3,
        title: "Mudumalai Forest Safari & Elephant Camp",
        description: "Early morning drive through Kalhatty Ghats (36 hairpin bends) down to Mudumalai National Park. Experience the Forest Department Wildlife Safari to spot spotted deer, wild elephants, peacocks, and Indian gaur. Visit the historic Theppakadu Elephant Camp. Return to Ooty in the evening for a warm campfire session.",
        meals: "Buffet Breakfast"
      },
      {
        day: 4,
        title: "Pykara Lake, Pine Forest & Departure",
        description: "Post breakfast, check out from the resort. Visit the famous Pine Forest (movie shooting location) and Kamaraj Sagar Dam. Drive to Pykara Lake for exciting speedboating and admire the cascading Pykara Falls. Conclude the holiday with drop-off at your departure point.",
        meals: "Buffet Breakfast"
      }
    ],
    inclusions: [
      "3 Nights family accommodation in deluxe cottage",
      "Daily buffet breakfast for all members",
      "Dedicated Innova / Ertiga for all 4 days with experienced hill driver",
      "All toll, parking, driver charges, and hill permits",
      "Campfire arrangement for one evening (weather permitting)",
      "24/7 dedicated travel coordinator"
    ],
    exclusions: [
      "Forest Department safari tickets at Mudumalai (can be assisted on arrival)",
      "Toy train tickets",
      "Lunches and dinners",
      "Monuments and garden entry fees"
    ],
    importantNotes: [
      "Safari timings at Mudumalai are morning 6:30 AM – 9:00 AM and evening 3:30 PM – 6:00 PM.",
      "Customizable for large joint families with 12+ seater Tempo Traveller."
    ]
  },
  {
    id: "pkg-ooty-group-3d2n",
    name: "Nilgiri Explorer & Trekking Group Package",
    slug: "nilgiri-explorer-trekking-group-package",
    category: "Group Packages",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: 4999,
    priceNote: "per person (min. 6 to 12 persons group)",
    rating: 4.7,
    reviewsCount: 45,
    isPopular: false,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    bannerImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Tailored for college friends, corporate teams, and groups. Includes villa/dormitory stay, campfire with music, off-road viewpoint drive, and tempo traveller.",
    highlights: [
      "Spacious group villa / private bungalow with mountain view",
      "Night campfire with music and barbecue setup",
      "Sightseeing by dedicated AC Tempo Traveller (12/17 seater)",
      "Visit Pykara, Avalanche Lake, Pine Forest, and Doddabetta",
      "Budget-friendly per-person pricing"
    ],
    hotelAccommodation: {
      type: "Private 4-BHK Villa / Group Estate Cottage",
      stayLocation: "Fern Hill / Ooty Outskirts",
      inclusions: "Breakfast, campfire, music speaker, kitchen access",
      badge: "Exclusive Group Stay"
    },
    transportation: {
      vehicleType: "Private Tempo Traveller (12 to 17 Seater)",
      coverage: "Complete group transportation throughout",
      driverBata: "Included"
    },
    itinerary: [
      {
        day: 1,
        title: "Group Arrival & Doddabetta Sunset",
        description: "Arrive in Ooty. Check in to your group estate villa. After settling in, visit Doddabetta Peak for sweeping valley views. Head to Ooty Lake in the evening. Gather back at the villa for an evening campfire with music and fun activities.",
        meals: "Evening snacks & tea"
      },
      {
        day: 2,
        title: "Pykara Boating, Pine Forest & Tea Factory",
        description: "Full day tour towards Pykara Lake and Dam. Hike to Pykara Falls, explore the cinematic Pine Forest, and visit the Tea Museum for freshly brewed hot Nilgiri tea. Free evening to explore Ooty town and enjoy local delicacies.",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Botanical Garden & Departure",
        description: "Visit Government Botanical Garden and Rose Garden. Complete souvenir shopping and depart with memories of an unforgettable group holiday in Ooty.",
        meals: "Breakfast"
      }
    ],
    inclusions: [
      "2 Nights stay in private group villa / estate cottage",
      "Daily breakfast",
      "Tempo Traveller with experienced driver for 3 days",
      "One evening campfire arrangement",
      "All driver allowance, fuel, tolls, and parking"
    ],
    exclusions: [
      "Entry tickets, boating fees",
      "Lunches, dinners, and personal expenses",
      "Off-road jeep safari charges (if opted)"
    ],
    importantNotes: [
      "Villa comes with caretaker and barbecue facility upon advance request.",
      "Special discounts available for groups above 15 members."
    ]
  },
  {
    id: "pkg-ooty-custom-tailor",
    name: "Bespoke Nilgiri Luxury & Customized Tour",
    slug: "bespoke-nilgiri-luxury-customized-tour",
    category: "Customized Packages",
    duration: "Flexible (3 to 7 Days)",
    durationDays: 5,
    price: 24000,
    priceNote: "starting estimate / customized on request",
    rating: 5.0,
    reviewsCount: 29,
    isPopular: false,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    bannerImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Completely customizable holiday designed around your pace. Choose heritage colonial resorts, private plantation trails, Avalanche forest permits, and premium transfers.",
    highlights: [
      "Custom dates and flexible duration (3 to 7 days)",
      "Choice of 4-Star / 5-Star Heritage resorts and colonial villas",
      "Exclusive offbeat destinations: Avalanche, Emerald Lake, Kotagiri",
      "Private premium cab with customized departure points (Bangalore / Coimbatore)",
      "Dedicated Sha Tourism tour curator"
    ],
    hotelAccommodation: {
      type: "Choice of Colonial Heritage Bungalow or 5-Star Mountain Resort",
      stayLocation: "Ooty / Kotagiri / Coonoor",
      inclusions: "Tailored meal plans (CP / MAP / AP)",
      badge: "Luxury & Heritage Category"
    },
    transportation: {
      vehicleType: "Toyota Innova Crysta / Luxury Sedan / SUV",
      coverage: "Unlimited local & outstation flexibility",
      driverBata: "All inclusive"
    },
    itinerary: [
      {
        day: 1,
        title: "VIP Pick-up & Check-in to Heritage Bungalow",
        description: "Private chauffeur pickup from Coimbatore / Bangalore airport. Scenic drive uphill through cloud-kissed Nilgiri ghats. Check in to your luxury colonial tea estate bungalow.",
        meals: "Chef curated dinner"
      },
      {
        day: 2,
        title: "Exclusive Plantation Walk & Nilgiri Rail Ride",
        description: "Private guided tea tasting session. First-class heritage toy train journey through tunnels and ravines. Evening tea with breathtaking valley sunset.",
        meals: "Breakfast & High Tea"
      },
      {
        day: 3,
        title: "Offbeat Avalanche Sanctuary & Emerald Lake",
        description: "Guided safari through the pristine Avalanche eco-zone and sparkling Emerald Lake, away from tourist crowds. Picnic lunch amidst pine forests.",
        meals: "Breakfast & Picnic Lunch"
      }
    ],
    inclusions: [
      "Handpicked luxury heritage accommodation",
      "Customized meal plan",
      "Dedicated Toyota Innova Crysta throughout the journey",
      "Personalized 24/7 travel concierge"
    ],
    exclusions: [
      "Airfare / Train tickets to transit hubs",
      "Personal spa treatments & discretionary expenses"
    ],
    importantNotes: [
      "Every aspect of this package can be customized via WhatsApp or phone consultation."
    ]
  }
];

export const HOTELS_RESORTS = [
  {
    id: "hotel-nilgiri-heritage",
    name: "Nilgiri Heritage Tea Estate Resort",
    slug: "nilgiri-heritage-tea-estate-resort",
    location: "Fern Hill / Lovedale Road, Ooty",
    category: "Heritage & Luxury",
    startingPrice: 4500,
    priceUnit: "per night",
    rating: 4.9,
    reviewsCount: 76,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Nestled amidst 30 acres of private rolling tea plantations, this colonial-era heritage retreat offers timeless luxury, crackling fireplaces, and tea garden views.",
    amenities: [
      "Fireplace in all rooms",
      "Panoramic Tea Garden Views",
      "Multi-Cuisine Restaurant",
      "Free High-Speed Wi-Fi",
      "Campfire with Evening Tea",
      "Ample Safe Parking"
    ],
    roomTypes: [
      { name: "Colonial Deluxe Room", price: 4500, capacity: "2 Adults + 1 Child", view: "Garden & Mountain View" },
      { name: "Heritage Estate Suite", price: 6800, capacity: "2 Adults + 2 Children", view: "Private Tea Plantation Balcony" }
    ]
  },
  {
    id: "hotel-pine-mist-cottages",
    name: "Pine Mist Valley Cottages",
    slug: "pine-mist-valley-cottages",
    location: "Doddabetta Road, Ooty",
    category: "Boutique Hill Cottage",
    startingPrice: 3200,
    priceUnit: "per night",
    rating: 4.8,
    reviewsCount: 54,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    description: "Charming wooden cottages surrounded by towering pine trees and misty morning clouds. Perfect for couples and families wanting serene tranquility.",
    amenities: [
      "Wooden Finished Interior",
      "Room Heaters",
      "Balcony Valley Views",
      "In-house Kitchen & Dining",
      "Children Play Area",
      "Hot Water 24/7"
    ],
    roomTypes: [
      { name: "Mist View Wooden Cottage", price: 3200, capacity: "2 Adults", view: "Pine Valley View" },
      { name: "Family Duplex Suite", price: 5200, capacity: "4 Adults", view: "Full Nilgiri Mountain View" }
    ]
  },
  {
    id: "hotel-emerald-lake-view",
    name: "Emerald Lakeview Resort & Spa",
    slug: "emerald-lakeview-resort-spa",
    location: "Near Ooty Lake, Westmere",
    category: "Lakefront Comfort",
    startingPrice: 2800,
    priceUnit: "per night",
    rating: 4.7,
    reviewsCount: 89,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    description: "Located within 5 minutes walking distance of Ooty Lake and Boat House. Offers comfortable stays, excellent south and north Indian food, and sightseeing pick-up.",
    amenities: [
      "5 Mins from Ooty Lake",
      "Restaurant & Room Service",
      "Free High-Speed Wi-Fi",
      "Travel Desk & Cab Facility",
      "Power Backup & Geyser",
      "Doctor on Call"
    ],
    roomTypes: [
      { name: "Executive Lake Facing Room", price: 2800, capacity: "2 Adults", view: "Lake & City View" },
      { name: "Deluxe Family Quad Room", price: 4200, capacity: "4 Adults", view: "Mountain View" }
    ]
  },
  {
    id: "hotel-queen-valley-resort",
    name: "Queen's Valley Royal Suites",
    slug: "queens-valley-royal-suites",
    location: "Commercial Road / Charing Cross, Ooty",
    category: "Town Center Premium",
    startingPrice: 3500,
    priceUnit: "per night",
    rating: 4.8,
    reviewsCount: 61,
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    description: "Located right in the heart of Ooty near shopping markets, Botanical Garden, and restaurants. Perfect for travelers wanting instant access to town delights.",
    amenities: [
      "Heart of Ooty Town",
      "Pure Veg Restaurant Option",
      "Elevator & Valet Parking",
      "LED TV & Modern Bathrooms",
      "Tea/Coffee Maker",
      "Laundry Assistance"
    ],
    roomTypes: [
      { name: "Deluxe City Room", price: 3500, capacity: "2 Adults", view: "Ooty Townscape" },
      { name: "Royal Club Suite", price: 5400, capacity: "3 Adults", view: "Botanical Hills View" }
    ]
  }
];

export const CAB_SERVICES = [
  {
    id: "cab-sedan-dzire",
    name: "Sedan (Swift Dzire / Toyota Etios)",
    category: "Sedan",
    capacity: "4 Passengers + 1 Driver",
    luggage: "2 Large Bags + 2 Small",
    acType: "AC / Climate Controlled (AC on plains, hill mode on climbs)",
    pricingNote: "Starting from ₹2,200/day for Ooty local sightseeing",
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    bestFor: "Couples, small families & solo travelers",
    features: [
      "Well-maintained & sanitized vehicles",
      "Polite, experienced Nilgiri hill drivers",
      "Music system & mobile charging points",
      "Toll, fuel & driver bata included in quote"
    ],
    servicesAvailable: [
      "Ooty Local Sightseeing Circuit",
      "Coonoor Day Tour",
      "Pykara Lake & Dam Tour",
      "Coimbatore Airport / Railway Station Transfers"
    ]
  },
  {
    id: "cab-suv-innova",
    name: "Premium SUV (Toyota Innova / Crysta)",
    category: "Premium SUV",
    capacity: "6-7 Passengers + 1 Driver",
    luggage: "4 Large Bags + 3 Small",
    acType: "Dual AC Front & Rear",
    pricingNote: "Starting from ₹3,500/day for Ooty-Coonoor tour",
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    bestFor: "Families, honeymooners wanting maximum comfort & luggage space",
    features: [
      "Spacious captain seats & supreme legroom",
      "Smooth hill suspension for steep hairpins",
      "Nilgiri certified expert mountain chauffeur",
      "Complimentary mineral water bottle on arrival"
    ],
    servicesAvailable: [
      "Full Nilgiri Circuit (Ooty + Coonoor + Pykara)",
      "Mudumalai Safari & Bandipur transfer",
      "Bangalore / Mysore outstation pickup & drop",
      "Custom multi-day vacation chauffeur"
    ]
  },
  {
    id: "cab-compact-ertiga",
    name: "Compact SUV (Maruti Ertiga)",
    category: "Compact SUV",
    capacity: "5-6 Passengers + 1 Driver",
    luggage: "3 Bags",
    acType: "AC (Dual Air Con)",
    pricingNote: "Starting from ₹2,800/day for Ooty local",
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    bestFor: "Budget-conscious families and small groups",
    features: [
      "Flexible foldable seating",
      "Smooth fuel efficiency and economical hire",
      "Punctual and courteous driver service",
      "Zero hidden surge charges"
    ],
    servicesAvailable: [
      "Ooty Sightseeing",
      "Coonoor & Lamb's Rock trip",
      "Mettupalayam Railway Station pick-up",
      "Coimbatore Airport round trips"
    ]
  },
  {
    id: "cab-tempo-traveller",
    name: "Luxury Tempo Traveller (12 to 16 Seater)",
    category: "Group Minibus",
    capacity: "12 to 16 Passengers + Driver",
    luggage: "Dedicated large luggage carrier",
    acType: "High-power AC & pushback seats",
    pricingNote: "Starting from ₹5,500/day for group tour",
    isAwaitingDocument: true,
    documentBadge: "Awaiting Document Confirmation",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    bestFor: "Large family reunions, college tours & corporate getaways",
    features: [
      "Reclining pushback seats with ample leg space",
      "Surround sound entertainment system",
      "Overhead luggage rack & rear boot",
      "Experienced heavy vehicle hill driver"
    ],
    servicesAvailable: [
      "Group sightseeing across Ooty & Coonoor",
      "College & Corporate team packages",
      "Outstation round trips from Chennai/Bangalore/Kerala",
      "Mudumalai wildlife excursion"
    ]
  }
];

export const OOTY_DESTINATIONS = [
  {
    id: "dest-ooty-lake",
    name: "Ooty Lake & Boathouse",
    subtitle: "Heart of Queen of Hill Stations",
    category: "Lakes & Boating",
    timing: "9:00 AM – 6:00 PM",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "An artificial lake constructed in 1824 by John Sullivan, surrounded by eucalyptus groves. Enjoy paddle boating, row boating, motor boating, mini train rides, and horse riding along the scenic shoreline.",
    highlight: "Famous for scenic boat rides and sunset reflection",
    distance: "1.5 km from Ooty Railway Station"
  },
  {
    id: "dest-botanical-garden",
    name: "Government Botanical Garden",
    subtitle: "55 Acres of Verdant Floral Wonders",
    category: "Gardens & Flora",
    timing: "7:00 AM – 6:30 PM",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    description: "Established in 1848, this terraced garden on the slopes of Doddabetta houses over a thousand species of exotic flowers, medicinal plants, a 20-million-year-old fossilized tree trunk, and Italian gardens.",
    highlight: "Home to the famous annual May Flower Show",
    distance: "2.5 km from Charing Cross"
  },
  {
    id: "dest-doddabetta-peak",
    name: "Doddabetta Peak",
    subtitle: "Highest Peak in the Nilgiris (8,650 ft)",
    category: "Mountain Peaks",
    timing: "8:30 AM – 6:00 PM",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    description: "The highest vantage point in Tamil Nadu offering jaw-dropping 360-degree views of the mist-shrouded Nilgiri mountains, tea estates, and Coimbatore plains through the telescope house.",
    highlight: "Telescope House with 360° bird's eye panorama",
    distance: "9 km from Ooty town"
  },
  {
    id: "dest-rose-garden",
    name: "Government Rose Garden",
    subtitle: "Largest Rose Collection in India",
    category: "Gardens & Nature",
    timing: "8:30 AM – 6:00 PM",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    description: "Spread across 5 curved terraces at Elk Hill, this spectacular garden features more than 20,000 rose cultivars including hybrid tea roses, miniature roses, ramblers, and rare green and black roses.",
    highlight: "Awarded 'Garden of Excellence' by World Federation of Rose Societies",
    distance: "2 km from Ooty Bus Stand"
  },
  {
    id: "dest-pykara-lake-falls",
    name: "Pykara Lake & Waterfalls",
    subtitle: "Sacred Nilgiri River & Speedboat Thrills",
    category: "Waterfalls & Lakes",
    timing: "9:30 AM – 5:30 PM",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    description: "Considered holy by the indigenous Toda community, the Pykara river cascades down stepped rocks before opening into a sparkling lake framed by shola forests. Famous for fast speedboats.",
    highlight: "High-speed boating amidst virgin shola forests",
    distance: "21 km from Ooty on Mysore Road"
  },
  {
    id: "dest-pine-forest",
    name: "Pine Forest (Shooting Point)",
    subtitle: "Iconic Film Location & Cinematic Woods",
    category: "Forest & Scenic",
    timing: "8:00 AM – 6:00 PM",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    description: "A mesmerizing expanse of towering pine trees planted during the British era sloping down towards the Kamaraj Sagar Lake. Featured in hundreds of classic Indian movies for its ethereal mist.",
    highlight: "Dreamy cinematic walk and photography haven",
    distance: "14 km from Ooty"
  },
  {
    id: "dest-tea-gardens",
    name: "Nilgiri Tea Gardens & Tea Factory",
    subtitle: "Aroma of Freshly Crushed Tea Leaves",
    category: "Heritage & Plantations",
    timing: "9:00 AM – 6:30 PM",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
    description: "Walk between emerald green tea bushes, learn CTC and orthodox tea processing inside a working factory, and taste aromatic cardamom, chocolate, and white teas right at the factory outlet.",
    highlight: "Live tea processing demonstration and direct factory shopping",
    distance: "4 km from Doddabetta Junction"
  },
  {
    id: "dest-coonoor",
    name: "Coonoor (Sim's Park & Dolphin's Nose)",
    subtitle: "Quaint Hill Station & Catherine Falls View",
    category: "Day Excursion",
    timing: "Open All Day",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    description: "Just 19 km from Ooty, Coonoor boasts a slightly milder climate, Sim's Park with century-old trees, Lamb's Rock, and Dolphin's Nose providing jaw-dropping views of Catherine Falls.",
    highlight: "Heritage Toy Train journey and panoramic cliff viewpoints",
    distance: "19 km from Ooty (accessible via Toy Train or Road)"
  }
];

export const SERVICES_LIST = [
  {
    id: "srv-hotel-resort",
    title: "Hotel & Resort Bookings",
    icon: "Hotel",
    shortDesc: "Handpicked luxury resorts, heritage tea estate bungalows, and budget-friendly family hotels with best price guarantee.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    link: "/hotels",
    features: ["Tea estate stays", "Fireplace cottages", "Complimentary breakfast", "Instant WhatsApp confirmation"]
  },
  {
    id: "srv-cab-services",
    title: "Cab & Taxi Services",
    icon: "Car",
    shortDesc: "Clean, reliable cabs with courteous Nilgiri hill drivers. Hatchbacks, Sedans, Innovas, and Tempo Travellers for local and outstation.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    link: "/cabs",
    features: ["Verified hill drivers", "Sanitized fleet", "Airport/station transfers", "Zero hidden charges"]
  },
  {
    id: "srv-ooty-sightseeing",
    title: "Ooty Sightseeing Trips",
    icon: "Compass",
    shortDesc: "Curated day tours covering Ooty town, Coonoor heritage, Pykara lakes, and Doddabetta summits with zero hassle.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/sightseeing",
    features: ["Customized route planning", "Flexible timings", "Local shopping guidance", "Telescope & boat assistance"]
  },
  {
    id: "srv-family-packages",
    title: "Family Tour Packages",
    icon: "Users",
    shortDesc: "Carefully designed vacations for families with kids and seniors. Spacious stays, leisure pace, toy train rides, and safari.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    link: "/packages?category=Family%20Packages",
    features: ["Kid-friendly activities", "Private SUVs", "Safe and relaxed itinerary", "Dedicated trip coordinator"]
  },
  {
    id: "srv-couple-honeymoon",
    title: "Couple & Honeymoon Packages",
    icon: "Heart",
    shortDesc: "Unforgettable romantic getaways featuring candle-lit dinners, cozy fireplace suites, flower bed décor, and private viewpoints.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    link: "/packages?category=Couple%20Packages",
    features: ["Honeymoon cake & decor", "Candle-light dinner", "Valley view suites", "Romantic photo spots"]
  },
  {
    id: "srv-customized-holidays",
    title: "Customized Holiday Packages",
    icon: "Sparkles",
    shortDesc: "Your trip, your way. Tell us your dates and dreams, and our Ooty travel architects will build the perfect holiday itinerary.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    link: "/booking",
    features: ["Tailored durations", "Choice of properties", "Outstation extensions", "Direct WhatsApp curation"]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Vikram & Sneha Raman",
    location: "Chennai, Tamil Nadu",
    tripType: "Honeymoon Tour (3D/2N)",
    rating: 5,
    isSamplePlaceholder: true,
    placeholderBadge: "Sample Review Placeholder (Awaiting Document)",
    comment: "Our honeymoon in Ooty with Sha Tourism was pure magic! The tea estate cottage with fireplace was mesmerizing. Our driver was extremely polite and showed us spots away from tourist crowds. Highly recommended!",
    date: "October 2026"
  },
  {
    id: "test-2",
    name: "Dr. Rajesh Kulkarni & Family",
    location: "Bangalore, Karnataka",
    tripType: "Family Vacation (4D/3N)",
    rating: 5,
    isSamplePlaceholder: true,
    placeholderBadge: "Sample Review Placeholder (Awaiting Document)",
    comment: "Flawless arrangements from Coimbatore airport pickup to drop. The Innova cab was spotless, driver Murugan drove very safely on the 36 hairpin bends. The kids loved Mudumalai safari and toy train!",
    date: "September 2026"
  },
  {
    id: "test-3",
    name: "Arun Nair & College Friends",
    location: "Kochi, Kerala",
    tripType: "Group Holiday (3D/2N)",
    rating: 5,
    isSamplePlaceholder: true,
    placeholderBadge: "Sample Review Placeholder (Awaiting Document)",
    comment: "We booked the 12-seater Tempo Traveller and private villa. Campfire night in Ooty cold with hot food was epic. Sha Tourism delivered everything promised at a very transparent price.",
    date: "November 2026"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Comfortable Accommodation",
    desc: "Pre-screened luxury resorts, tea estate bungalows, and cozy boutique hotels prioritizing hygiene, safety, and scenic views.",
    icon: "Home"
  },
  {
    title: "Reliable Transportation",
    desc: "Own and partner fleet of well-kept Sedans, SUVs, and Tempo Travellers driven by seasoned Nilgiri hill driving specialists.",
    icon: "ShieldCheck"
  },
  {
    title: "Affordable & Honest Pricing",
    desc: "Clear upfront quotes with zero hidden taxes or surprise surge fees. Best value packages tailored to your budget.",
    icon: "Coins"
  },
  {
    title: "Customized Holiday Experiences",
    desc: "From relaxed senior citizen itineraries to thrill-packed jungle safaris, we tailor every itinerary to your rhythm.",
    icon: "Sliders"
  },
  {
    title: "Local Ooty Tourism Assistance",
    desc: "Headquartered right in Ooty town. We provide 24/7 on-ground assistance, toy train booking guidance, and insider local tips.",
    icon: "MapPin"
  },
  {
    title: "Customer-Focused Service",
    desc: "Prompt WhatsApp responses, flexible payment milestones, and genuine care from your first enquiry until you reach home safe.",
    icon: "HeartHandshake"
  }
];
