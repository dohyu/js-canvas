let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    // let brush = ctx.createLinearGradient(10, 10, 150, 10);
    // brush.addColorStop(0, 'yellow');
    // brush.addColorStop(1, 'red');
    // ctx.fillStyle = brush;
    // ctx.fillRect(10, 10, 140, 140);
    //
    // brush = ctx.createLinearGradient(170, 10, 170, 150);
    // brush.addColorStop(0, 'white');
    // brush.addColorStop(1, 'black');
    // ctx.fillStyle = brush;
    // ctx.fillRect(170, 10, 140, 140);
    //
    // brush = ctx.createLinearGradient(320, 10, 470, 150);
    // brush.addColorStop(0, 'white');
    // brush.addColorStop(1, 'black');
    // ctx.fillStyle = brush;
    // ctx.fillRect(320, 10, 140, 140);

    var brush = ctx.createLinearGradient(100,10, 200, 10);
    brush.addColorStop(0, "yellow");
    brush.addColorStop(1, "red");
    ctx.fillStyle = brush;
    ctx.fillRect(10,10,300,80);

    var brush = ctx.createLinearGradient(0,110, 400, 110);
    brush.addColorStop(0, "yellow");
    brush.addColorStop(1, "red");
    ctx.fillStyle = brush;
    ctx.fillRect(10,110,300,80);
}
