
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 580);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	box1 = new Box(800,450);
	box2 = new Box(950,450);
	log1 = new Log(875,530);
	paper1 = new Paper(50,200,40)
	
	
	
  }

  
	Engine.run(engine);
  


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  rect (ground.position.x,ground.position.y,width,10);

  box1.display();
  box2.display();
  log1.display();
  paper1.display();
 
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-80})
	}
}


