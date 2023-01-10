const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    await res.json({ message: 'Testing server routes' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
