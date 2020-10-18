const express = require('express');
const app = express();

const bodyParser = require('body-parser');
require('./app/routes/routes.js')(app);
// const path = require('path')
// const hbs = require('hbs')

// to store the express application
//get users
//http://localhost:3000/users 
// add user
//http://localhost:3000/user
// delete user
//http://localhost:3000/user?id=1

const users = [];
// index
app.get("/", (req,res) => {
	// res.send(users);
	res.send('hello Bootcamper');
})
// get
app.get("/users", (req,res) => {
	// res.send(users);
	res.send('hello express');
})
// Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
// app.set('view engine', 'hbs')
// app.set('views', viewsPath)
// hbs.registerPartials(partialsPath)

// Setup static directory to serve
// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Andrew Mead',
//         errorMessage: 'Page not found.'
//     })
// })
// create a server
const server = app.listen(3000, () => {
	const host = server.address().address;
	const port = server.address().port;
    console.log('Server is up on port 3000.',host,port);
})