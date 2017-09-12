//INIT

//Set vars
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

//Create and set the Engine	
var engine = Engine.create();
engine.world.gravity.y = 1; //Set gravity. You can set inverse gravity or horizontal forces too.

//Create the Render
var render = Render.create({
  element: document.body, //Set the physic world inside the body DOM. You can set other DOM element.
  engine: engine,
  options: {
    width: 640, //Set the width of the world. Also you can use screen.width for fullscreen
    height: 480, //Set the height of the world. Idem
    wireframes: true //If you want to see your textures and sprites set this option to false
  }
});


//CREATE OBJECTS

//Create a rectangular object  
var platform = Bodies.rectangle(400,400,400,40, {
isStatic: true //This option causes the object not to be affected by some forces like gravity
});

//Create a circular object
var box = Bodies.circle(200,200,40, {
//Some properties
});

//Add the objects to the physic world
World.add(engine.world, [platform,box]);


//START THE ENGINE

Render.run(render);
Engine.run(engine);
