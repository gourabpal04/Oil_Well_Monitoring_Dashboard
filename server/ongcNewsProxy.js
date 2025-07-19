const express = require('express');
const router = express.Router();

router.get('/ongc-news', (req, res) => {
  res.status(501).json({ error: 'ONGC news fetching is disabled. Please update news manually.' });
});

module.exports = router; 