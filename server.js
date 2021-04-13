const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const { static, urlencoded } = require('express')
const { join } = require('path')
const getStarterPokemons = require('./queries/getStarters')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const PORT = process.env.PORT || 8080
const ROOT = join(__dirname, '/public/')

let players = {}

app
  .use(urlencoded({ extended: true }))
  .use(static(ROOT))
  .get('/', (req, res) => res.sendFile(ROOT, 'index.html'))

io.on('connection', async socket => {
  console.info('A new player has joined!')

  const pokemons = await getStarterPokemons()
  io.sockets.emit('chooseStarter', pokemons)

  socket.on('newPlayer', () => {
    players[socket.id] = {
      x: 300,
      y: 300
    }
  })

  socket.on('move', data => {
    const player = players[socket.id] || {}
    if (data.up) player.y -= 5
    if (data.down) player.y += 5
    if (data.left) player.x -= 5
    if (data.right) player.x += 5
  })
})

server.listen(PORT, () => {
  console.info(
    `Server is running on localhost:${PORT}`
  )
})

setInterval(() => {
  io.sockets.emit('state', players)
}, 1000 / 60)