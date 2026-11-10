import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularPackages from '../components/home/PopularPackages';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DestinationsGallery from '../components/home/DestinationsGallery';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Popular Tour Packages */}
      <PopularPackages />

      {/* 3. Our Services */}
      <ServicesGrid />

      {/* 4. Why Choose Sha Tourism */}
      <WhyChooseUs />

      {/* 5. Ooty Destinations Gallery */}
      <DestinationsGallery />

      {/* 6. Customer Testimonials */}
      <TestimonialsCarousel />

      {/* 7. Call To Action Section */}
      <CTASection />
    </div>
  );
}
