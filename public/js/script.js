const socket = io();
const ctx = document.querySelector('#lineChart');

const myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [],
		datasets: [
			{
				label: 'Price BTC',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [],
			},
		],
	},
});

socket.on('connect', () => {
	console.log('Connected to server...');

	socket.on('data', data => {
		const { price, time } = data;
		const { data: dataArray } = myChart.data.datasets[0];
		const { labels: labelsArray } = myChart.data;

		dataArray.push(price);
		labelsArray.push(time);

		myChart.update();
	});

	socket.on('tweet', tweet => {
		const tweetData = {
			id: tweet.data.id,
			text: tweet.data.text,
			username: `@${tweet.includes.users[0].username}`,
		};

		const tweetStream = document.querySelector('#tweetStream');
		const tweetElement = document.createElement('div');
		tweetElement.innerHTML = `
			<div>
				<h5>${tweetData.text}</h5>
				<h6>${tweetData.username}</h6>

				<a href="https://twitter.com/${tweetData.username}/status/${tweetData.id}"></a>
			</div>
		`;

		tweetStream.appendChild(tweetElement);

		setTimeout(() => tweetElement.remove(), 5000);
	});
});
