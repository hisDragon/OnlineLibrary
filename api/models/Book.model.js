const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// required schemas
const PublisherSchema = require('./Publisher.model').schema;
const AuthorSchema = require('./Author.model').schema;

const BookSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    // additional info such as size, no. of pages
    pages: {
        type: Number,
        required: true
    },

    size: {
        type: Number,
        required: false
    },

    // path to book to be defined

    // publisher sub schema to be defined
    publisher: {
        type: PublisherSchema,
        required: true
    },

    // author sub schema to be defined
    authors: {
        type: [AuthorSchema],
        required: true
    }

});

// exporting for outer module usage
const Book = mongoose.model('publisher', BookSchema); // users collection
module.exports = Book;