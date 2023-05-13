const express = require('express');
const auth = require('../../src/middlewares/auth');
const validate = require('../../src/middlewares/validate');
const authValidation = require('../../src/validations/auth.validation');
const authController = require('../../src/controllers/auth.controller');
const adminController = require('../../src/controllers/admin.controller');


const router = express.Router();

router.get('/verify', auth(), adminController.verify);
router.post('/change-password', auth(), validate(authValidation.changePassword), adminController.changePassword);
router.patch('/update', auth(), adminController.updateProfile);

module.exports = router;