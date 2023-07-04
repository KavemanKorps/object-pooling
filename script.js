import Shooter from "./shooter.js";

var canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.style.width=canvas.getBoundingClientRect().width;//actual width of canvas
canvas.style.height=canvas.getBoundingClientRect().height;//actual height of canvas

// let sheep = new Shooter(100, 100);
const shooter = new Shooter(100, 100);
shooter.draw(cxt);

function animate() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.fillStyle = "transparent";
    cxt.fillRect(0, 0, canvas.width, canvas.height);

    // dont want it redrawing the floor over and over again
    handleShooter();

    if (state == "RUNNING" && frame <= 100) frame++;
    else frame = 0;

    //setTimeout(animate, 5); // <<< Game runs much slower with this in conjunction with animate() VVV
    window.requestAnimationFrame(animate);
}
  
// animate();
window.requestAnimationFrame(animate);