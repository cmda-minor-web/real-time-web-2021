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

io
  .on('connection', async socket => {
    console.info(`Player-${socket.id} has joined`)

    const pokemons = await getStarterPokemons()
    io.sockets.emit('chooseStarter', pokemons)

    socket.on('newPlayer', (sprite) => {
      players[socket.id] = {
        x: 300,
        y: 300,
        sprite: sprite
      }
      io.sockets.emit('drawPlayers', players)
    })
    .on('move', data => {
      const player = players[socket.id] || {}
      if (data.up) player.y -= 10
      if (data.down) player.y += 10
      if (data.left) player.x -= 10
      if (data.right) player.x += 10
      io.sockets.emit('drawPlayers', players)
    })
    .on('disconnect', socket => {
      console.info(`Player-${socket.id} has left`)
    })
  })

server.listen(PORT, () => {
  console.info(
    `Server is running on localhost:${PORT}`
  )
})