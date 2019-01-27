let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    // var img = new Image();
    // img.src = 'images/elephpant_281_193.png';
    // img.onload = function() {
    //     // ctx.fillStyle = createPattern(img, 'repeat');
    //     // ctx.fillRect(10, 10, 580, 380);

    //     ctx.fillStyle = ctx.createPattern(img, 'repeat');
    //     ctx.fillRect(10, 10, 580, 380);
    // }

    let offCanvas = document.createElement('canvas');
    offCanvas.width = 100;
    offCanvas.height = 100;
    let offCtx = offCanvas.getContext('2d');

    let brush = offCtx.createLinearGradient(0, 0, 100, 100);
    brush.addColorStop(0, 'red');
    brush.addColorStop(0.5, 'yellow');
    brush.addColorStop(1, 'blue');
    offCtx.fillStyle = brush;
    offCtx.fillRect(0, 0, 100, 100);

    ctx.fillStyle = ctx.createPattern(offCanvas, 'repeat');
    ctx.fillRect(10, 10, 580, 380);
}