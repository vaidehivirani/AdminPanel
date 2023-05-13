const express = require('express');
const adminAuth = require('./admin.auth');
const adminRoute = require('./admin.route');
const productRoute = require('./product.route');

const router = express.Router();

router.use('/auth', adminAuth);
router.use('/profile', adminRoute);
router.use('/product', productRoute);

module.exports = router;