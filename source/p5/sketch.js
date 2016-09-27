var image_x;
var image_y;
var list_image_x = [];
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

  if (windowWidth > 768){ // desktop
    var image_x = 956;
    var image_y = 400;
    var list_image_x = [1430, 1500, 1500, 1500];

    originalCanvasWidth = 1920;
    originalCanvasHeight = 948;
  }else{ // mobile
    var image_x = 300;
    var image_y = 1300;
    var list_image_x = [180, 180, 180, 180];

    originalCanvasWidth = 948;
    originalCanvasHeight = 1920;
  }


  if (windowWidth > 768){
    originalCanvasWidth = 1920;
    originalCanvasHeight = 948;
    createCanvas(originalCanvasWidth, originalCanvasHeight);
  } else{
    originalCanvasWidth = 948;
    originalCanvasHeight = 1920;
    createCanvas(originalCanvasWidth, originalCanvasHeight);
  }


}

// To resize canvas
function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function draw() {

  if (windowWidth > 768){ // desktop
    var image_x = 956;
    var image_y = 400;
    var list_image_x = [1430, 1500, 1500, 1500];

    originalCanvasWidth = 1920;

  }else{ // mobile
    var image_x = 300;
    var image_y = 1300;
    var list_image_x = [180, 180, 180, 180];

    originalCanvasWidth = 948;
    originalCanvasHeight = 1920;



  }

  background(230,231,232);
  //background(255,0,0);

  displayImage();

  // Timer
  if (millis() > next) {

    fill(0);
    increment++;

    if (windowWidth > 768){ //desktop
      initiateShapesDesktop(scalingPositionDesktop(img_list[increment],400).x);
    }else{
      initiateShapes(180);
    }


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
  var y_position_on_page = 350;

  imageMode(CENTER);
  if (windowWidth > 768){//desktop
      image(img_list[increment], scalingPositionDesktop(img_list[increment],400).x, scalingPositionDesktop(img_list[increment],400).y, scalingDesktop(img_list[increment]).x, scalingDesktop(img_list[increment]).y);
  }else{
    if (windowHeight > 610){
     image(img_list[increment], 165, scalingPosition(img_list[increment],1300).y, scaling(img_list[increment]).x, scaling(img_list[increment],1300).y);
    } else{
     image(img_list[increment], 165, y_position_on_page, scaling(img_list[increment]).x, scaling(img_list[increment],1300).y);
    };


  }

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

function scalingPosition(img, image_y){

  //var scaled_position_x = (windowWidth / originalCanvasWidth) * 180 ;//- 80; //
  var scaled_position_y = (windowHeight/ originalCanvasHeight) * image_y  ;


  var img_position = createVector(165,scaled_position_y);
  return img_position;
}

function initiateShapes(posX){
  var y_position_on_page = 350;
  for(var i=0; i<=numberShapesInitial; i++){
    var shapeNumber = int(random(2));
    randomShape[i] = new randomShape(random(posX-widthEpicentre,posX+widthEpicentre),random(y_position_on_page-widthEpicentre,y_position_on_page+widthEpicentre),random(0,10000),random(0,10000),shapeNumber);
  }
}



function scalingDesktop(img){
  scaled_img_width = (windowWidth*img.width)/originalCanvasWidth;
  scaled_img_height = (scaled_img_width*img.height)/img.width;

  var img_size = createVector(scaled_img_width,scaled_img_height);

  return img_size; //returns vector(width, height, 0)
}

function scalingPositionDesktop(img, image_y){
  var scaled_position_x = (windowWidth / originalCanvasWidth) * 1500 - 80; //
  var scaled_position_y = (windowHeight / originalCanvasHeight) * image_y ;


  var img_position = createVector(scaled_position_x,scaled_position_y);

  return img_position;
}

function initiateShapesDesktop(posX){
  for(var i=0; i<=numberShapesInitial; i++){
    var shapeNumber = int(random(2));
    randomShape[i] = new randomShape(random(scalingPositionDesktop(img_list[increment],400).x-widthEpicentre,scalingPositionDesktop(img_list[increment],400).x+widthEpicentre),random(scalingPositionDesktop(img_list[increment],400).y-widthEpicentre,scalingPositionDesktop(img_list[increment],400).y+widthEpicentre),random(0,10000),random(0,10000),shapeNumber);
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


    var nY = noise(this.yoff);
    var randY = map(nY,0,1,-speed,speed);
    this.pos.y = this.pos.y + randY;
    this.yoff = this.yoff + 0.001;
  }
}
