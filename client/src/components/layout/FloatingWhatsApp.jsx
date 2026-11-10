import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../../config/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const quickOptions = [
    "I'd like to check tour package rates.",
    "I need a cab for Ooty sightseeing.",
    "Looking for hotel and resort bookings."
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || msg || "Hello Sha Tourism, I'd like to plan an Ooty trip.";
    window.open(buildWhatsAppUrl(text), '_blank');
    setMsg('');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden animate-in fade-in duration-200">
          <div className="bg-[#12372A] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-semibold">Sha Tourism Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 bg-stone-50 space-y-2.5 text-xs text-stone-700">
            <p className="text-[11px] text-stone-500">
              Chat directly with our Ooty travel team on WhatsApp:
            </p>

            <div className="space-y-1">
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(opt)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200/80 text-[11px] text-stone-700 transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 pt-1">
              <input
                type="text"
                placeholder="Type your message..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full text-xs px-2.5 py-1.5 bg-white border border-stone-300 rounded-lg outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="p-1.5 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a]"
                title="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Neat Minimalist Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-md transition-all active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </button>
    </aside>
  );
}
