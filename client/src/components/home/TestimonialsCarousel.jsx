import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { FadeIn } from '../common/ScrollReveal';
import { TESTIMONIALS_DATA } from '../../data/placeholderData';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-stone-50/60 border-b border-stone-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Reviews"
            title="Guest Stories"
            subtitle="Experiences shared by families, couples, and groups exploring Ooty."
          />
        </FadeIn>

        {/* Clean Card with FadeIn */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200/80 shadow-xs text-center space-y-6 relative">
            
            <div className="flex items-center justify-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#B89047] fill-[#B89047]" />
              ))}
            </div>

            <p className="text-base sm:text-lg font-serif italic text-stone-800 leading-relaxed max-w-xl mx-auto">
              "{current.comment}"
            </p>

            <div>
              <h4 className="font-bold text-sm text-stone-900">{current.name}</h4>
              <p className="text-xs text-stone-400 mt-0.5">
                {current.tripType} • {current.location}
              </p>
            </div>

            {/* Controls */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-400">
                {currentIndex + 1} / {TESTIMONIALS_DATA.length}
              </span>
              <button
                onClick={next}
                className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Transparency note */}
            <p className="text-[10px] text-stone-400 italic pt-2">
              * Sample representation awaiting live guest review sync.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
