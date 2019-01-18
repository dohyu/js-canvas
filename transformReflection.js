const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'black';
context.font = '20pt Century Gothic';
context.fillText('자신의 아이디어를 프로그래밍하세요.', 0, 100);
context.transform(1, 0, 0, -1, 0, 0);
context.fillStyle = 'red';
context.fillText('자신의 아이디어를 프로그래밍하세요.', 0, -100);
