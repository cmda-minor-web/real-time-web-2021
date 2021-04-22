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
});

socket.on('tweet', tweet => console.log(tweet));
