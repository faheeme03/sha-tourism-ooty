import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl, getHotelWhatsAppMessage } from '../../config/whatsapp';

export default function HotelCard({ hotel }) {
  const [selectedRoom, setSelectedRoom] = useState(hotel.roomTypes?.[0]?.name || '');

  const handleWhatsApp = () => {
    const msg = getHotelWhatsAppMessage(hotel, { roomType: selectedRoom });
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col group">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/95 text-stone-800 shadow-xs">
            {hotel.category}
          </span>
        </div>
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <MapPin className="w-3 h-3 text-[#CBA75C]" />
            {hotel.location}
          </span>
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md font-semibold">
            <Star className="w-3 h-3 text-[#B89047] fill-[#B89047]" />
            {hotel.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-[#12372A] transition-colors">
            {hotel.name}
          </h3>
          <p className="mt-1 text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {hotel.description}
          </p>

          {/* Amenities (Simple Tags) */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {hotel.amenities?.slice(0, 3).map((a, i) => (
              <span key={i} className="text-[10px] font-medium px-2 py-0.5 bg-stone-100 rounded text-stone-600">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Starting Tariff
              </span>
              <span className="text-lg font-serif font-black text-[#12372A]">
                ₹{hotel.startingPrice?.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-stone-400 font-normal ml-1">
                /{hotel.priceUnit || "night"}
              </span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-full hover:bg-emerald-50 text-emerald-800 transition-colors border border-emerald-200"
              title="WhatsApp enquiry"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleWhatsApp}
              className="w-full py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors text-center"
            >
              Check Dates
            </button>
            <Link
              to={`/booking?hotelName=${encodeURIComponent(hotel.name)}`}
              className="w-full py-2 px-3 rounded-lg bg-[#12372A] hover:bg-[#1a4d3b] text-white text-xs font-semibold transition-colors text-center shadow-xs"
            >
              Book Stay
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
