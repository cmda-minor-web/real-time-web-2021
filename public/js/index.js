import Player from './player.js'
import {
  drawCanvas,
  drawAvatarsOnCanvas
} from './canvas.js'

// Current player and socket.io classes
const
  socket = io(),
  currentPlayer = new Player()

// Global context variable for canvas
let context

// HTML Elements
const
  characterName = document.querySelectorAll('.starters--option__name'),
  characterOptionImages = document.querySelectorAll('.starters--option__image'),
  form = document.querySelector('.starters'),
  characterInputs = document.querySelectorAll('.starters--option__input'),
  submitButton = document.querySelector('.starters > button')

// Print starter sprites to screen from server-side API
socket.on('chooseStarter', starters => {
  starters.map((starter, index) => {
    characterName[index].innerText = starter.name
    characterOptionImages[index].src = starter.sprite
  })
})

// Enable/Disable submit button
characterInputs.forEach(input => {
  input.addEventListener('change', e => {
    if (e.target.checked) {
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  })
})

// Submit starter choice for avatar
form.addEventListener('submit', e => {
  e.preventDefault()
  const checkedStarter = document.querySelector('.starters--option__input:checked ~ img')
  currentPlayer.sprite = checkedStarter.src
  startGame()
})

// Listen to keypresses to control player movement
document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key, true)
  socket.emit('move', currentPlayer.move)
})
document.addEventListener('keyup', e => {
  currentPlayer.handleMovement(e.key, false)
})

// Draw canvas and listen to socket inputs
function startGame() {
  context = drawCanvas()
  socket
    .emit('newPlayer', currentPlayer.sprite)
    .on('drawPlayers', players => {
      drawAvatarsOnCanvas(players, context)
    })
}