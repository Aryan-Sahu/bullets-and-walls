var bullet
var wall,thickness
var weight,speed


function setup() {
  createCanvas(1200,400);
speed= random(223,321)
weight=random(30,52)
thickness=random(23,83)
bullet=createSprite(50,200,50,50)
wall=createSprite(1000,200,60,height/2)
wall.shapeColor=color(80,80,80)
  

}

function draw() {
  background(0);  
  drawSprites();
  
  bullet.velocityX=speed
damage=0.5*weight*speed*speed/thickness*thickness*thickness
  if(bullet.isTouching(wall)){
    bullet.velocityX=0
    if(damage>10){
    wall.shapeColor=color(255,0,0)}
    if(damage<10){
      wall.shapeColor=color(0,250,0)
    }
    
  }
}