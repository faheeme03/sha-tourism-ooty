import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Wind, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import PlaceholderBadge from './PlaceholderBadge';
import { buildWhatsAppUrl, getCabWhatsAppMessage } from '../../config/whatsapp';

export default function CabCard({ cab }) {
  const [selectedService, setSelectedService] = useState(cab.servicesAvailable?.[0] || 'Ooty Sightseeing');

  const handleWhatsApp = () => {
    const msg = getCabWhatsAppMessage(cab, { serviceType: selectedService });
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group">
      {/* Vehicle Image */}
      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img
          src={cab.image}
          alt={cab.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F382A]/90 backdrop-blur-md text-white border border-[#C5A059]/40">
            {cab.category}
          </span>
        </div>

        {cab.isAwaitingDocument && (
          <div className="absolute top-4 right-4">
            <PlaceholderBadge text="Awaiting Document Confirmation" />
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
            <Users className="w-3.5 h-3.5 text-[#C5A059]" />
            {cab.capacity}
          </span>
          <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
            <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
            {cab.luggage}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0F382A] transition-colors">
            {cab.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
            <Wind className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">{cab.acType}</span>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Ideal for:</span> {cab.bestFor}
          </p>

          {/* Key Features */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Included Amenities:
            </span>
            {cab.features?.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Services Available Dropdown */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Select Trip Circuit:
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:border-emerald-600"
            >
              {cab.servicesAvailable?.map((srv, idx) => (
                <option key={idx} value={srv}>{srv}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                Rental Tariff
              </span>
              <span className="text-base font-bold text-[#0F382A]">
                {cab.pricingNote}
              </span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors border border-emerald-200"
              title="Enquire on WhatsApp"
              aria-label="Enquire on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleWhatsApp}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F382A] text-xs font-bold transition-colors text-center border border-emerald-200 flex items-center justify-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Cab</span>
            </button>
            <Link
              to={`/booking?serviceType=Cab&cabName=${encodeURIComponent(cab.name)}&circuit=${encodeURIComponent(selectedService)}`}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0F382A] to-[#164E3D] hover:from-[#164E3D] hover:to-[#1F6B54] text-white text-xs font-bold transition-all shadow-sm text-center flex items-center justify-center gap-1 border border-[#C5A059]/40"
            >
              <span>Book Cab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
