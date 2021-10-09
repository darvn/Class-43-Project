var issImg, backgroundImg;
var spaceCraft, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var iss;
var hasDocked = false;

function preload(){
  spacecraft1Img = loadAnimation("assets/spacecraft1.png");
  spacecraft2Img = loadAnimation("assets/spacecraft2.png");
  spacecraft3Img = loadAnimation("assets/spacecraft3.png");
  spacecraft4Img = loadAnimation("assets/spacecraft4.png");
  backgroundImg = loadImage("assets/spacebg.jpg");
  issImg = loadImage("assets/iss.png")
}

function setup() {
  createCanvas(1000,800);
  spaceCraft = createSprite(500, 550, 50, 50);
  spaceCraft.addAnimation("space1", spacecraft1Img);
  spaceCraft.addAnimation("space2", spacecraft2Img);
  spaceCraft.addAnimation("space3", spacecraft3Img);
  spaceCraft.addAnimation("space4", spacecraft4Img);
  spaceCraft.scale = 0.3

  iss = createSprite(500, 300, 500, 550);
  iss.addImage("iss", issImg);
  iss.scale = 1.1;
}

function draw() {
  background(backgroundImg); 
  
  if(!hasDocked){
    spaceCraft.x += random(-1, +1);
    if(keyDown(LEFT_ARROW)){
      spaceCraft.changeAnimation("space4", spacecraft4Img);
      spaceCraft.x += -2;
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.changeAnimation("space3", spacecraft3Img);
      spaceCraft.x += +2;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.changeAnimation("space2", spacecraft2Img);
    }
    if(keyDown(UP_ARROW)){
      spaceCraft.changeAnimation("space2", spacecraft2Img);
      spaceCraft.y += -2;
    }
  }

  if(spaceCraft.y <= iss.y + 115 && spaceCraft.x <= iss.x - 45){
    hasDocked = true;
    text("Docking Succesful!!!", 500, 550)
  }

  drawSprites();
}