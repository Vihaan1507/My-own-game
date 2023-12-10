var bg, bgImg;
var bs1, bs2, bs3;
var bw1, bw2, bw3;

function preload() {
  bgImg = loadImage("stadium.jpg");

  // balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup() {
  createCanvas(1425, 750);

  //creating top and bottom grounds
  bs1 = createSprite(100, 600, 20, 100);
  bs2 = createSprite(130, 600, 20, 100);
  bs3 = createSprite(160, 600, 20, 100);

  bw1 = createSprite(1160, 600, 20, 100);
  bw2 = createSprite(1190, 600, 20, 100);
  bw3 = createSprite(1220, 600, 20, 100);
  


  //creating balloon
  // 2balloon = createSprite(100,200,20,50);
  // balloon.addAnimation("balloon",balloonImg);
  // balloon.scale = 0.;
}

function draw() {
  background(bgImg);
  
  drawSprites();
}
