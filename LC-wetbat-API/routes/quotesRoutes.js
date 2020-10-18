const express = require('express');
const router = express.Router();

const {
  getAllQuotes,
} = require('../lib/quotesQueries');

router.get('/quotes', (req, res) => {

  getAllQuotes()
    .then(result => {
      res.json(result)
    })
});

module.exports = router;