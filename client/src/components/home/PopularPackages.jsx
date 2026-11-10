import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import PackageCard from '../common/PackageCard';
import PackageDetailModal from '../common/PackageDetailModal';
import { TOUR_PACKAGES } from '../../data/placeholderData';

export default function PopularPackages() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categories = ['All', 'Weekend Packages', 'Couple Packages', 'Family Packages', 'Group Packages'];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    return selectedCategory === 'All' || pkg.category === selectedCategory;
  });

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Curated Packages"
        title="Popular Nilgiri Tours"
        subtitle="Thoughtfully designed itineraries covering stays, mountain cabs, and local sightseeing."
      />

      {/* Clean Category Filter Tabs */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#12372A] text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Clean Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            onOpenDetails={(p) => setSelectedPackage(p)}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/packages"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#12372A] hover:underline"
        >
          <span>View all tour packages and categories</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
}
