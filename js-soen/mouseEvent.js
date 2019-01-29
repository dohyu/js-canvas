let canvas = null;
let ctx = null;
let color = 'yellow';
let x = 200;
let y = 100;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    canvas.onmousedown = onmousedown;
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function canvasX(clientX) {
    return clientX - canvas.offsetLeft;
}

function canvasY(clientY) {
    return clientY - canvas.offsetTop;
}

function onmousedown(e) {
    e.preventDefault();
    e.stopPropagation();
    x = canvasX(e.clientX);
    y = canvasY(e.clientY);
    draw();
}
