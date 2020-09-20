/* global createCanvas, background, loadImage, image, width, height, tint */

let dvdImage, x, y, XVelocity, YVelocity, logoWidth, logoHeight;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  y = 50;
  XVelocity=5;
  YVelocity=5;
  logoWidth = 200;
  logoHeight = 150;
}

function draw(){
  background(220);
  // Draw the logo at the new position.
  if (x+logoWidth >= width || x <= 0) XVelocity = -XVelocity
  
  if (y+logoHeight >= height || y <= 0) YVelocity = -YVelocity
  x=x + XVelocity
  y=y + YVelocity
  tint(255,0,0)
  image(dvdImage, x, y, logoWidth, logoHeight);
}
