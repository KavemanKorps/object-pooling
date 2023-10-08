export default class Projectile {
  constructor() {
    this.width = 50;
    this.height = 4;
    this.x = 0;
    this.y = 0;
    this.speed = 10;
    this.free = true;
  }
  draw(context) {
    if (!this.free) {
      // context.font = "50px serif";
      // context.fillText(this.free, this.x, this.y);
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  update() {
    if (!this.free) {
        this.x += this.speed;
        // if (this.x < -this.width) this.free = true;
        // 
        if (this.x > 800) this.free = true;
    }
  }
}