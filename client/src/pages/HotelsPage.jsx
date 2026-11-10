import React, { useState } from 'react';
import { Search, Filter, Hotel, MapPin, Sparkles } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import HotelCard from '../components/common/HotelCard';
import { DocumentNoticeBanner } from '../components/common/PlaceholderBadge';
import { HOTELS_RESORTS } from '../data/placeholderData';

export default function HotelsPage() {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const locations = ['All', 'Fern Hill / Lovedale Road', 'Doddabetta Road', 'Near Ooty Lake', 'Commercial Road / Charing Cross'];
  const categories = ['All', 'Heritage & Luxury', 'Boutique Hill Cottage', 'Lakefront Comfort', 'Town Center Premium'];

  const filteredHotels = HOTELS_RESORTS.filter((h) => {
    const matchesLoc = selectedLocation === 'All' || h.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesCat = selectedCategory === 'All' || h.category === selectedCategory;
    const matchesQuery = searchQuery === '' || 
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.amenities?.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesLoc && matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Nilgiri Stays & Resorts"
          title="Hotels, Cottages & Tea Estate Retreats"
          subtitle="Wake up to misty hill views, crackling wood fireplaces, and rolling tea gardens. Handpicked properties inspected by Sha Tourism."
        />

        {/* Notice */}
        <DocumentNoticeBanner
          title="Accommodation Rates & Availability"
          message="These curated accommodations demonstrate the range of stays Sha Tourism arranges. Hotel names, specific room tariffs, and direct allocations will update from Sha Tourism's uploaded document. All bookings are enquiry-based."
        />

        {/* Filter Controls */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Search by hotel name or amenity (e.g. Fireplace)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-emerald-600 bg-slate-50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Style:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-slate-50 outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Location:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-slate-50 outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

      </div>
    </div>
  );
}
