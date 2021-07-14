const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload() {
person1 = loadImage("./assets/player.png");
person2 = loadImage("./assets/player.png");
base1("./assetes/base1.png")
base2= loadImage("./assetes/base2.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

 

   base1 = new base(0, height - 1, width * 2, 1);
   base2 = new base(150, 350, 160, 310);
   
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   
  
  player1.display();
  

  player2.display();
  base1.display();
  base2.display();


}
