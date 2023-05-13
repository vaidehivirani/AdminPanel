const httpStatus = require('http-status');
const _ = require('lodash');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');
const fs = require('fs');
const paginate = require('../models/plugins/paginate.plugin');

const getRecordById = async (id) => {
    return Category.findById(id);
};

const getCategories = async (limit = 10, page = 1, filter = {}) => {
    let options = {
        sortBy: '_id',
        limit: limit,
        page: page
    }
    return Category.paginate(filter, options)
};

const getCategories1 = async () => {
    return Category.find()
};

const createRecord = async (userBody) => {
    const category = await Category.create(userBody);
    return category;
};

const updateCategoryById = async (categoryId, updateBody) => {
    const categories = await getRecordById(categoryId);
    if (!categories) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Category Data not found');
    }
    if (updateBody.urlImage != null) {
        let path = `./uploads/${categories.urlImage}`;
        fs.unlink(path, (err) => {
            if (err) {
                throw new ApiError(httpStatus.NOT_FOUND, 'Category Image not found.');
            }
        });
    }
    Object.assign(categories, updateBody);
    await categories.save();
    return categories;
};

const deleteCategory = async (categoryId) => {
    const categories = await getRecordById(categoryId);
    if (!categories) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Category data not found');
    } else {
        let path = `./uploads/${categories.image}`;
        fs.unlink(path, (err) => {
            if (err) {
                // throw new ApiError(httpStatus.NOT_FOUND, 'Category Image not found.');
            }
        });
        const filter = { '_id': categoryId }

        Category.deleteOne(filter).then((res) => {
            return res;
        }).catch((e) => {
            throw new ApiError(httpStatus.NOT_FOUND, 'Something went wrong, Please try again later...');
        })
        // await Category.deleteOne(filter, (err) => {
        //     if (err) {
        //         throw new ApiError(httpStatus.NOT_FOUND, 'Something went wrong, Please try again later...');
        //     }
        // });
        // return true;
    }
};

module.exports = {
    getRecordById, createRecord, getCategories, updateCategoryById, deleteCategory,
};