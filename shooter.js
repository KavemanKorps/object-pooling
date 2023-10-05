import Projectile from "./projectile.js";

// why is mouse stuff here? so that it can be used as "entity.mouse" in inputHandler.js
export default class Shooter {
    constructor(game) { 
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
    }
    
    draw(context) {    
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    shoot() {
        const projectile = this.game.getProjectile();
        if (projectile) projectile.start(this.x, this.y);
    }
}