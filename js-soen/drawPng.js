let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    // let x, y;

    // for (x = 0; x < canvas.width; x += 20) {
    //     for (y = 0; y < canvas.height; y += 20) {
    //         ctx.strokeRect(x, y, 15, 15);
    //     }
    // }

    let w = canvas.width;
    let h = canvas.height;

    ctx.fillStyle = 'aqua';
    ctx.fillRect(0, 0, w, h);

    let img = new Image();
    img.src = 'images/elephpant_281_193.png';
    img.onload = function() {
        ctx.globalAlpha = 0.5;
        ctx.drawImage(img, w / 2 - img.width / 2, h / 2 - img.height / 2);
    }
}