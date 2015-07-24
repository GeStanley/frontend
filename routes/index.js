var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('list');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/html', function(req, res, next) {
  res.render('testhtml.html');
});

module.exports = router;
