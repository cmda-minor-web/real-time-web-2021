export default class Player {
  constructor(x, y, sprite, cBox) {
    this.sprite = sprite
    this.cBox = cBox
    this.yOrigin
    this.xOrigin
    this.x = x
    this.y = y
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
}