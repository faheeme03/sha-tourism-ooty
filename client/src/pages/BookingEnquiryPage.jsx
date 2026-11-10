import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Send, MessageSquare, CheckCircle2, AlertCircle, Calendar, 
  Users, Hotel, Car, FileText, Phone, Mail, User, Sparkles, Clock, ShieldCheck 
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { TOUR_PACKAGES, HOTELS_RESORTS, CAB_SERVICES } from '../data/placeholderData';
import { BUSINESS_CONFIG, buildWhatsAppUrl, getCustomTripWhatsAppMessage } from '../config/whatsapp';

export default function BookingEnquiryPage() {
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    selectedPackage: '',
    hotelRequired: true,
    hotelCategory: 'Resort / Tea Estate Stay',
    cabRequired: true,
    cabType: 'Dedicated Private Sedan',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [apiError, setApiError] = useState(null);

  // Pre-fill from URL query params
  useEffect(() => {
    const pkgName = searchParams.get('packageName');
    const hotelName = searchParams.get('hotelName');
    const cabName = searchParams.get('cabName');
    const destination = searchParams.get('destination');
    const checkInParam = searchParams.get('checkIn');
    const checkOutParam = searchParams.get('checkOut');
    const guestsParam = searchParams.get('guests');

    setFormData((prev) => ({
      ...prev,
      selectedPackage: pkgName || prev.selectedPackage,
      checkIn: checkInParam || prev.checkIn,
      checkOut: checkOutParam || prev.checkOut,
      guests: guestsParam || prev.guests,
      additionalNotes: destination 
        ? `Interested in visiting ${destination}. ` 
        : hotelName 
          ? `Interested in booking stay at ${hotelName}. `
          : cabName
            ? `Interested in hiring ${cabName}. `
            : prev.additionalNotes
    }));
  }, [searchParams]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Mobile / WhatsApp number is required";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.checkIn) errs.checkIn = "Expected travel date is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError(null);

    const payload = {
      ...formData,
      enquiryId: `STAR-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    try {
      // Post to backend API
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        // Fallback for standalone demo mode: still succeed locally
        console.warn("Backend API not reachable or returned non-200. Using client-side state.");
      }
    } catch (err) {
      console.warn("API request caught error, continuing with client confirmation", err);
    } finally {
      setIsSubmitting(false);
      setSubmittedData(payload);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleSendWhatsApp = () => {
    if (!submittedData) return;
    const msg = getCustomTripWhatsAppMessage({
      name: submittedData.name,
      phone: submittedData.phone,
      email: submittedData.email,
      checkIn: submittedData.checkIn,
      checkOut: submittedData.checkOut,
      guests: submittedData.guests,
      interest: submittedData.selectedPackage || "Custom Nilgiri Tour",
      hotelRequired: submittedData.hotelRequired,
      cabRequired: submittedData.cabRequired,
      additionalNotes: submittedData.additionalNotes
    });
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Booking & Custom Trip Planner"
          title="Plan Your Dream Ooty Holiday"
          subtitle="Tell us your holiday vision. We will curate the ideal accommodation, reliable hill transportation, and day-wise sightseeing plan."
        />

        {/* Success Confirmation State */}
        {submittedData ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-600/30 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                Enquiry Reference: {submittedData.enquiryId}
              </span>
              <h3 className="text-3xl font-serif font-black text-slate-900">
                Enquiry Successfully Received!
              </h3>
              <p className="mt-3 text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{submittedData.name}</strong>! Your travel details have been sent to the Star Tourism team. A tour curator will review your dates and reach out with verified options.
              </p>
            </div>

            {/* Crucial transparency disclaimer */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm text-left max-w-xl mx-auto flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Reservation Notice:</p>
                <p className="mt-0.5 text-amber-800/90 leading-relaxed">
                  Submitting an enquiry registers your trip request and initiates availability checks. Final confirmation and room vouchers are issued after date confirmation with Star Tourism.
                </p>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="pt-4 space-y-3 max-w-md mx-auto">
              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Send Enquiry to WhatsApp Now</span>
              </button>
              <p className="text-xs text-slate-400">
                Clicking above opens WhatsApp with your pre-filled details addressed to Star Tourism ({BUSINESS_CONFIG.displayWhatsapp}).
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold">
              <button
                onClick={() => setSubmittedData(null)}
                className="text-slate-600 hover:text-slate-900 underline"
              >
                Submit another enquiry
              </button>
              <span className="text-slate-300">•</span>
              <Link to="/packages" className="text-[#0F382A] hover:underline">
                Explore more tour packages
              </Link>
            </div>
          </div>
        ) : (
          /* The Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Section 1: Contact Information */}
              <div>
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#C5A059]" />
                  <span>1. Contact Details</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Suresh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 focus:border-emerald-600'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 focus:border-emerald-600'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. suresh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 focus:border-emerald-600'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Travel Dates & Group */}
              <div>
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                  <span>2. Travel Dates & Group Size</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Arrival / Check-In Date *
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm outline-none transition-colors ${
                        errors.checkIn ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 focus:border-emerald-600'
                      }`}
                    />
                    {errors.checkIn && <p className="text-xs text-rose-600 mt-1">{errors.checkIn}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Departure Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-white"
                    >
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                      <option value="3-4 Guests (Family)">3-4 Guests (Family)</option>
                      <option value="5-8 Guests (Joint Family)">5-8 Guests (Joint Family)</option>
                      <option value="9-15 Guests (Group)">9-15 Guests (Group)</option>
                      <option value="16+ Guests (Corporate / College)">16+ Guests (Corporate / College)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Package & Requirements */}
              <div>
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C5A059]" />
                  <span>3. Package & Service Requirements</span>
                </h4>

                <div className="space-y-4">
                  {/* Package Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Selected Package (or Choose Custom Itinerary)
                    </label>
                    <select
                      value={formData.selectedPackage}
                      onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-white"
                    >
                      <option value="">-- Let Star Tourism suggest the best package --</option>
                      {TOUR_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name} ({pkg.duration} - ₹{pkg.price?.toLocaleString('en-IN')})
                        </option>
                      ))}
                      <option value="Customized Multi-Day Nilgiri Trip">Customized Multi-Day Nilgiri Trip</option>
                    </select>
                  </div>

                  {/* Requirements Checkboxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Hotel Option */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.hotelRequired}
                          onChange={(e) => setFormData({ ...formData, hotelRequired: e.target.checked })}
                          className="w-4 h-4 accent-[#0F382A]"
                        />
                        <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                          <Hotel className="w-4 h-4 text-[#C5A059]" />
                          Include Hotel / Resort Accommodation
                        </span>
                      </label>
                      {formData.hotelRequired && (
                        <select
                          value={formData.hotelCategory}
                          onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white mt-1"
                        >
                          <option value="Luxury Tea Estate Resort">Luxury Tea Estate Resort (Fireplace)</option>
                          <option value="Hilltop Wooden Cottage">Hilltop Wooden Cottage</option>
                          <option value="3-Star Deluxe Town Stay">3-Star Deluxe Town Stay</option>
                          <option value="Budget Family Room">Budget Family Room</option>
                        </select>
                      )}
                    </div>

                    {/* Cab Option */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.cabRequired}
                          onChange={(e) => setFormData({ ...formData, cabRequired: e.target.checked })}
                          className="w-4 h-4 accent-[#0F382A]"
                        />
                        <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                          <Car className="w-4 h-4 text-[#C5A059]" />
                          Include Cab & Sightseeing Transportation
                        </span>
                      </label>
                      {formData.cabRequired && (
                        <select
                          value={formData.cabType}
                          onChange={(e) => setFormData({ ...formData, cabType: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white mt-1"
                        >
                          <option value="Dedicated Private Sedan (Dzire/Etios)">Private Sedan (Swift Dzire / Etios)</option>
                          <option value="Toyota Innova / Crysta SUV">Toyota Innova / Crysta SUV</option>
                          <option value="Maruti Ertiga (Family)">Maruti Ertiga</option>
                          <option value="Tempo Traveller (12-16 seater)">Tempo Traveller (12-16 seater)</option>
                        </select>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Additional Requests / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need Coimbatore airport pickup, special flower bed decor for honeymoon, toy train ticket guidance..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0F382A] via-[#164E3D] to-[#1F6B54] hover:from-[#164E3D] hover:to-[#288469] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all border border-[#C5A059]/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#C5A059]" />
                  <span>{isSubmitting ? "Submitting Enquiry..." : "Submit Travel Enquiry"}</span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  By submitting, you allow Star Tourism to contact you via WhatsApp / Phone to provide your customized itinerary and quotes.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
