var tower, tower_scroll
var ghost, ghostStanding;
var climber, climber_1, climberGroup;
var door, door_1, doorGroup;

function preload(){
  
  tower_scroll = loadImage("tower.png");
  ghostStanding = loadImage("ghost-standing.png");
  door_1 = loadImage("door.png");
  climber_1 = loadImage("climber.png");
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300,20,20);
  tower.addImage(tower_scroll);
  tower.velocityY = 6;
  
  ghost = createSprite(300,400,20,20);
  ghost.addImage(ghostStanding);
  ghost.scale = 0.3;
  
  invisibleGround = createSprite(300,425,600,175);
  invisibleGround.visible = false;
  
  climbersGroup = new Group();
  doorsGroup = new Group();
  
}

function draw(){
  background(0);
  
  if(tower.y > 400){
    tower.y = 300;
  }
  
  if(keyDown("left")){
    ghost.x = ghost.x - 6;
  }
  
  if(keyDown("right")){
    ghost.x = ghost.x + 6;
  }
  
  if(keyDown("space")){
    ghost.velocityY = -10;
    ghost.y = ghost.y+0.8;
  }

   
  spawnDoors();
  drawSprites();
}

function spawnDoors(){
  if(frameCount%240 === 0){
  door = createSprite(200,-50);
  door.addImage(door_1);
  door.velocityY = 15;
  doorsGroup.add(door);
  
  climber = createSprite(200,10);
  climber.x = door.x;
  climber.addImage(climber_1);
  climber.velocityY = 15;
  climbersGroup.add(climber);
  }
}