const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let centerX = 50;
let centerY = 50;
let radius = 30;
let startingAngle = 0;
let endingAngle = 0.5 * Math.PI;
let counterclockwise = false;
context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);

context.lineWidth = 15;
context.strokeStyle = 'black';
context.stroke();
