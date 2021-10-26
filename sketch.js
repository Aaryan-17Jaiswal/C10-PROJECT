var sea, seaImg;
var ship,ship_moving;

function preload(){

  seaImg = loadImage("sea.jpg");
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,50,50);
  sea.addImage(seaImg);
  sea.scale = 1;

  ship = createSprite(200,200,50,50);
  ship.addAnimation("Img", ship_moving);
  ship.scale = 0.2;


}

function draw() {
  background("blue");
 
  sea.velocityX = -2;

  if(sea.x < 100){
    sea.x = sea.width/2;
  }

  drawSprites();

}