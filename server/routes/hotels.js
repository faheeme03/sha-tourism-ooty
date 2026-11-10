const express = require('express');
const router = express.Router();
const { readCollection, writeCollection } = require('../data/storageEngine');
const { INITIAL_HOTELS } = require('../data/seedData');
const { requireAdmin } = require('../middleware/auth');

router.get('/', (req, res) => {
  const hotels = readCollection('hotels', INITIAL_HOTELS);
  res.json(hotels);
});

router.post('/', requireAdmin, (req, res) => {
  const hotels = readCollection('hotels', INITIAL_HOTELS);
  const newHotel = {
    ...req.body,
    id: req.body.id || `hotel-${Date.now()}`
  };
  hotels.unshift(newHotel);
  writeCollection('hotels', hotels);
  res.status(201).json(newHotel);
});

router.put('/:id', requireAdmin, (req, res) => {
  const hotels = readCollection('hotels', INITIAL_HOTELS);
  const idx = hotels.findIndex(h => h.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Hotel not found' });

  hotels[idx] = { ...hotels[idx], ...req.body };
  writeCollection('hotels', hotels);
  res.json(hotels[idx]);
});

router.delete('/:id', requireAdmin, (req, res) => {
  let hotels = readCollection('hotels', INITIAL_HOTELS);
  hotels = hotels.filter(h => h.id !== req.params.id);
  writeCollection('hotels', hotels);
  res.json({ success: true, message: 'Hotel listing deleted' });
});

module.exports = router;
