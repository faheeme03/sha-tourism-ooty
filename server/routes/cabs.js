const express = require('express');
const router = express.Router();
const { readCollection, writeCollection } = require('../data/storageEngine');
const { INITIAL_CABS } = require('../data/seedData');
const { requireAdmin } = require('../middleware/auth');

router.get('/', (req, res) => {
  const cabs = readCollection('cabs', INITIAL_CABS);
  res.json(cabs);
});

router.post('/', requireAdmin, (req, res) => {
  const cabs = readCollection('cabs', INITIAL_CABS);
  const newCab = {
    ...req.body,
    id: req.body.id || `cab-${Date.now()}`
  };
  cabs.unshift(newCab);
  writeCollection('cabs', cabs);
  res.status(201).json(newCab);
});

router.put('/:id', requireAdmin, (req, res) => {
  const cabs = readCollection('cabs', INITIAL_CABS);
  const idx = cabs.findIndex(c => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Cab not found' });

  cabs[idx] = { ...cabs[idx], ...req.body };
  writeCollection('cabs', cabs);
  res.json(cabs[idx]);
});

router.delete('/:id', requireAdmin, (req, res) => {
  let cabs = readCollection('cabs', INITIAL_CABS);
  cabs = cabs.filter(c => c.id !== req.params.id);
  writeCollection('cabs', cabs);
  res.json({ success: true, message: 'Cab listing deleted' });
});

module.exports = router;
