

export default class Projectile {
    // "dead" used as determinant for playing sounds
    constructor(x, y, direction, weapon, dead) {
      // constructor(x, y) { lol test
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.weapon = weapon;
      this.dead = dead;

      this.size = 3;

      this.speed = 10;
      this.delete = false;

      this.bulletLimit;

      this.pistol = new Audio();
      this.pistol.src = "src/assets/sounds/shots/pistol.wav";
    }

    playSound(sound) {
      if (!sound.playing()) {
        sound.play();
      }
    }
    
    update() {
      switch (this.weapon) {
        case "pistol":
          this.playSound(this.sfx.pistol);
          break;
      }
    }
    
    draw(context) {
      context.fillStyle = "black";
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.fill();
    }
}