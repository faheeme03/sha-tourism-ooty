import React from 'react';
import { Link } from 'react-router-dom';
import { 
  X, Clock, Star, MapPin, Check, ShieldAlert, Car, 
  Hotel, Calendar, ArrowRight, MessageSquare, Info 
} from 'lucide-react';
import PlaceholderBadge, { DocumentNoticeBanner } from './PlaceholderBadge';
import { buildWhatsAppUrl, getPackageWhatsAppMessage } from '../../config/whatsapp';

export default function PackageDetailModal({ pkg, onClose, onBookNow }) {
  if (!pkg) return null;

  const formattedPrice = pkg.price ? `₹${Number(pkg.price).toLocaleString('en-IN')}` : 'Contact for Quote';

  const handleWhatsApp = () => {
    const msg = getPackageWhatsAppMessage(pkg);
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close package details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Gallery Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={pkg.bannerImage}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C5A059] text-[#092218]">
                {pkg.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md">
                {pkg.duration}
              </span>
              {pkg.isAwaitingDocument && (
                <PlaceholderBadge text="Awaiting Document Confirmation" />
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight">
              {pkg.name}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Document Verification Notice Banner */}
          {pkg.isAwaitingDocument && (
            <DocumentNoticeBanner 
              title="Official Business Document Synchronization"
              message="The detailed day-wise itinerary, inclusions, and tariffs shown below represent the verified Ooty model for this tour. Any specific custom amendments from Sha Tourism's uploaded document will instantly synchronize across this view."
            />
          )}

          {/* Pricing & Overview Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0F382A]/5 border border-[#0F382A]/10">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                Standard Package Tariff
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-black text-[#0F382A]">
                  {formattedPrice}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {pkg.priceNote || "inclusive of stay & cab"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Quick WhatsApp Enquiry</span>
              </button>
              <button
                onClick={() => onBookNow ? onBookNow(pkg) : handleWhatsApp()}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#12372A] hover:bg-[#1a4d3b] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Select Date & Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description & Trip Highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-slate-900">
              Trip Overview & Experience
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {pkg.shortDescription}
            </p>

            {pkg.highlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stay & Vehicle Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hotel */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-[#0F382A] font-bold text-sm mb-2">
                <Hotel className="w-4 h-4 text-[#C5A059]" />
                <h4>Accommodation Details</h4>
              </div>
              <p className="text-xs font-semibold text-slate-900">
                {pkg.hotelAccommodation?.type || "Deluxe Mountain View Room"}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Location: {pkg.hotelAccommodation?.stayLocation || "Ooty / Coonoor Valley"}
              </p>
              <p className="text-xs text-emerald-700 font-medium mt-1">
                ✓ {pkg.hotelAccommodation?.inclusions || "Daily breakfast included"}
              </p>
            </div>

            {/* Cab */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-[#0F382A] font-bold text-sm mb-2">
                <Car className="w-4 h-4 text-[#C5A059]" />
                <h4>Transportation & Chauffeur</h4>
              </div>
              <p className="text-xs font-semibold text-slate-900">
                {pkg.transportation?.vehicleType || "Dedicated Hill Sightseeing Cab"}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {pkg.transportation?.coverage || "Includes all transfers and local points"}
              </p>
              <p className="text-xs text-emerald-700 font-medium mt-1">
                ✓ {pkg.transportation?.driverBata || "Fuel, tolls & driver allowance included"}
              </p>
            </div>
          </div>

          {/* Detailed Day-Wise Itinerary */}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                  Day-Wise Tour Itinerary
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {pkg.itinerary.length} Days Plan
                </span>
              </div>

              <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-emerald-200">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-9 space-y-1">
                    <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-[#0F382A] text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-white">
                      {day.day}
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-sm text-slate-900">
                          Day {day.day}: {day.title}
                        </h4>
                        {day.meals && (
                          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                            Meals: {day.meals}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Inclusions */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-emerald-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                Package Inclusions
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {pkg.inclusions?.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-rose-950 flex items-center gap-2">
                <X className="w-4 h-4 text-rose-600" />
                Package Exclusions
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {pkg.exclusions?.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Information */}
          {pkg.importantNotes && (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-950">
                <Info className="w-4 h-4 text-amber-600" />
                <span>Important Travel Information</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-800">
                {pkg.importantNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have custom requirements or a group larger than 6? We customize every aspect!
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100"
            >
              Close
            </button>
            <button
              onClick={() => onBookNow ? onBookNow(pkg) : handleWhatsApp()}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Book Now on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
