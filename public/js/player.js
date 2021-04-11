export default class Player {
  constructor() {
    this.move = {
      up: false,
      down: false,
      left: false,
      right: false
    }
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
}