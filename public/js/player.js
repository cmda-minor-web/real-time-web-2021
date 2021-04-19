export default class Player {
  constructor() {
    this.move = {
      up: false,
      down: false,
      left: false,
      right: false
    }
    this.sprite
    this.x = 0
    this.y = 0
  }

  handleMovement(key, value) {
    switch (key) {
      case 'w':
        this.move.up = value
        break;
      case 's':
        this.move.down = value
        break;
      case 'a':
        this.move.left = value
        break;
      case 'd':
        this.move.right = value
        break;
      default:
        break;
    }
  }

  setShotAngle(mx, my) {
    const mousePosition = { x: mx, y: my }
    let deltaX = mousePosition.x - this.x
    let deltaY = mousePosition.y - this.y
    
  }
}