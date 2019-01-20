const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.translate(100, 100);
context.transform(1, 0, 1, 1, 1, 0, 0);
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 50);
