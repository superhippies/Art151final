// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var x=5;
var y=5;
var dx;
var dy;
var capture;
var tracker
var w = 640,
    h = 480;
var canvas;
var score =0;
function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, 
    function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
   canvas=createCanvas(w, h);
    canvas.position(0,0);
    canvas.style("z-index","-1");
    capture.size(w, h);
    capture.hide();
text("Score:"+score);
    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
dx=2;
dy=2;
}

function draw() {
    background(0);
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();
    
    text("Score: "+score,0,0);
    noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();

    noStroke();
    
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
         //ellipse(positions[i][0], positions[i][1], 4, 4);
         //text(i, positions[i][0], positions[i][1]);
        fill(255,0,0); 
        }
    //   
    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        //console.log(smile);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(20, 20, smile * 3, 20);
        rect(positions[62][0], height-50, smile*3, 50);

//Game stuff
    b1= positions[62][0];
    ball=ellipse(x,y,50,50);
    x=x+dx;
    y=y+dy; 
    if(x>width||x<-10){
      dx *=-1;
      dx++;  
      score+=1;
     }

  if(y<0){
      dy *= -1;
      dy++;
      score+=1;
    }
  if(y>height+25){
        dy=0;
        dx=0;
        x=0;
        y=0;
        score-=3;
  } 
 if (x>b1 && x<b1 + smile*3 &&y + 25 >= height-50) {
  dx *= -1;
  dy *= -1;
  score+=2;
}
console.log(score);

}
}

//
// if (xBall < diameter/2 || 
//       xBall > windowWidth - 0.5*diameter) {
//         xBallChange *= -1;
//   }
//     if (yBall < diameter/2 || 
//       yBall > windowHeight - diameter) {
//     yBallChange *= -1;
//     }
  
//   // Detect collision with paddle
//   if ((xBall > xPaddle &&
//       xBall < xPaddle + paddleWidth) &&
//       (yBall + (diameter/2) >= yPaddle)) {
//     xBallChange *= -1;
//     yBallChange *= -1;
//     score++;
//   }

    


