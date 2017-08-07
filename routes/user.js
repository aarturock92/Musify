// 'use strict'

var express = require('express')
var userController = require('../controllers/user')
var api = express.Router();

api.get('/users',  (req, res) => {
	userController.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users).status(200);
	});
});


api.post('/users',  (req, res) => {
    var user = req.body;
    userController.createUser(user, (err, user) => {
        if(err){
            throw err;
        }
        res.json(user).status(200);
    })
})

module.exports = api;
