const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let cornerRadius = 20;
context.lineWidth = 5;

context.beginPath();
context.moveTo(100, 100);
context.lineTo(150, 100);
context.arcTo(170, 100, 170, 120, cornerRadius);
context.lineTo(170, 170);
context.stroke();
