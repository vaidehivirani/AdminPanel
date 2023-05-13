const httpStatus = require('http-status');
const _ = require('lodash');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');
const fs = require('fs');

const getRecordById = async (id) => {
    return Product.findById(id);
};

const getProducts = async (limit = 10, page = 1, filter = {}) => {
    let options = {
        sortBy: '_id',
        limit: limit,
        page: page
    }
    return Product.paginate(filter, options)
};

const getProducts1 = async () => {
    return Product.find();
};

const createRecord = async (userBody) => {
    const product = await Product.create(userBody);
    return product;
};

const updateProductById = async (productId, updateBody) => {
    const products = await getRecordById(productId);
    if (!products) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Product Data not found');
    }
    Object.assign(products, updateBody);
    await products.save();
    return products;
};

const deleteProduct = async (productId) => {
    const products = await getRecordById(productId);
    if (!products) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Product data not found');
    } else {
        const filter = { '_id': productId }
        Product.deleteOne(filter).then((res) => {
            return res;
        }).catch((e) => {
            throw new ApiError(httpStatus.NOT_FOUND, 'Something went wrong, Please try again later...');
        })
    }
};

module.exports = {
    getRecordById, createRecord, getProducts, updateProductById, deleteProduct,
};