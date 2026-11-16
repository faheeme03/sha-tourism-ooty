// Centralized WhatsApp & Contact Configuration
// Editable via Admin Dashboard and configurable here as the master fallback.

export const BUSINESS_CONFIG = {
  brandName: "SHA TOURISM",
  tagline: "Queen of Hill Stations Holiday Specialists",
  location: "Old Ooty, The Nilgiris, Tamil Nadu, India",
  fullAddress: "183, Missionary Hills, Old Ooty, Tamil Nadu - 643001",
  
  // WhatsApp Configuration (Default configurable placeholder)
  // Format: Country code without '+' or special symbols, e.g. 919876543210
  whatsappNumber: "919159627527", 
  displayWhatsapp: "+91 91596 27527",
  
  // Phone placeholders
  phone: "+91 91596 27527",
  altPhone: "+91 91596 27527",
  email: "",
  bookingEmail: "",
  
  // Operating Hours
  hours: "Monday – Sunday: 7:00 AM – 10:30 PM",
  
  // Social links
  social: {
    instagram: "https://instagram.com/shatourismooty",
    facebook: "https://facebook.com/shatourismooty",
    youtube: "https://youtube.com/@shatourismooty"
  }
};

/**
 * Builds a direct WhatsApp click-to-chat URL with pre-filled message
 * @param {string} text - Message text
 * @param {string} customNumber - Optional override phone number
 * @returns {string} - WhatsApp API URL
 */
export const buildWhatsAppUrl = (text, customNumber = null) => {
  const number = customNumber || BUSINESS_CONFIG.whatsappNumber;
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${number}?text=${encodedText}`;
};

/**
 * WhatsApp message generator for Package Enquiry
 */
export const getPackageWhatsAppMessage = (pkg, guestDetails = {}) => {
  const lines = [
    `*SHA TOURISM – Tour Package Enquiry* 🌲⭐`,
    ``,
    `*Package:* ${pkg.name || "Custom Ooty Package"}`,
    `*Duration:* ${pkg.duration || "N/A"}`,
    pkg.price ? `*Price Reference:* ₹${pkg.price.toLocaleString('en-IN')}` : '',
    guestDetails.travelDate ? `*Expected Travel Date:* ${guestDetails.travelDate}` : '',
    guestDetails.guests ? `*Number of Guests:* ${guestDetails.guests}` : '',
    guestDetails.name ? `*Customer Name:* ${guestDetails.name}` : '',
    guestDetails.notes ? `*Custom Notes:* ${guestDetails.notes}` : '',
    ``,
    `Hello Sha Tourism team! I am interested in this package. Please share availability, final pricing, and detailed itinerary. Thank you!`
  ].filter(line => line !== '');

  return lines.join('\n');
};

/**
 * WhatsApp message generator for Hotel Booking Enquiry
 */
export const getHotelWhatsAppMessage = (hotel, details = {}) => {
  const lines = [
    `*SHA TOURISM – Hotel & Resort Enquiry* 🏨✨`,
    ``,
    `*Hotel Name:* ${hotel.name}`,
    `*Room Category:* ${details.roomType || hotel.roomTypes?.[0]?.name || "Standard Luxury Room"}`,
    hotel.startingPrice ? `*Tariff Reference:* ₹${hotel.startingPrice.toLocaleString('en-IN')}/night` : '',
    details.checkIn ? `*Check-in Date:* ${details.checkIn}` : '',
    details.checkOut ? `*Check-out Date:* ${details.checkOut}` : '',
    details.guests ? `*Guests & Rooms:* ${details.guests} guests` : '',
    details.name ? `*Name:* ${details.name}` : '',
    ``,
    `Kindly check room availability and share the best package rate with Sha Tourism. Thank you!`
  ].filter(line => line !== '');

  return lines.join('\n');
};

/**
 * WhatsApp message generator for Cab Rental Enquiry
 */
export const getCabWhatsAppMessage = (cab, details = {}) => {
  const lines = [
    `*SHA TOURISM – Cab & Travel Services Enquiry* 🚖🏔️`,
    ``,
    `*Vehicle Type:* ${cab.name} (${cab.capacity})`,
    `*AC Type:* ${cab.acType || 'AC / Climate Control'}`,
    `*Service Required:* ${details.serviceType || 'Ooty Local Sightseeing & Nilgiri Tour'}`,
    details.pickupDate ? `*Pickup Date & Time:* ${details.pickupDate}` : '',
    details.pickupLocation ? `*Pickup Location:* ${details.pickupLocation}` : '',
    details.destination ? `*Destination / Itinerary:* ${details.destination}` : '',
    details.name ? `*Customer Name:* ${details.name}` : '',
    ``,
    `Please share the driver & cab rental fare quotation and confirmation procedure. Thank you!`
  ].filter(line => line !== '');

  return lines.join('\n');
};

/**
 * WhatsApp message generator for Custom Holiday Planner
 */
export const getCustomTripWhatsAppMessage = (formData) => {
  return [
    `*SHA TOURISM – Custom Ooty Holiday Planner* 🌟`,
    ``,
    `*Customer Name:* ${formData.name || 'Traveler'}`,
    `*Mobile:* ${formData.phone || 'N/A'}`,
    `*Email:* ${formData.email || 'N/A'}`,
    `*Travel Dates:* ${formData.checkIn || 'TBD'} to ${formData.checkOut || 'TBD'}`,
    `*Total Guests:* ${formData.guests || '1-2'}`,
    `*Package / Interest:* ${formData.interest || 'Ooty Complete Sightseeing'}`,
    `*Hotel Requirement:* ${formData.hotelRequired ? 'Yes (Resort/Hotel)' : 'No'}`,
    `*Cab Rental Requirement:* ${formData.cabRequired ? 'Yes (Local/Outstation)' : 'No'}`,
    formData.additionalNotes ? `*Special Requests:* ${formData.additionalNotes}` : '',
    ``,
    `Kindly craft a tailored Ooty holiday itinerary and quotation for our trip. Look forward to exploring Ooty with Sha Tourism!`
  ].filter(Boolean).join('\n');
};
