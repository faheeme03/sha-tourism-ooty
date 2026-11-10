import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Star, Compass, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Hotels & Resorts', path: '/hotels' },
    { name: 'Cab Services', path: '/cabs' },
    { name: 'Sightseeing', path: '/sightseeing' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-emerald-900/10' 
        : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
    }`}>
      {/* Top micro bar on scroll-less state */}
      {!isScrolled && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 border-b border-white/10 hidden md:flex items-center justify-between text-xs text-emerald-100">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              Ooty, The Nilgiris, Tamil Nadu
            </span>
            <span className="text-white/30">•</span>
            <span>Local Hill Specialists & Cab Rentals</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_CONFIG.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              {BUSINESS_CONFIG.displayWhatsapp}
            </a>
            <span className="text-white/30">•</span>
            <Link to="/admin" className="text-white/60 hover:text-white text-[11px] underline">
              Admin Login
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F382A] to-[#164E3D] p-2 flex items-center justify-center shadow-lg border border-[#C5A059]/40 group-hover:scale-105 transition-transform">
              <Star className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C5A059] rounded-full animate-ping opacity-75"></div>
            </div>
            <div>
              <span className={`text-xl sm:text-2xl font-serif font-black tracking-tight flex items-center gap-1.5 ${
                isScrolled ? 'text-[#0F382A]' : 'text-white'
              }`}>
                STAR TOURISM
              </span>
              <span className={`block text-[10px] uppercase font-bold tracking-widest ${
                isScrolled ? 'text-[#C5A059]' : 'text-[#ECD29E]'
              }`}>
                OOTY • QUEEN OF HILLS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    active
                      ? isScrolled 
                        ? 'text-[#0F382A] bg-emerald-50' 
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-slate-700 hover:text-[#0F382A] hover:bg-slate-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/booking"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all bg-gradient-to-r from-[#0F382A] to-[#1F6B54] rounded-full shadow-md hover:shadow-lg hover:from-[#164E3D] hover:to-[#288469] border border-[#C5A059]/40 active:scale-95 group overflow-hidden"
            >
              <Sparkles className="w-4 h-4 mr-2 text-[#C5A059] group-hover:rotate-12 transition-transform" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/booking"
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold text-white bg-[#0F382A] rounded-full border border-[#C5A059]/40"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-slate-900 border-t border-slate-200 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 text-base font-semibold rounded-xl ${
                  isActive(link.path)
                    ? 'bg-[#0F382A] text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2 space-y-2">
              <Link
                to="/booking"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#0F382A] to-[#164E3D] text-white font-bold text-center shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Book Your Ooty Trip Now
              </Link>
              <div className="flex justify-between items-center px-2 pt-2 text-xs text-slate-500">
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="flex items-center gap-1 font-semibold text-[#0F382A]">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  Call {BUSINESS_CONFIG.displayWhatsapp}
                </a>
                <Link to="/admin" className="text-slate-500 underline">
                  Admin Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
