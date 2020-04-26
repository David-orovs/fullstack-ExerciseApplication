const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
// this user.find is a mongoose method to show all users then it returns a promise the .then helps it display and catch error
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});
  // this post funct retrieves username and saves it

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;