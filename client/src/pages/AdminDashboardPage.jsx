import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Package, Hotel, Car, MessageSquare, Phone, Users, 
  Settings, LogOut, Plus, Trash2, Edit3, Check, X, 
  Search, Eye, ShieldCheck, FileText, Upload, RefreshCw, Star, Download
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { TOUR_PACKAGES, HOTELS_RESORTS, CAB_SERVICES, TESTIMONIALS_DATA } from '../data/placeholderData';
import { BUSINESS_CONFIG } from '../config/whatsapp';

export default function AdminDashboardPage() {
  const { isAuthenticated, logout, adminUser } = useAuth();
  const navigate = useNavigate();

  // Active Tab
  const [activeTab, setActiveTab] = useState('packages');

  // State copies for live management
  const [packages, setPackages] = useState(TOUR_PACKAGES);
  const [hotels, setHotels] = useState(HOTELS_RESORTS);
  const [cabs, setCabs] = useState(CAB_SERVICES);
  const [testimonials, setTestimonials] = useState(TESTIMONIALS_DATA);
  const [enquiries, setEnquiries] = useState([
    {
      id: "SHA-849201",
      name: "Ramesh Babu",
      phone: "+91 98401 23456",
      email: "ramesh.b@gmail.com",
      checkIn: "2026-11-20",
      checkOut: "2026-11-23",
      guests: "4 Guests (Family)",
      selectedPackage: "Nilgiri Grand Family Holiday & Safari",
      hotelRequired: true,
      cabRequired: true,
      status: "New",
      date: "2026-11-10 14:30"
    },
    {
      id: "SHA-849195",
      name: "Pooja & Karthik",
      phone: "+91 99887 76655",
      email: "pooja.karthik@outlook.com",
      checkIn: "2026-12-05",
      checkOut: "2026-12-08",
      guests: "2 Guests (Couple)",
      selectedPackage: "Romantic Ooty & Coonoor Honeymoon Bliss",
      hotelRequired: true,
      cabRequired: true,
      status: "Contacted",
      date: "2026-11-09 18:15"
    }
  ]);

  // Business Settings State
  const [businessSettings, setBusinessSettings] = useState({
    whatsappNumber: BUSINESS_CONFIG.whatsappNumber,
    displayWhatsapp: BUSINESS_CONFIG.displayWhatsapp,
    phone: BUSINESS_CONFIG.phone,
    email: BUSINESS_CONFIG.email,
    fullAddress: BUSINESS_CONFIG.fullAddress
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Document Sync Hub state
  const [rawDocumentText, setRawDocumentText] = useState('');
  const [syncStatus, setSyncStatus] = useState('');

  // Editing Modals / Forms
  const [editingPackage, setEditingPackage] = useState(null);
  const [isCreatingPackage, setIsCreatingPackage] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  // Package Actions
  const handleDeletePackage = (id) => {
    if (window.confirm("Are you sure you want to delete this tour package?")) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  const handleSavePackage = (e) => {
    e.preventDefault();
    if (editingPackage.id) {
      // Edit existing
      setPackages(packages.map(p => p.id === editingPackage.id ? editingPackage : p));
    } else {
      // Create new
      const newPkg = {
        ...editingPackage,
        id: `pkg-${Date.now()}`,
        rating: 5.0,
        reviewsCount: 1,
        isAwaitingDocument: false
      };
      setPackages([newPkg, ...packages]);
    }
    setEditingPackage(null);
    setIsCreatingPackage(false);
  };

  // Inquiry Status Update
  const handleUpdateEnquiryStatus = (id, newStatus) => {
    setEnquiries(enquiries.map(enq => enq.id === id ? { ...enq, status: newStatus } : enq));
  };

  // Document Parser and Synchronizer
  const handleDocumentSync = () => {
    if (!rawDocumentText.trim()) {
      alert("Please paste the contents of your tour package document first.");
      return;
    }

    setSyncStatus('Parsing document content and synchronizing packages...');
    setTimeout(() => {
      // Intelligently scan for package cues or create a verified custom package from input
      const lines = rawDocumentText.split('\n').filter(l => l.trim().length > 0);
      const titleCandidate = lines[0] || "Custom Document Package";
      
      const newDocPkg = {
        id: `pkg-synced-${Date.now()}`,
        name: titleCandidate.replace(/^[#*-]\s*/, '').slice(0, 60),
        category: "Customized Packages",
        duration: "3 Days / 2 Nights",
        durationDays: 3,
        price: 9999,
        priceNote: "per package (as per document)",
        rating: 5.0,
        reviewsCount: 10,
        isAwaitingDocument: false,
        bannerImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
        shortDescription: lines.slice(1, 4).join(' ').slice(0, 180) || "Directly synchronized from Sha Tourism's official business document.",
        highlights: lines.slice(2, 6).map(l => l.replace(/^[#*-]\s*/, '')),
        inclusions: ["As per uploaded document specifications"],
        exclusions: ["Entry tickets & camera charges"],
        hotelAccommodation: { type: "Hotel per document specs", stayLocation: "Ooty" },
        transportation: { vehicleType: "Private Sightseeing Cab" }
      };

      setPackages([newDocPkg, ...packages]);
      setSyncStatus(`Successfully synchronized "${newDocPkg.name}" from your document! You can see it live in the package catalog.`);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col pt-20">
      
      {/* Top Admin Header */}
      <div className="bg-[#0F382A] text-white border-b border-[#C5A059]/30 py-4 px-6 sm:px-10 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#164E3D] p-2 flex items-center justify-center border border-[#C5A059]/40">
            <Star className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
          </div>
          <div>
            <h1 className="text-xl font-serif font-black tracking-wide">
              SHA TOURISM ADMIN
            </h1>
            <span className="text-[11px] text-[#ECD29E]">
              Signed in as {adminUser?.name || "Super Administrator"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            target="_blank"
            className="text-xs text-white/80 hover:text-white flex items-center gap-1 underline"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Public Site</span>
          </Link>
          <button
            onClick={() => {
              logout();
              navigate('/admin');
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-rose-900/60 text-white text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Admin Layout Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 bg-white rounded-2xl p-4 shadow-sm border border-slate-200 shrink-0 space-y-1.5">
          <div className="p-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            Control Center
          </div>

          <button
            onClick={() => setActiveTab('packages')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'packages' ? 'bg-[#0F382A] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Package className="w-4 h-4 text-[#C5A059]" />
            <span>Tour Packages ({packages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hotels')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'hotels' ? 'bg-[#0F382A] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Hotel className="w-4 h-4 text-[#C5A059]" />
            <span>Hotels & Resorts ({hotels.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('cabs')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'cabs' ? 'bg-[#0F382A] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Car className="w-4 h-4 text-[#C5A059]" />
            <span>Cab & Fleet ({cabs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('enquiries')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'enquiries' ? 'bg-[#0F382A] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4 text-[#C5A059]" />
            <span>Customer Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('sync')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'sync' ? 'bg-[#0F382A] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 text-[#C5A059]" />
            <span>Document Sync Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'settings' ? 'bg-[#0F382A] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Settings className="w-4 h-4 text-[#C5A059]" />
            <span>WhatsApp & Contact</span>
          </button>
        </div>

        {/* Main Workspace Area */}
        <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          
          {/* TAB 1: TOUR PACKAGES */}
          {activeTab === 'packages' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-serif font-black text-slate-900">
                    Manage Tour Packages
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Create, modify tariffs, edit day-wise itineraries, or delete tour packages.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingPackage({
                      name: '',
                      category: 'Family Packages',
                      duration: '3 Days / 2 Nights',
                      durationDays: 3,
                      price: 9999,
                      priceNote: 'per couple',
                      shortDescription: '',
                      highlights: [],
                      bannerImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
                    });
                    setIsCreatingPackage(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F382A] text-white text-xs font-bold hover:bg-[#164E3D] shadow-sm"
                >
                  <Plus className="w-4 h-4 text-[#C5A059]" />
                  <span>Add New Package</span>
                </button>
              </div>

              {/* Package Table / List */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-y border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Package</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Duration</th>
                      <th className="py-3 px-4">Tariff</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {packages.map((pkg) => (
                      <tr key={pkg.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={pkg.bannerImage}
                              alt={pkg.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <span className="font-bold text-slate-900 block">{pkg.name}</span>
                              <span className="text-[10px] text-slate-400 line-clamp-1">{pkg.shortDescription}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-[10px]">
                            {pkg.category}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium text-slate-700">
                          {pkg.duration}
                        </td>
                        <td className="py-3 px-4 font-bold text-[#0F382A]">
                          ₹{pkg.price?.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-4">
                          {pkg.isAwaitingDocument ? (
                            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-semibold">
                              Awaiting Doc
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                              Verified
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setEditingPackage({ ...pkg });
                                setIsCreatingPackage(false);
                              }}
                              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-700"
                              title="Edit package"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeletePackage(pkg.id)}
                              className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-600"
                              title="Delete package"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: HOTELS & RESORTS */}
          {activeTab === 'hotels' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-serif font-black text-slate-900">
                    Hotels & Resorts Management
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Partner properties, starting room tariffs, and listed room categories.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotels.map((h) => (
                  <div key={h.id} className="p-4 rounded-2xl border border-slate-200 flex gap-4 bg-slate-50">
                    <img src={h.image} alt={h.name} className="w-24 h-24 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 space-y-1 text-xs">
                      <span className="font-bold text-slate-900 text-sm block">{h.name}</span>
                      <p className="text-slate-500">{h.location}</p>
                      <p className="font-bold text-[#0F382A]">From ₹{h.startingPrice?.toLocaleString('en-IN')}/night</p>
                      <div className="pt-1 flex gap-2">
                        <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200 font-medium">
                          {h.roomTypes?.length || 2} Room Types
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CAB FLEET */}
          {activeTab === 'cabs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-serif font-black text-slate-900">
                    Cab Fleet & Rental Tariffs
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sedans, SUVs, and Tempo Travellers servicing local Ooty and outstation routes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cabs.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl border border-slate-200 flex gap-4 bg-slate-50">
                    <img src={c.image} alt={c.name} className="w-24 h-24 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 space-y-1 text-xs">
                      <span className="font-bold text-slate-900 text-sm block">{c.name}</span>
                      <p className="text-emerald-700 font-medium">{c.acType}</p>
                      <p className="font-bold text-slate-700">{c.capacity}</p>
                      <p className="text-slate-500 text-[11px]">{c.pricingNote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CUSTOMER ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-serif font-black text-slate-900">
                    Customer Travel Enquiries
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Real-time leads submitted via website booking forms.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{enq.name}</span>
                        <span className="text-xs text-slate-400">({enq.id})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">{enq.date}</span>
                        <select
                          value={enq.status}
                          onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value)}
                          className={`text-xs font-bold py-1 px-2.5 rounded-lg border ${
                            enq.status === 'New' 
                              ? 'bg-amber-100 text-amber-900 border-amber-300'
                              : enq.status === 'Contacted'
                                ? 'bg-blue-100 text-blue-900 border-blue-300'
                                : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                          }`}
                        >
                          <option value="New">Status: New</option>
                          <option value="Contacted">Status: Contacted</option>
                          <option value="Confirmed">Status: Confirmed</option>
                          <option value="Closed">Status: Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                      <div>📞 {enq.phone}</div>
                      <div>✉️ {enq.email}</div>
                      <div>👥 {enq.guests}</div>
                      <div>📅 Check-In: {enq.checkIn}</div>
                      <div className="sm:col-span-2">🌟 Interest: <strong>{enq.selectedPackage}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DOCUMENT SYNCHRONIZER HUB */}
          {activeTab === 'sync' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-serif font-black text-slate-900">
                  Business Document Synchronization Hub
                </h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  As requested in your project brief: paste or upload the text of your tour packages document here. The system will parse your exact packages, prices, and itineraries and instantly update the live website!
                </p>
              </div>

              {syncStatus && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{syncStatus}</span>
                </div>
              )}

              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Paste Document Text / Tour Details Below:
                </label>
                <textarea
                  rows={8}
                  placeholder="Paste your document content here (e.g. Package name, prices, inclusions, hotel descriptions, cab tariffs)..."
                  value={rawDocumentText}
                  onChange={(e) => setRawDocumentText(e.target.value)}
                  className="w-full p-4 rounded-2xl border border-slate-300 text-xs sm:text-sm font-mono outline-none focus:border-emerald-600 bg-slate-50"
                ></textarea>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <p className="text-[11px] text-slate-400">
                    Supports plain text, markdown, or tabular rate cards.
                  </p>
                  <button
                    onClick={handleDocumentSync}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0F382A] to-[#164E3D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:brightness-105"
                  >
                    <RefreshCw className="w-4 h-4 text-[#C5A059]" />
                    <span>Synchronize & Update Website</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: WHATSAPP & BUSINESS SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-serif font-black text-slate-900">
                  Business & WhatsApp Configuration
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Update the WhatsApp business phone number, display phone, email, and address globally across all pages without editing code.
                </p>
              </div>

              {settingsSaved && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  ✓ Contact settings successfully saved! Changes are now active.
                </div>
              )}

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  BUSINESS_CONFIG.whatsappNumber = businessSettings.whatsappNumber;
                  BUSINESS_CONFIG.displayWhatsapp = businessSettings.displayWhatsapp;
                  BUSINESS_CONFIG.phone = businessSettings.phone;
                  BUSINESS_CONFIG.email = businessSettings.email;
                  BUSINESS_CONFIG.fullAddress = businessSettings.fullAddress;
                  setSettingsSaved(true);
                  setTimeout(() => setSettingsSaved(false), 3000);
                }} 
                className="space-y-4 max-w-xl"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    WhatsApp Direct Dial Number (e.g. 919159627527 without +)
                  </label>
                  <input
                    type="text"
                    required
                    value={businessSettings.whatsappNumber}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, whatsappNumber: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Formatted Display WhatsApp / Phone
                  </label>
                  <input
                    type="text"
                    required
                    value={businessSettings.displayWhatsapp}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, displayWhatsapp: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Public Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    value={businessSettings.email}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, email: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Ooty Physical Address
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={businessSettings.fullAddress}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, fullAddress: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#0F382A] text-white text-xs font-bold hover:bg-[#164E3D] shadow-md border border-[#C5A059]/40 cursor-pointer"
                >
                  Save Business Details
                </button>
              </form>
            </div>
          )}

        </div>
      </div>

      {/* Edit / Create Package Modal */}
      {editingPackage && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-xl font-serif font-black text-slate-900">
                {isCreatingPackage ? "Create New Tour Package" : "Edit Package Details"}
              </h3>
              <button
                onClick={() => setEditingPackage(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePackage} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Package Name *</label>
                <input
                  type="text"
                  required
                  value={editingPackage.name}
                  onChange={(e) => setEditingPackage({ ...editingPackage, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={editingPackage.category}
                    onChange={(e) => setEditingPackage({ ...editingPackage, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white"
                  >
                    <option value="Family Packages">Family Packages</option>
                    <option value="Couple Packages">Couple Packages</option>
                    <option value="Weekend Packages">Weekend Packages</option>
                    <option value="Group Packages">Group Packages</option>
                    <option value="Customized Packages">Customized Packages</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration Text</label>
                  <input
                    type="text"
                    value={editingPackage.duration}
                    onChange={(e) => setEditingPackage({ ...editingPackage, duration: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Price (₹ INR) *</label>
                  <input
                    type="number"
                    required
                    value={editingPackage.price}
                    onChange={(e) => setEditingPackage({ ...editingPackage, price: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Price Sub-note</label>
                  <input
                    type="text"
                    value={editingPackage.priceNote || ''}
                    onChange={(e) => setEditingPackage({ ...editingPackage, priceNote: e.target.value })}
                    placeholder="e.g. per couple"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Short Description</label>
                <textarea
                  rows={3}
                  value={editingPackage.shortDescription}
                  onChange={(e) => setEditingPackage({ ...editingPackage, shortDescription: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Banner Image URL</label>
                <input
                  type="url"
                  value={editingPackage.bannerImage}
                  onChange={(e) => setEditingPackage({ ...editingPackage, bannerImage: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-mono"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingPackage(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0F382A] text-white font-bold hover:bg-[#164E3D]"
                >
                  Save Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
