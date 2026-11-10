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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Why Star Tourism"
        title="Your Trusted Ooty Travel Partner"
        subtitle="With deep roots in the Nilgiris and decades of hospitality expertise, we turn your mountain holiday into a collection of unforgettable moments."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US.map((item, idx) => {
          const Icon = iconMap[item.icon] || Award;

          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125"></div>

              <div className="w-14 h-14 rounded-2xl bg-[#0F382A]/10 text-[#0F382A] flex items-center justify-center mb-6 group-hover:bg-[#0F382A] group-hover:text-[#C5A059] transition-colors shadow-xs">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-[#0F382A] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Trust stats banner */}
      <div className="mt-16 bg-gradient-to-r from-[#0F382A] via-[#164E3D] to-[#092218] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-[#C5A059]/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl sm:text-4xl font-serif font-black text-[#C5A059]">
              12,000+
            </span>
            <span className="mt-1 block text-xs sm:text-sm text-emerald-100/80">
              Happy Guests Hosted
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-serif font-black text-[#C5A059]">
              40+
            </span>
            <span className="mt-1 block text-xs sm:text-sm text-emerald-100/80">
              Verified Partner Resorts
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-serif font-black text-[#C5A059]">
              25+
            </span>
            <span className="mt-1 block text-xs sm:text-sm text-emerald-100/80">
              Dedicated Hill Cabs
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-serif font-black text-[#C5A059]">
              4.9 / 5
            </span>
            <span className="mt-1 block text-xs sm:text-sm text-emerald-100/80">
              Traveler Satisfaction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
