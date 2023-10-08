import Game from "./game.js";

const canvas = document.getElementById("canvas1");
// var cxt = canvas.getContext("2d", { alpha: false });
var cxt = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 300;

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const cxt = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 300;

    const game = new Game(canvas);

    function animate() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        game.render(cxt);
        window.requestAnimationFrame(animate);
    }
    animate();
});