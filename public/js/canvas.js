import { getRandomNumber } from './game.js'

// HTML canvas element
const canvas = document.getElementById('canvas')
const context = drawCanvas()

/**
 * Draw the HTML5 canvas with sprites
 * @returns The canvas context
 */
export function drawCanvas() {
  canvas.classList.remove('hidden')
  canvas.setAttribute('width', canvas.clientWidth)
  canvas.setAttribute('height', canvas.clientHeight)
  return canvas.getContext('2d')
}

/**
 * Draw all the players on the canvas
 * @param {Object} player Destrucutred player to size and coordinates
 */
export function drawAvatarOnCanvas({ x, y, xOrigin, yOrigin, height, width, sprite }) {
  context.clearRect(xOrigin, yOrigin, width, height)
  context.beginPath()
  const image = new Image()
  image.src = sprite
  image.onload = () => {
    context.drawImage(image, x, y, width, height)
  }
}

export function drawCoin() {
  let x = getRandomNumber(20, (canvas.width - 20))
  let y = getRandomNumber(20, (canvas.height - 20))
  console.log(x, y)

  context.fillStyle = 'gold'
  context.beginPath()
  context.arc(x, y, 10, 0, 2 * Math.PI)
  context.closePath()
  context.fill()
}