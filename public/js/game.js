import Player from './GameObjects/Player.js'
import Coin from './GameObjects/Coin.js'
import getRandomNumber from './utils/getRandomNumber.js'
import { context, removeObject } from './canvas.js'

// Constant global game variables
const
  socket = io(),
  sprite = document.querySelector('input[type=hidden').value,
  score = document.querySelector('#score'),
  x = getRandomNumber(100, (canvas.width - 100)),
  y = getRandomNumber(100, (canvas.height - 100)),
  currentPlayer = new Player(x, y, sprite)

// Listen to keypresses to control player movement
document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key)
  socket.emit('move', currentPlayer)
})

// Socket event listeners and emits
socket
  .emit('newPlayer', currentPlayer)
  .on('removePlayer', removeObject)
  .on('drawObjects', drawObjects)
  .on('spawnCoin', drawCoins)
  .on('updateScore', updatePlayerScore)
  .on('removeCoin', removeObject)

/**
 * Order redraw of canvas with all gameobjects
 * @param {Array} players Array of player objects
 * @param {Array} coins Array of coin gameobjects
 */
function drawObjects(players, coins) {
  drawPlayers(players)
  drawCoins(coins)
 }

/**
 * Add the draw prototype and runs it for all players
 * @param {Array} players Array of player objects
 */
function drawPlayers(players) {
  const playersArray = Object.values(players)
  playersArray.forEach(player => {
    player.__proto__.draw = Player.prototype.draw
    player.draw(context, canvas)
  })
}

/**
 * Add the draw prototype and runs it for all coins
 * @param {Array} coins Array of coin gameobjects
 */
function drawCoins(coins) {
  coins.forEach(coin => {
    coin.__proto__.draw = Coin.prototype.draw
    coin.draw(context)
  })
}

function updatePlayerScore(player) {
  score.innerText = player.score
}

// Coin generation
setInterval(() => {
  const coin = new Coin (
    getRandomNumber(50, (canvas.width - 50)),
    getRandomNumber(50, (canvas.height - 50)),
  )
  socket.emit('generateCoin', coin)
}, getRandomNumber(4000, 12000))