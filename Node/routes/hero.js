var express = require('express');
var router = express.Router();

/* GET hero page*/
router.get('/', function(req, res, next) {
  res.render('hero', {
    title: 'hero page'
  });
});

module.exports = router;
