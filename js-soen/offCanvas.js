let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

// function draw() {
//     let offCanvas = document.createElement('canvas');
//     offCanvas.width = canvas.width;
//     offCanvas.height = canvas.height;
//     let offCtx = offCanvas.getContext('2d');
//     for (let i = 0; i < 100; i += 5) {
//         offCtx.beginPath();
//         offCtx.arc(200, 100, i, 0, 2 * Math.PI);
//         offCtx.stroke();
//     }

//     ctx.drawImage(offCanvas, 0, 0, offCanvas.width, offCanvas.height);
// }

function draw() {
    let img = new Image();
    img.src = 'images/elephpant_281_193.png';
    img.onload = function() {
        let w = canvas.width;
        let h = canvas.height;

        ctx.drawImage(img, w / 2 - img.width / 2, h / 2 - img.height / 2);
        ctx.drawImage(canvas, 200, 150, 100, 100, 0, 0, 100, 100);
    }
}