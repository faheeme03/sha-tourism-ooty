import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl, getPackageWhatsAppMessage } from '../../config/whatsapp';

export default function PackageCard({ pkg, onOpenDetails }) {
  const formattedPrice = pkg.price ? `₹${Number(pkg.price).toLocaleString('en-IN')}` : 'On Request';

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const msg = getPackageWhatsAppMessage(pkg);
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group">
      
      {/* Image Banner */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
        <img
          src={pkg.bannerImage}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/95 text-stone-800 shadow-xs">
            {pkg.category}
          </span>
        </div>
        <div className="absolute bottom-2.5 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-white text-[11px] font-medium">
          <Clock className="w-3 h-3 text-[#CBA75C]" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 line-clamp-1 group-hover:text-[#12372A] transition-colors">
              {pkg.name}
            </h3>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-stone-600 shrink-0">
              <Star className="w-3 h-3 text-[#B89047] fill-[#B89047]" />
              {pkg.rating || 4.9}
            </span>
          </div>

          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {pkg.shortDescription}
          </p>

          {/* Highlights (Clean & Minimal) */}
          {pkg.highlights && (
            <div className="mt-3 pt-3 border-t border-stone-100 space-y-1">
              {pkg.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-600">
                  <span className="w-1 h-1 rounded-full bg-[#12372A]"></span>
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price & Actions */}
        <div className="pt-3 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Starting from
              </span>
              <span className="text-lg font-serif font-black text-[#12372A]">
                {formattedPrice}
              </span>
              {pkg.priceNote && (
                <span className="text-[10px] text-stone-400 font-normal ml-1">
                  ({pkg.priceNote})
                </span>
              )}
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
              onClick={() => onOpenDetails ? onOpenDetails(pkg) : null}
              className="w-full py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors text-center"
            >
              Details
            </button>
            <Link
              to={`/booking?packageId=${pkg.id}&packageName=${encodeURIComponent(pkg.name)}`}
              className="w-full py-2 px-3 rounded-lg bg-[#12372A] hover:bg-[#1a4d3b] text-white text-xs font-semibold transition-colors text-center shadow-xs"
            >
              Book Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
