var num = 60;
var mx = [num];
var my = [num];
var mic;
var canvas2;
var wid;
var hei;

function setup() {
  wid = windowHeight * 0.6;
  hei = wid;
  canvas2 = createCanvas(wid, hei);
  canvas2.parent('sketch-breath');
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  clear();
  background(13,12,7, 1); 
  var vol = mic.getLevel();
  // console.log(vol);
  line(100, 0, 600, height);


  let which = frameCount % num;
  let posY = map(vol, 0.0, 0.4, height, 0);
  let posX = map(vol, 0.0, 0.4, width, 0);
  mx[which] = posX;
  my[which] = posY;
  
  
  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which+1 + i) % num;
    noStroke();
     fill(255,255,255, 200);
    ellipse(mx[index], my[index], i, i);
    // ellipse(mx[index]*0.3, my[index], i, i);

    // if(my[index] < (height-560)){
    //   background(255);
    //   textSize(30);
    //   fill(0);
    //   text("yay", width/2, height/2);
    //   return;
    // }
  }

}
