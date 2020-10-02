
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite,ball,box2,box3Spriteprite,box4Sprite,ball,paper_img,paper;
var piece;


function setup() {
	createCanvas(2000,700);
	rectMode(CENTER);

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box3Sprite = createSprite(1840,520,20,300);
	box3Sprite.shapeColor=color("white");

	box4Sprite = createSprite(1630,520,20,300);
	box4Sprite.shapeColor = color("white");

	engine = Engine.create();
	world = engine.world;

	box3 = Bodies.rectangle(1840,520,20,300,{isStatic:true});
	World.add(world,box3);

	box4 = Bodies.rectangle(1630,520,20,300,{isStatic:true});
	World.add(world,box4);

	ground = Bodies.rectangle(width/2,height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);

	

	

	
	  
		
		  
	box2 = new Box(1700,600,180,280);
	World.add(world,box2);

	ball = new Ball(50,600,10);
	World.add(world,ball);

	  

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ellipseMode(RADIUS)
  box2.display();
  ball.display();

  
  drawSprites();

  keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10});
	}
}



