import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Search, Compass, Sparkles } from 'lucide-react';

export default function SearchEnquiryBar() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [requirement, setRequirement] = useState('All-Inclusive Tour Package');

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to packages or booking page with query params
    const params = new URLSearchParams({
      checkIn: checkIn || '',
      checkOut: checkOut || '',
      guests: guests || '',
      type: requirement || ''
    });
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-emerald-900/10 text-slate-800">
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Check-In Date */}
        <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            Check-In Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none cursor-pointer"
          />
        </div>

        {/* Check-Out Date */}
        <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            Check-Out Date
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none cursor-pointer"
          />
        </div>

        {/* Number of Guests */}
        <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#C5A059]" />
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none cursor-pointer"
          >
            <option value="1 Guest">1 Solo Traveler</option>
            <option value="2 Guests (Couple)">2 Guests (Couple)</option>
            <option value="3-4 Guests (Family)">3-4 Guests (Family)</option>
            <option value="5-8 Guests (Joint Family)">5-8 Guests (Joint Family)</option>
            <option value="9+ Guests (Group Tour)">9+ Guests (Group Tour)</option>
          </select>
        </div>

        {/* Travel Requirement */}
        <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            Travel Plan
          </label>
          <select
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none cursor-pointer"
          >
            <option value="All-Inclusive Tour Package">Tour Package (Stay + Cab)</option>
            <option value="Honeymoon Special">Honeymoon & Couple Trip</option>
            <option value="Hotel / Resort Only">Hotel / Resort Booking</option>
            <option value="Cab & Sightseeing Only">Cab Rental & Sightseeing</option>
            <option value="Customized Vacation">Customized Vacation</option>
          </select>
        </div>

        {/* Search Submit Button */}
        <div className="lg:col-span-4 pt-1">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0F382A] via-[#164E3D] to-[#1F6B54] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:from-[#164E3D] hover:to-[#288469] transition-all transform active:scale-98 border border-[#C5A059]/40 cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#C5A059]" />
            <span>Search Packages & Availability</span>
            <Sparkles className="w-4 h-4 text-[#C5A059] ml-1" />
          </button>
        </div>

      </form>
    </div>
  );
}
