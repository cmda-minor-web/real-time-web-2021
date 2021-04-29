export default class Player {
  constructor(id, x, y, sprite) {
    this.id = id
    this.sprite = sprite
    this.x = x
    this.y = y
    this.height = 80
    this.width = 120
    this.cBox = {
      x: this.x + 65,
      y: this.y + 65,
      radius: 20
    }
    this.score = 0
  }

  handleMovement(key) {
    switch (key) {
      case 'w':
        this.y -= 20
        this.cBox.y -= 20
        break
      case 's':
        this.y += 20
        this.cBox.y += 20
        break
      case 'a':
        this.x -= 20
        this.cBox.x -= 20
        break
      case 'd':
        this.x += 20
        this.cBox.x += 20
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