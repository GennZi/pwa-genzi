// controllers/userController.js
const db = require('../db/knexfile');

exports.index = async (req, res) => {
  try {
    const users = db.select('*').from('users');
    users.then((users) => {
      console.log("X::",users)
      res.render('./users/index', { users });
    })

  } catch (err) {
    res.status(500).send(err.message);
  }
};
