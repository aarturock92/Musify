// const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/Musify');
const db = mongoose.connection;

// const user_routes = require('./routes/user')

// app.use('/api', )




// app.get('/api/users', (req, res) => {
// 	User.getUsers((err, users) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(users);
// 	});
// });


// app.post('/api/users', (req, res) => {
//     var user = req.body;
//     User.addUser(user, (err, user) => {
//         if(err){
//             throw err;
//         }
//         res.json(user);
//     })
// })

app.listen(3000);
console.log('Running on port 3000...');