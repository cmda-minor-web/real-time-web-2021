import Player from './GameObjects/Player.js'
import ColissionBox from './GameObjects/ColissionBox.js'
import getRandomNumber from './utils/getRandomNumber.js'
import { 
  drawAvatarOnCanvas, 
  drawCoin, 
  removeObject
} from './canvas.js'

// Constant global game variables
const
  sprite = document.querySelector('input[type=hidden').value,
  x = getRandomNumber(100, (canvas.width - 100)),
  y = getRandomNumber(100, (canvas.height - 100)),
  socket = io(),
  cBox = new ColissionBox((x + 65), (y + 60)),
  currentPlayer = new Player(x, y, sprite, cBox)

// Listen to keypresses to control player movement
document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key)
  socket.emit('move', currentPlayer)
})

// Socket event listeners and emits
socket
  .emit('newPlayer', currentPlayer)
  .on('spawnCoin', coin => drawCoin(coin))
  .on('removeCoin', coin => removeObject(coin))
  .on('removePlayer', player => removeObject(player))
  .on('drawObjects', (players, coins) => {
    const playersArray = Object.values(players)
    playersArray.forEach(player => {
      drawAvatarOnCanvas(player, player.cBox)
    })
    coins.forEach(coin => drawCoin(coin))
  })

// Coin generation
setInterval(() => {
  const coin = {
    x: getRandomNumber(50, (canvas.width - 50)),
    y: getRandomNumber(50, (canvas.height - 50)),
    radius: 10
  }
  socket.emit('generateCoin', coin)
}, getRandomNumber(4000, 12000))