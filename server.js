const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const cookieParser = require('cookie-parser')
const session = require('express-session')
const memoryStore = session.MemoryStore
const { static, urlencoded } = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 8080
const ROOT = join(__dirname, '/public/')
const MEMORY = new memoryStore({ reapInterval: 60000 * 10 })

let players = {}

app
  .set('view engine', 'ejs')
  .set('views', 'views')
  .use(cookieParser())
  .use(session({
    saveUninitialized: true,
    secret: 'psst',
    store: MEMORY,
    resave: true
  }))
  .use(urlencoded({ extended: true }))
  .use(static(ROOT))
  .use('/', require('./routes/index'))
  .use('/game', require('./routes/game'))

io
  .on('connection', socket => {
    const playerID = socket.id
    console.info(`Player[${playerID}] has joined`)

    socket
      .on('newPlayer', sprite => {
        players[playerID] = {
          x: 300,
          y: 300,
          xOrigin: 300,
          yOrigin: 300,
          score: 0,
          sprite: sprite,
          height: 80,
          width: 128
        }
        io.sockets.emit('drawPlayers', players)
      })
      .on('move', ({x, y}) => {
        const player = players[playerID] || {}
        player.xOrigin = player.x
        player.yOrigin = player.y
        player.x = x
        player.y = y
        io.sockets.emit('drawPlayers', players)
      })
      .on('disconnect', () => {
        console.info(`Player${playerID} has left`)
      })
  })

server.listen(PORT, () => {
  console.info(
    `Server is running on localhost:${PORT}`
  )
})