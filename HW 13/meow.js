
var x = 100
var y = 100
 var speed = 5
 var x1 =100
 var y1 =100
 var xx =[40,80];
 var yy =[30,100];
 var colors= [[130, 130, 130],[15, 15, 15]];

function setup() {
    createCanvas(400, 400);
}
function draw() {
    playermovement();
    background(171, 105, 207);
    trackingmouse()
    obsticals()
    winningbox()
    border()
    newshapes()
}
function mouseClicked (){
    x1= mouseX;
    y1=mouseY;
}
function playermovement() {
 if (keyIsDown(68)) {
        x = x + speed;
    }
    else if (keyIsDown(65)) {
        x = x - speed;
    }
    if (keyIsDown(87)) {
        y = y - speed;
    }
    else if (keyIsDown(83)) {
        y = y + speed;
    }
}

function trackingmouse() {
     noStroke();
    textSize(12);
    fill(200, 0, 0,)
    text("x: " + mouseX + ", y: " + mouseY, 10, 20);
}
function obsticals() {
fill (255, 170, 0);
circle(x, y, 50);
 fill (0,0,0);
square(x1,y1,30);
fill(77, 133, 0);
square(350,0,50);
fill (97, 97, 97);
square (232,135,50);
fill(196, 196, 196);
rect(233,303,50,100);
}
function winningbox(){
    if (x>350 && x<400 && y>0 && y<50){
background (0,255,0);
fill(0);
textSize(32);
text("You Win",63,138)
}
}
function border(){
fill (189, 255, 0);
rect(380,0,20,400);
rect(0,380,400,20);
rect(0,0,20,400);
rect(0,0,400,20);
}
function newshapes(){
    fill(colors[0][0],colors[0][1],colors[0][2]);
circle(xx[0],yy[0],30);
fill(colors[1][0],colors[1][1],colors[1][2]);
circle(xx[1],yy[1],40);
}

for (var i=0; i<11; i++) {
    console.log(i)
}