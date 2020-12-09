const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particle = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(280,790,1200,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight) );
  }
  for(var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 25; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 0; j <=width-30; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

  
  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }
  for (var j=0;j< particle.length; j++){
   particle[j].display();
  }
  if (frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }
 

  drawSprites();
}



