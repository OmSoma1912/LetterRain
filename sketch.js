const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

ai = [];


function setup() {
  createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  

  if(frameCount%5===0){
    ai.push(new A(random(10,390), 10,30,30));
    
  }

  for (var j = 0; j < ai.length; j++) {
   
    ai[j].display();
  }
  
}