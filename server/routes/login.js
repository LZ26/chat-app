const router = require('express').Router();
const cors = require('cors');

router.use(cors());

router.use('/', async (req, res, next) => {
  try {
    await res.send({
      token: 'test123',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
