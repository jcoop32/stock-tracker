var express = require('express');
var router = express.Router();

const stocksCtrl = require('../controllers/stocks');
// const tickerCtrl = require('../controllers/tickerSymbols');

/* GET stock listing. */
router.post('/', stocksCtrl.create);

router.get('/new', stocksCtrl.new);

router.get('/:id', stocksCtrl.details);

router.get('/', stocksCtrl.index);

router.get('/:id/edit', stocksCtrl.edit);

router.put('/:id/edit', stocksCtrl.update);

router.delete('/:id', stocksCtrl.delete);

module.exports = router;
