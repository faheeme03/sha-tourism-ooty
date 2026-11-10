const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../middleware/auth');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Authenticate admin (Default: admin / ShaOoty2026!)
  const expectedUser = process.env.ADMIN_USER || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || 'ShaOoty2026!';

  if (username === expectedUser && password === expectedPass) {
    const token = jwt.sign(
      { username: expectedUser, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      token,
      user: {
        username: expectedUser,
        role: 'Super Administrator',
        name: 'Sha Tourism Manager'
      }
    });
  }

  return res.status(401).json({ error: 'Invalid username or password' });
});

module.exports = router;
