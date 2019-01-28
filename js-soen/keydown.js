let canvas = null;
let ctx = null;
let color = 'yellow';
let x = 200;
let y = 100;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.stroke();
}

window.onkeydown = function(e) {
    switch(e.keyCode) {
        case 38:
            y -= 3;
            break;
        case 40:
            y += 3;
            break;
        case 37:
            x -= 3;
            break;
        case 39:
            x += 3;
            break;
        case 32:
            if (color == 'yellow') {
                color = 'blue';
            } else {
                color = 'yellow';
            }
            break;
    }
    draw();
}
