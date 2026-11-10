import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Phone, Mail, MapPin, Clock, MessageSquare, 
  ExternalLink, ShieldCheck, Heart 
} from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../../config/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#092218] text-slate-300 relative overflow-hidden border-t border-[#C5A059]/30">
      {/* Decorative top pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#164E3D] p-2 flex items-center justify-center border border-[#C5A059]/40">
                <Star className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
              </div>
              <div>
                <span className="text-2xl font-serif font-black tracking-tight text-white">
                  STAR TOURISM
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#ECD29E]">
                  OOTY • QUEEN OF HILL STATIONS
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Your premier holiday and travel partner in Ooty, Nilgiris. We specialize in handcrafted family vacations, romantic honeymoon escapes, luxury tea estate stays, and reliable hill taxi services.
            </p>

            <div className="pt-2">
              <a 
                href={buildWhatsAppUrl("Hello Star Tourism, I would like to plan an Ooty holiday!")}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#164E3D] hover:bg-[#1F6B54] text-white text-xs font-semibold border border-[#C5A059]/40 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Chat on WhatsApp ({BUSINESS_CONFIG.displayWhatsapp})</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-200/80">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Government Approved Nilgiri Tour & Taxi Partner</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-bold text-base tracking-wide border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#ECD29E] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ECD29E] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#ECD29E] transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-[#ECD29E] transition-colors">Hotels & Resorts</Link>
              </li>
              <li>
                <Link to="/cabs" className="hover:text-[#ECD29E] transition-colors">Cab & Taxi Services</Link>
              </li>
              <li>
                <Link to="/sightseeing" className="hover:text-[#ECD29E] transition-colors">Ooty Sightseeing</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#ECD29E] transition-colors">Book / Custom Enquiry</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Tourism Services */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-bold text-base tracking-wide border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/packages?category=Family%20Packages" className="hover:text-[#ECD29E] transition-colors">
                  Family Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/packages?category=Couple%20Packages" className="hover:text-[#ECD29E] transition-colors">
                  Honeymoon & Couple Trips
                </Link>
              </li>
              <li>
                <Link to="/cabs" className="hover:text-[#ECD29E] transition-colors">
                  Local Ooty Sightseeing Cabs
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-[#ECD29E] transition-colors">
                  Tea Estate Heritage Resorts
                </Link>
              </li>
              <li>
                <Link to="/cabs" className="hover:text-[#ECD29E] transition-colors">
                  Coimbatore / Bangalore Transfers
                </Link>
              </li>
              <li>
                <Link to="/packages?category=Group%20Packages" className="hover:text-[#ECD29E] transition-colors">
                  Corporate & College Group Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-bold text-base tracking-wide border-b border-white/10 pb-2">
              Contact Star Tourism
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {BUSINESS_CONFIG.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-xs hover:text-white transition-colors">
                  {BUSINESS_CONFIG.displayWhatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-xs hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs">{BUSINESS_CONFIG.hours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-amber-200/70 block">
                [Note: Address & Phone details will update to match final uploaded document]
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} STAR TOURISM, Ooty. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            <Link to="/admin" className="hover:text-[#ECD29E] transition-colors underline">Admin Dashboard</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
