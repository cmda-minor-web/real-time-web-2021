const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const cookieParser = require('cookie-parser')
const session = require('express-session')
const memoryStore = session.MemoryStore
const circleIntersect = require('./utils/circleIntersect')
const { static, urlencoded } = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 8080
const ROOT = join(__dirname, '/public/')
const MEMORY = new memoryStore({ reapInterval: 60000 * 10 })

let players = {},
    coins = []

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

io.on('connection', socket => {
  const playerID = socket.id
  console.info(`Player [${playerID}] has joined`)

  socket
    .on('newPlayer', newPlayer => {
      addNewPlayer(playerID, newPlayer)
      socket.emit('updateScore', players[playerID])
      io.sockets.emit('drawObjects', players, coins)
    })
    .on('move', ({x, y, cBox}) => {
      updatePlayerPosition(x, y, cBox, players[playerID])
      checkCollision(players[playerID], socket)
      io.sockets.emit('drawObjects', players, coins)
    })
    .on('generateCoin', coin => {
      coins.push(coin)
      io.sockets.emit('spawnCoin', coins)
    })
    .on('disconnect', () => {
      console.info(`Player [${playerID}] has left`)
      io.sockets.emit('removePlayer', players[playerID])
      delete players[playerID]
    })
})

server.listen(PORT, () => {
  console.info(
    `Server is running on localhost:${PORT}`
  )
})

function addNewPlayer(
  playerID,
  { x, y, sprite, height, width, cBox }
) {
  players[playerID] = {
    x: x,
    y: y,
    height: height,
    width: width,
    score: 0,
    sprite: sprite,
    cBox: cBox
  }
}

function updatePlayerPosition(
  destinationX,
  destinationY,
  cBox,
  player
) {
  player.x = destinationX
  player.y = destinationY
  player.cBox = cBox
}

function checkCollision(player, socket) {
  coins.forEach(coin => {
    if (circleIntersect(coin, player.cBox)) {
      updatePlayerScore(coin, player, socket)
    }
  })
}

function updatePlayerScore(coin, player, socket) {
  player.score += 1
  coins = coins.filter(item => item !== coin)
  socket.emit('updateScore', player)
  io.sockets.emit('removeCoin', coin)
}