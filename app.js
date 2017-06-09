'use strict'

var express = require('express')
var bodyParse = require('body-parser')

var app = express();
//cargar rutas

//Configuración 
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json())

//Configuración cabeceras http

//Rutas base
app.get("/pruebas", function(req, res){
    res.status(200).send({message: 'Bienvenido al curso de Arturo López Vásquez'})
});

module.exports = app;