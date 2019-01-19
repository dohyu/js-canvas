const imgs = [1, 2, 3, 4, 5, 6];
const canvas = document.querySelector('#js-canvas');
const context = canvas.getContext('2d');
let img = document.createElement('img');
let idx = 0;

window.onload = () => {
    img.setAttribute('width', 600);
    img.setAttribute('height', 400);
    switchImage();

    setInterval(switchImage, 3000);
}

function switchImage() {
    img.setAttribute('src', 'images/' + imgs[idx++] + '.jpg');
    img.onload = function() {
        if (idx >= imgs.length) idx = 0;
        context.drawImage(img, 0, 0, 600, 400);
    }
}
