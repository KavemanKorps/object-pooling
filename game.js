import Player from "./player.js";
import Projectile from "./projectile.js";
import Floor from "./floor.js";
import InputHandler from "./inputHandler.js";

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.floor = new Floor(canvas);

        this.player = new Player(this, 100, this.floor.y - 50);
        this.input = new InputHandler(this.player);

        // PROJECTILES:
        this.projectilesPool = [];
        this.numOfProjectiles = 10;
        // IMMEDIATELY create the array of projectiles:
        this.createProjectiles();
        console.log(this.projectilesPool);
    }
    render(context) {
        this.player.draw(context);
        this.floor.draw(context);
        // all projectiles are rendered immediately.
        this.projectilesPool.forEach(projectile => {
            projectile.update();
            projectile.draw(context);
        })
    }
    // create projectiles object pool initially. 
    createProjectiles() {
        for (let i = 0; i < this.numOfProjectiles; i++) {
            this.projectilesPool.push(new Projectile());
        }
    }
    // get free projectile object from pool:
    // think of this as a projectile object in itself:
    getProjectile() {
        for (let i = 0; i < this.projectilesPool.length; i++) {
            if (this.projectilesPool[i].free) return this.projectilesPool[i];
        }
    }
}