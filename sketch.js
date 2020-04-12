const {Engine, World, Bodies} = Matter;

var engine, world;

var snake_;

var tsn;

var food;

function setup(){
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  snake_ = new Snake(40, 30, 10, 10);
  food = new Food();

}

function draw(){
  Engine.update(engine);

  background(255, 255, 255);

  /*

  tsn = createSprite(100, 100, 10, 10);

  if(keyDown(UP_ARROW)){
    tsn.velocityY = -2;
  }
  if(keyDown(DOWN_ARROW)){
    tsn.velocityY = 2;
  }
  if(keyDown(LEFT_ARROW)){
    tsn.velocityX = 2;
  }
  if(keyDown(RIGHT_ARROW)){
    tsn.velocityX = -2;
  }

  food = rect(40, 20, 10, 10);

  drawSprites();*/

  snake_.display();
  food.display();
}

function turnleft(){
  if(keyCode === 37){
    snake_.turnleft();
  }
}

function turnright(){
  if(keyCode === 39){
    snake_.turnRight();
  }
}

function turnleft(){
  if(keyCode === 38){
    snake_.turnUp();
  }
}

function turnUp(){
  if(keyCode === 38){
    snake_.turnUp();
  }
}
function turndown(){
  if(keyCode === 40){
    snake_.turnDown();
  }
}
function eat(){
  food.isTouching(snake_.body);
}