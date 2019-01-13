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
    context.fillStyle = 'green';
    context.strokeStyle = 'blue';

    context.fillRect(0, 0, 150, 50);
    context.clearRect(30, 25, 40, 40);
    context.strokeRect(30, 25, 40, 40);
    context.fillRect(0, 80, 150, 50);
    context.strokeRect(0, 80, 150, 50);
    /*********************************************************************/
})();
