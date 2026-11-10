import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SearchEnquiryBar from './SearchEnquiryBar';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Container with rounded backdrop & photo */}
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[540px] sm:min-h-[580px] flex flex-col justify-between p-6 sm:p-12 text-white shadow-sm">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=85"
            alt="Nilgiri tea hills in Ooty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25"></div>
        </div>

        {/* Top Tagline */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white border border-white/20">
            ★ Star Tourism • Ooty
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="relative z-10 max-w-2xl my-auto py-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.15]">
            Discover the Queen of Hill Stations – Ooty
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-xl">
            Your perfect getaway begins with Star Tourism. Explore breathtaking destinations, comfortable stays, and unforgettable travel experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#12372A] font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-all shadow-xs"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white font-medium text-xs sm:text-sm border border-white/30 transition-all"
            >
              <span>Book Your Trip</span>
            </Link>
          </div>
        </div>

        {/* Search Bar at bottom */}
        <div className="relative z-10 w-full pt-4">
          <SearchEnquiryBar />
        </div>

      </div>
    </section>
  );
}
