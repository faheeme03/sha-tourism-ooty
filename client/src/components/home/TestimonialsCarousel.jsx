import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
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
    <section className="py-20 bg-[#FDFBF7] border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guest Experiences"
          title="What Travelers Say"
          subtitle="Real memories and thoughtful feedback from families, couples, and groups who explored Ooty with Star Tourism."
        />

        {/* Clear Transparent Disclaimer Banner */}
        <div className="mb-8 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-center gap-2 text-center">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> The testimonials below are structured sample representations. Genuine verified guest reviews will synchronize dynamically as Star Tourism's customer feedback pipeline goes live.
          </span>
        </div>

        {/* Modern Carousel Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 overflow-hidden">
          {/* Subtle watermark quote */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-emerald-900/5 rotate-180 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl font-serif text-slate-800 italic leading-relaxed mb-8">
              "{current.comment}"
            </p>

            {/* Traveler Meta */}
            <div>
              <h4 className="text-lg font-bold text-slate-900">{current.name}</h4>
              <p className="text-xs text-[#0F382A] font-semibold mt-0.5">
                {current.tripType} • {current.location}
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100/70 text-amber-900 text-[10px] font-medium border border-amber-200">
                <span>{current.placeholderBadge}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-slate-100 hover:bg-[#0F382A] text-slate-700 hover:text-white transition-all shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#0F382A]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-slate-100 hover:bg-[#0F382A] text-slate-700 hover:text-white transition-all shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
