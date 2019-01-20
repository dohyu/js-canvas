const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(50, 100);
context.bezierCurveTo(100, 50, 150, 150, 200, 100);
context.lineWidth = 5;
context.strokeStyle = 'red';
context.stroke();
