let x;
let y;

let xspeed;
let yspeed;

let badge;
let trophy;
let current;


function preload() {
    badge = loadImage("Liverpool.jpg");
    trophy =
        loadImage("pl-trophy.jpg");
    current = loadImage("liverpool.jpg")
}

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-holder')
    x = random(width);
    y = random(height);
    xspeed = 5;
    yspeed = 5;
}

function draw() {
    background(207, 0, 15, 1);
    image(current, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + current.width >= width) {
        xspeed = -xspeed;
        x = width - current.width;
        current = trophy;
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
    }

    if (y + badge.height >= height) {
        yspeed = -yspeed;
        y = height - current.height;
        current = badge;
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
    }

}