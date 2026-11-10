import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, CheckCircle, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import PlaceholderBadge from './PlaceholderBadge';
import { buildWhatsAppUrl, getPackageWhatsAppMessage } from '../../config/whatsapp';

export default function PackageCard({ pkg, onOpenDetails }) {
  const formattedPrice = pkg.price ? `₹${Number(pkg.price).toLocaleString('en-IN')}` : 'Price on Request';

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const msg = getPackageWhatsAppMessage(pkg);
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
        <img
          src={pkg.bannerImage || "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80"}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F382A]/90 backdrop-blur-md text-white border border-[#C5A059]/40 shadow-sm">
            {pkg.category || "Tour Package"}
          </span>
        </div>

        {/* Awaiting Document Badge */}
        {pkg.isAwaitingDocument && (
          <div className="absolute top-4 right-4">
            <PlaceholderBadge text="Document Sync Ready" />
          </div>
        )}

        {/* Duration & Rating bar at bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
          <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span className="font-bold">{pkg.rating || 4.9}</span>
            <span className="text-white/70">({pkg.reviewsCount || 40})</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0F382A] transition-colors line-clamp-1">
            {pkg.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {pkg.shortDescription}
          </p>

          {/* Highlights */}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Trip Highlights:
              </span>
              {pkg.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                Starting Tariff
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-serif font-black text-[#0F382A]">
                  {formattedPrice}
                </span>
                {pkg.priceNote && (
                  <span className="text-[11px] text-slate-500 font-normal">
                    {pkg.priceNote}
                  </span>
                )}
              </div>
            </div>
            
            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors border border-emerald-200"
              title="Quick WhatsApp Enquiry for this package"
              aria-label="Enquire on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenDetails ? onOpenDetails(pkg) : null}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors text-center"
            >
              View Details
            </button>
            <Link
              to={`/booking?packageId=${pkg.id}&packageName=${encodeURIComponent(pkg.name)}`}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0F382A] to-[#164E3D] hover:from-[#164E3D] hover:to-[#1F6B54] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md text-center flex items-center justify-center gap-1 border border-[#C5A059]/40"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
