export default class Player {
  constructor(x, y, sprite) {
    this.sprite = sprite
    this.yOrigin
    this.xOrigin
    this.x = x
    this.y = y
    this.cBox = {
      x: this.x + 65,
      y: this.y + 65,
      radius: 20
    }
    this.width = 128
    this.height = 80
    this.score = 0
  }

  handleMovement(key) {
    switch (key) {
      case 'w':
        this.yOrigin = this.y
        this.y -= 10
        this.cBox.y -= 10
        break
      case 's':
        this.yOrigin = this.y
        this.y += 10
        this.cBox.y += 10
        break
      case 'a':
        this.xOrigin = this.x
        this.x -= 10
        this.cBox.x -= 10
        break
      case 'd':
        this.xOrigin = this.x
        this.x += 10
        this.cBox.x += 10
        break
      default:
        break
    }
  }

  draw(context, canvas) {
    context.clearRect(
      0, 0,
      canvas.width,
      canvas.height
    )

    const image = new Image()
    image.src = this.sprite
    image.onload = () => {
      context.drawImage(
        image,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
  }
}