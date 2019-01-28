let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    let img = new Image();
    img.src = 'images/1.jpg';
    img.onload = function() {
        ctx.beginPath();
        ctx.arc(200, 100, 100, 0, 2 * Math.PI, true);
        ctx.clip();

        ctx.drawImage(img, 0, 0);
    }
}