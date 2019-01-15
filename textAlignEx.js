const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let str = '여기는 대한민국입니다.';

context.beginPath();
context.moveTo(200, 0);
context.lineTo(200, 300);
context.stroke();

context.textAlign = 'start';
context.fillText(str, 200, 50);
context.textAlign = 'end';
context.fillText(str, 200, 70);
context.textAlign = 'left';
context.fillText(str, 200, 90);
context.textAlign = 'center';
context.fillText(str, 200, 110);
context.textAlign = 'right';
context.fillText(str, 200, 130);
