'use strict'
var bcrypt = require('bcrypt-nodejs')
var User = require('../models/user');

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con node js y Mongo db'
    });
}

function saveUser(req, res){
    var user = new User(),
        params = req.body;
    console.log('params', params)

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';
}

module.exports = {
    pruebas,
    saveUser
};