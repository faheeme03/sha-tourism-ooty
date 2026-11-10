import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Cab Rentals', path: '/cabs' },
    { name: 'Sightseeing', path: '/sightseeing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/70 py-3.5' 
        : 'bg-white/80 backdrop-blur-sm border-b border-stone-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Minimalist Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#12372A] flex items-center justify-center text-[#CBA75C] font-black text-sm">
              ★
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-black tracking-tight text-[#12372A] leading-tight">
                STAR TOURISM
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-stone-500">
                Ooty, Nilgiris
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors ${
                    active
                      ? 'bg-[#12372A] text-white'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Minimalist Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#12372A] hover:bg-[#1a4d3b] rounded-full transition-all active:scale-95 shadow-xs"
            >
              <span>Book Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/booking"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#12372A] rounded-full"
            >
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-stone-700 hover:bg-stone-100"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive(link.path)
                  ? 'bg-[#12372A] text-white'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-stone-100 mt-2">
            <Link
              to="/booking"
              className="w-full block py-2.5 text-center text-sm font-semibold rounded-lg bg-[#12372A] text-white"
            >
              Plan Your Trip Now
            </Link>
            <div className="mt-2 text-center text-xs text-stone-400">
              <Link to="/admin" className="underline hover:text-stone-600">Admin Portal</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
