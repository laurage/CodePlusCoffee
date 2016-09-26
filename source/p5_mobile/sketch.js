var image_x = 180;
var image_y = 1050;
var list_image_x = [180, 180, 180, 180];
var number_img = 4;
var originalCanvasWidth;
var originalCanvasHeight;
var randomShapes =[];
var numberShapesInitial = 20;

var img_list =[];

var increment = 0;

var xoff;
var yoff;

var speed = 10;
var widthEpicentre = 20;


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
  createCanvas(948, 1920);

  originalCanvasWidth = 948;
  originalCanvasHeight = 1920;


}

// To resize canvas
function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function draw() {

  background(230,231,232);
  //background(255,0,0);

  displayImage();

  // Timer
  if (millis() > next) {

    fill(0);
    increment++;


    initiateShapes();


      next = millis() + 2000;



    if (increment==number_img){
      increment = 0;
    }


    }

    for(var i=0; i<=numberShapesInitial; i++){
      randomShape[i].display();
      randomShape[i].update();
    }

}



function displayImage(){
  imageMode(CENTER);
  if (windowHeight > 610){
    image(img_list[increment], list_image_x[increment], scalingPosition(img_list[increment]).y, scaling(img_list[increment]).x, scaling(img_list[increment]).y);
  } else{
    image(img_list[increment], list_image_x[increment], 330, scaling(img_list[increment]).x, scaling(img_list[increment]).y);
  };
}

// Contrary to the desktop sketch, here scaling the size is only used to adapt the size
// of the initial image (very big) to a smaller screen ONCE. It doesn't scale linearly with the
// width and height of a tiny screen.
// img.width & img.height are the width and height of the original file. Doesn't change when redimensionned
function scaling(img){
  scaled_img_width = img.width*0.28;
  scaled_img_height = (scaled_img_width*img.height*0.28)/(img.width*0.28);

  var img_size = createVector(scaled_img_width,scaled_img_height);

  return img_size; //returns vector(width, height, 0)
}

function scalingPosition(img){
  //var scaled_position_x = (windowWidth / originalCanvasWidth) * 180 ;//- 80; //
  var scaled_position_y = (windowHeight/ originalCanvasHeight) * image_y  ;


  var img_position = createVector(180,scaled_position_y);
  return img_position;
}

function initiateShapes(){
  for(var i=0; i<=numberShapesInitial; i++){
    var shapeNumber = int(random(2));
    randomShape[i] = new randomShape(random(180-widthEpicentre,180+widthEpicentre),random(scalingPosition(img_list[increment]).y-widthEpicentre,scalingPosition(img_list[increment]).y+widthEpicentre),random(0,10000),random(0,10000),shapeNumber);
  }


}

function randomShape(x,y,xoff,yoff,shapeNumber){
  this.size = 5;
  this.pos = createVector(x,y);
  this.xoff = xoff;
  this.yoff = yoff;
  this.shapeNumber = shapeNumber;
  this.direction = 1;



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
    var randX = map(nX,0,1,-speed,speed);
    this.pos.x = (this.pos.x + randX)*this.direction;
    this.xoff = this.xoff + 0.001;

    //console.log(direction);


    var nY = noise(this.yoff);
    var randY = map(nY,0,1,-speed,speed);
    this.pos.y = this.pos.y + randY;
    this.yoff = this.yoff + 0.001;
  }
}