var image_x = 500;
var image_y = 200;
var number_img = 4;
var originalCanvasWidth;
var originalCanvasHeight;

var img_list =[];

var i = 0;

// Time from beginning + time to wait for next image
var next = 0;

function preload() {

  for (var i = 0; i<=number_img-1; i++){
    img_list[i] = loadImage("assets/cartoon"+i+".png");
  }
}

function setup() {
  // Stretches canvas to full window
  createCanvas(windowWidth, windowHeight);

  originalCanvasWidth = windowWidth;
  originalCanvasHeight = windowHeight;




}

// To resize canvas
//function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function draw() {

    displayImage();

    // Timer
    if (millis() > next) {

      i++;

      if (i==number_img){
        i = 0;
      }

      next = millis() + 2000;
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
