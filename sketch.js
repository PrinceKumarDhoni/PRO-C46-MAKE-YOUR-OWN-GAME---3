var backgroundImg,invisibleGround,bg;
var sunImg,SUN;
var boyImg1,boyImg2,boyImg3;
var boy;
var coronaImg,corona;
var maskImg,MASK;
var sanitizerImg,SANITIZER;

function preload() {
  backgroundImg = loadImage("bg-1.png");
  boyImg1 = loadAnimation("BOY1.png","BOY2.png","BOY3.png");
  boyImg2 = loadImage("BOY2.png");
  coronaImg = loadImage("CORONA.png");
  maskImg = loadImage("mask.png");
  sanitizerImg = loadImage("sanitizer.png");
  sunImg = loadImage("sun.png");



}

function setup() {
  createCanvas(displayWidth,displayHeight - 120);

  
  bg = createSprite(displayWidth/2,displayHeight - 530);
  bg.addImage(backgroundImg);
  bg.scale = 4.2;
  
  bg.x = bg.width / 2;
  bg.velocityX = -8;

  SUN = createSprite(displayWidth - 120,displayHeight - 790,100,100);
  SUN.addImage("SUN",sunImg);
  SUN.scale = 0.2;



  boy = createSprite(displayWidth - 1350,displayHeight - 500,100,100);
  boy.addAnimation("boy",boyImg1);

  corona = createSprite(displayWidth - 200,displayHeight - 180,100,100);
  corona.addImage("corona",coronaImg);
  corona.scale = 0.2;
  corona.velocityX = -8;

  MASK = createSprite(displayWidth - 200,displayHeight - 280,100,100);
  MASK.addImage("MASK",maskImg);
  MASK.scale = 0.08;
  MASK.velocityX = -8;

  SANITIZER = createSprite(displayWidth - 200,displayHeight - 280,100,100);
  SANITIZER.addImage("SANITIZER",sanitizerImg);
  SANITIZER.scale = 0.4;
  SANITIZER.velocityX = -8;

  invisibleGround = createSprite(displayWidth/2,displayHeight - 150,10000,10);
  invisibleGround.shapeColor = "red";
  invisibleGround.visible = false;
 







}



function draw() {
  background("lightblue");  

  if(bg.x<displayWidth/3) {
    bg.x = displayWidth/2
  }

  if(keyDown(UP_ARROW)&& boy.y >= 650) {
    boy.velocityY = -20;
  }

  boy.velocityY = boy.velocityY + 0.8;

  boy.collide(invisibleGround);
  boy.setCollider("circle",-2,2,50);
  

 

  drawSprites();
}