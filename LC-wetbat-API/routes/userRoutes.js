const express = require('express');
const router = express.Router();

const {
  getAllUsers,
} = require('../lib/userQueries');

router.get('/', (req, res) => {

  getAllUsers()
    .then(result => {
      res.json(result)
    })
});

module.exports = router;