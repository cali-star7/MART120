var x=80;
var y=520;
var speed=8;

function setup ( ){
    createCanvas(600,600);
        speed = floor(random(10));
}
function draw () {
    background(245, 241, 177);
    noStroke();
    textSize(12);
    fill(200, 0, 0,)
    text("x: " + mouseX + ", y: " + mouseY, 10, 20);
fill(230, 163, 41);
    circle (300,200,200);
ellipse(300,400,200,300);
ellipse(370,425,175,250);
triangle (225,132,263,109,233,83);
triangle(333,105,370,331,364,88);
ellipse (250,534,40,30);
fill(255,255,255);
ellipse(260,535,40,30);
fill(230, 163, 41);
ellipse(265,535,40,30);
fill(255,255,255);
ellipse(275,535,40,30);
fill(230, 163, 41);
ellipse(280,535,40,30);
ellipse(325,535,40,30);
fill(255,255,255);
ellipse(330,535,40,30);
fill(230, 163, 41);
ellipse(335,535,40,30);
fill(255,255,255);
ellipse(345,535,40,30);
fill(230, 163, 41);
ellipse(350,535,40,30);
triangle(431,511,410,534,462,530);
triangle(410,534,446,531,446,551);
triangle(419,538,436,545,433,570);
triangle(420,539,427,557,405,558);
triangle(405,558,422,557,420,577);
triangle (405,558,413,568,383,583);
fill(237, 190, 190);
triangle(300,215,320,210,280,210);
fill(250,250,250);
ellipse(260,182,30,10);
ellipse(340,182,30,10);
ellipse(284,228,30,20);
ellipse(316,228,30,20);
fill(0,0,0);
ellipse(260,182,8,10);
ellipse(340,182,8,10);
fill(230, 163, 41);
ellipse(284,225,30,20);
ellipse(316,225,30,20);

fill(255, 0, 0);
circle(x,y,20,20);
    y=y+speed;
    if (y>534 || d<50){
        speed=speed*-1;
    }
}