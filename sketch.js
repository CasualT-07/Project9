var bg;

function setup() {
  createCanvas(400,400);
  bg = 51;
  sprite1 = createSprite(200,200,30,30);

  left_edge = createSprite(0,200,1,400);
  right_edge = createSprite(400,200,1,400);
  top_edge = createSprite(200,0,400,1);
  bottom_edge = createSprite(200,400,400,1)
}

function draw() 
{
  background(bg);

  sprite1.bounceOff(left_edge);
  sprite1.bounceOff(right_edge);
  sprite1.bounceOff(top_edge);
  sprite1.bounceOff(bottom_edge);

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) {
    bg = 'red';
    sprite1.velocityX = 3;
    sprite1.velocityY = 0;
    sprite1.shapeColor = 'green';
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    bg = 'blue';
    sprite1.velocityX = -3;
    sprite1.velocityY = 0;   
    sprite1.shapeColor = 'yellow';
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    bg = 'yellow';
    sprite1.velocityY = -3;
    sprite1.velocityX = 0;
    sprite1.shapeColor = 'blue';
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    bg = 'green';
    sprite1.velocityY = 3;
    sprite1.velocityX = 0;
    sprite1.shapeColor = 'red';
  }


  
  drawSprites();
}

