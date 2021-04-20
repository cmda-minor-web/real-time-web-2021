import Player from './player.js'
import { drawAvatarOnCanvas } from './canvas.js'

const socket = io()
const currentPlayer = new Player

// Sprite source, retrieved form hidden input
const sprite = document.querySelector('input[type=hidden').value

// Listen to keypresses to control player movement
document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key)
  socket.emit('move', currentPlayer)
})

socket
  .emit('newPlayer', sprite)
  .on('drawPlayer', player => {
    currentPlayer.x = player.x
    currentPlayer.y = player.y
    drawAvatarOnCanvas(player)
  })