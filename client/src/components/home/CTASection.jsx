import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../../config/whatsapp';

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F382A] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F6B54]/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#ECD29E] text-xs font-bold uppercase tracking-widest border border-white/20">
          Start Your Nilgiri Story
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight">
          Your Ooty Holiday Awaits!
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Let Star Tourism make your next trip memorable. Contact us today and start planning your perfect getaway.
        </p>

        {/* Buttons Requested */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={buildWhatsAppUrl("Hello Star Tourism! I am ready to plan my Ooty vacation. Please share packages and options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>WhatsApp Us ({BUSINESS_CONFIG.displayWhatsapp})</span>
          </a>

          <Link
            to="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F382A] hover:bg-emerald-50 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all border border-[#C5A059]/40"
          >
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <span>Plan Your Trip</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            Quick 15-Minute Response
          </span>
          <span>•</span>
          <span>Zero Booking Pressure</span>
          <span>•</span>
          <span>Best Local Ooty Price Guarantee</span>
        </div>
      </div>
    </section>
  );
}
