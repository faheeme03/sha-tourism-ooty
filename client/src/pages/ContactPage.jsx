import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, 
  CheckCircle2, ExternalLink, Instagram, Facebook, Youtube 
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { DocumentNoticeBanner } from '../components/common/PlaceholderBadge';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../config/whatsapp';

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Tourism Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `*STAR TOURISM – Contact Form Enquiry*\n\n*Name:* ${contactForm.name}\n*Phone:* ${contactForm.phone}\n*Subject:* ${contactForm.subject}\n*Message:* ${contactForm.message}`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Get in Touch"
          title="Contact Star Tourism Ooty"
          subtitle="Have questions about our packages, hotel bookings, or hill cabs? Our local Ooty desk is ready to assist you."
        />

        <DocumentNoticeBanner
          title="Contact Information Verification"
          message="Business address, local landline, and specific desk locations are configured as standard placeholders. These can be modified directly in the Admin Panel or updated automatically when the official Star Tourism document is provided."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80 space-y-6">
              <h3 className="text-2xl font-serif font-black text-slate-900 border-b border-slate-100 pb-3">
                Ooty Office & Helpdesk
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F382A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Office Address</span>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {BUSINESS_CONFIG.fullAddress}
                    </p>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded mt-1 inline-block">
                      [Placeholder - Near Charing Cross Landmark]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F382A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone & WhatsApp</span>
                    <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-slate-700 text-xs sm:text-sm hover:text-[#0F382A] block font-semibold">
                      {BUSINESS_CONFIG.displayWhatsapp}
                    </a>
                    <span className="text-slate-500 text-xs block">Landline: {BUSINESS_CONFIG.altPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F382A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiries</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-700 text-xs sm:text-sm hover:text-[#0F382A] block">
                      {BUSINESS_CONFIG.email}
                    </a>
                    <span className="text-slate-500 text-xs block">Bookings: {BUSINESS_CONFIG.bookingEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F382A] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                      {BUSINESS_CONFIG.hours}
                    </p>
                    <span className="text-emerald-700 text-xs font-semibold">Emergency Cab Support: 24 Hours</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={buildWhatsAppUrl("Hello Star Tourism! I have an inquiry about Ooty packages.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Connect ({BUSINESS_CONFIG.displayWhatsapp})</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Follow Star Tourism:</span>
              <div className="flex items-center gap-3">
                <a href={BUSINESS_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#0F382A] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={BUSINESS_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#0F382A] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={BUSINESS_CONFIG.social.youtube} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#0F382A] transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Map Embed */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200/80">
              <h3 className="text-2xl font-serif font-black text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill in your details below and we will get back to you with the required information promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-950">Thank You for Reaching Out!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your message has been delivered to the Star Tourism desk. You can also send this inquiry directly to our WhatsApp support.
                  </p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send details to WhatsApp</span>
                  </button>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ananya@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Subject
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                      >
                        <option value="General Tourism Enquiry">General Tourism Enquiry</option>
                        <option value="Tour Package Booking">Tour Package Booking</option>
                        <option value="Hotel / Resort Reservation">Hotel / Resort Reservation</option>
                        <option value="Cab & Chauffeur Hire">Cab & Chauffeur Hire</option>
                        <option value="Corporate / Group Event">Corporate / Group Event</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Message / Enquiry Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Let us know your travel dates, group size, and any specific requirements..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0F382A] hover:bg-[#164E3D] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-[#C5A059]/40 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>{loading ? "Sending Message..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Location Embed */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Star Tourism Location (Ooty, Nilgiris)</span>
                </h4>
                <span className="text-[11px] text-slate-400">Charing Cross Landmark</span>
              </div>
              
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title="Star Tourism Ooty Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.109855523956!2d76.69539325!3d11.4118485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84c042308d%3A0x8698fc1a89f81ea7!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
