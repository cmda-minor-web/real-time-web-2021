export default class Player {
  constructor() {
    this.sprite
    this.width = 128
    this.height = 80
    this.x;
    this.y;
    this.shotAngle
  }

  handleMovement(key) {
    switch (key) {
      case 'w':
        this.y -= 10
        break;
      case 'ArrowUp':
        this.y -= 10
        break;
      case 's':
        this.y += 10
        break;
      case 'ArrowDown':
        this.y += 10
        break;
      case 'a':
        this.x -= 10
        break;
      case 'ArrowLeft':
        this.x -= 10
        break;
      case 'd':
        this.x += 10
        break;
      case 'ArrowRight':
        this.x += 10
        break;
      default:
        break;
    }
  }
}