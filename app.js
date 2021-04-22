// Require modules
require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 3000;

// Routes
const home = require('./routes/home');

// Bitvavo API module
const getBitcoinPrice = require('./helpers/socket');

// Set view engine
app.set('view engine', 'hbs')
	.set('views', __dirname + '/views')
	.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));

// Set static directory and routes
app.use(express.static(path.join(__dirname, '/public')))
	.use(express.urlencoded({ extended: true }))
	.use(home);

// Websocket
io.on('connection', socket => {
	getBitcoinPrice(socket);
});

// Initiate server on port
server.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
