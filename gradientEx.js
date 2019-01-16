const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let linearGrd = context.createLinearGradient(20, 20, 200, 100);
linearGrd.addColorStop(0, 'red');
linearGrd.addColorStop(0.5, 'blue');
linearGrd.addColorStop(1, 'green');
context.fillStyle = linearGrd;
context.fillRect(20, 20, 360, 100);

let str = 'Write to HTML5 Canvas';
context.fillStyle = 'white';
context.shadowColor = 'rgba(200, 200, 200, 0.5)';
context.shadowOffsetX = 3;
context.shadowOffsetY = 3;
context.shadowBlur = 5;
context.font = '20pt Century Gothic';
context.fillText(str, 35, 75);

let radialGrd = context.createRadialGradient(60, 175, 10, 70, 200, 50);
radialGrd.addColorStop(0, '#efeffb');
radialGrd.addColorStop(0.5, '#2e2efe');
radialGrd.addColorStop(1, '#0404b4');
context.lineWidth = 3;
context.fillStyle = radialGrd;
context.beginPath();
context.arc(70, 200, 50, 0, 2 * Math.PI);
context.stroke();
context.fill();

context.lineWidth = 5;
let radialGrd2 = context.createRadialGradient(210, 175, 10, 220, 200, 50);
radialGrd2.addColorStop(0, '#efeffb');
radialGrd2.addColorStop(1, '#0404b4');
context.fillStyle = radialGrd2;
context.beginPath();
context.arc(220, 200, 50, 0, 2 * Math.PI);
context.stroke();
context.fill();

let radialGrd3 = context.createRadialGradient(345, 175, 10, 370, 200, 50);
radialGrd3.addColorStop(0, '#efeffb');
radialGrd3.addColorStop(0.5, '#2e2efe');
context.fillStyle = radialGrd3;
context.beginPath();
context.arc(370, 200, 50, 0, 2 * Math.PI);
context.stroke();
context.fill();
