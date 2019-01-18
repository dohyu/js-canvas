const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, 100, 50);
context.transform(1, 0, 0, 1, 50, 50);
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 50);
