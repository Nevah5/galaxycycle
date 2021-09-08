const color1 = [224, 195, 252];
const color2 = [0, 24, 69];
let bgcolor = [
    (color1[0] + color2[0]) / 2,
    (color1[1] + color2[1]) / 2,
    (color1[2] + color2[2]) / 2,
];

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(degrees);
}

function draw(){
    background(bgcolor[0], bgcolor[1], bgcolor[2]);

    backgroundcol();
    bgeffects();
    sun();
    mountain();
    effects();
}

function backgroundcol(){
    bgcolor[0] = color2[0] + ((color1[0] - color2[0]) / width * mouseX);
    bgcolor[1] = color2[1] + ((color1[1] - color2[1]) / width * mouseX);
    bgcolor[2] = color2[2] + ((color1[2] - color2[2]) / width * mouseX);
}

function bgeffects(){
    strokeWeight(width / 240);
    stroke(255, 255, 255, 120);
    noFill();
    let x = width / 2;
    let y = height / 2;
    let r = width / 140 / width * mouseX;

    //first arc spiral (near middle, counter-clockwise)
    let d = width / 3.5; //distance
    let a = radians(-260) / width * mouseX + radians(70); //angle
    x = cos(a) * d + width / 2;
    y = sin(a) * d + height / 2;

    arc(x, y, r, r, radians(0), radians(230));


    //second arc spiral (counter-clockwise)
    d = width / 6; //distance
    a = radians(-180) / width * mouseX + radians(50); //angle
    x = cos(a) * d + width / 2;
    y = sin(a) * d + height / 2;

    arc(x, y, r, r, radians(100), radians(330));


    //third arc spiral (clockwise)
    d = width / 3.5; //distance
    a = radians(240) / width * mouseX + radians(120); //angle
    x = cos(a) * d + width / 2;
    y = sin(a) * d + height / 2;

    arc(x, y, r, r, radians(280), radians(510));
}

function sun(){
    stroke(250, 237, 203);
    strokeWeight(1);
    fill(250, 237, 203);
    let x = width / 2;
    let y = height / 2;
    let s = width / 100 / width * mouseX + width / 80; //size

    //first arc spiral (near middle, counter-clockwise)
    let d = 800 / width * mouseX + 100; //distance
    let a = radians(-140) / width * mouseX + radians(0); //angle
    x = cos(a) * d + width/3*2.1;
    y = sin(a) * d + height;

    triangle(x - s, y, x, y - s * 2, x + s, y); //top part
    triangle(x - s, y, x, y + s * 2, x + s, y); //bottom part
}

function mountain(){
    let alpha = 255 - (100 / width * mouseX);
    noStroke();
    //first mountain
    fill(250, 237, 203, alpha);
    triangle(width*-0.1,height, width/5.6,height/4*2.8, 0,height);
    fill(243, 213, 133, alpha);
    triangle(0,height, width/5.6,height/4*2.8, width/2.7,height);
    //second mountain
    fill(250, 237, 203, alpha);
    triangle(width/6,height, width/2,height/2, width/3,height);
    fill(243, 213, 133, alpha);
    triangle(width/3,height, width/2,height/2, width/3*2.5,height);
    //third mountain
    fill(250, 237, 203, alpha);
    triangle(width/3*1.7,height, width/6*5,height/6*5, width/3*2.1,height);
    fill(243, 213, 133, alpha);
    triangle(width/3*2.1,height, width/6*5,height/6*5, width,height);
}

function effects(){
    let size = 70 / width * mouseX + 30;
    let strokeWidth = (width/120-width/120*0.6) / width * mouseX + (width/120-width/120*0.4);
    let rotation = 360 / width * mouseX;

    stroke(255, 255, 255, 120);
    strokeWeight(strokeWidth);
    noFill();
    //first arc
    arc(width / 5.6, height / 4 * 2.8, size, size, radians(rotation + 180), radians(rotation + 150));
    //second
    arc(width / 2, height / 2, size, size, radians(rotation), radians(rotation + 290));
    //third arc
    arc(width / 6 * 5, height / 6 * 5, size, size, radians(rotation + 50), radians(rotation + 320));
}


