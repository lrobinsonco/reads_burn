var express = require('express');
var router = express.Router();
var pg = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  pg('book').select()
  .then(books => {
    res.render('list_books', {books});
  });
});

module.exports = router;
