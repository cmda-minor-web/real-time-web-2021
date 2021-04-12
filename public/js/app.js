import Player from './player.js'

const socket = io()
const currentPlayer = new Player()
const ctx = setCanvas()

document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key, true)
})

document.addEventListener('keyup', e => {
  currentPlayer.handleMovement(e.key, false)
})

socket
  .emit('newPlayer')
  .on('message', data => console.log(data))
  .on('data', data => console.log(data))
  .on('state', players => {
    ctx.clearRect(0, 0, 800, 600)
    ctx.fillStyle = '#5370b3'
    for (let id in players) {
      const player = players[id]
      ctx.beginPath()
      ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI)
      ctx.fill()
    }
  })

setInterval(() => {
  socket.emit('move', currentPlayer.move)
}, 1000 / 60)

function setCanvas() {
  const canvas = document.getElementById('canvas')
  canvas.height = 600
  canvas.width = 800
  return canvas.getContext('2d')
}