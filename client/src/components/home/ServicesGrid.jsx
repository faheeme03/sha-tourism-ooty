import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hotel, Car, Compass, Users, Heart, Sparkles, ArrowRight, MessageSquare 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { SERVICES_LIST } from '../../data/placeholderData';
import { buildWhatsAppUrl } from '../../config/whatsapp';

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
    <section className="py-20 bg-[#F5F2EA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Travel Solutions"
          title="Our Premium Tourism Services"
          subtitle="Everything you need for a comfortable, memorable, and worry-free holiday in Ooty and the surrounding Nilgiris."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => {
            const Icon = iconMap[srv.icon] || Sparkles;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-[#0F382A] text-[#C5A059] flex items-center justify-center shadow-lg border border-[#C5A059]/40 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0F382A] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {srv.features?.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={buildWhatsAppUrl(`Hello Star Tourism, I would like to inquire about your service: ${srv.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F382A] text-xs font-semibold flex items-center gap-1.5 border border-emerald-200"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>

                    <Link
                      to={srv.link}
                      className="px-4 py-2 rounded-xl bg-[#0F382A] hover:bg-[#164E3D] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm border border-[#C5A059]/30"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
