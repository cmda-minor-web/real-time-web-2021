import Player from './player.js'
import { drawAvatarOnCanvas, drawCoin } from './canvas.js'

const socket = io()
const currentPlayer = new Player

// Sprite source, retrieved form hidden input
const sprite = document.querySelector('input[type=hidden').value

// Listen to keypresses to control player movement
document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key)
  socket.emit('move', currentPlayer)
})

document.addEventListener('click', e => {
  if (e.target.nodeName === 'CANVAS') {
    currentPlayer.shotAngleX = e.x
    currentPlayer.shotAngleY = e.y
    socket.emit('shooting', currentPlayer)
  }
})

socket
  .emit('newPlayer', sprite)
  .on('drawPlayers', players => {
    const playersArray = Object.values(players)
    playersArray.forEach(player => {
      drawAvatarOnCanvas(player)
    })
  })

setInterval(() => {
  drawCoin()
}, getRandomNumber(6000, 8000))

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}