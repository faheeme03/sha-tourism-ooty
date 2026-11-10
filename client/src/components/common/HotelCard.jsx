import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Check, MessageSquare, ArrowRight, Bed, Eye } from 'lucide-react';
import PlaceholderBadge from './PlaceholderBadge';
import { buildWhatsAppUrl, getHotelWhatsAppMessage } from '../../config/whatsapp';

export default function HotelCard({ hotel }) {
  const [selectedRoom, setSelectedRoom] = useState(hotel.roomTypes?.[0]?.name || '');

  const handleWhatsApp = () => {
    const msg = getHotelWhatsAppMessage(hotel, { roomType: selectedRoom });
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-slate-900">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F382A]/90 backdrop-blur-md text-white border border-[#C5A059]/40">
            {hotel.category}
          </span>
        </div>

        {hotel.isAwaitingDocument && (
          <div className="absolute top-4 right-4">
            <PlaceholderBadge text="Awaiting Document Confirmation" />
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 text-slate-200 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            {hotel.location}
          </span>
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md font-bold">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            {hotel.rating} ({hotel.reviewsCount})
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0F382A] transition-colors">
            {hotel.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {hotel.description}
          </p>

          {/* Amenities Grid */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Featured Amenities:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {hotel.amenities?.slice(0, 4).map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Room types selector */}
          {hotel.roomTypes && hotel.roomTypes.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-100">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Select Room Category:
              </label>
              <div className="space-y-1.5">
                {hotel.roomTypes.map((room, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer border transition-all ${
                      selectedRoom === room.name
                        ? 'border-[#0F382A] bg-emerald-50/60 font-semibold text-[#0F382A]'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`room-${hotel.id}`}
                        value={room.name}
                        checked={selectedRoom === room.name}
                        onChange={() => setSelectedRoom(room.name)}
                        className="accent-[#0F382A]"
                      />
                      <span>{room.name}</span>
                    </div>
                    <span className="font-bold">₹{room.price.toLocaleString('en-IN')}/night</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                Starting Tariff
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-serif font-black text-[#0F382A]">
                  ₹{hotel.startingPrice?.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500 font-normal">
                  /{hotel.priceUnit || "night"}
                </span>
              </div>
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
              <span>WhatsApp Rates</span>
            </button>
            <Link
              to={`/booking?serviceType=Hotel&hotelName=${encodeURIComponent(hotel.name)}&roomType=${encodeURIComponent(selectedRoom)}`}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0F382A] to-[#164E3D] hover:from-[#164E3D] hover:to-[#1F6B54] text-white text-xs font-bold transition-all shadow-sm text-center flex items-center justify-center gap-1 border border-[#C5A059]/40"
            >
              <span>Book Stay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
