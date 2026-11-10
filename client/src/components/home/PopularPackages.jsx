import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import PackageCard from '../common/PackageCard';
import PackageDetailModal from '../common/PackageDetailModal';
import QuickBookWhatsAppModal from '../common/QuickBookWhatsAppModal';
import { FadeIn, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { TOUR_PACKAGES } from '../../data/placeholderData';

export default function PopularPackages() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingPackage, setBookingPackage] = useState(null);

  const categories = ['All', 'Weekend Packages', 'Couple Packages', 'Family Packages', 'Group Packages'];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    return selectedCategory === 'All' || pkg.category === selectedCategory;
  });

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionHeader
          badge="Curated Packages"
          title="Popular Nilgiri Tours"
          subtitle="Thoughtfully designed itineraries covering stays, mountain cabs, and local sightseeing."
        />
      </FadeIn>

      {/* Clean Category Filter Tabs with Fade */}
      <FadeIn delay={0.1}>
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
      </FadeIn>

      {/* Staggered Grid for smooth scroll in & up */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <StaggerItem key={pkg.id}>
            <PackageCard
              pkg={pkg}
              onOpenDetails={(p) => setSelectedPackage(p)}
              onBookNow={(p) => setBookingPackage(p)}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.2} className="mt-10 text-center">
        <Link
          to="/packages"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#12372A] hover:underline"
        >
          <span>View all tour packages and categories</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </FadeIn>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onBookNow={(p) => {
            setSelectedPackage(null);
            setBookingPackage(p);
          }}
        />
      )}

      {/* Direct WhatsApp Quick Booking Modal */}
      {bookingPackage && (
        <QuickBookWhatsAppModal
          pkg={bookingPackage}
          onClose={() => setBookingPackage(null)}
        />
      )}
    </section>
  );
}
