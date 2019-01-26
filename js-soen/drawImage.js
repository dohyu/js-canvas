let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    var img = new Image();
    img.src = 'images/1.jpg';
    img.onload = function() {
        //ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 550, 800, 1800, 1200, 0, 0, canvas.width, canvas.height);
    }
}