import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-stone-200 text-stone-600 pt-16 pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-100">
          
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#12372A] text-[#CBA75C] flex items-center justify-center font-black text-[10px] tracking-wider">
                SHA
              </span>
              <span className="text-base font-serif font-black text-[#12372A]">
                SHA TOURISM
              </span>
            </Link>
            <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
              Premier travel and holiday booking services in Ooty, Nilgiris. Tour packages, hotel stays, cab rentals, and custom vacations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-500">
              <li><Link to="/" className="hover:text-stone-900">Home</Link></li>
              <li><Link to="/packages" className="hover:text-stone-900">Tour Packages</Link></li>
              <li><Link to="/hotels" className="hover:text-stone-900">Hotels & Resorts</Link></li>
              <li><Link to="/cabs" className="hover:text-stone-900">Cab Services</Link></li>
              <li><Link to="/sightseeing" className="hover:text-stone-900">Ooty Sightseeing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-500">
              <li><Link to="/about" className="hover:text-stone-900">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900">Contact Us</Link></li>
              <li><Link to="/booking" className="hover:text-stone-900">Plan a Custom Trip</Link></li>
              <li><Link to="/admin" className="hover:text-stone-900">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {BUSINESS_CONFIG.fullAddress}
            </p>
            <p className="text-xs font-semibold text-stone-800">
              WhatsApp: {BUSINESS_CONFIG.displayWhatsapp}
            </p>
            <p className="text-xs text-stone-500">
              {BUSINESS_CONFIG.email}
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} SHA TOURISM, Ooty. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-stone-600">Privacy & Terms</Link>
            <Link to="/admin" className="hover:text-stone-600">Admin Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
