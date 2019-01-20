const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.translate(canvas.width / 2, canvas.height / 2);
context.rotate(Math.PI / 4);
context.fillStyle = 'blue';
context.fillRect(0, 0, 50, 100);
