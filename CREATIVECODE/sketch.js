var circles = [];
var squares = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  noCursor();
  ellipseMode(CENTER);
  cursorDiameter = 10;

}

function draw(){
  background(255);

  for (var i = 0; i < circles.length; i++){
    circles[i].draw();
    if (circles[i].x> 700){
      circles.splice(i,1);
    }

  //for (var i = 0; i < squares.length; i++){
   // squares[i].draw();
    //if (squares[i].x> 700){
     // squares.splice(i,1);
  //}
}

  if (mouseIsPressed){
    if(mouseButton == LEFT){
      circles.push(new Circle(mouseX,mouseY, 0,20,200));

    }
  }

//if (mouseIsPressed){
    //if(mouseButton == RIGHT){
      //squares.push(new Squares(mouseX,mouseY,150,150,50));

    //}
//}
  stroke(0);
  fill(255,0,150.100);
  ellipse(mouseX, mouseY, 10, 10);

}


