// HTML canvas element
const canvas = document.getElementById('canvas')

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
 * @param {Array} players Every player in the current game
 */
export function drawAvatarsOnCanvas(players, context) {
  const { height, width } = canvas
  context.clearRect(0, 0, width, height)
  context.fillStyle = '#5370b3'
  for (let id in players) {
    const player = players[id]
    const sprite = new Image()
    sprite.onload = () => {
      context.beginPath()
      context.drawImage(
        sprite, player.x, player.y, ((width / 10) * 1.5), (width / 10)
      )
    }
    sprite.src = player.sprite
  }
}