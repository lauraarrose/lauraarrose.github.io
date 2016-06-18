function Squares(x, y, r, g , b){
  this.x= x;
  this.y = y;

  this.r = r;
  this.g = g;
  this.b = b;

  this.size = 10;


  this.draw = function(){
    this.x++;
    this.size = this.size - random(.5, 1);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.size, this.size);

  }

}