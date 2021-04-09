const socket = io();

const message = document.querySelector('#messages');
const form = document.querySelector('#form');
const input = document.querySelector('#input');

form.addEventListener('submit', e => {
	e.preventDefault();
	if (input.value) {
		socket.emit('chat message', input.value);
		input.value = '';
	}
});

socket.on('chat message', msg => {
	const item = document.createElement('li');
	item.textContent = msg;
	message.appendChild(item);
	window.scrollTo(0, document.body.scrollHeight);
});
