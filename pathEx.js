const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

// basic
// canvas에 그릴 선의 두꼐나 도형의 스타일 설정
context.strokeStyle = 'blue';
context.fillStyle = 'red';
context.lineWidth = 5;

// 직선그리기
context.beginPath();
context.moveTo(10, 10);
context.lineTo(100, 10);
context.stroke();

// 열린 경로 그리기
context.beginPath();
context.moveTo(30, 100);
context.lineTo(60, 30);
context.lineTo(90, 100);
context.stroke();

// 닫힌 경로 그리기
context.beginPath();
context.moveTo(120, 100);
context.lineTo(150, 30);
context.lineTo(180, 100);
context.lineTo(120, 100);
context.closePath();
context.lineTo(120, 150);
context.stroke();

// rect()
context.beginPath();
context.rect(30, 160, 100, 50);
context.fillStyle = 'pink';
context.fill();
context.lineWidth = 10;
context.strokeStyle = 'black';
context.stroke();
