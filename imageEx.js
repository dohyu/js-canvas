const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let img = new Image();
img.src = 'images/1.jpg';
img.onload = function() {
    context.drawImage(img, 300, 1200, 1600, 1200, 0, 0, 400, 300);
}
