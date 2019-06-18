const mongoose = require('mongoose');
const Joi = require('Joi');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },

    company: [

    ],

    isSuperUser: {
        type: Boolean,
        default: false
    },

    isCustomerReadWrite: {
        type: Boolean,
        default: false
    },

    isCustomerReadOnly: {
        type: Boolean,
        default: false
    },

    isKitchen: {
        type: Boolean,
        default: false
    }
}));

function validateUser(user) {
    const schema = {
        name: Joi.string().required(),
        password: Joi.string().min(5).max(255).required(),
        company: Joi.string(),
        isSuperUser: Joi.boolean(),
        isCustomerReadWrite: Joi.boolean(),
        isCustomerReadOnly: Joi.boolean(),
        isKitchen: Joi.boolean()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;