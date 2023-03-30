var hz161;
var hz89;
var hz230;
var hz346;
var hz478;
var hz590;

var posX = 0;
var posY = 0;
var easing = 0.2;

var canvas3;
var wi;
var hei;

function setup() {
    //161, 478, 590, 89, 118, 230, 346
    wi = windowHeight * 0.6;
    hei = wi;
    canvas3 = createCanvas(wi, hei);
    canvas3.parent('sketch-listen');
    strokeWeight(2);

    // noLoop();
    // colorMode(RGB, 360, 1, 1);
}

// function preload() {
//     // Load sounds here
//     hz161 = loadSound("assets/161Hz.mp3");
//     hz89 = loadSound("assets/89Hz.mp3");
//     hz230 = loadSound("assets/230Hz.mp3");
//     hz346 = loadSound("assets/346Hz.mp3");
//     hz478 = loadSound("assets/478hz.mp3");
//     hz590 = loadSound("assets/590Hz.mp3");
// }

function draw() {
    var targetX = mouseX;
    var targetY = mouseY;
    // console.log(mouseX);

    // if (mouseX < 0 || mouseX >= width || mouseY <= 0 || mouseY > height) {
    //     hz161.stop();
    //     hz89.stop();
    //     hz230.stop();
    //     hz346.stop();
    //     hz478.stop();
    //     hz590.stop();
    // } else if (mouseX >= (width * 5) / 6) {
    //     playSound(hz89);
    // } else if (mouseX >= (width * 2) / 3) {
    //     hz89.stop();
    //     playSound(hz161);
    //     hz230.stop();
    // } else if (mouseX >= width / 2) {
    //     hz161.stop();
    //     playSound(hz230);
    //     hz478.stop();
    // } else if (mouseX >= width / 3) {
    //     hz230.stop();
    //     playSound(hz478);
    //     hz590.stop();
    // } else if (mouseX > 0) {
    //     hz478.stop();
    //     playSound(hz590);
    // } else {
    //     hz590.stop();
    // }
    posX += (targetX - posX) * easing; //finds the difference between your mouse position and where the actual drawn line is and moves it [eased] percentage of the way. This way, it will never reach the position of mouseX at the same time that mouseX is there.
    posY += (targetY - posY) * easing;
   var a = map(posX, 0, width, -10, 10); // replace with your desired value
    var b = 1; // replace with your desired value
    var m = map(posY, 0, width, -10, 10); // replace with your desired value
    var n = 2; // replace with your desired value
    var gridSize = 6;
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    background(13, 12, 7);
    for (var x = -halfWidth; x < halfWidth; x += gridSize) {
        for (var y = -halfHeight; y < halfHeight; y += gridSize) {
            var x1 = x + halfWidth;
            var y1 = y + halfHeight;
            var equationValue =
                a * sin((PI * n * x1) / 180) * sin((PI * m * y1) / 180) +
                b * sin((PI * m * x1) / 180) * sin((PI * n * y1) / 180);
            var hue = equationValue < 0 ? 0 : 200; // color negative values red, positive values blue
            var saturation = 1;
            var brightness = 1;
            fill(252, 237, 197, hue);
            noStroke(); // disable filling
            ellipse(x1, y1, gridSize, gridSize); // draw rectangle instead of square
        }
    }
}

function playSound(sound) {
    if (!sound.isPlaying()) {
        sound.play();
    }
}
