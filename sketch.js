//Variables for the hands and angles
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);

    //What each variables represent
    hr = hour();
    mn = minute();
    sc = second();

    //Set the angle to degrees
    angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  

    //Create hour hand(s) angle(s)
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr % 12, 0, 12, 0, 360);

    //Draw the second hand
    push()  
    rotate(angle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop();

    //Draw the minute hand
    push()  
    rotate(angle);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 80, 0);
    pop();

    //Draw the hour hand
    push()  
    rotate(angle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 60, 0);
    pop();

    //Start from the beginning
    translate(0,0)

    //Properties instruction for all the arcs
    strokeWeight(7);
    noFill();
    
    //Draw the second hand arc
    stroke(255, 0, 0);
    arc();

}