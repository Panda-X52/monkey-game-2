var bananaImage, obstacleImage, background1, player_Running, ground, background2, player, obstacleGroup, fruitGroup, score;
function preload(){
background1 = loadImage("jungle.jpg");
  player_Running = 
loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200,380,400,30);
  ground.visible=false;
  
  
  background2=createSprite(200, 200, 400, 400);
  background2.addImage("background2",background1);
  background2.velocityX=-5;
  
  
  player=createSprite(50, 360, 50, 50);
  player.addAnimation('running',player_Running);
  player.scale=0.1;
  
  
  obstacleGroup = new Group();
  fruitGroup = new Group();
  
  score=0;
}

function draw() {
  background(220);
  
  if (background2.x < 0){
      background2.x = ground.width/2;
      }
  
  if(keyDown('space')){
   player.velocityY=-10;
  }
  
  player.velocityY = player.velocityY+0.8;
  player.collide(ground);
  
  fruit();
  obstacles();
  
  if (fruitGroup.isTouching(player)){
   score=score+2
    fruitGroup.destroyEach();
    switch(score){
      case 10: player.scale= 0.12;
        break;
      case 20: player.scale=0.14;
        break;
      case 30: player.scale=0.16;
        break;
      case 40: player.scale=0.18;
    }
  }
  
  if (obstacleGroup.isTouching(player)){
      player.scale=0.1;
    }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score:"+score, 300, 50)
}

function fruit(){
  if (frameCount%60===0){
    var banana=createSprite(400, 350, 50, 50)
    banana.y=Math.round(random(280, 390));
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.07
    fruitGroup.add(banana);
}}

function obstacles(){
  if (frameCount%250===0){
   var rock=createSprite(400, 350, 50, 50);
   rock.addImage(obstacleImage);
   rock.velocityX=-5;
    rock.scale=0.2;
   obstacleGroup.add(rock);
}}