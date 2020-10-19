

exports.create = function(req,res){
	let newUser = req.body;
	users[`${newUser.id}`] = newUser;
	res.end("post successfully");
}

exports.getUsers = function(req,res){
	console.log("get users");
	res.end("All users: " + JSON.stringify(users,null,4));
}
exports.update = function(req,res){
	const id = parseInt(req.params.id);
	const updatedUser = req.body;
	const user = users.find(element => element.id === id);
	if(user)
	{
		users[id] = updatedUser;
		res.end("update successfully",JSON.stringify(users,null,4));

	}
	// let newUser = req.body;
	// users = [`user ${user.id}`] = newUser;
	res.end("Mo such user");
}
exports.delete = function(req,res){
	console.log("deleting user");
	const id = parseInt(req.params.id);
	const toDeleteUser = users.filter(element => element.id !== id);
	res.end("delete successfully");
}