import Shooter from "./shooter.js";
import InputHandler from "./inputHandler.js";

var canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.style.width=canvas.getBoundingClientRect().width;//actual width of canvas
canvas.style.height=canvas.getBoundingClientRect().height;//actual height of canvas

// let sheep = new Shooter(100, 100);
const shooter = new Shooter(100, 100);
shooter.draw(cxt);

// InputHandler(shooter);
new InputHandler(shooter, canvas);
shooter.setup();

function handleShooter() {
    shooter.draw(cxt);
    shooter.update();
}

function handleProjectile() {
    let projectiles = shooter.projectiles;

    for (let i = 0; i < shooter.projectiles.length; i++) {
        let current = projectiles[i];

        if (projectiles.length > 0 && current) {
    
            // TO REVERT LATER ON:
            if (current.x < canvas.width - 100) {
                current.update();
                current.draw(cxt); 
            }
            else {
                projectiles.splice(i, 1);
                i--;
            }
        }

        // projectiles despawn logic. Takes into account all types:
        if (projectiles[i]) {
            // delete when leaving canvas (for small arms)
            if (projectiles[i].x > canvas.width - 100) {
                projectiles.splice(i, 1);
                i--;
            }
        }
    }
}

function animate() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.fillStyle = "transparent";
    cxt.fillRect(0, 0, canvas.width, canvas.height);
    handleShooter();
    handleProjectile();
    window.requestAnimationFrame(animate);

    console.log(shooter.bulletPool);
}
  
// animate();
window.requestAnimationFrame(animate);