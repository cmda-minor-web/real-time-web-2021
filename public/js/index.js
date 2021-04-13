import Player from './player.js'

const socket = io()
const context = drawCanvas()
const currentPlayer = new Player()

const selectScreen = document.querySelector('.select-avatar')
const characterName = document.querySelectorAll('.starters--option__name')
const characterOptionImages = document.querySelectorAll('.starters--option__image')
const form = document.querySelector('.starters')
const characterInputs = document.querySelectorAll('.starters--option__input')
const submitButton = document.querySelector('.starters > button')

socket.on('chooseStarter', starters => {
  starters.map((starter, index) => {
    characterName[index].innerText = starter.name
    characterOptionImages[index].src = starter.sprite
  })
})

characterInputs.forEach(input => {
  input.addEventListener('change', e => {
    if (e.target.checked) {
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  })
})

form.addEventListener('submit', e => {
  e.preventDefault()
  const checkedStarter = document.querySelector('.starters--option__input:checked ~ img')
  currentPlayer.sprite = checkedStarter.src
  selectScreen.remove()
  startGame()
})

document.addEventListener('keydown', e => {
  currentPlayer.handleMovement(e.key, true)
})

document.addEventListener('keyup', e => {
  currentPlayer.handleMovement(e.key, false)
})

function startGame() {
  socket
    .emit('newPlayer')
    .on('message', data => console.log(data))
    .on('state', players => {
      drawAvatarOnCanvas(players)
    })

  setInterval(() => {
    socket.emit('move', currentPlayer.move)
  }, 1000 / 60)
}

function drawCanvas() {
  const canvas = document.getElementById('canvas')
  canvas.height = 600
  canvas.width = 800
  return canvas.getContext('2d')
}

function drawAvatarOnCanvas(players) {
  context.clearRect(0, 0, 800, 600)
  context.fillStyle = '#5370b3'
  for (let id in players) {
    const player = players[id]
    context.beginPath()
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI)
    context.fill()
  }
}