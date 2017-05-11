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

router.get('/new', (req,res) =>{
  res.render('add_book');
});

router.post('/', (req, res) =>{
  pg('book').insert({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_url: req.body.cover_image_url
  }).then(() =>{
    res.redirect('/books');
  });
})
module.exports = router;
