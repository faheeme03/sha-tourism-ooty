import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Compass, Heart, ShieldCheck, Users, MapPin, 
  Award, Sparkles, ArrowRight, FileText 
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { DocumentNoticeBanner } from '../components/common/PlaceholderBadge';
import { WHY_CHOOSE_US } from '../data/placeholderData';

export default function AboutUsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="About Sha Tourism"
          title="Rooted in the Queen of Hill Stations"
          subtitle="Passionate local hosts, seasoned hill drivers, and dedicated travel curators committed to crafting unforgettable Nilgiri journeys."
        />

        <DocumentNoticeBanner
          title="Company History & Profile Placeholder Notice"
          message="The company narrative, founders' statement, and milestones below are structured placeholders. They can be updated or personalized at any time from the Admin Settings or upon receiving Sha Tourism's official business document."
        />

        {/* Hero Story Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200/80 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block">
              Who We Are
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 leading-tight">
              Hospitality that Feels Like Coming Home to the Hills
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based in Ooty, Tamil Nadu, <strong>SHA TOURISM</strong> is a comprehensive holiday and travel management company. We were founded with a singular purpose: to make discovering the timeless beauty of the Nilgiris effortless, comfortable, and deeply enriching.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are a couple seeking a cozy tea estate cottage with a fireplace, a family needing a spacious Innova with a safe hill chauffeur, or friends ready for a campfire under the stars, our local team arranges every detail with genuine care.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/packages"
                className="px-6 py-3 rounded-full bg-[#0F382A] text-white text-xs sm:text-sm font-bold hover:bg-[#164E3D] shadow-md border border-[#C5A059]/40 flex items-center gap-2"
              >
                <span>View Our Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"
                alt="Nilgiri mountains and tea workers in Ooty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#ECD29E] uppercase tracking-wider block">
                  Nilgiri Heritage
                </span>
                <p className="text-lg font-serif font-bold">
                  "Over 12,000 travelers guided safely across 36 hairpin turns & misty valleys."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F382A] to-[#164E3D] text-white border border-[#C5A059]/40 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#C5A059]">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-serif font-bold">Our Tourism Mission</h4>
            <p className="text-emerald-100/90 text-sm leading-relaxed">
              To provide authentic, transparent, and seamless travel experiences in Ooty through high-standard accommodations, experienced local hill drivers, personalized care, and prompt WhatsApp support.
            </p>
            <div className="text-[11px] text-amber-200/70 pt-2 border-t border-white/10">
              [Placeholder - Can be refined to reflect Sha Tourism's official mission statement]
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white text-slate-800 border border-slate-200/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F382A]/10 flex items-center justify-center text-[#0F382A]">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-serif font-bold">Commitment to Guests</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We treat every traveler as a guest in our home town. Zero pushy sales tactics, zero hidden driver fees, and prompt on-ground assistance whenever you need travel advice, medical help, or route adjustments.
            </p>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              [Placeholder - Sha Tourism Guest Pledge]
            </div>
          </div>
        </div>

        {/* Why Choose Us Repeater */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-slate-900">
            Why Travelers Choose Sha Tourism
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.slice(0, 3).map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <h4 className="font-bold text-slate-900 text-base mb-2">{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
