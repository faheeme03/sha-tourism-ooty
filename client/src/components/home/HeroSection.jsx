import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Star, MapPin, Compass } from 'lucide-react';
import SearchEnquiryBar from './SearchEnquiryBar';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Hero Image with Rich Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=85"
          alt="Lush green tea gardens and misty Nilgiri hills of Ooty"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Multilayered Nature Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-[#0F382A]/75 to-black/60"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0F382A]/30 to-[#092218]/90"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-6 sm:mt-10 mb-8 sm:mb-12">
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#C5A059]/50 text-white text-xs sm:text-sm font-semibold mb-6 shadow-md">
          <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
          <span>Star Tourism • Premier Ooty Vacation Planners</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          <span className="text-emerald-200">Nilgiris, Tamil Nadu</span>
        </div>

        {/* Heading Requested */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
          Discover the Queen of Hill Stations – <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#C5A059] to-amber-100">Ooty</span>
        </h1>

        {/* Subheading Requested */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm">
          Your perfect getaway begins with Star Tourism. Explore breathtaking destinations, comfortable stays, and unforgettable travel experiences.
        </p>

        {/* Buttons Requested */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFB96C] text-[#092218] font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:brightness-105 transition-all transform active:scale-95 group"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/30 transition-all transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Book Your Trip</span>
          </Link>
        </div>

        {/* Micro highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/90 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            Local Verified Drivers
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            Handpicked Hill Resorts
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
            100% Tailored Nilgiri Itineraries
          </span>
        </div>
      </div>

      {/* Embedded Search & Enquiry Bar */}
      <div className="relative z-10 w-full">
        <SearchEnquiryBar />
      </div>
    </section>
  );
}
