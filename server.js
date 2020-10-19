const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// ? require('./app/routes/user.routes.js')(app);
app.use('/productsapi', require('./routes/api/products'));

app.use('/usersapi', require('./routes/api/users'));


// create a server
const server = app.listen(port, () => {
	const host = server.address().address;
	const port = server.address().port;
  console.log('Server is up on http://'+host+':'+port);
})