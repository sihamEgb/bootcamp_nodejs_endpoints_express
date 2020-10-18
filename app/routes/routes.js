module.exports = function(app){
	let users = require('../controllers/user.controller.js');

	// create new user
	app.post('/api/users',users.create);
	
	// get all users
	app.get('/api/users',users.getUsers);
	
	// get a user by id
	app.get('/api/user/:id',users.getUser);

	// update user wiht id
	app.put('/api/user/:id',users.update);

	// delete user wiht id
	app.delete('/api/user/:id',users.delete);
}