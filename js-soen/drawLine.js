CanvasRenderingContext2D.prototype.drawLine = function(sx, sy, ex, ey) {
     this.beginPath();
     this.moveTo(sx, sy);
     this.lineTo(ex, ey);
     this.stroke();
};

let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    ctx.drawLine(10, 10, 300, 150);
}
