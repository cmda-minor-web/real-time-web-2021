import Player from './GameObjects/Player.js'
import Coin from './GameObjects/Coin.js'
import getRandomNumber from './utils/getRandomNumber.js'
import { context, removeObject } from './canvas.js'

// Constant global game variables
const
  socket = io(),
  sprite = document.querySelector('input[type=hidden').value,
  timerMinutes = document.querySelector('.timer #minutes'),
  timerSeconds = document.querySelector('.timer #seconds'),
  score = document.querySelector('#score')

let
  coinGenerator,
  timer,
  currentPlayer

// Socket event listeners and emits
socket
  .on('connect', onSocketConnection)
  .on('startGame', startGame)
  .on('showWinner', endGame)
  .on('updateTimer', updateTimer)
  .on('updateScore', updatePlayerScore)
  .on('drawObjects', drawObjects)
  .on('spawnCoin', drawObject)
  .on('removePlayer', removeObject)
  .on('removeCoin', removeObject)

function onSocketConnection() {
  currentPlayer = new Player(
    socket.id,
    getRandomNumber(100, (canvas.width - 100)),
    getRandomNumber(100, (canvas.height - 100)),
    sprite
  )
  socket.emit('newPlayer', currentPlayer)
}

function startGame() {
  generateCoins()
  handlePlayerMovement()
  startGameTimer()
}

function endGame(winner) {
  clearInterval(timer)
  clearInterval(coinGenerator)
  console.log(winner)
}

function generateCoins() {
  coinGenerator = setInterval(() => {
    const coin = new Coin (
      getRandomNumber(50, (canvas.width - 50)),
      getRandomNumber(50, (canvas.height - 50)),
    )
    socket.emit('generateCoin', coin)
  }, getRandomNumber(4000, 12000))
}

function handlePlayerMovement() {
  document.addEventListener('keydown', e => {
    currentPlayer.handleMovement(e.key)
    socket.emit('move', currentPlayer)
  })
}

function startGameTimer() {
  let deadline = new Date()
  deadline.setSeconds(deadline.getSeconds() + 91)

  timer = setInterval(() => {
    socket.emit('getTime', deadline.getTime())
  }, 1000)
}

function updateTimer({ minutes, seconds }) {
  timerMinutes.innerText = minutes
  timerSeconds.innerText = seconds
}

/**
 * Order redraw of canvas with all gameobjects
 * @param {Array} players Array of player objects
 * @param {Array} coins Array of coin gameobjects
 */
function drawObjects(players, coins) {
  drawObject(players, Player)
  drawObject(coins)
}

/**
 * Add the draw prototype and runs it for all objects
 * @param {Array} array Array of game objects (players or coins)
 * @param {Class} gameObject Class for gameObject template
 */
function drawObject(array, gameObject = Coin) {
  array.forEach(item => {
    item.__proto__.draw = gameObject.prototype.draw
    item.draw(context, canvas)
  })
}

function updatePlayerScore(player) {
  score.innerText = player.score
}