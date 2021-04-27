export default class Coin {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = 10
  }

  draw(context) {
    context.beginPath()
    context.arc(
      this.x,
      this.y,
      this.radius,
      0, 2 * Math.PI
    )
    context.closePath()
    context.fillStyle = 'gold'
    context.fill()  
  }
}