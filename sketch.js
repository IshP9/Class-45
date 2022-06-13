var ball;
var backgroundImg,bg;
var sunImg, sun;
var dogImg, dog;
var crabImg, crab;
var purpleB1Img,purpleB1;
var purpleB2Img,purpleB2;
var purpleB3Img,purpleB3;
var cupcakeImg, cupcake1, cupcake2, cupcake3, cupcake4, cupcake5, cupcake6, cupcake7;

function preload(){
  backgroundImg = loadImage("./Images/Background.jpg");
  sunImg = loadImage("./Images/Sun.png");
  dogImg = loadImage("./Images/Dog.png");
  crabImg = loadImage("./Images/Crab.png");
  purpleB1Img = loadImage("./Images/Purple base.png");
  purpleB2Img = loadImage("./Images/Purplebase2.png");
  purpleB3Img = loadImage("./Images/Purplebase2.png");
  cupcakeImg = loadImage("./Images/Cupcake.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(backgroundImg);
  bg.scale = 1.15;

  sun = createSprite(windowWidth - 1450, windowHeight - 650);
  sun.addImage(sunImg);
  sun.scale = 0.65;

  dog = createSprite(windowWidth - 1400, windowHeight -100);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  crab = createSprite(windowWidth - 1150, windowHeight - 100);
  crab.addImage(crabImg);
  crab.scale = 0.2;
  crab.velocityX = -2; 

  purpleB1 = createSprite(windowWidth - 400, windowHeight -380);
  purpleB1.addImage(purpleB1Img);
  purpleB1.scale = 0.55;

  purpleB2 = createSprite(windowWidth - 1100, windowHeight -300);
  purpleB2.addImage(purpleB2Img);
  purpleB2.scale = 0.47;

  purpleB3 = createSprite(windowWidth - 800, windowHeight -570);
  purpleB3.addImage(purpleB2Img);
  purpleB3.scale = 0.47;

  cupcake1 = createSprite(windowWidth - 870, windowHeight -635);
  cupcake1.addImage(cupcakeImg);
  cupcake1.scale = 0.2
  
  cupcake2 = createSprite(windowWidth - 730, windowHeight -635);
  cupcake2.addImage(cupcakeImg);
  cupcake2.scale = 0.2

  cupcake3 = createSprite(windowWidth - 255, windowHeight -450);
  cupcake3.addImage(cupcakeImg);
  cupcake3.scale = 0.2

  cupcake4 = createSprite(windowWidth - 415, windowHeight -450);
  cupcake4.addImage(cupcakeImg);
  cupcake4.scale = 0.2

  cupcake5 = createSprite(windowWidth - 575, windowHeight -450);
  cupcake5.addImage(cupcakeImg);
  cupcake5.scale = 0.2

  cupcake6 = createSprite(windowWidth - 1020, windowHeight -380);
  cupcake6.addImage(cupcakeImg);
  cupcake6.scale = 0.2

  cupcake7 = createSprite(windowWidth - 1170, windowHeight -380);
  cupcake7.addImage(cupcakeImg);
  cupcake7.scale = 0.2
 
}

function draw() 
{
  background(backgroundImg);

  if(crab.x < (windowWidth - 1475)){
    crab.velocityX = 2;
  }
  if(crab.x > (windowWidth - 600)){
    crab.velocityX = -2;
  }

  

  drawSprites()
}



