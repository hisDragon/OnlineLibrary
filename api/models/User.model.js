const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Users
const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    }

    // card sub schema to be added

});

// Hasing the password [to be done]

// Password Validation [to be done]

// exporting for outer module usage
const User = mongoose.model('user', UserSchema); // users collection
module.exports = User;
