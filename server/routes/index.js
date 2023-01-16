const router = require('express').Router();

router.use('/auth', require('./login'));

module.exports = router;
