import Player from './player.js'

const socket = io()
const currentPlayer = new Player()
const context = drawCanvas()

document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key, true)
})

document.addEventListener('keyup', e => {
  currentPlayer.handleMovement(e.key, false)
})

socket
  .emit('newPlayer')
  .on('message', data => console.log(data))
  .on('state', players => {
    drawAvatarOnCanvas(players)
  })

setInterval(() => {
  socket.emit('move', currentPlayer.move)
}, 1000 / 60)

function drawCanvas() {
  const canvas = document.getElementById('canvas')
  canvas.height = 600
  canvas.width = 800
  return canvas.getContext('2d')
}

function drawAvatarOnCanvas(players) {
  context.clearRect(0, 0, 800, 600)
  context.fillStyle = '#5370b3'
  for (let id in players) {
    const player = players[id]
    context.beginPath()
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI)
    context.fill()
  }
}