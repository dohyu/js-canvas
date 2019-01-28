let canvas = null;
let ctx = null;
let color = 'yellow';
let x = 200;
let y = 100;
let keyPressed = [];

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
    setInterval(update, 50);
}

window.onkeydown = function(e) {
    keyPressed[e.keyCode] = true;
}

window.onkeyup = function(e) {
    keyPressed[e.keyCode] = false;
}

function update() {
    let press = false;
    if (keyPressed[38]) {
        y -= 3;
        press = true;
    }
    if (keyPressed[40]) {
        y += 3;
        press = true;
    }
    if (keyPressed[37]) {
        x -= 3;
        press = true;
    }
    if (keyPressed[39]) {
        x += 3;
        press = true;
    }
    if (keyPressed[32]) {
        if (color == 'blue') {
            color = 'yellow';
        } else {
            color = 'blue';
        }
        press = true;
    }

    if (press) {
        draw();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();
}
