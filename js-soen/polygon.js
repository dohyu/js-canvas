let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(150, 10);
    ctx.lineTo(250, 150);
    ctx.lineTo(50, 150);
    //ctx.closePath();
    //ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.rect(10, 160, 100, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 160, 100, 80);
    ctx.fill();
}
