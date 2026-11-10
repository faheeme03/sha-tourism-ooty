import React, { useState } from 'react';
import { X, MessageSquare, Calendar, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../../config/whatsapp';

export default function QuickBookWhatsAppModal({ pkg, onClose }) {
  if (!pkg) return null;

  const [date, setDate] = useState('');
  const [persons, setPersons] = useState('2 Persons (Couple)');
  const [duration, setDuration] = useState(pkg.duration || '3 Days / 2 Nights');
  const [name, setName] = useState('');
  const [hotelIncluded, setHotelIncluded] = useState(true);
  const [cabIncluded, setCabIncluded] = useState(true);

  const handleSendToWhatsApp = (e) => {
    e.preventDefault();

    const formattedPrice = pkg.price ? `₹${Number(pkg.price).toLocaleString('en-IN')}` : 'Custom Quote';

    const lines = [
      `🌲 *SHA TOURISM – OOTY TRIP BOOKING ENQUIRY* 🌲`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📦 *Package:* ${pkg.name}`,
      `💰 *Reference Tariff:* ${formattedPrice} ${pkg.priceNote ? `(${pkg.priceNote})` : ''}`,
      date ? `📅 *Travel Date:* ${date}` : `📅 *Travel Date:* To be decided with team`,
      `👥 *Number of Persons:* ${persons}`,
      `⏱️ *Duration:* ${duration}`,
      `🏨 *Accommodation Required:* ${hotelIncluded ? 'Yes (Hotel/Resort)' : 'No'}`,
      `🚖 *Sightseeing Cab Required:* ${cabIncluded ? 'Yes (Private Cab)' : 'No'}`,
      name.trim() ? `👤 *Customer Name:* ${name.trim()}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Hello SHA Tourism team! We want to confirm this Ooty trip. Please share availability and arrangements. Thank you!`
    ].filter(Boolean);

    const messageText = lines.join('\n');
    window.open(buildWhatsAppUrl(messageText), '_blank');
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 relative">
        
        {/* Header */}
        <div className="bg-[#12372A] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#CBA75C] block">
              Direct WhatsApp Booking
            </span>
            <h3 className="text-lg font-serif font-black tracking-tight mt-0.5">
              {pkg.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Booking Selection Form */}
        <form onSubmit={handleSendToWhatsApp} className="p-5 sm:p-6 space-y-4 text-xs">
          
          {/* Price preview */}
          <div className="flex items-baseline justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Starting Package Tariff
              </span>
              <span className="text-xl font-serif font-black text-[#12372A]">
                {pkg.price ? `₹${Number(pkg.price).toLocaleString('en-IN')}` : 'Price on Request'}
              </span>
              {pkg.priceNote && (
                <span className="text-[11px] text-stone-500 ml-1">({pkg.priceNote})</span>
              )}
            </div>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Zero Payment Online
            </span>
          </div>

          {/* 1. Travel Date */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B89047]" />
              Select Travel Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm font-medium outline-none focus:border-[#12372A] bg-white cursor-pointer"
            />
          </div>

          {/* 2. Number of Persons */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#B89047]" />
              Number of Persons
            </label>
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm font-medium outline-none focus:border-[#12372A] bg-white cursor-pointer"
            >
              <option value="1 Solo Traveler">1 Solo Traveler</option>
              <option value="2 Persons (Couple)">2 Persons (Couple)</option>
              <option value="3-4 Persons (Family)">3-4 Persons (Family)</option>
              <option value="5-8 Persons (Joint Family)">5-8 Persons (Joint Family)</option>
              <option value="9-15 Persons (Group Tour)">9-15 Persons (Group Tour)</option>
              <option value="16+ Persons (College / Corporate)">16+ Persons (College / Corporate)</option>
            </select>
          </div>

          {/* 3. Duration */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B89047]" />
              Duration / Days
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm font-medium outline-none focus:border-[#12372A] bg-white cursor-pointer"
            >
              <option value="2 Days / 1 Night">2 Days / 1 Night (Weekend Escape)</option>
              <option value="3 Days / 2 Nights">3 Days / 2 Nights (Popular Circuit)</option>
              <option value="4 Days / 3 Nights">4 Days / 3 Nights (Grand Holiday)</option>
              <option value="5+ Days (Extended Vacation)">5+ Days (Extended Vacation)</option>
            </select>
          </div>

          {/* 4. Stay & Cab Options */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <label className={`p-2.5 rounded-xl border text-[11px] cursor-pointer flex items-center gap-2 transition-all ${
              hotelIncluded ? 'border-[#12372A] bg-stone-50 font-semibold text-[#12372A]' : 'border-stone-200 text-stone-500'
            }`}>
              <input
                type="checkbox"
                checked={hotelIncluded}
                onChange={(e) => setHotelIncluded(e.target.checked)}
                className="accent-[#12372A]"
              />
              <span>Hotel Stay</span>
            </label>

            <label className={`p-2.5 rounded-xl border text-[11px] cursor-pointer flex items-center gap-2 transition-all ${
              cabIncluded ? 'border-[#12372A] bg-stone-50 font-semibold text-[#12372A]' : 'border-stone-200 text-stone-500'
            }`}>
              <input
                type="checkbox"
                checked={cabIncluded}
                onChange={(e) => setCabIncluded(e.target.checked)}
                className="accent-[#12372A]"
              />
              <span>Sightseeing Cab</span>
            </label>
          </div>

          {/* 5. Customer Name (Optional) */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Arun Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm outline-none focus:border-[#12372A]"
            />
          </div>

          {/* Direct WhatsApp Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Confirm & Book on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-stone-400 text-center mt-2">
              Opens WhatsApp with your trip details. Our SHA Tourism team will confirm availability & coordinate arrangements.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}
