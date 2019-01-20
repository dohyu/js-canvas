const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(20, 120);
context.quadraticCurveTo(50, 0, 100, 100);
context.lineWidth = 5;
context.strokeStyle = 'red';
context.stroke();
