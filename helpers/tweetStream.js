require('dotenv').config();
const needle = require('needle');
const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules';
const streamURL =
	'https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id';

const rules = [{ value: '#btc' }];

// Get stream rules
async function getRules() {
	const res = await needle('get', rulesURL, {
		headers: {
			Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
		},
	});

	return res.body;
}

// Set stream rules
async function setRules() {
	const data = {
		add: rules,
	};

	const res = await needle('post', rulesURL, data, {
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
		},
	});

	return res.body;
}

// Delete stream rules
async function deleteRules(rules) {
	if (!Array.isArray(rules.data)) {
		return null;
	}

	const ids = rules.data.map(rule => rule.id);

	const data = {
		delete: {
			ids: ids,
		},
	};

	const res = await needle('post', rulesURL, data, {
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
		},
	});

	return res.body;
}

function streamTweets(socket) {
	const stream = needle.get(streamURL, {
		headers: {
			Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
		},
	});

	stream.on('data', data => {
		try {
			const json = JSON.parse(data);
			socket.emit('tweet', json);
		} catch (error) {
			console.error(error);
		}
	});
}

module.exports = { getRules, setRules, deleteRules, streamTweets };
