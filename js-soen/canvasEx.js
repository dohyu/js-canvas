let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    ctx.strokeRect(10, 10, 100, 100);
    ctx.fillRect(120, 10, 200, 100);
    ctx.clearRect(170, 40, 80, 40)
}
