const express = require('express');
const adminController = require('../../src/controllers/admin.controller');
const router = express.Router();
router.get('/product/list', adminController.productList);
module.exports = router;