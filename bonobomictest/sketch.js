var mic, fft;
var sound;
var binCount = 1024;
var circles; 
var diam;

function preload(){
  sound = loadSound('assets/10 Stay The Same ft. Andreya Triana.mp3');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
  
  // mic = new p5.AudioIn();
  // mic.start();
  
  sound.play();
  
  fft = new p5.FFT();
  fft.setInput(sound);
  
  // amplitude = new p5.Amplitude();
  
  // var level = amplitude.getLevel();
  // var size = map(level, 0, 1, 0, 200);
  // ellipse(width/2, height/2, size, size);

  // circles.push(new Circle(mouseX,mouseY, diam));
}



function draw() {
  background(10, 45, 50);
  

//   for(var i= 0; i<circle.length; i++){
//     circle[i].update();
//     circle[i.].display();
// }
// function Circle(){
  

  var spectrum = fft.analyze(binCount);
  

  for (var i=0; i< spectrum.length; i++){
    var x = map(i, 0, binCount, 0, width);
    var h = map(spectrum[i], 0, 255, height, 0);
    var col = map(spectrum[i], 0, 255, 0, 255);
    fill(col, col, 60);
    ellipse(x, height, 60, h - height);
  }
for (var i=0; i< spectrum.length; i++){
    var x = map(i, 0, binCount, 0, width);
    var h = map(spectrum[i], 0, 255, height, 0);
    var col = map(spectrum[i], 0, 255, 0, 255);
    fill(60, col, col);
    ellipse(x, 0, 20, h-height);
  }
for (var i=0; i< spectrum.length; i++){
    var y = map(i, 0, binCount, 0, height);
    var w = map(spectrum[i], 0, 255, width, 0);
    var col = map(spectrum[i], 0, 255, 0, 255);
    fill(col, col, 25);
    ellipse(0, y, w-width, 5);
  }
  for (var i=0; i< spectrum.length; i++){
    var y = map(i, 0, binCount, 0, height);
    var w = map(spectrum[i], 0, 255, width, 0);
    var col = map(spectrum[i], 0, 255, 0, 255);
    fill(25, col, col);
    ellipse(width, y, w-width, 30);
  }
}
