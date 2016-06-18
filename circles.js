function Circle(x, y, r, g , b){
  this.x= x;
  this.y = y;

  this.r = 10;
  this.g = 16;
  this.b = 170;

  this.size = 10;


  this.draw = function(){
    this.x++;
    this.size = this.size - random(.5, 1);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);

  }

}
