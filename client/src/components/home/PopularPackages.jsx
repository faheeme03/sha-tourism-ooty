import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import PackageCard from '../common/PackageCard';
import PackageDetailModal from '../common/PackageDetailModal';
import { TOUR_PACKAGES } from '../../data/placeholderData';

export default function PopularPackages() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categories = ['All', 'Weekend Packages', 'Couple Packages', 'Family Packages', 'Group Packages'];
  const durations = ['All', '2 Days', '3 Days', '4+ Days'];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    const matchCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    let matchDuration = true;
    if (selectedDuration === '2 Days') matchDuration = pkg.durationDays === 2;
    if (selectedDuration === '3 Days') matchDuration = pkg.durationDays === 3;
    if (selectedDuration === '4+ Days') matchDuration = pkg.durationDays >= 4;

    return matchCategory && matchDuration;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Popular Tour Packages"
        title="Handcrafted Nilgiri Holidays"
        subtitle="Explore our most loved vacation packages. Tailored stays, private hill cabs, and day-wise itineraries for couples, families, and groups."
      />

      {/* Filter Tabs Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0F382A] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Duration Quick Filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-semibold flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Duration:
          </span>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="bg-slate-100 text-slate-800 font-semibold py-1.5 px-3 rounded-lg border border-slate-200 outline-none"
          >
            {durations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            onOpenDetails={(p) => setSelectedPackage(p)}
          />
        ))}
      </div>

      {/* View All Packages Footer Link */}
      <div className="mt-12 text-center">
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-[#0F382A] text-white text-sm font-bold shadow-md hover:shadow-xl transition-all"
        >
          <span>View All Tour Packages & Categories</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Detail Modal */}
      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
}
