const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let str = '여기는 대한민국입니다.';
context.fillText(str, 10, 10);
context.fillText(str, 10, 20, 50);

context.font = '20pt D2Coding';
context.fillStyle = 'aqua';
context.strokeStyle = 'black';
context.fillText(str, 10, 50);
context.strokeText(str, 10, 50);
