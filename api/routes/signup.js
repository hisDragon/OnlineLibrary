const express = require('express');
const signup = express.Router();

// collections
const User = require('../models/User.model');

// Testing methods

signup.get('/signup', function(req, res){
    console.log('-----------------');
    console.log('GET method S');
    console.log('-----------------');
    res.send({
        type: 'GET'
    });
});

// POST
signup.post('/signup', function(req, res){
    console.log('-----------------');
    console.log('POST method S');
    console.log('-----------------');
    res.send({
        type: 'POST'
    });

    // // inserting a new user to test
    // var user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    //     phone: req.body.phone
    // });

    // user.save(function(err, newUser){
    //     if(err) console.log('error inserting :' + err);
    //     else {
    //         console.log('inserted successfully');
    //         res.send(newUser);
    //     }
    // });

});

// PUT
signup.put('/signup/:id', function(req, res){
    console.log('-----------------');
    console.log('PUT method S');
    console.log(req.params.id);
    console.log('-----------------');
    res.send({
        type: 'PUT'
    });
});

// DELETE
signup.delete('/signup/:id', function(req, res){
    console.log('-----------------');
    console.log('DELETE method S');
    console.log(req.params.id);
    console.log('-----------------');
    res.send({
        type: 'DELETE'
    });
});

module.exports = signup;
