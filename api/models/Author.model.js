const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// importing book schema for author collection usage
const BookSchema = require('./Book.model').schema;

const AuthorSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: false
    },

    books: [BookSchema]

});

// export schema
const Author = new mongoose.model('author', AuthorSchema);
module.exports = Author;
