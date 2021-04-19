const bitvavo = require('bitvavo')().options({});
const emitter = bitvavo.getEmitter();

emitter.on('error', response => {
	console.log(`Error: ${response}`);
});

emitter.on('tickerPrice', (error, response) => {
	if (error === null) {
		for (let entry of response) {
			console.log(entry);
		}
	} else {
		console.log(error);
	}
});

function getBitcoinPrice() {
	return setInterval(function () {
		bitvavo.websocket.tickerPrice({ market: 'BTC-EUR' });
	}, 5000);
}

module.exports = getBitcoinPrice;
