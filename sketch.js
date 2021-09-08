const color1 = [224, 195, 252];
const color2 = [0, 24, 69];
let bgcolor = [
    (color1[0] + color2[0]) / 2,
    (color1[1] + color2[1]) / 2,
    (color1[2] + color2[2]) / 2,
];
let starsX = [];
let starsY = [];
let starsS = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(degrees);
    stars();
}

function draw(){
    background(bgcolor[0], bgcolor[1], bgcolor[2]);

    backgroundcol();
    bgeffects();
    sun();
    moon();
    mountain();
    effects();
}

function backgroundcol(){
    bgcolor[0] = color2[0] + ((color1[0] - color2[0]) / width * mouseX);
    bgcolor[1] = color2[1] + ((color1[1] - color2[1]) / width * mouseX);
    bgcolor[2] = color2[2] + ((color1[2] - color2[2]) / width * mouseX);
}

function bgeffects(){
    let x, y;
    let r = width / 140 / width * mouseX;
    let alpha = 255 / width * mouseX - 100;

    strokeWeight(width / 240);
    stroke(255, 255, 255, alpha);
    noFill();

    // ARCS
    // first arc spiral (near middle, counter-clockwise)
    let d = width / 3.5; // distance
    let a = radians(-260) / width * mouseX + radians(70); // angle
    x = cos(a) * d + width / 2;
    y = sin(a) * d + height / 2;

    arc(x, y, r, r, radians(0), radians(230));


    // second arc spiral (counter-clockwise)
    d = width / 6; // distance
    a = radians(-180) / width * mouseX + radians(50); // angle
    x = cos(a) * d + width / 2;
    y = sin(a) * d + height / 2;

    arc(x, y, r, r, radians(100), radians(330));


    // third arc spiral (clockwise)
    d = width / 3.5; // distance
    a = radians(240) / width * mouseX + radians(120); // angle
    x = cos(a) * d + width / 2;
    y = sin(a) * d + height / 2;

    arc(x, y, r, r, radians(280), radians(510));


    // STARS
    alpha = -255 / (width - width / 8) * mouseX + 90;
    noStroke();
    fill(255, 255, 255, alpha);
    for(var i = 0; i < 10; i++){
        circle(starsX[i], starsY[i], starsS[i]);
    }
}

function sun(){
    noStroke();
    fill(250, 237, 203);
    let x;

    let s = width / 30 / width * mouseX + width / 80; // size
    let alpha = 120 / width * mouseX + 40;

    // first arc spiral (near middle, counter-clockwise)
    let d = 800 / width * mouseX + 100; //  distance
    let a = radians(-140) / width * mouseX + radians(0); // angle
    x = cos(a) * d + width/3*2.1;
    y = sin(a) * d + height;

    fill(250, 237, 203); // lighter
    fill(243, 213, 133, alpha); // darker

    triangle(x - s, y, x, y + s * 1.7, x + s, y);
}

function moon(){
    noStroke();
    let x, y;

    // first arc spiral (near middle, counter-clockwise)
    // let d = 900 / width * mouseX - 100; //  distance
    let alpha = 100 * width / mouseX;
    let d = 500;
    let a = radians(-180) / width * mouseX + radians(-50); // angle
    let s = -(width / 30) / width * mouseX + width / 20;
    x = cos(a) * d + width/2;
    y = sin(a) * d + height;

    fill(250, 237, 203, alpha);

    arc(x, y, s, s, radians(60), radians(240), CHORD);
}

function mountain(){
    let alpha = 255 - (100 / width * mouseX);
    noStroke();
    // first mountain
    fill(250, 237, 203, alpha);
    triangle(width*-0.1,height, width/5.6,height/4*2.8, 0,height);
    fill(243, 213, 133, alpha);
    triangle(0,height, width/5.6,height/4*2.8, width/2.7,height);
    // second mountain
    fill(250, 237, 203, alpha);
    triangle(width/6,height, width/2,height/2, width/3,height);
    fill(243, 213, 133, alpha);
    triangle(width/3,height, width/2,height/2, width/3*2.5,height);
    // third mountain
    fill(250, 237, 203, alpha);
    triangle(width/3*1.7,height, width/6*5,height/6*5, width/3*2.1,height);
    fill(243, 213, 133, alpha);
    triangle(width/3*2.1,height, width/6*5,height/6*5, width,height);
}

function effects(){
    let size = width / 20 / width * mouseX + 30;
    let strokeWidth = (width / 540) / width * mouseX + (width/120-width/120*0.4);
    let rotation = 360 / width * mouseX;
    let alpha = width / 10 / width * mouseX - 30;

    stroke(255, 255, 255, alpha);
    strokeWeight(strokeWidth);
    noFill();
    //first arc
    arc(width / 5.6, height / 4 * 2.8, size, size, radians(rotation + 180), radians(rotation + 150));
    //second
    arc(width / 2, height / 2, size, size, radians(rotation), radians(rotation + 290));
    //third arc
    arc(width / 6 * 5, height / 6 * 5, size, size, radians(rotation + 50), radians(rotation + 320));
}

function stars(){
    for(var i = 0; i < 10; i++){
        starsX.push(random(width));
        starsY.push(random(height));
        starsS.push(random(6, 10));
    }
}