const bitvavo = require('bitvavo')().options({
	ACCESSWINDOW: 10000,
	RESTURL: 'https://api.bitvavo.com/v2',
	WSURL: 'wss://ws.bitvavo.com/v2/',
	DEBUGGING: false,
});

// Get cryptocurrency price, store in object and send object to client side by emitting event
// async function getTickerPrice(socket) {
// 	return setInterval(async () => {
// 		try {
// 			const res = await bitvavo.TickerPrice({ market: 'BTC-EUR' });
// 			const { price } = res;
// 			const currentTime = new Date();

// 			const cryptoPriceData = {
// 				price: price,
// 				time: currentTime.toLocaleTimeString(),
// 			};

// 			socket.emit('priceUpdate', cryptoPriceData);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}, 5000);
// }

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
