const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { Schema } = mongoose;
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        packageName: {
            type: String,
            required: true,
            trim: true,
        },
        accountName: {
            type: String,
            required: true,
            trim: true,
        },
        privacyPolicy: {
            type: String,
            required: true,
            trim: true,
        },
        extraPage: {
            type: String,
            required: true,
            trim: true,
        },
        otherURL: {
            type: String,
            required: true,
            trim: true,
        },
        qreka: {
            type: String,
            required: true,
            trim: true,
        },
        clickCounter: {
            type: String,
            required: true,
            trim: true,
        },
        backClick: {
            type: String,
            required: true,
            trim: true,
        },
        exitDialog: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
        addStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
        googleAddStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
        facebookAddStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
        startPageStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
        startAddStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
        qurekaStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
        appLovin: {
            type: Boolean,
            required: true,
            default: false,
        },
        googleAppId: {
            type: String,
            required: true,
            trim: true,
        },
        googleBanner: {
            type: String,
            required: true,
            trim: true,
        },
        googleNative: {
            type: String,
            required: true,
            trim: true,
        },
        googleAppOpen: {
            type: String,
            required: true,
            trim: true,
        },
        googleRewardVideo: {
            type: String,
            required: true,
            trim: true,
        },
        googleIntrestial: {
            type: String,
            required: true,
            trim: true,
        },
        googleNativeBanner: {
            type: String,
            required: true,
            trim: true,
        },
        facebookBanner: {
            type: String,
            required: true,
            trim: true,
        },
        facebookNative: {
            type: String,
            required: true,
            trim: true,
        },
        facebookRewardVideo: {
            type: String,
            required: true,
            trim: true,
        },
        facebookIntrestial: {
            type: String,
            required: true,
            trim: true,
        },
        facebookNativeBanner: {
            type: String,
            required: true,
            trim: true,
        },
        startAppId: {
            type: String,
            required: true,
            trim: true,
        },
        startBanner: {
            type: String,
            required: true,
            trim: true,
        },
        startNative: {
            type: String,
            required: true,
            trim: true,
        },
        startIntrestial: {
            type: String,
            required: true,
            trim: true,
        },
    }, {
    timestamps: true,
}
);

productSchema.plugin(toJSON);
productSchema.plugin(paginate);
productSchema.plugin(require('mongoose-aggregate-paginate-v2'));

productSchema.pre('save', async function (next) {
    const product = this;
    next();
});

const Product = mongoose.model('Product', productSchema);

Product.aggregatePaginate.options = {
    customLabels: { docs: 'results', totalDocs: 'totalResults' },
};

module.exports = Product;