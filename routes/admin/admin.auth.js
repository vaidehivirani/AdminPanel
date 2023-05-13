const express = require('express');
const auth = require('../../src/middlewares/auth');
const validate = require('../../src/middlewares/validate');
const authValidation = require('../../src/validations/auth.validation');
const authController = require('../../src/controllers/auth.controller');

const router = express.Router();

router.post('/login', validate(authValidation.login), authController.adminlogin);
router.post('/register', validate(authValidation.register), authController.adminregister);

module.exports = router;