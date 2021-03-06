var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

router.get('/', controller.getAll)
router.get('/:userId/:productId/products', controller.getOne)
router.post ('/:userId/products/', controller.create)

module.exports = router;