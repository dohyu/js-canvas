const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');

let pic = new Image();
pic.src = 'images/1.jpg';
pic.onload = function() {
    context.drawImage(pic, 0, 0, pic.width, pic.height, 0, 0, canvas.width / 2, canvas.height / 2);
}

let imageData = context.getImageData(0, 0, 100, 50);
let fromgetImageData = context.createImageData(imageData);

context.putImageData(imageData, 250, 100);
context.putImageData(imageData, 250, 200);
