//soundline sketch
var s1 = function (sketch) {
    var num = 60;
    var mx = [num];
    var my = [num];
    // var canvas2;
    var mic;
    var wid;
    var hei;

    sketch.setup = function () {
        wid = sketch.windowHeight * 0.6;
        hei = wid;
        let canvas1 = sketch.createCanvas(wid, hei);
        // canvas1.position(0,0);
        canvas1.parent("sketch-breath");
        sketch.getAudioContext().suspend();
        mic = new p5.AudioIn();
        mic.start();
    }

    sketch.mousePressed = function () {
        sketch.userStartAudio();
    }
    sketch.draw = function () {
        //for canvas 1
        sketch.clear();
        sketch.background(13, 12, 7, 1);

        //    console.log(sketch.getAudioContext().state);
        var vol = mic.getLevel();
        let which = sketch.frameCount % num;
        let posY = sketch.map(vol, 0.0, 0.1, sketch.height, 0);
        let posX = sketch.map(vol, 0.0, 0.1, sketch.width, 0);
        mx[which] = posX;
        my[which] = posY;

        for (let i = 0; i < num; i++) {
            // which+1 is the smallest (the oldest in the array)
            let index = (which + 1 + i) % num;
            sketch.noStroke();
            sketch.fill(255, 255, 255, 200);
            sketch.ellipse(mx[index], my[index], i, i)
        }
    }
}

//freqGraph Sketch
let s2 = function (sketcha) {
    let wi, hei;
    let posX = 0,
        posY = 0,
        easing = 0.05;
    let lastMouseX = -1;
    let lastMouseY = -1;

    var hz161, hz89, hz230, hz346, hz478, hz590;

    //    sketcha.preload = function () {
    //        // Load sounds here
    //        console.log("Loading sounds...");
    //        hz161 = sketcha.loadSound("assets/161Hz.mp3", function () {
    //            console.log("Loaded hz161");
    //        });
    //        hz89 = sketcha.loadSound("assets/89Hz.mp3", function () {
    //            console.log("Loaded hz89");
    //        });
    //        hz230 = sketcha.loadSound("assets/230Hz.mp3", function () {
    //            console.log("Loaded hz230");
    //        });
    //        hz346 = sketcha.loadSound("assets/346Hz.mp3", function () {
    //            console.log("Loaded hz346");
    //        });
    //        hz478 = sketcha.loadSound("assets/478hz.mp3", function () {
    //            console.log("Loaded hz478");
    //        });
    //
    //        hz590 = sketcha.loadSound("assets/590Hz.mp3", function () {
    //            console.log("Loaded hz590")
    //        });
    //    }

    sketcha.setup = function () {
        wi = sketcha.windowHeight * 0.55;
        hei = wi;
        let canvas2 = sketcha.createCanvas(wi, hei);
        canvas2.parent("sketch-listen");
        sketcha.strokeWeight(2);
        sketcha.preload();
    }

    sketcha.draw = function () {
        var targetX = sketcha.mouseX;
        var targetY = sketcha.mouseY;

        //        if (sketcha.mouseX < 0 || sketcha.mouseX >= sketcha.width || sketcha.mouseY <= 0 || sketcha.mouseY > sketcha.height) {
        //            hz161.stop();
        //            hz89.stop();
        //            hz230.stop();
        //            hz346.stop();
        //            hz478.stop();
        //            hz590.stop();
        //        } else if (sketcha.mouseX >= (sketcha.width * 5) / 6) {
        //            playSound(hz89);
        //        } else if (sketcha.mouseX >= (sketcha.width * 2) / 3) {
        //            hz89.stop();
        //            playSound(hz161);
        //            hz230.stop();
        //        } else if (sketcha.mouseX >= sketcha.width / 2) {
        //            hz161.stop();
        //            playSound(hz230);
        //            hz478.stop();
        //        } else if (sketcha.mouseX >= sketcha.width / 3) {
        //            hz230.stop();
        //            playSound(hz478);
        //            hz590.stop();
        //        } else if (sketcha.mouseX > 0) {
        //            hz478.stop();
        //            playSound(hz590);
        //        } else {
        //            hz590.stop();
        //        }

        posX += (targetX - posX) * easing;
        posY += (targetY - posY) * easing;
        var a = sketcha.map(posX, 0, sketcha.width, -10, 10); // replace with your desired value
        var b = 1; // replace with your desired value
        var m = sketcha.map(posY, 0, sketcha.width, -10, 10); // replace with your desired value
        var n = 2; // replace with your desired value
        var gridSize = 6;
        var halfWidth = sketcha.width / 2;
        var halfHeight = sketcha.height / 2;

        sketcha.background(13, 12, 7);
        for (var x = -halfWidth; x < halfWidth; x += gridSize) {
            for (var y = -halfHeight; y < halfHeight; y += gridSize) {
                var x1 = x + halfWidth;
                var y1 = y + halfHeight;
                var equationValue =
                    a * sketcha.sin((sketcha.PI * n * x1) / 180) * sketcha.sin((sketcha.PI * m * y1) / 180) +
                    b * sketcha.sin((sketcha.PI * m * x1) / 180) * sketcha.sin((sketcha.PI * n * y1) / 180);
                var hue = equationValue < 0 ? 0 : 200; // color negative values red, positive values blue
                var saturation = 1;
                var brightness = 1;
                sketcha.fill(101, 164, 203, hue);
                sketcha.noStroke(); // disable filling
                sketcha.ellipse(x1, y1, gridSize, gridSize); // draw rectangle instead of square
            }
        }
    }
    sketcha.playSound = function (sound) {
        if (!sound.isPlaying()) {
            sound.play();
        }
    }

}


// create a new instance of p5 and pass in the function for sketch 1
var soundlinep5 = new p5(s1);
var frequencyGraphp5 = new p5(s2);
