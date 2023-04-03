var canvas1;
var wi;
var hei;



function setup() {
  wi = windowWidth;
  hei = windowHeight-10;
  canvas1 = createCanvas(wi, hei);
  canvas1.parent('sketch-holder');
  
}

function windowResized() {
}

function draw() {
    background(13, 12, 7);
    
    fill(255);
//    text("(" + mouseX/wi + ", " + mouseY/hei +")", mouseX, mouseY );
    

    //positions I set
    translate(-100, 0);
    circles(wi*0.89, hei*0.60, 0, wi*0.125, 3, 1, 100); //big
    circles(wi*0.34, hei*0.43, 1000, wi*0.0425, 2, -1, 50); //medium
    circles(wi*0.72, hei*0.28, 2000, wi*0.0275, 1, 1, 200); //small

}

function circles(x, y, off, sz, lg, r, alpha) {

    noStroke();
    push();
    fill(255, alpha);


    let xoff = off + millis() / 2000;

    translate(x, y);
    rotate(r * xoff);
    for (let j = 1; j < 1 + lg; j++) {


        beginShape();
        for (let i = 0; i < 195; i += 1) {
            let squiggle = map(noise(xoff), 0, 1, -sz, sz);
            let posX = (sz + j * 20) * cos(PI * i / 100) + squiggle / 10;
            let posY = (sz + j * 20) * sin(PI * i / 100) + squiggle / 10;
            let ellipseW = i / (10 + j);
            let ellipseH = squiggle - i * (j / 50);
            ellipse(posX, posY, ellipseW, ellipseH);
            xoff += 0.01;
        }
        endShape();
    }
    pop();
}

