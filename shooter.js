import Projectile from "./projectile.js";

// why is mouse stuff here? so that it can be used as "entity.mouse" in inputHandler.js
export default class Shooter {
    constructor(x, y) { 
        this.width = 50;
        this.height = 50;
        this.y = y;
        this.x = x;

        this.name = "Warren";
        this.disabled = true;
        this.health = 3;
        this.delete = false;

        this.bulletPool = [];
        this.bulletMax = 5;
        this.which = 0;

        /* HOW PROJECTILES WORK: whenever user shoots, new projectile added to array. As he not shoots,
        it automatically decrements until it is empty :) */
        this.projectiles = [];
        this.shooting = false;
        this.timer = 0;

        // pistol, ar, and flamethrower
        this.weapon = "pistol";
        this.fireRate = 0;
        this.specialAmmo = 0;
    }

    isShooting() {
        this.bulletPool[which].active = true;
        which++;
        if (which > this.bulletPool.length-1){
            which = 0;
        }
    }

    setup() {
        for (let i = 0; i < this.bulletMax; i++) {
            this.bulletPool.push(this.projectiles.push(new Projectile(this.x + this.width - 20, this.y + 10, this.angle, this.weapon, this.delete)));
        }
    }
    
    draw(context) {
        context.beginPath();
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.font = "20px serif";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(this.name, this.x + (this.width / 2), this.y + (this.height / 2));
    }

    update() {
        // code doesn't work. fireRate not set.    
        if (this.shooting) {
            
        }
    }
}