const bitvavo = require('bitvavo')().options({});
const emitter = bitvavo.getEmitter();

emitter.on('error', response => {
	console.log(`Error: ${response}`);
});

emitter.on('tickerPrice', response => {
	for (let entry of response) {
		console.log(entry);
	}
});

function getBitcoinPrice() {
	return setInterval(function () {
		bitvavo.websocket.tickerPrice({});
	}, 5000);
}

module.exports = getBitcoinPrice;
