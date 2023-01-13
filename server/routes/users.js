//Commented out for demo purposes, will be used later.

// const router = require('express').Router();
// const { User } = require('../db/models');

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       attributes: {
//         exclude: ['password'],
//       },
//     });
//     res.send(users);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/:id', async (req, res, next) => {
//   try {
//     const singleUser = await User.findByPk(req.params.id);
//     if (!singleUser) {
//       const error = new Error('USER WAS NOT FOUND');
//       error.status = 404;
//       console.error(error);
//     }
//     res.status(200).send(singleUser);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const singleUser = await User.findByPk(req.params.id);
//     await singleUser.destroy();
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     console.log(req.body);
//     const newUser = await User.create(req.body.user);
//     res.status(201).send(newUser);
//   } catch (err) {
//     next(err);
//   }
// });

// module.exports = router;
