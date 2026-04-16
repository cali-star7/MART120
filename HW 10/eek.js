var x =159;
var y =179;
var a=228;
var b=179;
var c=120
var d=197
var e=197
var f= 177
var g = 219

var speed = 8;
var speeda =8;
var speedb =4;
var speedd =4;
var speedc =8;

var count =0;
var textmovement =1;
var textSizeVal =10;

function setup ( ){
    createCanvas(400,400);
    speed = floor(random(10));
    speeda = random(10);
        speedb = random(5);
        speedd = random(5);
        speedc = random (8);

}
function draw () {
    background(245, 241, 177);
    noStroke();
    textSize(12);
    fill(200, 0, 0,)
    text("x: " + mouseX + ", y: " + mouseY, 10, 20);

      fill(69, 41, 0);
    rect(118,192,160,160);
    circle(194,186,180);
    fill(219, 136, 235);
    ellipse(186,360,150,200);
    fill (250, 211, 153);
    rect(164,251,50,30);
    triangle(164,280,213,280,186,308);
    //ears

    circle(c,d,20);
     d=d+speedb;
    if (d>212 || d<178){
        speedb=speedb*-1;
    }
    circle(265,e,20);
  e=e+speedd;
    if (e>212 || e<178){
        speedd=speedd*-1;
    }
    circle (194,186,150);
    fill(0,0,0);
    ellipse (155,175,60,20);
    ellipse (233,175,60,20);
    fill (247, 247, 247);
    ellipse (160,180,50,20);
    ellipse (228,180,50,20);
    fill (0,0,0);
    //eye movement

    circle(x,y,18);
    x=x+speed;
    if (x>135 || x<184){
        speed=speed*-1;
    }
    circle (a,b,18);
     a=a+speeda;
    if (a>204 || a<251){
        speeda=speeda*-1;
    }
    fill(252, 239, 219);
    triangle (184,201,206,201,193,187);
    fill(0,0,0);
    line(169,219,212,219);
    //mouth
    
rect(f,g,30,5);
   f=f+speedc;
   g=g+speedc;
    if (f<0 || f>400 ||g<0 || g>400){
        speedc=speedc*-1;
    }
fill(69,41,0);
rect(131,159,50,2);
rect(206,159,50,2);
text('Cali',178,347);
textSize(textSizeVal);
text ('this is totally me',191,56)
count++
if(count>=5){
    textSizeVal= textSizeVal+textmovement;
    count=0
}
if(textSizeVal >15 || textSizeVal<10){
    textmovement *=-1;
}
point (248,194);

   


}