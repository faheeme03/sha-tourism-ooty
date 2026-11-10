import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, MapPin, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../../config/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    { title: "🏔️ Weekend Ooty Package", msg: "Hello Star Tourism, I'd like details and pricing for a weekend Ooty trip." },
    { title: "💑 Honeymoon Package", msg: "Hi! We are planning our honeymoon in Ooty. Please share couple packages & stays." },
    { title: "🚖 Cab / Taxi Booking", msg: "Hi, I need cab rental for Ooty local sightseeing and airport transfer." },
    { title: "🏨 Resort & Cottage Stay", msg: "Hi, please share availability and rates for tea estate resorts in Ooty." }
  ];

  const handleSend = (text) => {
    const messageToSend = text || customMsg || "Hello Star Tourism, I want to inquire about your Ooty tour packages.";
    window.open(buildWhatsAppUrl(messageToSend), '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-emerald-900/10 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0F382A] to-[#164E3D] text-white p-4 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                <MessageSquare className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Star Tourism Ooty Support</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Typically replies within 15 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs text-xs text-slate-700 leading-relaxed border border-slate-100">
              <p className="font-semibold text-[#0F382A] mb-1">Vanakkam & Welcome to Ooty! 🌲</p>
              <p>Planning your Nilgiri holiday? Tap a quick option below or type your custom travel plan to chat directly on WhatsApp with our team.</p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Quick Enquiries:</p>
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.msg)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-white hover:bg-emerald-50 text-slate-800 text-xs font-medium border border-slate-200/70 hover:border-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>{item.title}</span>
                  <span className="text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-semibold">Send →</span>
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-xl px-3 py-2 shadow-xs focus-within:border-emerald-600">
                <input
                  type="text"
                  placeholder="Type travel dates, guests, or questions..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="w-full text-xs outline-none bg-transparent text-slate-800"
                />
                <button
                  onClick={() => handleSend()}
                  className="p-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-transform active:scale-95"
                  title="Send to WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 text-center">
                Connected to Star Tourism WhatsApp ({BUSINESS_CONFIG.displayWhatsapp})
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Pill / Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white group"
        aria-label="Chat with Star Tourism on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
        </div>
        <span className="hidden sm:inline font-semibold tracking-wide">
          WhatsApp Star Tourism
        </span>
      </button>
    </aside>
  );
}
