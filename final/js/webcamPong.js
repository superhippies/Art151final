var X1;
var Y1;
var Yspeed1;
var Xspeed1;
//
var X2;
var Y2;
var YSpeed2;
var Xspeed2;

function setup(){
canvas=createCanvas(windowWidth, windowHeight);
canvas.style("z-index","-1");
canvas.position(0,0);
}
function draw (){
	background(0);
	ballBounce();
	ellipse(X1,Y1,30,30);
}
function ballBounce(){
 fill(random(255),random(255),random(255));
 Y1=Y1+Yspeed1; 
 X1=X1+Xspeed1;
 
 // ellipse(X2,X2,30,30);
 // Y2=Y2+YSpeed2;
 // X2=X2+Xspeed2;
}

// function keyPressed(key){
// 	if (keyIsPressed === true){
// 		if (key == "w"){
// 			y+=5;
// 		}
// 	if (key == "s"){
// 			y-=5;
// 		}
// 	}
// }