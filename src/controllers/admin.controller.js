const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, categoryService, productService } = require('../services');
const _ = require('lodash');

const verify = catchAsync(async (req, res) => {
    res.send({ user: req.user });
});

const changePassword = catchAsync(async (req, res) => {
    let user = await userService.updateUserById(req.user.id, _.omit(req.body, ['currentPassword', 'role', 'privacy', 'deviceToken', 'email_verified', 'id']))
    res.send({ user: user });
});

const updateProfile = catchAsync(async (req, res) => {
    let user = await userService.updateUserById(req.user.id, _.omit(req.body, ['role', 'privacy', 'deviceToken', 'email_verified', 'id']))
    res.send({ user: user });
});

const uploadImage = catchAsync(async (req, res) => {
    res.send({ file: req.file.filename });
});

const productList = catchAsync(async (req, res) => {
    let { page, search } = req.query;
    if (!page) {
        page = 1;
    }
    let filter = {}
    if (search) {
        filter = {
            "packageName": { $regex: new RegExp("^" + search, "i") },
        }
    }
    let limit = 16;
    if (req.user) {
        limit = 10
    }
    const products = await productService.getProducts(limit, page, filter);
    res.send({ products });
});

const productByCategory = catchAsync(async (req, res) => {
    let { page, search } = req.query;
    if (!page) {
        page = 1;
    }
    let filter = {
        categoryId: req.params.cid
    }
    if (search) {
        filter = {
            ...filter,
            "name": { $regex: new RegExp("^" + search, "i") },
        }
    }
    let limit = 16;
    if (req.user) {
        limit = 10
    }
    const products = await productService.getProducts(limit, page, filter);
    res.send({ products });
});

const createProduct = catchAsync(async (req, res) => {
    const { body } = req;
    await productService.createRecord(body);
    const products = await productService.getProducts();
    res.send({ products });
});

const productById = catchAsync(async (req, res) => {
    const product = await productService.getRecordById(req.params.pid);
    res.send({ product });
});

const editProduct = catchAsync(async (req, res) => {
    const { body } = req;
    await productService.updateProductById(req.params.pid, body);
    const products = await productService.getProducts();
    res.send({ products });
});

const deleteProduct = catchAsync(async (req, res) => {
    await productService.deleteProduct(req.params.pid);
    const products = await productService.getProducts();
    res.send({ products });
});

module.exports = {
    verify,
    updateProfile,
    productList,
    createProduct,
    editProduct,
    deleteProduct,
    uploadImage,
    changePassword,
    productById,
    productByCategory
};