import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Compass, Camera, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { OOTY_DESTINATIONS } from '../data/placeholderData';
import { buildWhatsAppUrl } from '../config/whatsapp';

export default function SightseeingPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Lakes & Boating', 'Gardens & Flora', 'Mountain Peaks', 'Forest & Scenic', 'Heritage & Plantations', 'Day Excursion'];

  const filtered = OOTY_DESTINATIONS.filter((d) => 
    activeCategory === 'All' || d.category === activeCategory
  );

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Explore The Nilgiris"
          title="Complete Ooty Sightseeing Guide"
          subtitle="Discover mist-cloaked peaks, century-old gardens, aromatic tea slopes, and serene emerald waters across Ooty and Coonoor."
        />

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === c
                  ? 'bg-[#0F382A] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Destinations Detailed Cards */}
        <div className="space-y-10">
          {filtered.map((dest, idx) => (
            <div
              key={dest.id}
              className={`bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[280px] overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F382A]/90 backdrop-blur-md text-white border border-[#C5A059]/40">
                    {dest.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    {dest.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    {dest.timing}
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                    {dest.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
                    {dest.name}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-2 text-xs text-emerald-950">
                    <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Insider Traveler Tip: </span>
                      <span>{dest.highlight}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    Sightseeing cab includes waiting time and door-to-door pick-up.
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={buildWhatsAppUrl(`Hello Star Tourism! I want to visit ${dest.name}. What is the cab sightseeing tariff?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F382A] text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                      <span>WhatsApp Fare</span>
                    </a>
                    <Link
                      to={`/booking?destination=${encodeURIComponent(dest.name)}`}
                      className="px-5 py-2.5 rounded-xl bg-[#0F382A] hover:bg-[#164E3D] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm border border-[#C5A059]/40"
                    >
                      <span>Book Sightseeing Cab</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
