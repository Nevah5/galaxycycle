const color1 = [224, 195, 252];
const color2 = [0, 24, 69];
let bgcolor = [
    (color1[0] + color2[0]) / 2,
    (color1[1] + color2[1]) / 2,
    (color1[2] + color2[2]) / 2,
];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(bgcolor[0], bgcolor[1], bgcolor[2]);

    backgroundcol();

    mountain();
}

function backgroundcol(){
    bgcolor[0] = color2[0] + ((color1[0] - color2[0]) / width * mouseX);
    bgcolor[1] = color2[1] + ((color1[1] - color2[1]) / width * mouseX);
    bgcolor[2] = color2[2] + ((color1[2] - color2[2]) / width * mouseX);
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