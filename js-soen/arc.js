CanvasRenderingContext2D.prototype.strokeCircle = function (x, y, r) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.stroke();
}

CanvasRenderingContext2D.prototype.fillCircle = function (x, y, r) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.fill();
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r)
}

CanvasRenderingContext2D.prototype.strokeRoundRect = function (x, y, w, h, r) {
    this.roundRect(x, y, w, h, r);
    this.stroke();
}

CanvasRenderingContext2D.prototype.fillRoundRect = function (x, y, w, h, r) {
    this.roundRect(x, y, w, h, r);
    this.fill();
}

let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    // ctx.beginPath();
    // ctx.arc(100, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180, false);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.arc(300, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180, true);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(100, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180);
    // ctx.fill();
    //
    // ctx.beginPath();
    // ctx.moveTo(300, 100);
    // ctx.arc(300, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180);
    // ctx.fill();

    // ctx.strokeCircle(100, 100, 80);
    // ctx.fillCircle(300, 100, 80);

    // ctx.beginPath();
    // ctx.moveTo(10, 10);
    // ctx.arcTo(200, 10, 200, 50, 50);
    // ctx.lineTo(200, 100);
    // ctx.arcTo(200, 150, 10, 150, 50);
    // ctx.lineTo(10, 150);
    // ctx.stroke();

    ctx.strokeRoundRect(10, 10, 120, 100, 20);
    ctx.fillRoundRect(150, 10, 120, 100, 30);
}
