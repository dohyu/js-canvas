const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

// context.lineWidth = 3;
// context.strokeStyle = 'Aqua';
// context.moveTo(0, 30);
// context.lineTo(100, 30);
// context.stroke();

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = 'blue';
context.lineCap = 'butt';
context.moveTo(10, 30);
context.lineTo(100, 30);
context.stroke();

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = 'red';
context.lineCap = 'round';
context.moveTo(10, 50);
context.lineTo(100, 50);
context.stroke();

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = 'green';
context.lineCap = 'square';
context.moveTo(10, 70);
context.lineTo(100, 70);
context.stroke();
