const socket = io();

socket.on('connect', () => {
	console.log('Connected to server...');
});

socket.on('data', data => console.log(data));

const labels = ['12:00 PM', '13:00 PM', '14:00 PM', '15:00 PM'];

const data = {
	labels: labels,
	datasets: [
		{
			label: 'My first dataset',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [0, 10, 5, 2],
		},
	],
};

const config = {
	type: 'line',
	data,
	options: {},
};

const lineChart = new Chart(document.querySelector('#lineChart'), config);
