var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('userlist', { title: 'Express' });
});
router.get('/userlist', function(req, res, next) {
  res.render('userlist', { title: 'Express' });
});


router.get('/accountuser', function(req, res, next) {
  res.render('accountuser', { title: 'Express' });
});

module.exports = router;
