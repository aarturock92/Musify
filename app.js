'use strict'

var express = require('express')
var bodyParse = require('body-parser')

var app = express();
//cargar rutas
var user_routes = require('./routes/user')


//Configuración 
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json())

//Configuración cabeceras http

//Rutas base
app.use('/api', user_routes)

module.exports = app;