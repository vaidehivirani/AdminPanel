const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const categoriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
    }, {
    timestamps: true,
}
);

categoriesSchema.plugin(toJSON);
categoriesSchema.plugin(paginate);
categoriesSchema.plugin(require('mongoose-aggregate-paginate-v2'));

categoriesSchema.pre('save', async function (next) {
    const categories = this;
    next();
});

const Category = mongoose.model('Category', categoriesSchema);

Category.aggregatePaginate.options = {
    customLabels: { docs: 'results', totalDocs: 'totalResults' },
};

module.exports = Category;