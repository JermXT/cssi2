/* global createCanvas, background, loadImage, image, width, height */

let dvdImage, x, y1, y2, y3, YVelocity1, YVelocity2, YVelocity3, logoWidth, logoHeight;
let g = 0.4
let ticker = 0

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage('https://cdn.glitch.com/fe99a780-7790-4004-b8d2-0f4b66ec0ab7%2Fpngguru.com.png?v=1594145175439');
  x = 50;
  y1 = 50;
  y2 = 50
  y3 = 50
  YVelocity1=0;
  YVelocity2=0;
  YVelocity3=0;
  logoWidth = 200;
  logoHeight = 200;
  

}

function draw(){
  
  background(220);
  // Draw the logo at the new position.
  YVelocity1 += g
  if(y1 + YVelocity1 + logoHeight > height){
    YVelocity1 = -YVelocity1
  }else{
    y1=y1 + YVelocity1
  }
  image(dvdImage, x, y1, logoWidth, logoHeight);
  if(ticker >=19){
    YVelocity2 += g
    if(y2 + YVelocity2 + logoHeight > height){
    
      YVelocity2 = -YVelocity2
    }else{
      y2=y2 + YVelocity2
    }
    image(dvdImage, x+250, y2, logoWidth, logoHeight);
  }
  if(ticker >=38){
    YVelocity3 += g
    if(y3 + YVelocity3 + logoHeight > height){
      YVelocity3 = -YVelocity3
    }else{
      y3=y3 + YVelocity3
    }
    image(dvdImage, x+500, y3, logoWidth, logoHeight);
  }
  if(ticker < 100)ticker +=1
  //if (y+logoHeight >= height) YVelocity = -YVelocity
  
  
  
  
  
}