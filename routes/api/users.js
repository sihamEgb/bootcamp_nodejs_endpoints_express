const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let users = require("../../Users");


	// get all users
	router.get("/users",(req,res) => {
		res.json(users);
	})
	
	// create new user
	router.post('/',(req,res) => {
		const newUser = {
			id:uuid.v1(),
			name:req.body.name,
			age:req.body.age,
		}
	
		if(!newUser.name || !newUser.age){
			return res.sendStatus(400);
		}
		users.push(newUser);
		res.json(users);
	});	
	
	router.delete('/:id',(req,res) => {
		console.log("deleting user");
		const id = parseInt(req.params.id);
		const index = users.findIndex(item => item.id === id);
		users.splice(index,1);
		res.json(users);
	});
	
	router.put('/:id',(req,res) => {
		console.log("updating user");
		const id = parseInt(req.params.id);
		const updated = req.body;
		const index = users.findIndex(item => item.id === id);
		users.splice(index,1,updated);

		console.log(updated);
		console.log(users);
		res.json(users);
	});
	
	// update user with id
	// app.put('/api/user/:id',users.update);

	// delete user wiht id
	// console.log("hello 1");
	// app.delete('/api/user/:id',users.delete);
	// console.log("hello 2");

module.exports = router