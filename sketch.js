
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,edge1,edge2,edge3,ground1


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground1=new ground(600,690,1200,20);
	edge1=new dustbin(605,654,20,50)
	edge2=new dustbin(690,670,150,20)
	edge3=new dustbin(770,630,20,100)
	paper1=new paper(100,300,10);
	
  }
	
	


function draw() {
	background("black")
	Engine.update(engine);
  ground1.display();
  edge1.display();
  edge2.display();
  edge3.display();
  paper1.display();
  keyPressed()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,
			{x:0.5,
			y:-0.4});
	}
}


