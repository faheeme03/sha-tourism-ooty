import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl, getCabWhatsAppMessage } from '../../config/whatsapp';

export default function CabCard({ cab }) {
  const [selectedService, setSelectedService] = useState(cab.servicesAvailable?.[0] || 'Ooty Sightseeing');

  const handleWhatsApp = () => {
    const msg = getCabWhatsAppMessage(cab, { serviceType: selectedService });
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col group">
      {/* Vehicle Image */}
      <div className="relative h-48 overflow-hidden bg-stone-100">
        <img
          src={cab.image}
          alt={cab.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/95 text-stone-800 shadow-xs">
            {cab.category}
          </span>
        </div>
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <Users className="w-3 h-3 text-[#CBA75C]" />
            {cab.capacity}
          </span>
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <Briefcase className="w-3 h-3 text-[#CBA75C]" />
            {cab.luggage}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-[#12372A] transition-colors">
            {cab.name}
          </h3>
          <p className="mt-1 text-xs text-stone-500">
            {cab.acType} • Ideal for {cab.bestFor}
          </p>

          <div className="mt-3">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-stone-50 text-stone-700 outline-none"
            >
              {cab.servicesAvailable?.map((srv, idx) => (
                <option key={idx} value={srv}>{srv}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Rental Rate
              </span>
              <span className="text-sm font-bold text-[#12372A]">
                {cab.pricingNote}
              </span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-full hover:bg-emerald-50 text-emerald-800 transition-colors border border-emerald-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleWhatsApp}
              className="w-full py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors text-center"
            >
              Fare Quote
            </button>
            <Link
              to={`/booking?cabName=${encodeURIComponent(cab.name)}`}
              className="w-full py-2 px-3 rounded-lg bg-[#12372A] hover:bg-[#1a4d3b] text-white text-xs font-semibold transition-colors text-center shadow-xs"
            >
              Book Cab
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
