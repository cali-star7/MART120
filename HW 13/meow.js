var x = [200,220,240]
var y = [30,40,50]
var diameter =[20,30,40];
var colors = [[204,247,104],[]]

function setup(){
    createCanvas(500,500);
}

function draw(){
background(200);

circle(x[0],y[0]diameter[0]);
circle(x[1],y[1]diameter[1]);
circle(x[2],y[2]diameter[2]);

for (var i= 0; i < 5; i++){
    console.log(i);
}
}