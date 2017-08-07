const mongoose  = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
User = require('../models/user')

module.exports.getUsers =  (callback, limit) => {
    User.find(callback).limit(limit)
}

module.exports.createUser = (user, callback) => {
     bcrypt.hash(user.password, null, null, function(err, hash){
            user.password = hash;
            User.create(user, callback)
     })
}
