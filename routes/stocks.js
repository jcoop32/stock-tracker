var express = require('express');
var router = express.Router();

const stocksCtrl = require('../controllers/stocks');

/* GET stock listing. */
router.get('/', stocksCtrl.index);

router.post('/', stocksCtrl.create);

router.get('/new', stocksCtrl.new);

module.exports = router;
