const bitvavo = require('bitvavo')().options({
	ACCESSWINDOW: 10000,
	RESTURL: 'https://api.bitvavo.com/v2',
	WSURL: 'wss://ws.bitvavo.com/v2/',
	DEBUGGING: false,
});

function getBitcoinPrice(socket) {
	return setInterval(() => {
		bitvavo.tickerPrice({ market: 'BTC-EUR' }, (err, res) => {
			if (err === null) {
				const data = {
					price: res.price,
					time: new Date().toLocaleTimeString(),
				};

				socket.emit('data', data);
			} else {
				console.log(err);
			}
		});
	}, 5000);
}

module.exports = getBitcoinPrice;
