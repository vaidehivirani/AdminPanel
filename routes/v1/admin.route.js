const express = require('express');
const auth = require('../../src/middlewares/auth');
const validate = require('../../src/middlewares/validate');
const authValidation = require('../../src/validations/auth.validation');
const adminController = require('../../src/controllers/admin.controller');

const router = express.Router();

// router.get('/verify', auth(), adminController.verify);

module.exports = router;