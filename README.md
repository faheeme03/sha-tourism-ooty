# 🌲 STAR TOURISM – PREMIUM OOTY TOURISM & TRAVEL BOOKING PLATFORM

A modern, high-conversion, responsive full-stack tourism web application designed specifically for **STAR TOURISM**, based in **Ooty, Nilgiris, Tamil Nadu, India**.

---

## 🌟 Executive Overview & Brand Identity

- **Brand Name:** STAR TOURISM
- **Location:** Ooty, The Nilgiris, Tamil Nadu, India (Charing Cross / Commercial Road)
- **Tagline:** Discover the Queen of Hill Stations – Ooty
- **Color Palette:**
  - **Deep Forest Green** (`#092218`, `#0F382A`, `#164E3D`) – Nilgiris tea estates & eucalyptus forests
  - **Warm Beige & Cream** (`#FBF9F5`, `#F5F2EA`, `#FAF8F5`) – Welcoming, luxury resort warmth
  - **Subtle Gold Accents** (`#C5A059`, `#D4AF37`, `#ECD29E`) – Premium star hospitality
  - **Crisp Slate & White** – Contrast and modern readability
- **Typography:** *Playfair Display* (luxury serif headings) + *Plus Jakarta Sans* (crisp UI body)

---

## 🎯 Key Architectural Highlights & Strict Compliance

1. **Document Data Synchronization Ready:**
   - As per project instructions, all package prices, hotel tariffs, vehicle rates, and company history are structured with **`[Awaiting Document Confirmation]`** indicators until the official business document is provided.
   - Built-in **Document Synchronization Hub** in the Admin Dashboard allows uploading or pasting the upcoming document to instantly update the live catalog.
2. **Centralized WhatsApp Integration:**
   - Single source of truth in `client/src/config/whatsapp.js` and manageable dynamically via the **Admin Portal** without editing code.
   - Intelligent pre-filled message generators for packages, stays, cabs, and custom trip planning.
   - Floating WhatsApp widget with 1-click quick-action presets.
3. **Dual Storage Engine (MongoDB + Autonomous JSON Store):**
   - Supports production MongoDB via Mongoose when `MONGODB_URI` is provided.
   - Automatically and gracefully falls back to a persistent JSON file storage engine (`server/data/storage/`) if MongoDB is not running locally.
4. **Secure Admin Dashboard:**
   - Token-based authentication.
   - Full CRUD for Tour Packages, Hotels, and Cab fleet.
   - Customer Enquiries Manager with status transitions (`New`, `Contacted`, `Confirmed`, `Closed`).
   - Business & WhatsApp configuration editor.

---

## 📁 Project Directory Structure

```
star-tourism/
├── package.json                   # Root orchestrator scripts
├── README.md                      # Project documentation
├── client/                        # React Frontend (Vite + Tailwind CSS v4)
│   ├── index.html                 # HTML shell with Google Fonts & Meta tags
│   ├── vite.config.js             # Vite configuration with API proxy
│   ├── package.json
│   ├── public/
│   │   └── favicon.svg            # Custom Star Tourism SVG Icon
│   └── src/
│       ├── main.jsx               # React entry point
│       ├── App.jsx                # Router & Global Layout configuration
│       ├── index.css              # Tailwind CSS v4 + Nature theme variables
│       ├── config/
│       │   └── whatsapp.js        # Centralized WhatsApp & Contact config
│       ├── data/
│       │   └── placeholderData.js # Verified Nilgiri models & placeholder registry
│       ├── context/
│       │   └── AuthContext.jsx    # Admin auth state manager
│       ├── components/
│       │   ├── layout/            # Navbar, Footer, Floating WhatsApp
│       │   ├── home/              # Hero, SearchBar, Packages, Services, WhyUs, Gallery, Reviews, CTA
│       │   └── common/            # PackageCard, HotelCard, CabCard, DetailModal, Badges
│       └── pages/
│           ├── HomePage.jsx
│           ├── TourPackagesPage.jsx
│           ├── HotelsPage.jsx
│           ├── CabServicesPage.jsx
│           ├── SightseeingPage.jsx
│           ├── AboutUsPage.jsx
│           ├── ContactPage.jsx
│           ├── BookingEnquiryPage.jsx
│           ├── AdminLoginPage.jsx
│           └── AdminDashboardPage.jsx
└── server/                        # Node.js + Express Backend
    ├── server.js                  # Express API server & static client handler
    ├── package.json
    ├── .env                       # Active environment variables
    ├── .env.example               # Template environment configuration
    ├── config/
    │   └── db.js                  # MongoDB / Mongoose connection handler
    ├── middleware/
    │   └── auth.js                # JWT / Admin authentication guard
    ├── data/
    │   ├── seedData.js            # Initial Nilgiri tour models & defaults
    │   ├── storageEngine.js       # Persistent JSON file storage engine
    │   └── storage/               # JSON collections (packages, hotels, cabs, enquiries, settings)
    └── routes/
        ├── auth.js                # POST /api/auth/login
        ├── packages.js            # CRUD /api/packages
        ├── hotels.js              # CRUD /api/hotels
        ├── cabs.js                # CRUD /api/cabs
        ├── enquiries.js           # GET & POST /api/enquiries
        └── settings.js            # GET & PUT /api/settings
```

---

## 🚀 Quick Start Guide (Running Locally)

### Prerequisites
- Node.js (v18 or higher recommended; verified on v24)
- npm (v9 or higher)

### Step 1: Open the Project Directory
```bash
cd /Users/faheem/.gemini/antigravity/scratch/star-tourism
```

### Step 2: Running in Production Mode (Unified Backend + Frontend)
The frontend is already built inside `client/dist`. You can start the server immediately:
```bash
npm start
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser!

### Step 3: Running in Development Mode (Hot Reload)
To run frontend and backend with hot reload:

1. **Terminal 1 (Backend API):**
   ```bash
   cd server
   node server.js
   ```
2. **Terminal 2 (React Vite Client):**
   ```bash
   cd client
   npm run dev
   ```
   Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🔐 Admin Dashboard Access

- **Login URL:** `http://localhost:5000/admin` (or `http://localhost:5173/admin` in dev mode)
- **Default Username:** `admin`
- **Default Password:** `StarOoty2026!`

*(Credentials can be changed anytime in `server/.env` via `ADMIN_USER` and `ADMIN_PASSWORD`)*

---

## ⚙️ Environment Variables (`server/.env`)

```env
PORT=5000
NODE_ENV=production

# MongoDB Connection String (Optional - leave empty for auto local JSON engine)
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/startourism?retryWrites=true&w=majority

# Admin Credentials
ADMIN_USER=admin
ADMIN_PASSWORD=StarOoty2026!

# JWT Secret
JWT_SECRET=star_tourism_ooty_super_secret_jwt_key_2026

# Central WhatsApp Business Number
DEFAULT_WHATSAPP_NUMBER=919488000000
```

---

## 🌐 Production Deployment

### Option A: Single Unified Deployment (Render / Railway / VPS / EC2)
1. Set the root build command to:
   ```bash
   npm run build
   ```
2. Set the start command to:
   ```bash
   npm start
   ```
3. Set environment variables (`PORT=5000`, `NODE_ENV=production`, `MONGODB_URI` if using MongoDB Atlas).

### Option B: Decoupled Deployment (Vercel Frontend + Render Backend)
1. Deploy `client/` to Vercel with framework preset `Vite`.
2. Deploy `server/` to Render or Railway with Node.js runtime.
3. In `client/vite.config.js` or via environment variable `VITE_API_BASE_URL`, point frontend API requests to your production backend URL.
