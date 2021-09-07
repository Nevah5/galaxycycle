const color1 = [224, 195, 252];
const color2 = [0, 24, 69];
let cur_color = [
    (color1[0] + color2[0]) / 2,
    (color1[1] + color2[1]) / 2,
    (color1[2] + color2[2]) / 2,
];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(cur_color[0], cur_color[1], cur_color[2]);

    col_calc();
}

function col_calc(){
    cur_color[0] = color2[0] + ((color1[0] - color2[0]) / width * mouseX);
    cur_color[1] = color2[1] + ((color1[1] - color2[1]) / width * mouseX);
    cur_color[2] = color2[2] + ((color1[2] - color2[2]) / width * mouseX);
}