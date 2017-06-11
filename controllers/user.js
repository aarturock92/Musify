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
        params = req.body,
        message = [];

    user.role = 'ROLE_USER';
    user.image = 'null';

    if(params.name){
       user.name = params.name;
    }else{
       message.push('Introduce el Nombre')
    }

    if(params.surname){
        user.surname = params.name;
    }else{
        message.push('Introduce el Usuario')
    }

    if(params.email){
        user.email = params.email;
    }else{
        message.push('Introduce el email')        
    }

    if(params.password){
        bcrypt.hash(params.password, null, null, function(err, hash){
            user.password = hash;
            console.log("user.password", user);
            if(user.name != null && user.surname != null && user.email != null){
                user.save((err, userStored) => {
                    if(err){
                        message.push('Error al guardar el usuario')
                    }else{
                        if(!userStored){
                            res.status(404).send('No se ha registrado el usuario')
                        }else{
                            res.status(200).send({user: userStored})
                        }
                    }
                });
            }else{
                message.push('Rellene todos los campos');
            }
        });        
    }else{
        message.push('Introduce la contraseña')        
    }

    if(message.length > 0){
        res.status(500).send(message);
    } 
}

module.exports = {
    pruebas,
    saveUser
};