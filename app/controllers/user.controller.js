const users
let users = {
	user1:{
		id:1,
		name:'aaa',
		age:35,
	},
user2:{
	id:2,
	name:'aaa',
	age:35,
},
user3:{
	id:3,
	name:'aaa',
	age:35,
},
}

const loadUsers = () => {
	try {
			const dataBuffer = fs.readFileSync('users.json')
			const dataJSON = dataBuffer.toString()
			return JSON.parse(dataJSON)
	} catch (e) {
			return []
	}
}

const saveUsers = (users) => {
	const dataJSON = JSON.stringify(users)
	fs.writeFileSync('notes.json', dataJSON)
}

exports.create = function(req,res){
	let newUser = req.body;
	const users = loadUsers();
	users[`user ${newUser.id}`] = newUser;
	saveUsers(users);
	res.end("post successfully");
}
exports.getUser = function(req,res){
	// let newUser = req.body;
	// users = [`user ${user.id}`] = newUser;
	const users = loadUsers();
	const user = users.find(element => element.id === req.params.id);users[`user ${newUser.id}`] = newUser;

	res.end("post successfully");

	// res.end("All users: " + JSON.stringify(users,null,4));
}
exports.getUsers = function(req,res){
	// let newUser = req.body;
	// users = [`user ${user.id}`] = newUser;
	const users = loadUsers();
	res.end("All users: " + JSON.stringify(users,null,4));

}
exports.update = function(req,res){
	// let newUser = req.body;
	// users = [`user ${user.id}`] = newUser;
	res.end("post successfully");
}
exports.delete = function(req,res){
	// let newUser = req.body;
	// users = [`user ${user.id}`] = newUser;
	res.end("post successfully");
}