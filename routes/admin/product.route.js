const express = require('express');
const auth = require('../../src/middlewares/auth');
const validate = require('../../src/middlewares/validate');
const authValidation = require('../../src/validations/auth.validation');
const fileValidation = require('../../src/validations/file.validation');
const adminController = require('../../src/controllers/admin.controller');
const router = express.Router();
const { uploadService } = require("../../src/services");

router.get('/', auth(), adminController.productList);
router.get('/list', auth(), adminController.productList);
router.get('/:pid', auth(), adminController.productById);
router.post('/add', auth(), uploadService.upload.single('image'), validate(authValidation.product), adminController.createProduct);
router.post('/edit/:pid', auth(), uploadService.upload.single('image'), validate(authValidation.editProduct), adminController.editProduct);
router.post('/change-status/:pid', auth(),validate(authValidation.changeStatus),  adminController.editProduct);
router.post('/upload', auth(), uploadService.upload.single('image'), adminController.uploadImage);
router.delete('/delete/:pid', auth(), adminController.deleteProduct);

module.exports = router;