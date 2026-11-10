import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Send, MessageSquare, CheckCircle2, Calendar, 
  Users, Hotel, Car, ArrowRight, ShieldCheck 
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { TOUR_PACKAGES } from '../data/placeholderData';
import { BUSINESS_CONFIG, buildWhatsAppUrl, getCustomTripWhatsAppMessage } from '../config/whatsapp';

export default function BookingEnquiryPage() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    guests: '2 Guests (Couple)',
    selectedPackage: '',
    hotelRequired: true,
    cabRequired: true,
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const pkgName = searchParams.get('packageName');
    const hotelName = searchParams.get('hotelName');
    const cabName = searchParams.get('cabName');
    const checkInParam = searchParams.get('checkIn');
    const guestsParam = searchParams.get('guests');

    setFormData((prev) => ({
      ...prev,
      selectedPackage: pkgName || prev.selectedPackage,
      checkIn: checkInParam || prev.checkIn,
      guests: guestsParam || prev.guests,
      additionalNotes: hotelName 
        ? `Interested in ${hotelName}. `
        : cabName 
          ? `Interested in ${cabName}. `
          : prev.additionalNotes
    }));
  }, [searchParams]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Mobile or WhatsApp number required";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid 10-digit number";
    }
    if (!formData.checkIn) errs.checkIn = "Please choose a travel date";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      enquiryId: `SHA-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn("Backend API call fallback", err);
    } finally {
      setIsSubmitting(false);
      setSubmittedData(payload);
      
      // Instantly open WhatsApp with formatted details!
      const msg = getCustomTripWhatsAppMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        checkIn: formData.checkIn,
        guests: formData.guests,
        interest: formData.selectedPackage || "Ooty Holiday",
        hotelRequired: formData.hotelRequired,
        cabRequired: formData.cabRequired,
        additionalNotes: formData.additionalNotes
      });
      window.open(buildWhatsAppUrl(msg), '_blank');
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handleSendWhatsApp = () => {
    if (!submittedData) return;
    const msg = getCustomTripWhatsAppMessage({
      name: submittedData.name,
      phone: submittedData.phone,
      email: submittedData.email,
      checkIn: submittedData.checkIn,
      guests: submittedData.guests,
      interest: submittedData.selectedPackage || "Ooty Holiday",
      hotelRequired: submittedData.hotelRequired,
      cabRequired: submittedData.cabRequired,
      additionalNotes: submittedData.additionalNotes
    });
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-[#faf9f6] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <SectionHeader
          badge="Simple Booking & Enquiry"
          title="Plan Your Ooty Trip"
          subtitle="Share your travel dates and requirements. We will prepare your itinerary and send it directly on WhatsApp."
        />

        {submittedData ? (
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 text-center space-y-5 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                Ref: {submittedData.enquiryId}
              </span>
              <h3 className="text-2xl font-serif font-black text-stone-900 mt-1">
                Enquiry Received!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Thank you, <strong>{submittedData.name}</strong>. Our Ooty travel desk has received your request and will contact you promptly.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-xs transition-transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp Directly</span>
              </button>
            </div>

            <p className="text-[11px] text-stone-400">
              * Official confirmation is issued after date & accommodation availability verification.
            </p>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-center gap-4 text-xs">
              <button
                onClick={() => setSubmittedData(null)}
                className="text-stone-600 underline"
              >
                Submit another request
              </button>
              <span>•</span>
              <Link to="/packages" className="text-[#12372A] font-medium">
                Browse Packages
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Contact */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  1. Your Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Suresh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-colors ${
                        errors.name ? 'border-rose-300 bg-rose-50/40' : 'border-stone-300 focus:border-[#12372A]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-colors ${
                        errors.phone ? 'border-rose-300 bg-rose-50/40' : 'border-stone-300 focus:border-[#12372A]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. suresh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm outline-none focus:border-[#12372A]"
                  />
                </div>
              </div>

              {/* Trip Timing */}
              <div className="space-y-3 pt-3 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  2. Travel Dates & Group
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Expected Travel Date *
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm outline-none cursor-pointer ${
                        errors.checkIn ? 'border-rose-300 bg-rose-50/40' : 'border-stone-300 focus:border-[#12372A]'
                      }`}
                    />
                    {errors.checkIn && <p className="text-[11px] text-rose-500 mt-1">{errors.checkIn}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm outline-none bg-white"
                    >
                      <option value="1 Solo Traveler">1 Solo</option>
                      <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                      <option value="3-4 Guests (Family)">3-4 Guests (Family)</option>
                      <option value="5-8 Guests (Joint Family)">5-8 Guests (Joint Family)</option>
                      <option value="9+ Guests (Group Tour)">9+ Guests (Group Tour)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Select Package or Custom Plan
                  </label>
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm outline-none bg-white"
                  >
                    <option value="">-- Let Sha Tourism suggest the best package --</option>
                    {TOUR_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} ({pkg.duration})
                      </option>
                    ))}
                    <option value="Custom Nilgiri Tour">Customized Multi-Day Tour</option>
                  </select>
                </div>
              </div>

              {/* Preferences: Simple neat checkboxes */}
              <div className="space-y-3 pt-3 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  3. What Should We Include?
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-2 transition-all ${
                    formData.hotelRequired ? 'border-[#12372A] bg-stone-50 font-semibold text-[#12372A]' : 'border-stone-200 text-stone-600'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.hotelRequired}
                      onChange={(e) => setFormData({ ...formData, hotelRequired: e.target.checked })}
                      className="accent-[#12372A]"
                    />
                    <span>Hotel / Resort</span>
                  </label>

                  <label className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-2 transition-all ${
                    formData.cabRequired ? 'border-[#12372A] bg-stone-50 font-semibold text-[#12372A]' : 'border-stone-200 text-stone-600'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.cabRequired}
                      onChange={(e) => setFormData({ ...formData, cabRequired: e.target.checked })}
                      className="accent-[#12372A]"
                    />
                    <span>Sightseeing Cab</span>
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Special Notes / Pickup Points
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Coimbatore airport pickup, toy train assistance..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-stone-300 text-xs outline-none focus:border-[#12372A]"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xs transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{isSubmitting ? "Connecting..." : "Confirm & Send to WhatsApp"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-stone-400 text-center mt-2">
                  No online payment needed. Direct WhatsApp connection with SHA Tourism team for confirmation & customized arrangements.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
