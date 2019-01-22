let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    // ctx.fillRect(10, 10, 40, 100);
    //
    // ctx.fillStyle = 'green';
    // ctx.fillRect(60, 10, 40, 100);
    // ctx.fillRect(110, 10, 40, 100);
    // ctx.fillRect(160, 10, 40, 100);
    //
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(210, 10, 40, 100);
    //
    // ctx.fillStyle = 'pink';
    // ctx.fillRect(260, 10, 40, 100);
    // ctx.fillRect(310, 10, 40, 100);

    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(60, 60, 100, 100);
}
