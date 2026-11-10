import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import TourPackagesPage from './pages/TourPackagesPage';
import HotelsPage from './pages/HotelsPage';
import CabServicesPage from './pages/CabServicesPage';
import SightseeingPage from './pages/SightseeingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import BookingEnquiryPage from './pages/BookingEnquiryPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen text-slate-800 bg-[#FBF9F5] selection:bg-[#C5A059] selection:text-white">
      <ScrollToTop />
      
      {/* Public Navbar (Hidden on Admin pages) */}
      {!isAdminRoute && <Navbar />}

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<TourPackagesPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/cabs" element={<CabServicesPage />} />
          <Route path="/sightseeing" element={<SightseeingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingEnquiryPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Public Footer & Floating WhatsApp */}
      {!isAdminRoute && (
        <>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}
