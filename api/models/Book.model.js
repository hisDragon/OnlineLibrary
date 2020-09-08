const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    name: {
        type: String,
        required: true
    }

    // additional info such as size, no. of pages

    // path to book to be defined

    // publisher sub schema to be defined

    // author sub schema to be defined

});

// exporting for outer module usage
const Book = mongoose.model('publisher', BookSchema); // users collection
module.exports = Book;