var n = 0;
var c = 4.5;

function setup() {
    createCanvas(windowWidth-30, windowHeight-30);
    angleMode(DEGREES);
}

function draw() {

    var a = n * 137.5;
    var r = c * sqrt(n);
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;

    noStroke();
    ellipse(x, y, 5, 5);


    if (n < 250) {fill('#DDF5F7');}
    else if (n < 500) {fill('#C0D9E5');}
    else if (n < 1000) {fill('#44679F');}
    else if (n < 1500) {fill('#3D1860');}
    else if (n < 2000) {fill('#643579');}
    else if (n < 2500) {fill('#BB99CD');}
    else if (n < 3000) {fill('#F2E9D0');}
    else if (n < 3500) {fill('#EACEB4');}
    else if (n < 4000) {fill('#E79E85');}
    else {fill('#FFAAA5');} 

    n++;

}

    
