import React from 'react';
import { ShieldCheck, MapPin, Phone, Car, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CabCard from '../components/common/CabCard';
import { DocumentNoticeBanner } from '../components/common/PlaceholderBadge';
import { CAB_SERVICES } from '../data/placeholderData';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../config/whatsapp';

export default function CabServicesPage() {
  const serviceHighlights = [
    {
      title: "Ooty Local Sightseeing Circuit",
      desc: "Full-day coverage of Botanical Garden, Ooty Lake, Doddabetta Peak, Tea Factory, and Rose Garden in a comfortable private car.",
      duration: "Full Day (8 - 9 Hours)"
    },
    {
      title: "Coonoor Heritage Excursion",
      desc: "Scenic journey to Coonoor covering Sim's Park, Dolphin's Nose, Lamb's Rock, and Highfield Tea Factory with toy train sync.",
      duration: "Half / Full Day"
    },
    {
      title: "Pykara & Mudumalai Safari Trip",
      desc: "Drive past 36 hairpin bends down to Mudumalai National Park for tiger and elephant safari, plus Pykara boat ride.",
      duration: "Full Day Excursion"
    },
    {
      title: "Airport & Railway Station Transfers",
      desc: "Guaranteed on-time door-to-door pick-up and drop from Coimbatore Airport (CJB), Mettupalayam Railway Station, and Bangalore (BLR).",
      duration: "24/7 Available"
    },
    {
      title: "Outstation Trips to Mysore & Wayanad",
      desc: "Inter-state outstation cab services across Karnataka, Kerala, and Tamil Nadu with all permits, hill tolls, and interstate taxes handled.",
      duration: "Custom Multi-Day"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Nilgiri Chauffeur & Fleet"
          title="Cab & Taxi Rental Services"
          subtitle="Explore the winding hills of Ooty with peace of mind. Experienced mountain drivers, spotless sanitization, and upfront quotes."
        />

        <DocumentNoticeBanner
          title="Vehicle Fleet & Tariff Verification Notice"
          message="Cab hire rates in Ooty vary based on peak seasons (April-May flower show & Diwali/Christmas). The tariffs shown are standard baseline estimates awaiting official sync with Star Tourism's uploaded rate card."
        />

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CAB_SERVICES.map((cab) => (
            <CabCard key={cab.id} cab={cab} />
          ))}
        </div>

        {/* Popular Circuits Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
              Flexible Sightseeing Circuits
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
              Popular Sightseeing & Transfer Options
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              All routes can be tailored according to your family's pace or flight/train timings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceHighlights.map((srv, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-emerald-500 transition-colors space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    {srv.duration}
                  </span>
                  <Car className="w-4 h-4 text-[#C5A059]" />
                </div>
                <h4 className="font-bold text-base text-slate-900">{srv.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl(`Hello Star Tourism! I want to inquire about: ${srv.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0F382A] hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                  >
                    <span>Check Cab Fare</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Hill Driver Safety Assurance Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#0F382A] to-[#164E3D] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C5A059]/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="font-bold text-base">Mountain Driving Safety Guarantee</h4>
                <p className="text-xs text-emerald-100/80 mt-0.5">
                  Our chauffeurs have an average of 10+ years driving experience navigating the Nilgiri ghats and hairpin bends safely.
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl("Hello Star Tourism, I need urgent cab assistance in Ooty.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold whitespace-nowrap shadow-md transition-all hover:scale-105"
            >
              Call / WhatsApp Chauffeur Desk
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
