const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:  String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});

const User = module.exports = mongoose.model('User', UserSchema)

