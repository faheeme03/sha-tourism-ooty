import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../../config/whatsapp';

export default function SearchEnquiryBar() {
  const [requirement, setRequirement] = useState('All-Inclusive Tour Package');
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2 Persons (Couple)');

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const lines = [
      `🌲 *SHA TOURISM – OOTY TRIP BOOKING ENQUIRY* 🌲`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📦 *Package / Trip Type:* ${requirement}`,
      checkIn ? `📅 *Travel Date:* ${checkIn}` : `📅 *Travel Date:* Flexible / To be decided`,
      `👥 *Number of Persons:* ${guests}`,
      `🏨 *Accommodation & Sightseeing Cab:* Required`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Hello SHA Tourism team! We would like to plan our Ooty trip for the above date and persons. Please share package options and make the arrangements for us. Thank you!`
    ];

    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-lg border border-stone-200/90 text-stone-800">
      <form onSubmit={handleWhatsAppBooking} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
        
        {/* Requirement */}
        <div className="w-full sm:flex-1 px-4 py-2 sm:border-r border-stone-200 text-left">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Package / Trip Type
          </label>
          <select
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="w-full text-xs sm:text-sm font-semibold text-stone-900 bg-transparent outline-none cursor-pointer pt-0.5"
          >
            <option value="All-Inclusive Tour Package">All-Inclusive Tour Package</option>
            <option value="Romantic Honeymoon Package">Romantic Honeymoon Package</option>
            <option value="Nilgiri Grand Family Vacation">Grand Family Vacation</option>
            <option value="Weekend Getaway Package">Weekend Getaway (2D/1N)</option>
            <option value="Group & Corporate Tour">Group & Corporate Tour</option>
            <option value="Cab & Sightseeing Only">Sightseeing Cab Only</option>
          </select>
        </div>

        {/* Date */}
        <div className="w-full sm:w-44 px-4 py-2 sm:border-r border-stone-200 text-left">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Travel Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full text-xs sm:text-sm font-semibold text-stone-900 bg-transparent outline-none cursor-pointer pt-0.5"
          />
        </div>

        {/* Guests */}
        <div className="w-full sm:w-40 px-4 py-2 text-left">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Persons
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full text-xs sm:text-sm font-semibold text-stone-900 bg-transparent outline-none cursor-pointer pt-0.5"
          >
            <option value="1 Solo Traveler">1 Person</option>
            <option value="2 Persons (Couple)">2 Persons (Couple)</option>
            <option value="3-4 Persons (Family)">3-4 Persons (Family)</option>
            <option value="5-8 Persons (Joint Family)">5-8 Persons</option>
            <option value="9+ Persons (Group Tour)">9+ Persons</option>
          </select>
        </div>

        {/* Instant WhatsApp Action CTA */}
        <div className="w-full sm:w-auto p-1">
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </form>
    </div>
  );
}
