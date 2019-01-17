const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.strokeStyle = 'red';
context.fillStyle = 'yellow';
context.lineWidth = 5;
context.fillRect(10, 10, 50, 50);
context.strokeRect(10, 10, 50, 50);
context.save();

context.strokeStyle ='violet';
context.fillStyle = 'blue';
context.lineWidth = 10;
context.fillRect(70, 10, 100, 100);
context.strokeRect(70, 10, 100, 100);
context.save();

context.strokeStyle ='blue';
context.fillStyle = 'aqua';
context.lineWidth = 5;
context.strokeRect(340, 10, 50, 50);
context.fillRect(340, 10, 50, 50);

context.restore();
context.fillRect(70, 130, 100, 100);
context.strokeRect(70, 130, 100, 100);

context.restore();
context.fillRect(10, 70, 50, 50);
context.strokeRect(10, 70, 50, 50);

context.strokeRect(180, 10, 100, 150);

// Save to png
var dataUrl = canvas.toDataURL();
document.querySelector('#canvasImg').src = dataUrl;
