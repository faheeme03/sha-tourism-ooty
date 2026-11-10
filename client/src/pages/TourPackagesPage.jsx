import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Filter, Sparkles, AlertCircle } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PackageCard from '../components/common/PackageCard';
import PackageDetailModal from '../components/common/PackageDetailModal';
import { DocumentNoticeBanner } from '../components/common/PlaceholderBadge';
import { TOUR_PACKAGES } from '../data/placeholderData';

export default function TourPackagesPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [durationFilter, setDurationFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categories = [
    'All',
    'Family Packages',
    'Couple Packages',
    'Weekend Packages',
    'Group Packages',
    'Customized Packages'
  ];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    // Category match
    const matchesCat = activeCategory === 'All' || pkg.category === activeCategory;

    // Search query match
    const matchesSearch = searchQuery === '' || 
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.highlights?.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    // Duration match
    let matchesDuration = true;
    if (durationFilter === '1-2 Days') matchesDuration = pkg.durationDays <= 2;
    if (durationFilter === '3-4 Days') matchesDuration = pkg.durationDays >= 3 && pkg.durationDays <= 4;
    if (durationFilter === '5+ Days') matchesDuration = pkg.durationDays >= 5;

    // Budget match
    let matchesBudget = true;
    if (budgetFilter === 'Under 10K') matchesBudget = pkg.price < 10000;
    if (budgetFilter === '10K - 20K') matchesBudget = pkg.price >= 10000 && pkg.price <= 20000;
    if (budgetFilter === 'Above 20K') matchesBudget = pkg.price > 20000;

    return matchesCat && matchesSearch && matchesDuration && matchesBudget;
  });

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Nilgiri Tour Packages"
          title="Curated Ooty Holidays"
          subtitle="Explore all handpicked itineraries with hotel accommodations, private hill cab sightseeing, and 24/7 on-ground assistance."
        />

        {/* Business Document Verification Notice */}
        <DocumentNoticeBanner 
          title="Tour Package Catalogue Notice"
          message="These packages are modeled on high-demand Ooty circuits. When you supply Star Tourism's official business document with custom tour plans and prices, this catalog will immediately synchronize all exact itineraries."
        />

        {/* Search & Filters Controls Bar */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Search by package name or sight (e.g. Pykara, Coonoor)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-emerald-600 bg-slate-50"
              />
            </div>

            {/* Duration Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Duration:</span>
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-slate-50 outline-none"
              >
                <option value="All">All Durations</option>
                <option value="1-2 Days">1 - 2 Days (Weekend Short)</option>
                <option value="3-4 Days">3 - 4 Days (Standard Holiday)</option>
                <option value="5+ Days">5+ Days (Grand Extended)</option>
              </select>
            </div>

            {/* Budget Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Budget:</span>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-slate-50 outline-none"
              >
                <option value="All">All Price Ranges</option>
                <option value="Under 10K">Under ₹10,000</option>
                <option value="10K - 20K">₹10,000 – ₹20,000</option>
                <option value="Above 20K">Above ₹20,000 (Luxury)</option>
              </select>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0F382A] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onOpenDetails={(p) => setSelectedPackage(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4">
            <p className="text-lg font-serif font-bold text-slate-800">
              No packages found matching your criteria.
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try resetting the duration and budget filters, or contact our travel architects directly to build a custom plan.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setDurationFilter('All');
                setBudgetFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0F382A] text-white text-xs font-bold hover:bg-[#164E3D]"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}
