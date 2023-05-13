const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
const { password } = require('./custom.validation');

const register = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        displayName: Joi.string(),
        dob: Joi.date()
            .format('DD/MM/YYYY')
            .max(new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18))
            .message('Age Should be Greater than 18')
            .raw()
            .required(),
        privacy: Joi.string().required(),
        deviceToken: Joi.string()
    }),
};

const login = {
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        deviceToken: Joi.string(),
    }),
};

const refreshTokens = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};

const forgotPassword = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
    }),
};

const resetPassword = {
    query: Joi.object().keys({
        token: Joi.string().required(),
    }),
    body: Joi.object().keys({
        password: Joi.string().required().custom(password),
    }),
};

const logout = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};

const changePassword = {
    body: Joi.object().keys({
        currentPassword: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

const updateUserInfo = {
    body: Joi.object().keys({
        display_name: Joi.string(),
        profileImage: Joi.string(),
    }),
};

const apps = {
    body: Joi.object().keys({
        appname: Joi.string().required(),
        status: Joi.string().required(),
        // bannerImage: Joi.string()
    }),
};

const editapps = {
    body: Joi.object().keys({
        appname: Joi.string().required(),
        status: Joi.string().required(),
        appid: Joi.string().required(),
    }),
};

const deleteapp = {
    body: Joi.object().keys({
        appid: Joi.string().required(),
    }),
};

const groups = {
    body: Joi.object().keys({
        groupname: Joi.string().required(),
        appid: Joi.string().required(),
        status: Joi.string().required(),
    }),
};

const editgroups = {
    body: Joi.object().keys({
        groupid: Joi.string().required(),
        groupname: Joi.string().required(),
        appid: Joi.string().required(),
        status: Joi.string().required(),
    }),
};

const deletegroups = {
    body: Joi.object().keys({
        groupid: Joi.string().required(),
    }),
};

const groupsbyapp = {
    body: Joi.object().keys({
        appid: Joi.string().required(),
    }),
};

const category = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        status: Joi.boolean().required(),
    }),
};

const editCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        status: Joi.boolean().required(),
        id: Joi.string().required()
    }),
};

const product = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        packageName: Joi.string().required(),
        accountName: Joi.string().required(),
        privacyPolicy: Joi.string().required(),
        extraPage: Joi.string().required(),
        otherURL: Joi.string().required(),
        qreka: Joi.string().required(),
        clickCounter: Joi.string().required(),
        backClick: Joi.string().required(),
        exitDialog: Joi.string().required(),
        status: Joi.boolean().required(),
        addStatus: Joi.boolean().required(),
        googleAddStatus: Joi.boolean().required(),
        facebookAddStatus: Joi.boolean().required(),
        startPageStatus: Joi.boolean().required(),
        startAddStatus: Joi.boolean().required(),
        qurekaStatus: Joi.boolean().required(),
        appLovin: Joi.boolean().required(),
        googleAppId: Joi.string().required(),
        googleBanner: Joi.string().required(),
        googleNative: Joi.string().required(),
        googleAppOpen: Joi.string().required(),
        googleRewardVideo: Joi.string().required(),
        googleIntrestial: Joi.string().required(),
        googleNativeBanner: Joi.string().required(),
        facebookBanner: Joi.string().required(),
        facebookNative: Joi.string().required(),
        facebookRewardVideo: Joi.string().required(),
        facebookIntrestial: Joi.string().required(),
        facebookNativeBanner: Joi.string().required(),
        startAppId: Joi.string().required(),
        startBanner: Joi.string().required(),
        startNative: Joi.string().required(),
        startIntrestial: Joi.string().required(),
    }),
};

const editProduct = {
    body: Joi.object().keys({
        id: Joi.string(),
        name: Joi.string().required(),
        packageName: Joi.string().required(),
        accountName: Joi.string().required(),
        privacyPolicy: Joi.string().required(),
        extraPage: Joi.string().required(),
        otherURL: Joi.string().required(),
        qreka: Joi.string().required(),
        clickCounter: Joi.string().required(),
        backClick: Joi.string().required(),
        exitDialog: Joi.string().required(),
        status: Joi.boolean().required(),
        addStatus: Joi.boolean().required(),
        googleAddStatus: Joi.boolean().required(),
        facebookAddStatus: Joi.boolean().required(),
        startPageStatus: Joi.boolean().required(),
        startAddStatus: Joi.boolean().required(),
        qurekaStatus: Joi.boolean().required(),
        appLovin: Joi.boolean().required(),
        googleAppId: Joi.string().required(),
        googleBanner: Joi.string().required(),
        googleNative: Joi.string().required(),
        googleAppOpen: Joi.string().required(),
        googleRewardVideo: Joi.string().required(),
        googleIntrestial: Joi.string().required(),
        googleNativeBanner: Joi.string().required(),
        facebookBanner: Joi.string().required(),
        facebookNative: Joi.string().required(),
        facebookRewardVideo: Joi.string().required(),
        facebookIntrestial: Joi.string().required(),
        facebookNativeBanner: Joi.string().required(),
        startAppId: Joi.string().required(),
        startBanner: Joi.string().required(),
        startNative: Joi.string().required(),
        startIntrestial: Joi.string().required(),
    }),
};

const changeStatus = {
    body: Joi.object().keys({
        id: Joi.string().required(),
        status: Joi.boolean().required(),
    }),
};

const deletestickers = {
    body: Joi.object().keys({
        stickerid: Joi.string().required(),
    }),
};

module.exports = {
    register,
    login,
    refreshTokens,
    forgotPassword,
    resetPassword,
    logout,
    changePassword,
    updateUserInfo,
    apps,
    editapps,
    deleteapp,
    groups,
    groupsbyapp,
    editgroups,
    deletegroups,
    category,
    editCategory,
    deletestickers,
    editProduct,
    product,
    changeStatus
};
