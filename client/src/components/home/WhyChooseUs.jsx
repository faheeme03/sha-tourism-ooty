import React from 'react';
import { Home, ShieldCheck, Coins, Sliders, MapPin, HeartHandshake, Award } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { WHY_CHOOSE_US } from '../../data/placeholderData';

export default function WhyChooseUs() {
  const iconMap = {
    Home: Home,
    ShieldCheck: ShieldCheck,
    Coins: Coins,
    Sliders: Sliders,
    MapPin: MapPin,
    HeartHandshake: HeartHandshake
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Why Star Tourism"
        title="Travel with Local Confidence"
        subtitle="We are based in Ooty and manage every aspect of your stay, cab, and sightseeing directly."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_CHOOSE_US.map((item, idx) => {
          const Icon = iconMap[item.icon] || Award;

          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#12372A] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="text-base font-serif font-bold text-stone-900">
                {item.title}
              </h3>

              <p className="text-xs text-stone-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Neat minimalist trust stats */}
      <div className="mt-12 py-8 px-6 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
          <div className="pt-2 md:pt-0">
            <span className="block text-2xl sm:text-3xl font-serif font-black text-[#12372A]">
              12,000+
            </span>
            <span className="text-xs text-stone-500">Travelers Hosted</span>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="block text-2xl sm:text-3xl font-serif font-black text-[#12372A]">
              40+
            </span>
            <span className="text-xs text-stone-500">Partner Resorts & Stays</span>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="block text-2xl sm:text-3xl font-serif font-black text-[#12372A]">
              25+
            </span>
            <span className="text-xs text-stone-500">Dedicated Hill Cabs</span>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="block text-2xl sm:text-3xl font-serif font-black text-[#12372A]">
              4.9 / 5
            </span>
            <span className="text-xs text-stone-500">Guest Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
