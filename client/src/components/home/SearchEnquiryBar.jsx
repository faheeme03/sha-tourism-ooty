import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Compass, Search } from 'lucide-react';

export default function SearchEnquiryBar() {
  const navigate = useNavigate();
  const [requirement, setRequirement] = useState('All-Inclusive Tour Package');
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2 Guests (Couple)');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      type: requirement,
      checkIn: checkIn || '',
      guests: guests || ''
    });
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-lg border border-stone-200/90 text-stone-800">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
        
        {/* Requirement */}
        <div className="w-full sm:flex-1 px-4 py-2 sm:border-r border-stone-200 text-left">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Trip Type
          </label>
          <select
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="w-full text-xs sm:text-sm font-semibold text-stone-900 bg-transparent outline-none cursor-pointer pt-0.5"
          >
            <option value="All-Inclusive Tour Package">Tour Package (Stay + Cab)</option>
            <option value="Honeymoon Special">Honeymoon & Couple Trip</option>
            <option value="Hotel / Resort Only">Hotel / Resort Booking</option>
            <option value="Cab & Sightseeing Only">Cab Rental & Sightseeing</option>
            <option value="Customized Vacation">Custom Vacation</option>
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
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full text-xs sm:text-sm font-semibold text-stone-900 bg-transparent outline-none cursor-pointer pt-0.5"
          >
            <option value="1 Solo Traveler">1 Solo</option>
            <option value="2 Guests (Couple)">2 Guests</option>
            <option value="3-4 Guests (Family)">3-4 Family</option>
            <option value="5-8 Guests (Joint Family)">5-8 Group</option>
            <option value="9+ Guests (Group Tour)">9+ Group</option>
          </select>
        </div>

        {/* Search CTA */}
        <div className="w-full sm:w-auto p-1">
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full bg-[#12372A] hover:bg-[#1a4d3b] text-white text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>

      </form>
    </div>
  );
}
