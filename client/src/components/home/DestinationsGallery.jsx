import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, X } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { OOTY_DESTINATIONS } from '../../data/placeholderData';

export default function DestinationsGallery() {
  const [selectedDest, setSelectedDest] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Attractions"
          title="Must-Visit Ooty Destinations"
          subtitle="From misty cloud summits to sparkling lakes and historic colonial gardens."
        />

        {/* Clean 4-Col Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OOTY_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-stone-200/60 bg-stone-100"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold text-stone-300 block">
                  {dest.category}
                </span>
                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                  {dest.name}
                </h3>
                <span className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#CBA75C]" />
                  {dest.distance}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/sightseeing"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#12372A] hover:underline"
          >
            <span>Explore full sightseeing guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Neat Clean Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-xl border border-stone-200">
            <div className="relative h-52 bg-stone-900">
              <img src={selectedDest.image} alt={selectedDest.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 hover:bg-black text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-xl font-serif font-bold">{selectedDest.name}</h3>
                <p className="text-xs text-white/80">{selectedDest.subtitle}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <p className="text-stone-600 leading-relaxed text-sm">
                {selectedDest.description}
              </p>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500 font-medium">Highlight:</span>
                  <span className="font-semibold text-stone-800">{selectedDest.highlight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-medium">Timing:</span>
                  <span className="font-semibold text-stone-800">{selectedDest.timing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-medium">Distance:</span>
                  <span className="font-semibold text-stone-800">{selectedDest.distance}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/booking?destination=${encodeURIComponent(selectedDest.name)}`}
                  onClick={() => setSelectedDest(null)}
                  className="w-full block py-2.5 rounded-xl bg-[#12372A] text-white text-center font-semibold text-xs hover:bg-[#1a4d3b]"
                >
                  Plan Cab / Trip to {selectedDest.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
