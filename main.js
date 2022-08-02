function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 175);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(10, 48, 625, 10);
    rect(10, 48, 10, 400);
    rect(10, 448, 625, 10);
    rect(625, 50, 10, 400);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 100);
    circle(50, 430, 100);
    circle(590, 50, 100);
    circle(590, 430, 100);
}
function take_snapshot(){
    save('student_name.png');
}