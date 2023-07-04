var canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.style.width=canvas.getBoundingClientRect().width;//actual width of canvas
canvas.style.height=canvas.getBoundingClientRect().height;//actual height of canvas

export default class Projectile {
    constructor(shooter) {
      this.shooter = shooter;
      // constructor(x, y) { lol test
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.active = false;
      this.size = 3;

      this.speed = 10;
      this.delete = false;

      this.bulletLimit;
    }

    playSound(sound) {
      if (!sound.playing()) {
        sound.play();
      }
    }
    
    update() {
      this.x += this.speed;
    }
    
    draw() {
      cxt.fillStyle = "black";
      cxt.beginPath();
      cxt.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      cxt.fill();
    }
}