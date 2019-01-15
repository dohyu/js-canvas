const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 100);
context.lineTo(400, 100);
context.stroke();

context.beginPath();
context.strokeStyle = 'red';
context.rect(0, 86, 400, 28);
context.stroke();

let str = 'Hope';

context.font = '14px D2Coding';
context.textBaseline = 'top';
context.fillText(str, 0, 100);

context.textBaseline = 'hanging';
context.fillText(str, 50, 100);

context.textBaseline = 'middle';
context.fillText(str, 100, 100);

context.textBaseline = 'alphabetic';
context.fillText(str, 150, 100);

context.textBaseline = 'ideographic';
context.fillText(str, 200, 100);

context.textBaseline = 'bottom';
context.fillText(str, 250, 100);
