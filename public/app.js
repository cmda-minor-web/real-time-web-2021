const socket = io()

const chatBox = document.querySelector('.chat--window')
const form = document.querySelector('.chat--form')
const chatInput = document.querySelector('.chat--form__input')

form.addEventListener('submit', e => {
  if (chatInput.value) {
    socket.emit('chat', chatInput.value)
    chatInput.value = ''
  }

  e.preventDefault()
})

socket.on('chat', message => {
  renderMessage(message)
})

function renderMessage(message) {
  const bubble = document.createElement('div')
  bubble.classList.add('chat--window__message')
  bubble.innerText = message
  chatBox.appendChild(bubble)
  chatBox.scrollTop = chatBox.scrollHeight
}