const express = require('express');
const router = express.Router();
const { readCollection, writeCollection } = require('../data/storageEngine');
const { INITIAL_SETTINGS } = require('../data/seedData');
const { requireAdmin } = require('../middleware/auth');

// GET settings
router.get('/', (req, res) => {
  const settingsList = readCollection('settings', [INITIAL_SETTINGS]);
  const settings = settingsList[0] || INITIAL_SETTINGS;
  res.json(settings);
});

// PUT update settings (admin)
router.put('/', requireAdmin, (req, res) => {
  const settingsList = readCollection('settings', [INITIAL_SETTINGS]);
  const current = settingsList[0] || INITIAL_SETTINGS;
  const updated = { ...current, ...req.body, updatedAt: new Date().toISOString() };
  writeCollection('settings', [updated]);
  res.json(updated);
});

module.exports = router;
