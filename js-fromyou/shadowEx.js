const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.shadowColor = 'rgba(0, 0, 255, 1)';
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.fillStyle = '#b3e3f5';
context.fillRect(20, 20, 360, 100);

let str = 'HTML5 canvas에 텍스트 쓰기';
context.fillStyle = 'black';
context.shadowColor = 'rgba(0, 0, 0, 0.5)';
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 5;
context.font = '20pt Century Gothic';
context.fillText(str, 35, 75);

context.lineWidth = 20;
context.shadowColor = 'rgba(150, 0, 150, 0.5)';
context.shadowBlur = 15;
context.shadowOffsetX = -15;
context.shadowOffsetY = -15;
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(20, 200);
context.lineTo(220, 200);
context.stroke();
