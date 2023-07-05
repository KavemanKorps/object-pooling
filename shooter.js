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
        // this.bulletTimer = 0;
        // this.bulletInterval = 1;
        this.createPool();  

        this.timer = 0;
        
        this.weapon = "pistol";
        this.fireRate = 1;
        this.specialAmmo = 0;
    }
    createPool() {
        for (let i = 0; i < this.max; i++) {
            this.bulletPool.push(new Projectile(this));
        }
    }
    getElement() {
        for (let i = 0; i < this.bulletPool.length; i++) {
            if (this.bulletPool[i].free && this.shooting) return this.bulletPool[i];
        }
    }
    render(context, deltaTime) {    
        context.beginPath();
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, this.width, this.height);

        if (this.shooting) {
            this.timer++;
            // if (this.bulletTimer > this.bulletInterval) {
            if (this.timer % this.fireRate === 0  || this.timer == 1) {
                const bullet = this.getElement();
                if (bullet) bullet.start();
                this.bulletTimer = 0;
            } else {
                this.bulletTimer += deltaTime;
            }
            this.bulletPool.forEach(bullet => {
                // they are only drawn if "free" is true:
                bullet.draw(context);
                bullet.update();
            });
        }
        else {
            this.timer = 0;
        }
    }
}