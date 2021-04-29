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

let players = [],
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
      players.push(newPlayer)
      socket.emit('updateScore', newPlayer)
      io.sockets.emit('drawObjects', players, coins)
      Object.keys(players).length > 1 && io.sockets.emit('startGame')
    })
    .on('getTime', deadline => {
      let time = updateTimer(deadline)
      io.sockets.emit('updateTimer', time)
    })
    .on('move', updatedPlayer => {
      updatePlayerPosition(updatedPlayer)
      players.forEach(player => checkCollision(player, socket))
      io.sockets.emit('drawObjects', players, coins)
    })
    .on('generateCoin', coin => {
      coins.push(coin)
      io.sockets.emit('spawnCoin', coins)
    })
    .on('disconnect', () => {
      console.info(`Player [${playerID}] has left`)
      let player = players.find(item => item.id === playerID)
      io.sockets.emit('removePlayer', player)
      players.filter(item => item.id !== playerID)
    })
})

server.listen(PORT, () => {
  console.info(
    `Server is running on localhost:${PORT}`
  )
})

function updatePlayerPosition(playerUpdate) {
  players.forEach(player => {
    if (player.id === playerUpdate.id) {
      player.x = playerUpdate.x
      player.y = playerUpdate.y
      player.cBox = playerUpdate.cBox
    }
  })
}

function checkCollision(player, socket) {
  coins.forEach(coin => {
    if (circleIntersect(coin, player.cBox)) {
      updatePlayerScore(coin, player, socket)
    }
  })
}

function updateTimer(deadline) {
  let now = new Date().getTime()
  let time = deadline - now

  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((time % (1000 * 60)) / 1000)

  if (seconds === 0 && minutes === 0) endGame()
  return { minutes, seconds }
}

function updatePlayerScore(coin, player, socket) {
  player.score++
  coins = coins.filter(item => item !== coin)
  socket.emit('updateScore', player)
  io.sockets.emit('removeCoin', coin)
}

function getWinner() {
  const playersArray = Object.values(players)
  let winner = { score: 0 }
  for (let i = 0; i < playersArray.length; i++) {
    winner = playersArray[i].score > winner.score ? playersArray[i] : winner
  }

  return winner
}

function endGame() {
  const winner = getWinner()
  io.sockets.emit('showWinner', winner)
}