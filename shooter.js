import Projectile from "./projectile.js";

// why is mouse stuff here? so that it can be used as "entity.mouse" in inputHandler.js
export default class Shooter {
    constructor(x, y) { 
        this.width = 50;
        this.height = 50;
        this.y = y;
        this.x = x;

        this.shooting = false; 

        this.bulletPool = [];
        this.max = 5;  

        this.timer = 0;
        
        this.weapon = "pistol";
        this.fireRate = 0;
        this.specialAmmo = 0;

        // I should see if I can't add something like "this.createPool()" 
        // so as to pre-render the array of objects.
    }
    
    draw(context) {    
        context.beginPath();
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, this.width, this.height);

        for (let i = 0; i < this.bulletPool.length; i++) {
            this.bulletPool[i].draw(context);
        }
    }
    update() {
        if (this.shooting) {
            this.timer++;
          
            if ((this.timer % this.fireRate === 0  || this.timer == 1) &&
            this.bulletPool < this.max) {
                this.bulletPool.push(new Projectile(this.x, this.y + 10));
            }
        }
    }
}