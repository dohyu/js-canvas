const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.translate(canvas.width / 2, canvas.height / 2);
context.fillStyle = 'blue';
context.fillRect(50, 50, canvas.width / 4, canvas.height / 3);

context.setTransform(1, 0, 0, 1, 0, 0);
context.fillStyle = 'red';
context.fillRect(0, 0, canvas.width / 4, canvas.height / 3);
