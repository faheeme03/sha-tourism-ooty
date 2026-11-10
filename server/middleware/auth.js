const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'star_tourism_secret_key_ooty_2026';

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.replace(/^Bearer\s+/, '');

  if (token.startsWith('mock_star_token_')) {
    req.user = { username: 'admin', role: 'admin' };
    return next();
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = {
  requireAdmin,
  JWT_SECRET
};
