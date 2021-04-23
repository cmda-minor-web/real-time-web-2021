export default class Player {
  constructor() {
    this.sprite
    this.yOrigin
    this.xOrigin
    this.x = 300
    this.y = 300
    this.width = 128
    this.height = 80
    this.score = 0
    this.isColliding = false
  }

  handleMovement(key) {
    switch (key) {
      case 'w':
        this.yOrigin = this.y
        this.y -= 10
        break
      case 's':
        this.yOrigin = this.y
        this.y += 10
        break
      case 'a':
        this.xOrigin = this.x
        this.x -= 10
        break
      case 'd':
        this.xOrigin = this.x
        this.x += 10
        break
      default:
        break
    }
  }
}