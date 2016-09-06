var image_x = 956;
var image_y = 253;
var number_img = 4;
var originalCanvasWidth;
var originalCanvasHeight;
var randomShapes =[];

var img_list =[];

var i = 0;

var xoff;
var yoff;


// Time from beginning + time to wait for next image
var next = 0;
var nextRandomShape = 0;

function preload() {

  for (var i = 0; i<=number_img-1; i++){
    img_list[i] = loadImage("../images/cartoon"+i+".png");
  }
}

function setup() {
  // Stretches canvas to full window
  createCanvas(1920, 948);

  originalCanvasWidth = 1920;
  originalCanvasHeight = 948;

  for(var i=0; i<=50; i++){
    var shapeNumber = int(random(2));
    console.log(shapeNumber);
    randomShape[i] = new randomShape(random(0,width),random(0,height),random(0,10000),random(0,10000),shapeNumber);
    randomShape[i].init();
  }
}

// To resize canvas
function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function draw() {
  background(230,231,232);
  //background(255,0,0);

    displayImage();

    // Timer
    if (millis() > next) {

      i++;

      if (i==number_img){
        i = 0;
      }

      next = millis() + 2000;
    }

    // // Timer for randomShapes
    // if (millis() > nextRandomShape) {

    //   nextRandomShape = millis() + 1000;
    //   shape = (random(windowWidth),random(windowHeight));
    // }

    for(var i=0; i<=50; i++){
      randomShape[i].display();
      randomShape[i].update();
    }

}

function displayImage(){
  image(img_list[i], scalingPosition(img_list[i]).x, scalingPosition(img_list[i]).y, scaling(img_list[i]).x, scaling(img_list[i]).y);
}

// Scales images width & height proportionnally to the widht of the screen
// img.width & img.height are the width and height of the original file. Doesn't change when redimensionned
function scaling(img){
  scaled_img_width = (windowWidth*img.width)/originalCanvasWidth;
  scaled_img_height = (scaled_img_width*img.height)/img.width;
  var img_size = createVector(scaled_img_width,scaled_img_height);

  return img_size; //returns vector(width, height, 0)
}

function scalingPosition(img){
  scaled_img_x = (windowWidth*image_x)/originalCanvasWidth;
  scaled_img_y = (scaled_img_x*image_y)/image_x;

  var img_position = createVector(scaled_img_x,scaled_img_y);
  return img_position;
}

function randomShape(x,y,xoff,yoff,shapeNumber){
  this.size = 5;
  this.pos = createVector(x,y);
  this.xoff = xoff;
  this.yoff = yoff;
  this.shapeNumber = shapeNumber;


  this.init = function(){
  }

  this.display = function(){
    if (this.shapeNumber == 0){
      this.display_small_ellipse();
    }else if(this.shapeNumber == 1){
      this.display_cross();
    }else{
      this.display_big_ellipse();
    }
  }

  this.display_small_ellipse = function(){
    fill(0); //201
    noStroke();
    ellipse(this.pos.x-this.size, this.pos.y-this.size,this.size,this.size);
  }

  this.display_big_ellipse = function(){
    strokeWeight(5);
    stroke(0);
    noFill();
    ellipse(this.pos.x-this.size, this.pos.y-this.size,this.size+20,this.size+20);
  }

  this.display_cross = function(){
    strokeWeight(1);
    stroke(0);
    noFill();
    line(this.pos.x, this.pos.y, this.pos.x+this.size, this.pos.y+this.size);
    line(this.pos.x, this.pos.y, this.pos.x+this.size, this.pos.y-this.size);
  }

  this.update = function(){
    var nX = noise(this.xoff);
    var randX = map(nX,0,1,-1,1);
    this.pos.x = this.pos.x + randX;
    this.xoff = this.xoff + 0.001;

    var nY = noise(this.yoff);
    var randY = map(nY,0,1,-1,1);
    this.pos.y = this.pos.y + randY;
    this.yoff = this.yoff + 0.001;
  }
}
