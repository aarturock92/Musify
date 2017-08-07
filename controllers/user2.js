'use strict'
const mongoose  = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var User = require('../models/user')

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con node js y Mongo db'
    });
}

function saveUser(req, res){
    var user = new User();

    var params = req.body;

    console.log('params',params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';
    
    if(params.password){
        //Encriptar contraseña y guardar datos.
        bcrypt.hash(params.password, null, null, function(err, hash){
            user.password = hash;

            if(user.name != null && user.surname != null && user.email != null){
                //Guardar el usuario
                console.log('password', user.password);
                // mongoose.sa
                user.create(function(err){
                    console.log('err',err);

                    if(!err) console.log('success')
                })
            }else{
                res.status(400).send({message: 'Introduce todos los campos'});        
            }
        })
        res.status(200);
    }else{
        res.status(400).send({message: 'Introduce la contraseña'});
    }

    // user.save();
    // return res;
  
}

module.exports = {
    pruebas,
    saveUser
};