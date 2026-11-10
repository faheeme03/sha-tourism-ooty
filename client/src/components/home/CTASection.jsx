import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../../config/whatsapp';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#12372A] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-bold tracking-widest uppercase text-[#CBA75C]">
          Start Your Journey
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight">
          Your Ooty Holiday Awaits!
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
          Let Sha Tourism make your next trip memorable. Contact us today and start planning your perfect getaway.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buildWhatsAppUrl("Hello Sha Tourism! I would like to plan an Ooty holiday.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-xs transition-transform active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Us ({BUSINESS_CONFIG.displayWhatsapp})</span>
          </a>

          <Link
            to="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#12372A] hover:bg-stone-100 font-semibold text-xs sm:text-sm shadow-xs transition-transform active:scale-95"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
