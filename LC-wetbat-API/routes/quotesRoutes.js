const express = require('express');
const router = express.Router();

const {
  getAllQuotes,
  getAllTransportation
} = require('../lib/quotesQueries');

router.get('/quotes/all', (req, res) => {

  getAllQuotes()
    .then(result => {
      res.json(result)
    })
});

router.get('/quotes/transportation', (req, res) => {

  getAllTransportation()
    .then(result => {
      res.json(result)
    })
});

module.exports = router;