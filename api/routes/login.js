const express = require('express');
const login = express.Router();

// Testing methods

login.get('/login', function(req, res){
    console.log('-----------------');
    console.log('GET method L');
    console.log('-----------------');
    res.send({
        type: 'GET'
    });
});

// POST
login.post('/login', function(req, res){
    console.log('-----------------');
    console.log('POST method L');
    console.log('-----------------');
    res.send({
        type: 'POST'
    });
});

// PUT
login.put('/login/:id', function(req, res){
    console.log('-----------------');
    console.log('PUT method L');
    console.log(req.params.id);
    console.log('-----------------');
    res.send({
        type: 'PUT'
    });
});

// DELETE
login.delete('/login/:id', function(req, res){
    console.log('-----------------');
    console.log('DELETE method L');
    console.log(req.params.id);
    console.log('-----------------');
    res.send({
        type: 'DELETE'
    });
});

module.exports = login;
