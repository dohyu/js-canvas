const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = 'black';
context.moveTo(canvas.width / 2, 0);
context.lineTo(canvas.width / 2, canvas.height);
context.moveTo(0, canvas.height / 2);
context.lineTo(canvas.width, canvas.height / 2);
context.stroke();

context.fillStyle = 'blue';
context.fillRect(0, 0, 100, 50);

context.translate(canvas.width / 2, canvas.height / 2);
context.fillRect(0, 0, 100, 50);
