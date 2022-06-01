var box 
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,20,20);
}




function draw() 
{

background(30);

if (keyIsDown(RIGHT_ARROW)) {
box.x += 5
  
}

if (keyIsDown(RIGHT_ARROW)) {
  box.x += 5
    
  }
if (keyIsDown(LEFT_ARROW)) {
  box.x -= 6
      
  }
drawSprites ();

}




