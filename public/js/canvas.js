// HTML canvas element
const canvas = document.getElementById('canvas')
const context = drawCanvas()

/**
 * Draw the HTML5 canvas with sprites
 * @returns The canvas context
 */
function drawCanvas() {
  canvas.classList.remove('hidden')
  canvas.setAttribute('width', canvas.clientWidth)
  canvas.setAttribute('height', canvas.clientHeight)
  return canvas.getContext('2d')
}

/**
 * Draw a player on the canvas
 * @param {Object} player Destrucutred player object
 */
export function drawAvatarOnCanvas(
  { x, y, xOrigin, yOrigin, height, width, sprite },
  { x: cX, y: cY, radius }
) {
  context.clearRect(xOrigin, yOrigin, width, height)
  const image = new Image()
  image.src = sprite
  image.onload = () => {
    context.drawImage(image, x, y, width, height)
  }

  context.beginPath()
  context.arc(cX, cY, radius, 0, 2 * Math.PI)
  context.closePath()
}

/**
 * Draw a coin on the canvas
 * @param {Object} coin Destructered coin object
 */
export function drawCoin({ x, y, radius }) {
  context.fillStyle = 'gold'
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI)
  context.closePath()
  context.fill()
}

export function removeObject({ x, y, width, height }) {
  context.clearRect(x, y, width, height)
}