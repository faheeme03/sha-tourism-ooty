const INITIAL_PACKAGES = [
  {
    id: "pkg-ooty-weekend-2d1n",
    name: "Classic Ooty Weekend Escapade",
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
    bannerImage: "https://upload.wikimedia.org/wikipedia/commons/8/8a/The_Nilgiri_Mountain_Railway.jpg",
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
      inclusions: "Complimentary breakfast & Wi-Fi"
    },
    transportation: {
      vehicleType: "Private Sedan (Dzire / Etios)",
      coverage: "Pick-up, drop-off, and local sightseeing included"
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ooty & Town Sightseeing",
        description: "Warm welcome in Ooty by Sha Tourism representative. Check into hotel and refresh. Post breakfast, proceed to the Government Botanical Garden, followed by Ooty Lake for boating.",
        meals: "Breakfast (if morning arrival), Welcome tea"
      },
      {
        day: 2,
        title: "Doddabetta Summit & Tea Garden Trail",
        description: "Early morning drive through misty pine woods to Doddabetta Peak. Visit Nilgiri Tea Factory and Museum, Rose Garden, and return transfer.",
        meals: "Breakfast included"
      }
    ],
    inclusions: [
      "1 Night accommodation in deluxe room on twin sharing basis",
      "Daily breakfast",
      "Sightseeing in dedicated private cab with driver bata included"
    ],
    exclusions: [
      "Entry tickets & boating charges",
      "Lunches and dinners"
    ]
  },
  {
    id: "pkg-ooty-honeymoon-3d2n",
    name: "Romantic Ooty & Coonoor Honeymoon Bliss",
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
    bannerImage: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Government_Rose_Garden%2C_Ooty%2C_Tamil_Nadu%2C_India.jpg",
    shortDescription: "An enchanting romantic holiday featuring luxury tea estate stay, candle-light dinner, flower bed decoration, and private sightseeing in Ooty and Coonoor.",
    highlights: [
      "2 Nights in a romantic tea estate cottage with fireplace",
      "Flower bed decoration & honeymoon cake on arrival",
      "1 Romantic Candle-light Dinner under misty stars",
      "Scenic Coonoor day excursion: Sim's Park & Dolphin's Nose",
      "Pykara Lake boat ride & picturesque Pine Forest walk"
    ],
    hotelAccommodation: {
      type: "Honeymoon Suite / Hillside Valley View Cottage",
      stayLocation: "Lovedale / Coonoor Valley Road"
    },
    transportation: {
      vehicleType: "Private AC Sedan (Dzire / Etios)"
    },
    inclusions: [
      "2 Nights in Honeymoon Suite with valley view",
      "Bed decoration, chocolate cake, candle-light dinner",
      "Daily breakfast at the resort restaurant",
      "All transfers in private sedan with fuel & tolls included"
    ],
    exclusions: [
      "Toy train tickets",
      "Entry tickets & boating charges"
    ]
  },
  {
    id: "pkg-ooty-family-4d3n",
    name: "Nilgiri Grand Family Holiday & Safari",
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
    bannerImage: "https://upload.wikimedia.org/wikipedia/commons/5/52/Ooty_Lake_Boating.jpg",
    shortDescription: "A comprehensive family tour covering Ooty, Coonoor, Pykara, and Mudumalai Tiger Reserve with spacious family rooms and a private Innova/Ertiga.",
    highlights: [
      "Spacious family cottage stay with lawn and campfire",
      "Mudumalai Wildlife Safari & Theppakadu Elephant Camp",
      "Nilgiri Mountain Railway (Toy Train) experience",
      "Pykara Lake speedboat and picturesque waterfalls",
      "Dedicated spacious private SUV (Innova / Ertiga)"
    ],
    hotelAccommodation: {
      type: "Spacious Family Suite / Two Interconnected Rooms",
      stayLocation: "Ooty Valley / Doddabetta Slopes"
    },
    transportation: {
      vehicleType: "Private SUV (Toyota Innova / Ertiga)"
    },
    inclusions: [
      "3 Nights family accommodation in deluxe cottage",
      "Daily buffet breakfast for all members",
      "Dedicated Innova / Ertiga for all 4 days with experienced hill driver"
    ],
    exclusions: [
      "Forest Department safari tickets",
      "Entry tickets & lunches"
    ]
  }
];

const INITIAL_HOTELS = [
  {
    id: "hotel-nilgiri-heritage",
    name: "Nilgiri Heritage Tea Estate Resort",
    location: "Fern Hill / Lovedale Road, Ooty",
    category: "Heritage & Luxury",
    startingPrice: 4500,
    priceUnit: "per night",
    rating: 4.9,
    reviewsCount: 76,
    isAwaitingDocument: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Fernhills_Palace%2C_Ooty.JPG",
    description: "Nestled amidst 30 acres of private rolling tea plantations, this colonial-era heritage retreat offers timeless luxury, crackling fireplaces, and tea garden views.",
    amenities: ["Fireplace in all rooms", "Panoramic Tea Garden Views", "Multi-Cuisine Restaurant", "Free High-Speed Wi-Fi"],
    roomTypes: [
      { name: "Colonial Deluxe Room", price: 4500 },
      { name: "Heritage Estate Suite", price: 6800 }
    ]
  },
  {
    id: "hotel-pine-mist-cottages",
    name: "Pine Mist Valley Cottages",
    location: "Doddabetta Road, Ooty",
    category: "Boutique Hill Cottage",
    startingPrice: 3200,
    priceUnit: "per night",
    rating: 4.8,
    reviewsCount: 54,
    isAwaitingDocument: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Pine_Forest_in_Ooty.jpg",
    description: "Charming wooden cottages surrounded by towering pine trees and misty morning clouds.",
    amenities: ["Wooden Finished Interior", "Room Heaters", "Balcony Valley Views", "In-house Kitchen"],
    roomTypes: [
      { name: "Mist View Wooden Cottage", price: 3200 },
      { name: "Family Duplex Suite", price: 5200 }
    ]
  }
];

const INITIAL_CABS = [
  {
    id: "cab-sedan-dzire",
    name: "Sedan (Swift Dzire / Toyota Etios)",
    category: "Sedan",
    capacity: "4 Passengers + 1 Driver",
    luggage: "2 Large Bags + 2 Small",
    acType: "AC / Climate Controlled",
    pricingNote: "Starting from ₹2,200/day for Ooty local sightseeing",
    isAwaitingDocument: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Maruti_Suzuki_Swift_Dzire.jpg",
    bestFor: "Couples, small families & solo travelers"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Toyota_Innova.jpg",
    bestFor: "Families, honeymooners wanting maximum comfort"
  }
];

const INITIAL_SETTINGS = {
  brandName: "SHA TOURISM",
  whatsappNumber: "919159627527",
  displayWhatsapp: "+91 91596 27527",
  phone: "+91 91596 27527",
  email: "",
  fullAddress: "183, Missionary Hills, Old Ooty, Tamil Nadu - 643001"
};

module.exports = {
  INITIAL_PACKAGES,
  INITIAL_HOTELS,
  INITIAL_CABS,
  INITIAL_SETTINGS
};
