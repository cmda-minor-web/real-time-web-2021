// HTML canvas element
export const canvas = document.getElementById('canvas')
export const context = drawCanvas()

/**
 * Draw the HTML5 canvas with sprites
 * @returns The canvas context
 */
export function drawCanvas() {
  canvas.setAttribute('width', canvas.clientWidth)
  canvas.setAttribute('height', canvas.clientHeight)
  return canvas.getContext('2d')
}

export function removeObject({ x, y, width, height }) {
  context.clearRect(x, y, width, height)
}