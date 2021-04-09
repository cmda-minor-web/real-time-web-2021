// Require modules
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');
const port = 3000;

// Routes
const home = require('./routes/home');

// Set view engine
app.set('view engine', 'hbs')
	.set('views', __dirname + '/views')
	.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));

// Set static directory and routes
app.use(express.static(path.join(__dirname, '/public')))
	.use(express.urlencoded({ extended: true }))
	.use(home);

io.on('connection', socket => {
	console.log('A user connected');
});

// Initiate server on port
server.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
