import Shooter from "./shooter.js";
import InputHandler from "./inputHandler.js";

var canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.style.width=canvas.getBoundingClientRect().width;//actual width of canvas
canvas.style.height=canvas.getBoundingClientRect().height;//actual height of canvas

// let sheep = new Shooter(100, 100);
const shooter = new Shooter(100, 100);

// InputHandler(shooter);
new InputHandler(shooter, canvas);

function handleShooter() {
    shooter.render(cxt);
    shooter.update();
}

function handleProjectile() {
 
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