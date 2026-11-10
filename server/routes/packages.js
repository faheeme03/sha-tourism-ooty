const express = require('express');
const router = express.Router();
const { readCollection, writeCollection } = require('../data/storageEngine');
const { INITIAL_PACKAGES } = require('../data/seedData');
const { requireAdmin } = require('../middleware/auth');

// GET all packages
router.get('/', (req, res) => {
  const packages = readCollection('packages', INITIAL_PACKAGES);
  res.json(packages);
});

// GET single package
router.get('/:id', (req, res) => {
  const packages = readCollection('packages', INITIAL_PACKAGES);
  const pkg = packages.find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!pkg) return res.status(404).json({ error: 'Package not found' });
  res.json(pkg);
});

// POST create package (admin)
router.post('/', requireAdmin, (req, res) => {
  const packages = readCollection('packages', INITIAL_PACKAGES);
  const newPkg = {
    ...req.body,
    id: req.body.id || `pkg-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  packages.unshift(newPkg);
  writeCollection('packages', packages);
  res.status(201).json(newPkg);
});

// PUT update package (admin)
router.put('/:id', requireAdmin, (req, res) => {
  const packages = readCollection('packages', INITIAL_PACKAGES);
  const idx = packages.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Package not found' });

  packages[idx] = { ...packages[idx], ...req.body, updatedAt: new Date().toISOString() };
  writeCollection('packages', packages);
  res.json(packages[idx]);
});

// DELETE package (admin)
router.delete('/:id', requireAdmin, (req, res) => {
  let packages = readCollection('packages', INITIAL_PACKAGES);
  const initialLength = packages.length;
  packages = packages.filter(p => p.id !== req.params.id);
  if (packages.length === initialLength) {
    return res.status(404).json({ error: 'Package not found' });
  }
  writeCollection('packages', packages);
  res.json({ success: true, message: 'Package deleted successfully' });
});

module.exports = router;
