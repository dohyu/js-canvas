const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(0, 0, 100, 50);

context.fillStyle = 'red';
context.scale(0.5, 2);
context.fillRect(50, 100, 100, 50);
