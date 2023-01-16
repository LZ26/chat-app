const router = require('express').Router();
const { User, Session } = require('../db/index');
const A_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (typeof username !== 'string' || typeof password !== 'string') {
      res.status(400).send({
        message: 'Username and password must both be strings.',
      });
    } else {
      const foundUser = await User.findOne({
        where: {
          username,
        },
        include: [Session],
      });
      // const comparisonResult = await bcrypt.compare(password, foundUser.password);
      // if (password !== foundUser.password) {
      //   throw new Error('Mismatched password!');
      // }

      if (foundUser) {
        if (foundUser.session) {
          res.cookie('sid', foundUser.session.uuid, {
            maxAge: A_WEEK_IN_SECONDS,
            path: '/',
          });
          res.sendStatus(200);
        } else {
          const createdSession = await Session.create({});
          await createdSession.setUser(foundUser);

          res.cookie('sid', createdSession.uuid, {
            maxAge: A_WEEK_IN_SECONDS,
            path: '/',
          });
          res.sendStatus(201);
        }
      } else {
        res.sendStatus(404);
      }
    }
  } catch (e) {
    console.log('Error while logging user in.');
    console.error(e);
    res.status(500).send({
      message: e.message,
    });
  }
});

router.delete('/logout', async (req, res, next) => {
  try {
    await Session.destroy({ where: { uuid: req.cookies.sid } });
    req.user = null;
    res.redirect('/');
  } catch (ex) {
    console.log('Please login first before you logout');
  }
});

router.get('/whoami', async (req, res, next) => {
  try {
    if (req.user) {
      res.send(req.user);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
