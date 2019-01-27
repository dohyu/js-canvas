let canvas = null;
let ctx = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    if (canvas === null || canvas.getContext === null) return;
    ctx = canvas.getContext('2d');
    draw();
}

function draw() {
    // var img = new Image();
    // img.src = 'images/elephpant_281_193.png';
    // img.onload = function() {
    //     ctx.drawImage(img, 0, 0);

    //     let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //     let raster = imgData.data;
    //     for (let i = 0; i < raster.length; i++) {
    //         if (i % 4 != 3) {
    //             raster[i] = 255 - raster[i];
    //         }
    //     }
    //     ctx.putImageData(imgData, 0, 0);
    // }

    let img = new Image();
    img.src = 'images/minion.jpg';
    img.onload = function() {
        ctx.drawImage(img, 0, 0);

        let imgData = ctx.getImageData(0, 80, canvas.width, 50);
        let raster = imgData.data;
        for (let i = 0; i < raster.length; i++) {
            if (i % 4 != 3) {
                raster[i] = 255 - raster[i];
            }
        }
        ctx.putImageData(imgData, 0, 80);
    }

    // let img = new Image();
    // img.src = 'images/minion.jpg';
    // img.onload = function() {
    //     ctx.drawImage(img, 0, 0);

    //     let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //     let raster = imgData.data;
    //     for (let i = 0; i < raster.length; i++) {
    //         let gray = raster[i] * 0.299 + raster[i + 1] * 0.587 + raster[i + 2] * 0.114;
    //         raster[i] = raster[i + 1] = raster[i + 2] = gray;
    //     }
    //     ctx.putImageData(imgData, 0, 0);
    // }
}
