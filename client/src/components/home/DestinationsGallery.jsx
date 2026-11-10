import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Eye, X } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { OOTY_DESTINATIONS } from '../../data/placeholderData';

export default function DestinationsGallery() {
  const [selectedDest, setSelectedDest] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Nilgiri Sights & Wonders"
          title="Iconic Ooty Destinations"
          subtitle="From misty cloud-covered peaks to emerald green lakes and century-old colonial gardens, explore the best of the Nilgiris."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OOTY_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-slate-200/80 hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-[#092218]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {dest.category}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform group-hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#ECD29E] transition-colors leading-snug">
                  {dest.name}
                </h3>
                <p className="text-xs text-emerald-200/90 mt-1 line-clamp-1">
                  {dest.subtitle}
                </p>

                <p className="mt-2 text-xs text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.description}
                </p>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#C5A059] font-semibold pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {dest.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Sightseeing link */}
        <div className="mt-12 text-center">
          <Link
            to="/sightseeing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#0F382A] text-sm font-bold border border-emerald-200 shadow-xs hover:shadow-md transition-all"
          >
            <span>Explore Complete Ooty Sightseeing Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Destination Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64">
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#ECD29E] uppercase tracking-wider block">
                  {selectedDest.category}
                </span>
                <h3 className="text-2xl font-serif font-black">{selectedDest.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedDest.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Key Highlight:</span>
                  <span className="font-bold text-[#0F382A]">{selectedDest.highlight}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Visiting Hours:</span>
                  <span className="font-bold text-slate-800">{selectedDest.timing}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Distance from Ooty:</span>
                  <span className="font-bold text-slate-800">{selectedDest.distance}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to={`/booking?destination=${encodeURIComponent(selectedDest.name)}`}
                  onClick={() => setSelectedDest(null)}
                  className="w-full py-3 rounded-xl bg-[#0F382A] text-white text-xs font-bold hover:bg-[#164E3D] text-center border border-[#C5A059]/40 shadow-sm"
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
