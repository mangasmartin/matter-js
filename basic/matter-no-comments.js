var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine = Engine.create();
engine.world.gravity.y = 1;

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 640,
    height: 480,
    wireframes: true
  }
});

var platform = Bodies.rectangle(400,400,400,40, {
  isStatic: true
});

var box = Bodies.circle(200,200,40, {
  isStatic: false
});

World.add(engine.world, [platform,box]);

Render.run(render);
Engine.run(engine);
