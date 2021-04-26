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
  console.info(`Player[${playerID}] has joined`)

  socket
    .on('newPlayer', newPlayer => {
      addNewPlayer(playerID, newPlayer)
      io.sockets.emit('drawObjects', players, coins)
    })
    .on('move', ({x, y, cBox}) => {
      updatePlayerPosition(x, y, cBox, players[playerID])
      checkCollision(players[playerID], players[playerID].cBox)
      io.sockets.emit('drawObjects', players, coins)
    })
    .on('generateCoin', coin => {
      coins.push(coin)
      io.sockets.emit('spawnCoin', coin)
    })
    .on('disconnect', () => {
      console.info(`Player${playerID} has left`)
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
  { x, y, xOrigin, yOrigin, sprite, cBox }
) {
  players[playerID] = {
    x: x,
    y: y,
    xOrigin: xOrigin,
    yOrigin: yOrigin,
    score: 0,
    sprite: sprite,
    height: 80,
    width: 128,
    cBox: cBox
  }
}

function updatePlayerPosition(
  destinationX,
  destinationY,
  cBox,
  player
) {
  player.xOrigin = player.x
  player.yOrigin = player.y
  player.x = destinationX
  player.y = destinationY
  player.cBox = cBox
}

function checkCollision(
  player,
  cBox
) {
  coins.forEach(coin => {
    if (circleIntersect(coin, cBox)) {
      player.score += 1
      console.log('Coins collected: ', player.score)
      io.sockets.emit('removeCoin', coin)
      coins = coins.filter(item => item !== coin)
    }
  })
}

function circleIntersect(
  { x: x1, y: y1, radius: r1 },
  { x: x2, y: y2, radius: r2 }
) {
  let squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  return squareDistance <= ((r1 + r2) * (r1 + r2))
}