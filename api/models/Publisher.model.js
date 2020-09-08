const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublisherSchema = new Schema({

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

    // relationship with author to be defined

});

// exporting for outer module usage
const Publisher = mongoose.model('publisher', PublisherSchema); // users collection
module.exports = Publisher;
