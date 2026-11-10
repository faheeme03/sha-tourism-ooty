import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hotel, Car, Compass, Users, Heart, Sparkles, ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { SERVICES_LIST } from '../../data/placeholderData';

export default function ServicesGrid() {
  const iconMap = {
    Hotel: Hotel,
    Car: Car,
    Compass: Compass,
    Users: Users,
    Heart: Heart,
    Sparkles: Sparkles
  };

  return (
    <section className="py-16 sm:py-20 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Services"
            title="Everything You Need in Ooty"
            subtitle="From tea estate resort bookings to airport transfers and private hill chauffeurs."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => {
            const Icon = iconMap[srv.icon] || Sparkles;

            return (
              <StaggerItem key={srv.id}>
                <div
                  className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:border-[#12372A]/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between space-y-4 h-full"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#12372A] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-stone-900 mb-1.5">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={srv.link}
                      className="text-xs font-semibold text-[#12372A] hover:underline flex items-center gap-1"
                    >
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      to="/booking"
                      className="text-[11px] font-medium text-stone-400 hover:text-stone-700"
                    >
                      Quick enquiry
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
