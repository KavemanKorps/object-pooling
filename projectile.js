var canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.style.width=canvas.getBoundingClientRect().width;//actual width of canvas
canvas.style.height=canvas.getBoundingClientRect().height;//actual height of canvas

// I NEED TO USE A SIMILAR SYSTEM AS THAT IN SHOOTER-GAME-JS. Push but don't splice.
export default class Projectile {
    constructor(shooter) {
      this.shooter = shooter;
      this.radius = 3;

      this.x = shooter.x - 50;
      this.y = Math.random() * canvas.height;
    
      this.speed = 10;

      this.free = false;

    }
    draw(context) {
      if (!this.free) {
        context.fillStyle = "black";
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        cxt.fill();
      }
    }
    
    update() {
      if (!this.free) {
        this.x += this.speed;
        if (this.x > canvas.width + this.radius) {
            this.reset();
        }
      }
    }
    reset() {
      this.x = this.shooter.x;
      this.y = this.shooter.y;
      this.free = true;
    }
    start() {
      this.free = false;
    }
}