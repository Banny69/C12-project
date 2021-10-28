var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprite = Math.round(random(1,2));
rabbit.x=World.mouseX
  if(frameCount % 80 == 0){
    if(select_sprite == 1){
      createApples()
    }
    else{
      createLeaf()
    }
  }
  

  drawSprites();
}
function createApples(){

  apple = createSprite(random(50, 350),40, 10, 10)
  apple.addImage(appleImg)
  apple.scale = 0.06
  apple.velocityY=4
}
function createLeaf(){

  Leaf = createSprite(random(50, 350),40, 10, 10)
  Leaf.addImage(leafImg)
  Leaf.scale = 0.09
  Leaf.velocityY=4
}


