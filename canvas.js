const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

(() => {

    /*********************************************************************/
    // color & style
    // context.fillStyle = 'green';
    // context.fillRect(20, 20, 100, 100);
    //
    // context.strokeStyle = 'rgb(0,0,255)';
    // context.strokeRect(120, 120, 100, 100);
    /*********************************************************************/

    /*********************************************************************/
    // Rectangle
    // context.fillStyle = 'green';
    // context.strokeStyle = 'blue';
    //
    // context.fillRect(0, 0, 150, 50);
    // context.clearRect(30, 25, 40, 40);
    // context.strokeRect(30, 25, 40, 40);
    // context.fillRect(0, 80, 150, 50);
    // context.strokeRect(0, 80, 150, 50);
    /*********************************************************************/

    /*********************************************************************/
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
    /*********************************************************************/
})();
