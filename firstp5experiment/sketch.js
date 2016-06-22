var mic;
var amp;

function setup() {
  createCanvas(600,600);
  
  mic = new p5.AudioIn();
  mic.start();
  amp = new p5.Amplitude();
  amp.setInput(mic);
  
}

function draw() {
  background(255);
  var volume = amp.getLevel();
  var diam = map(volume, 0, .3, 10, 500);
  var nothing = map(volume, 0, .3, 5, 300);
  
  fill(255, 91, 165);
  rect(450, 450, diam, diam);
  
  fill(153,87,205);
  rect(width/2, height/2, diam, diam);
  
  fill(67,142,200);
  rect(20, 20, nothing, nothing);
  
  fill(255,237,82);
  rect(90, 90, nothing, nothing);
  
  fill(60,170,2);
  rect(200, 200, nothing, nothing);
  
  fill(0);
  triangle(nothing, 600, nothing, 300, 300, 300);
  
  fill(0);
  triangle(600, nothing, 300, nothing, 300, 300);
  
}