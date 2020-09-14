// Required Libraries
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

// importing routes
const login = require('./api/routes/login');
const signup = require('./api/routes/signup');

// Ports
const db_port = '27017'; // change dbport if required. This is the default port for mongodb
const port = process.env.port || 4000; // if the application has an environment port use that or use port 3000 for I/O

// changing port to 4000 because react uses port 3000 on default -- to avoid conflict :)

// Database constants
const db_name = 'library'; // 'library' official DataBase for this project
const db_string = 'mongodb://localhost:' + db_port + '/' + db_name; // connection string
const db_options = {useNewUrlParser: true, useUnifiedTopology: true}; // DB options to be added

/*
    May have to run mongod.exe command in the background
    for mongoose to connect to the database.
    Checkout the Official Documentation on mongoosejs.com
*/
// Connecting to the Database
mongoose.Promise = global.Promise; // changing promise as it is not handled by 'mongoose'
mongoose.connect(db_string, db_options);

// Verifying the Connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : ')); // if there is an error in connection to the database
db.once('open', function(){
    console.log('Connected to the database!'); // Finally Connected!
});


// Setup express app for the server to run!
const app = express();
app.use(bodyParser.json()); // used for parsing json data

// routes server call
app.use('/', login);
app.use('/', signup);


// ***** TEST *****

// GET
app.get('/', function(req, res){
    console.log('-----------------');
    console.log('GET method');
    console.log('-----------------');
    res.send({
        type: 'GET'
    });
});

// POST
app.post('/', function(req, res){
    console.log('-----------------');
    console.log('POST method');
    console.log('-----------------');
    res.send({
        type: 'POST'
    });
});

// PUT
app.put('/:id', function(req, res){
    console.log('-----------------');
    console.log('PUT method');
    console.log(req.params.id);
    console.log('-----------------');
    res.send({
        type: 'PUT'
    });
});

// DELETE
app.delete('/:id', function(req, res){
    console.log('-----------------');
    console.log('DELETE method');
    console.log(req.params.id);
    console.log('-----------------');
    res.send({
        type: 'DELETE'
    });
});

// ***** TEST *****

// Listen for requests!
app.listen(port, function(){
    console.log('Listening for requests at port ' + port + '!'); // Log a message to let the admin know that express is running.
});
