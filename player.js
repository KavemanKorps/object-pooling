import Projectile from "./projectile.js";
import Floor from "./floor.js";

// why is mouse stuff here? so that it can be used as "entity.mouse" in inputHandler.js
export default class Shooter {
   constructor(game, x, y) { 
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y; 
        this.fireRate = 0;
        this.shooting = false;
        this.timer = 0;
    }
    draw(context) {    
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    // this runs when spacebar is pressed.
    shoot() {
        if (this.shooting) {
            this.timer++;
        }
        const projectile = this.game.getProjectile();
        // if (projectile) projectile.start(this.x, this.y);
        if (projectile) {
            projectile.x = this.x;
            projectile.y = this.y;
            projectile.free = false;
        }
    }
};