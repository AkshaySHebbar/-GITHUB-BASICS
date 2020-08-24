var banana,monkey;
var obstacleImage,obstaclegroup;
var backGround,score,Ground;


fuction preload(){
    monkey= loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");

  
  backImage=loadImage("jungle.jpg");
  
   bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}
function setup() {
  createCanvas(400, 400);
  
  backGround=createSprite(200,200);
  backGround.veloxcityX=-2;
  backGround.x = ground.width /2;
  backGround=addImage("backImage");
  
  Ground=createSprite(200,1190,400,10);
  Ground.visible = false;
  
  
}



function draw() {
  background(220);
  
  if(foodGroup.isTouching(monkey){
     score=+2;
     foodGroup.destroyEach;
     
     }
  is(score){
    
    case 10:monkey.scale=0.12;
    break;
    case 20:monkey.scale=0.14;
    break;
    case 30:monkey.scale=0.16;
    break;
    case 40:monkey.scale=0.18;
    default:break;
  }
  if(obstaclegroup.isTouching(monkey)){
    
    player.scalee=0.2
  }
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score=500,50);
  
  drawsprite();
}