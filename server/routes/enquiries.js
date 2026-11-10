const express = require('express');
const router = express.Router();
const { readCollection, writeCollection } = require('../data/storageEngine');
const { requireAdmin } = require('../middleware/auth');

// POST submit new enquiry
router.post('/', (req, res) => {
  const enquiries = readCollection('enquiries', []);
  const newEnquiry = {
    ...req.body,
    id: req.body.enquiryId || `STAR-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: req.body.status || 'New'
  };

  enquiries.unshift(newEnquiry);
  writeCollection('enquiries', enquiries);

  console.log(`📩 New Customer Booking Enquiry received: ${newEnquiry.id} (${newEnquiry.name})`);
  res.status(201).json({ success: true, enquiry: newEnquiry });
});

// GET all enquiries (admin)
router.get('/', requireAdmin, (req, res) => {
  const enquiries = readCollection('enquiries', []);
  res.json(enquiries);
});

// PUT update enquiry status (admin)
router.put('/:id/status', requireAdmin, (req, res) => {
  const enquiries = readCollection('enquiries', []);
  const idx = enquiries.findIndex(e => e.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Enquiry not found' });

  enquiries[idx].status = req.body.status;
  enquiries[idx].updatedAt = new Date().toISOString();
  writeCollection('enquiries', enquiries);

  res.json(enquiries[idx]);
});

module.exports = router;
