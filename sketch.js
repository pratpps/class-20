var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

movingRect =  createSprite(400, 200, 80, 50);
movingRect.debug = true;


fixedRect =  createSprite(400, 200, 50, 80);
fixedRect.debug = true;
 
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){             

    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "red";

  }
else {
  fixedRect.shapeColor = "grey";
    movingRect.shapeColor = "grey";
}
 
  drawSprites();
}

//hello!!