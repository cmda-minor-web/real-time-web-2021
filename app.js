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

// Bitvavo module and options
const bitvavo = require('bitvavo')().options({
	ACCESSWINDOW: 10000,
	RESTURL: 'https://api.bitvavo.com/v2',
	WSURL: 'wss://ws.bitvavo.com/v2/',
	DEBUGGING: false,
});

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

io.on('connect', socket => {
	setInterval(() => {
		bitvavo.tickerPrice({ market: 'BTC-EUR' }, (err, res) => {
			if (err === null) {
				const data = {
					price: res.price,
					time: new Date().toLocaleTimeString(),
				};

				socket.emit('data', { data: data });
			} else {
				console.log(err);
			}
		});
	}, 5000);
});

// Initiate server on port
server.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
