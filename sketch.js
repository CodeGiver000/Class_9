
var character;

function setup() {
  createCanvas(600,600);
   character = createSprite(200, 200, 50, 50);

}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  character.x += 5;
}
if(keyIsDown(LEFT_ARROW)){
  character.x += -5;
}
if(keyIsDown(UP_ARROW)){
  character.y += -5;
}
if(keyIsDown(DOWN_ARROW)){
  character.y += 5;
}




  drawSprites();

}




