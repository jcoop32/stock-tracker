var express = require('express');
var router = express.Router();

const stocksCtrl = require('../controllers/stocks');

/* GET stock listing. */
router.get('/', stocksCtrl.index);

module.exports = router;
