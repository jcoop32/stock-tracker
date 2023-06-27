var express = require('express');
var router = express.Router();

const stocksCtrl = require('../controllers/stocks');
// const apiPricesCtrl = require('../controllers/apiPrices');

/* GET stock listing. */
router.get('/', stocksCtrl.index);

// router.get('/', apiPricesCtrl.price);

router.get('/:id/edit', stocksCtrl.edit);

router.put('/:id/edit', stocksCtrl.update);

router.post('/', stocksCtrl.create);

router.get('/new', stocksCtrl.new);

router.delete('/:id', stocksCtrl.delete);

module.exports = router;
