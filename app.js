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

// Import modules
const getBitcoinPrice = require('./helpers/socket');
const {
	getRules,
	setRules,
	deleteRules,
	streamTweets,
} = require('./helpers/tweetStream');

// Set view engine
app.set('view engine', 'hbs')
	.set('views', __dirname + '/views')
	.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));

// Set static directory and routes
app.use(express.static(path.join(__dirname, '/public')))
	.use(express.urlencoded({ extended: true }))
	.use(home);

// Websocket
io.on('connection', async socket => {
	let currentRules;

	try {
		currentRules = await getRules();

		await deleteRules(currentRules);

		await setRules();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}

	streamTweets(io);
	getBitcoinPrice(socket);
});

// Initiate server on port
server.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
