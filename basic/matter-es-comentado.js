//INICIO

//Establecer variables
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

//Crear y establecer el Motor (Engine)
var engine = Engine.create();
engine.world.gravity.y = 1; //Establece la gravedad. Puedes establecer una gravedad inversa y también fuerzas horizontales.

//Crear el interpretador (Render)
var render = Render.create({
  element: document.body, //Establece el mundo físico dentro del cuerpo del DOM. Puedes establecer otro element del DOM.
  engine: engine,
  options: {
    width: 640, //Establece el ancho del mundo. Además puedes usar screen.width para pantalla completa.
    height: 480, //Establece el alto del mundo. Idem
    wireframes: true //Si quieres usar texturas e imágenes establece esta opción a false
  }
});


//CREAR OBJETOS

//Crea un objeto rectangular
var platform = Bodies.rectangle(400,400,400,40, {
  isStatic: true //Esta opción hace que el objeto no se vea afectado por fuerzas como la gravedad
});

//Crea un objeto circular
var box = Bodies.circle(200,200,40, {
  //Algunas propiedades más
});

//Añade los objectos al mundo físico
World.add(engine.world, [platform,box]);


//PONE EN MARCHA EL MOTOR

Render.run(render);
Engine.run(engine);
