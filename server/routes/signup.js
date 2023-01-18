const router = require('express').Router();
const { User } = require('../db/index');

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const createUser = await User.create(newUser);

    res.status(201).send('Account successfully created!');
    // res.send(console.log(createUser));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
