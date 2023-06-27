var express = require('express');
var router = express.Router();

const apiPrice = require('../controllers/apiPrices');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
