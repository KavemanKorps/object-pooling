import Shooter from "./shooter.js";
import InputHandler from "./inputHandler.js";

const canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 300;

// let sheep = new Shooter(100, 100);
const shooter = new Shooter(100, 100);

// InputHandler(shooter);
new InputHandler(shooter, canvas);

let lastTime = 0;
function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.fillStyle = "transparent";
    cxt.fillRect(0, 0, canvas.width, canvas.height);
    shooter.render(cxt, deltaTime)

    // window.requestAnimationFrame(animate);
    console.log(shooter.shooting);
    requestAnimationFrame(animate);
}
  
animate(0);
// window.requestAnimationFrame(animate(0));